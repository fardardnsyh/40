"use client"

import { CircleArrowDown, RocketIcon } from 'lucide-react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

    function FileUploader() {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log(acceptedFiles);
    }, []);
    
    const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } = useDropzone({ onDrop });

    return (
        <div className='flex flex-col gap-4 items-center max-w-7xl mx-auto'>
        <div
            {...getRootProps()}
            className={`p-10 border-cyan-600 text-cyan-600 border-2 border-dashed mt-10 w-[90%] rounded-lg h-96 flex items-center justify-center 
            ${isFocused || isDragAccept ? "bg-cyan-200 dark:bg-cyan-900" : "bg-cyan-100 dark:bg-cyan-950"}`}
        >
            <input {...getInputProps()} />
            <div className='flex flex-col items-center justify-center'>
            {isDragActive ? (
                <>
                <RocketIcon className='h-20 w-20 animate-ping' />
                <p>Drop the files here ...</p>
                </>
            ) : (
                <>
                <CircleArrowDown className='h-20 w-20 animate-bounce' />
                <p>Drag n drop some files here, or click to select files</p>
                </>
            )}
            </div>
        </div>
        </div>
    );
    }

    export default FileUploader;
