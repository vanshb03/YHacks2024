import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="Enter your username" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <Button className="w-full bg-[#4F759B] hover:bg-[#3B5A75] dark:bg-[#4F759B] dark:hover:bg-[#3B5A75]">
          Sign Up
        </Button>
        <div className="space-y-2 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy.
          </p>
          <Link className="text-sm underline" href="#">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  )
}

