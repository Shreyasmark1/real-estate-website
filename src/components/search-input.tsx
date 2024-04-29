import React from "react";
import { Input } from "./ui/input";

type Props = {
    leftIcon?: React.ReactNode
    disabled?: boolean
    placeholder?: string
    value?: string
}

const SearchInput = ({ leftIcon, disabled, placeholder, value }: Props) => {
    return (
        <div className="relative w-7/12 md:w-full">
            <Input
                placeholder={placeholder}
                className="bg-white rounded-xl border-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 p-4 pl-10"
                value={value}
            />
            {leftIcon &&
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                    {leftIcon}
                </div>
            }
        </div>
    );
}

export default SearchInput;