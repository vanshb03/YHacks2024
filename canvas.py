from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
from selenium.webdriver.chrome.options import Options
import time
import requests
from pymongo import MongoClient
from gridfs import GridFS
from io import BytesIO
import csv
from icalendar import Calendar
import json
download_folder = ".\canvafile"
chrome_options = Options()
chrome_options.page_load_strategy = 'eager' 
driver = webdriver.Chrome(options=chrome_options)
prefs = {
    "download.default_directory": download_folder,
    "download.prompt_for_download": False,  # To automatically download the file without the download prompt
    "download.directory_upgrade": True,
    "safebrowsing.enabled": True  # To disable the warning on downloading files
}
chrome_options.add_experimental_option("prefs", prefs)

# Your credentials
user = 'username'
password = 'password'

# Path to your ChromeDriver
driver_path = './chromedriver.exe'
service = Service(executable_path=driver_path)

# Initialize the WebDriver
driver = webdriver.Chrome(service=service,options=chrome_options)

# Navigate to the login page
driver.get('https://umich.instructure.com')

try:
    # Wait for the login link/button to be clickable and click it
    # Adjust the selector if necessary
    um_login_link = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CLASS_NAME, "um"))
    )
    um_login_link.click()
    
    # Wait for the username input to be available, then enter the username
    username_input = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, "username"))
    )
    username_input.send_keys(user)
    
    # Find the password input, enter the password, and submit the form
    password_input = driver.find_element(By.ID, "password")
    password_input.send_keys(password)
    password_input.send_keys(Keys.RETURN)

    try:
        trust_browser_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.ID, "trust-browser-button"))
        )
        trust_browser_button.click()
    except:
        print("No 'trust browser' button found or not clickable.")

    # Wait for an element that indicates successful login
    WebDriverWait(driver, 10).until(
    EC.visibility_of_element_located((By.ID, "global_nav_profile_link"))
)
    canvas_calendar_url = f'https://canvas.umd.umich.edu/calendar'
    driver.get(canvas_calendar_url)
    WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, "global_nav_profile_link")))
    button = WebDriverWait(driver, 20).until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, ".dialog_opener.Button.Button--link"))
)
    button.click()
    time.sleep(5)
    link_text = "Click to view Calendar Feed"  # Adjust as necessary to match the link text
    link_element = driver.find_element(By.PARTIAL_LINK_TEXT, link_text)
    href_value = link_element.get_attribute('href')
    response = requests.get(href_value)
    if response.status_code == 200:
        # Save the ICS content to a local file named "input.ics"
        with open('./input.ics', 'wb') as f:
            f.write(response.content)
        print("ICS file saved as input.ics")
    else:
        print("Failed to download the ICS file. Status code:", response.status_code)
        exit() 

    time.sleep(10)

    

    
finally:
    driver.quit()
    def ics_to_json(ics_file_path, json_file_path):
        with open(ics_file_path, 'rb') as f:
            cal = Calendar.from_ical(f.read())

        events = []
        for component in cal.walk():
            if component.name == "VEVENT":
                event = {
                    "Event Name": str(component.get('summary')),
                    "Start Date": str(component.get('dtstart').dt),
                    "End Date": str(component.get('dtend').dt) if component.get('dtend') else None
                }
                events.append(event)

        with open(json_file_path, 'w') as jsonfile:
            json.dump(events, jsonfile, indent=4)

    ics_file_path = './input.ics'
    json_file_path = './output.json'


    # MongoDB Atlas connection string
    connection_string = 'something'

    events = ics_to_json(ics_file_path, json_file_path)
    client = MongoClient(connection_string)
    db = client['Yaleeeeed']  # Replace with your database name
    fs = GridFS(db)

    with BytesIO(json.dumps(events, indent=4).encode()) as f:
        fs.put(f, filename='output.json')

    print('JSON data uploaded to MongoDB successfully.')




pass

# Replace 'actualSelectorAfterLogin' with a CSS selector that confirms you've successfully logged in.
