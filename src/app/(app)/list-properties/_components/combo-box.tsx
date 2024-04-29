"use client"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PropsWithChildren, useState } from "react";

type Props = PropsWithChildren & {
    trigger: React.ReactNode,
    enableSearch: boolean,
    className?: string
    filter?: (value: string, search: string) => number
}

const ComboBox = ({ filter, ...props }: Props) => {

    const [open, setOpen] = useState(false)

    // const filterByLabel = (value: string, search: string) => {
    //     const lowerSearch = search.toLowerCase();
    //     const lowerValue = value.toLowerCase();
    //     return lookupTable[lowerValue]?.some((label: string) => label.includes(lowerSearch)) ? 1 : 0;
    // }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                {props.trigger}
            </PopoverTrigger>
            <PopoverContent className={`p-0 ${props.className}`}>
                <Command filter={filter ? (value, search) => filter(value, search) : undefined}>
                    {
                        props.enableSearch ? (
                            <>
                                <CommandInput placeholder="Search type..." className="h-9" />
                                <CommandEmpty>Not found.</CommandEmpty>
                            </>
                        ) : <></>
                    }
                    <CommandList style={{ maxHeight: "200px" }} className="no-scrollbar">
                        <CommandGroup>
                            {props.children}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

export default ComboBox;