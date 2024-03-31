
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card, CardTitle, CardHeader } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link className="flex items-center gap-2" href="#">
          <Package2Icon className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="flex items-center gap-5 ml-auto lg:gap-6">
          <Link className="font-bold" href="#">
            Home
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Courses
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Calendar
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Grades
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Profile
          </Link>
        </nav>
      </header>
      <main className="grid min-h-[calc(100vh_-_theme(spacing.16))] grid-cols-1 gap-4 p-4 md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 dark:text-gray-100 md:p-10">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4">
          <Card className="flex-1">
            <CardContent className="flex flex-col items-center justify-center space-y-2">
              <img
                alt="Avatar"
                className="rounded-full"
                height="96"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "96/96",
                  objectFit: "cover",
                }}
                width="96"
              />
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">Hey name</div>
                <Button size="sm">Upgrade Plan</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader className="flex flex-row items-center gap-4">
              <CalendarCheckIcon className="w-6 h-6" />
              <CardTitle>Upcoming Classes</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Mathematics</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">09:00 AM - 10:00 AM</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Science</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">10:30 AM - 11:30 AM</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold">History</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">12:00 PM - 01:00 PM</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="flex-1">
          <CardHeader className="flex flex-row items-center gap-4">
            <CalendarCheckIcon className="w-6 h-6" />
            <CardTitle>Upcoming Classes</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <VideoIcon className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Biology</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">09:00 AM - 10:00 AM</span>
              </div>
              <Button className="ml-auto" size="xs">
                Join Class
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <VideoIcon className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Physics</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">10:30 AM - 11:30 AM</span>
              </div>
              <Button className="ml-auto" size="xs">
                Join Class
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <VideoIcon className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Chemistry</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">12:00 PM - 01:00 PM</span>
              </div>
              <Button className="ml-auto" size="xs">
                Join Class
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader className="flex flex-row items-center gap-4">
            <CalendarCheckIcon className="w-6 h-6" />
            <CardTitle>Assignments</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <BookOpenIcon className="w-6 h-6 rounded-lg" />
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Biology</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Photosynthesis</span>
              </div>
              <Button className="ml-auto" size="xs">
                Submit
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <BookOpenIcon className="w-6 h-6 rounded-lg" />
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Physics</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Laws of Motion</span>
              </div>
              <Button className="ml-auto" size="xs">
                Submit
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <BookOpenIcon className="w-6 h-6 rounded-lg" />
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Chemistry</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Periodic Table</span>
              </div>
              <Button className="ml-auto" size="xs">
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader className="flex flex-row items-center gap-4">
            <CalendarCheckIcon className="w-6 h-6" />
            <CardTitle>Important Dates</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <CalendarIcon className="w-6 h-6 rounded-lg" />
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Semester Exams</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">15th - 30th April</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CalendarIcon className="w-6 h-6 rounded-lg" />
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Holiday</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">1st - 15th May</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader className="flex flex-row items-center gap-4">
            <CalendarCheckIcon className="w-6 h-6" />
            <CardTitle>To-Do List</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <CircleIcon className="w-6 h-6 rounded-lg" />
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Complete Biology Notes</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">15th - 30th April</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CircleIcon className="w-6 h-6 rounded-lg" />
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Holiday</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">1st - 15th May</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

function BookOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function CalendarCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function CircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}
