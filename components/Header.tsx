import { SignedIn, UserButton } from "@clerk/nextjs";
import { FilePlus2 } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";

    const Header = () => {
    return (
        <div className="flex justify-between bg-white dark:bg-gray-800 shadow-md px-6 py-4">
        <Link href='/dashboard' className="text-2xl text-gray-900 dark:text-gray-100">
            Chat to <span className="text-cyan-600 dark:text-cyan-400">PDF</span>
        </Link>

        <SignedIn>
            <div className="flex items-center space-x-2">
            <Button asChild variant="link" className="hidden md:flex text-gray-900 dark:text-gray-100">
                <Link href="/dashboard/upgrade" className="hover:no-underline">My Documents</Link>
            </Button>
            <Button asChild variant="outline" className="border-cyan-600 dark:border-cyan-400">
                <Link href="/dashboard/upload" className="hover:no-underline">
                <FilePlus2 className="text-cyan-600 dark:text-cyan-400" />
                </Link>
            </Button>
            <Button asChild variant="link" className="hidden md:flex bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white">
                <Link href="/dashboard/upgrade" className="hover:no-underline">Upgrade Plan</Link>
            </Button>
            <ModeToggle />
            <UserButton />
            </div>
        </SignedIn>
        </div>
    );
    };

    export default Header;
