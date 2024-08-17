import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";


function LandingHeader() {
  return (
    <div className="flex justify-between bg-white dark:bg-gray-800 px-6 py-4">
        <Link href='/dashboard' className="text-2xl text-gray-900 dark:text-gray-100">
            Chat to <span className="text-cyan-600 dark:text-cyan-400">PDF</span>
        </Link>
        <SignedOut>
        <div className="flex items-center space-x-2">
            <ModeToggle />
            <Button asChild variant="link" className="hidden md:flex bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-gray-900">
                <Link href="/dashboard" className="hover:no-underline">Sign In</Link>
            </Button>
            </div>
        </SignedOut>
        </div>
  )
}

export default LandingHeader