'use client'

import { PlusCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

    function Placeholder() {

    const router = useRouter();

    const handleClick = () => {
        router.push("/dashboard/upload");
    }

    return (
        <Button
        onClick={handleClick}
        className="flex flex-col items-center justify-center w-56 h-72 rounded-xl bg-gray-200 dark:bg-gray-800 drop-shadow-sm text-cyan-600 dark:text-cyan-400 hover:bg-gray-300 dark:hover:bg-gray-700"
        >
        <PlusCircleIcon className="h-16 w-16" />
        <p>add a document</p>
        </Button>
    );
    }

    export default Placeholder;
