import { Button } from "@/components/ui/button"


export default function Component() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-gray-100">
      <header className="w-full max-w-3xl">

        <div className="flex justify-between items-center">
        <img src="/yaleed.png" alt="Logo" className="h-8 w-auto" />
        <div className="flex justify-end space-x-4">
          <Button className="bg-white" variant="outline">
            Sign in
          </Button>
          <Button>Sign up</Button>
        </div>
        </div>
      </header>
      <main className="flex flex-col items-center w-full max-w-3xl rounded bg-white p-8 text-center">
        <h1 className="text-black text-3xl font-bold">Welcome Back, Milly!</h1>
        <p className="text-black mt-4 text-base">What can I help you with today?</p>
        <div className="mt-8 flex flex-col items-center space-y-4">
          <Button className="w-32 bg-gray-300" variant="default">
            Tasks
          </Button>
          <Button className="w-32 bg-gray-300" variant="default">
            Events
          </Button>
          <Button className="w-32 bg-gray-300" variant="default">
            Emails
          </Button>
        </div>
      </main>
    </div>
  )
}
