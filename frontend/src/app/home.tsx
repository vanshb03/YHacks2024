import { Button } from "@/components/ui/button";

export default function Component() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-gray-100">
      <header className="w-full max-w-3xl">
        <div className="flex justify-between items-center">
          <img src="/yaleeed.png" alt="Logo" className="h-12 w-12" />
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
        <Button style={{ backgroundColor: '#8ed1fc', color: 'white' }} className="w-32" variant="default">
            Tasks
          </Button>
          <Button style={{ backgroundColor: '#b875f5 ', color: 'white' }} className="w-32" variant="default">
            Events
          </Button>
          <Button style={{ backgroundColor: '#9ae39a', color: 'white' }} className="w-32" variant="default">
            Emails
          </Button>
          <Button style={{ backgroundColor: '#c0c0c0 ', color: 'white' }} className="w-32" variant="default">
            All
          </Button>
        </div>
      </main>
    </div>
  );
}
