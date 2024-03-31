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
    file_content = response.content
    print(href_value)

    time.sleep(10)

    

    
finally:
    driver.quit()
    client = MongoClient('mongodb+srv://quikflixagency:eAHnajJyRKQXH6FG@cluster0.to2tyir.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    db = client['Yaleeed']  # Replace with your database name
    fs = GridFS(db)
    with BytesIO(file_content) as f:
        fs.put(f, filename='downloaded_file.ics') 
    print('File uploaded to MongoDB successfully.')

    pass

# Replace 'actualSelectorAfterLogin' with a CSS selector that confirms you've successfully logged in.
