// File: ReusableFileInput.tsx
import React, {useRef, useState} from "react";
import {Paperclip} from "lucide-react";

interface ReusableFileInputProps {
    accept?: string;
    multiple?: boolean;
    // buttonLabel?: string;
    onFilesSelected?: (files: File[]) => void;
    className?: string;
}

export const UploadFile: React.FC<ReusableFileInputProps> = ({
                                                                 accept = "*/*",
                                                                 multiple = false,
                                                                 // buttonLabel = "Upload File",
                                                                 onFilesSelected,
                                                                 className = "",
                                                             }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setSelectedFiles(filesArray);
            if (onFilesSelected) onFilesSelected(filesArray);
        }
    };

    return (
        <div className={className}>
            {/* Hidden input */}
            <input
                type="file"
                ref={inputRef}
                accept={accept}
                multiple={multiple}
                onChange={handleChange}
                className="hidden"
            />

            <div className="cursor-pointer" onClick={handleClick}>
                <Paperclip size={25}/>
            </div>

            {selectedFiles.length > 0 && (
                <ul className="mt-2 text-sm text-gray-700">
                    {selectedFiles.map((file, idx) => (
                        <li key={idx}>{file.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};