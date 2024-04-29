"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { SetStateAction, useState } from "react";
import ComboBox from "./combo-box";
import { CommandItem } from "@/components/ui/command";

type Props = {
    placeholder?: string,
    toggle: boolean
}

const DropdownFilter = ({ placeholder, toggle }: Props) => {

    let options = [
        {
            value: "123456789012345678901234567890123456",
            label: "Surathkal",
        },
        {
            value: "123456789012345678901234567890123457",
            label: "Chilimbi",
        },
        {
            value: "123456789012345678901234567890123458",
            label: "Urwa store",
        },
        {
            value: "123456789012345678901234567890123459",
            label: "State Bank",
        }
    ]

    if (toggle) {
        options = [
            {
                value: "1234567890123456789012345678901234560",
                label: "Apartment",
            },
            {
                value: "1234567890123456789012345678901234562",
                label: "Hotel",
            },
            {
                value: "123456789012345678901234567890123456jhg",
                label: "Empty land",
            },
            {
                value: "1234567890123456789012345678901234560j",
                label: "House",
            }
        ]
    }

    const filter = (value: string, search: string) => {
        search = search.toLowerCase();
        const option = options.find(option => option.value.toLowerCase() === value.toLowerCase());
        if (!option) return 0; // Value not found in options array
        const label = option.label.toLowerCase();
        return label.includes(search) ? 1 : 0;
    }

    const [comboOpen, setComboOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState<SetStateAction<string | undefined>>(undefined)

    return (
        <ComboBox
            enableSearch
            className="w-[150px]"
            filter={filter}
            trigger={
                <Button
                    role="combobox"
                    aria-expanded={comboOpen}
                    variant="ghost"
                    className="justify-between max-w-min rounded-lg"
                >
                    <span className="overflow-hidden truncate">
                        {selectedValue ? options.find(({ value }) => value === selectedValue)?.label : placeholder}
                    </span>
                    <ChevronDownIcon className="ml-1 h-4 shrink-0 opacity-50" />
                    {/* <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
                </Button>
            }>
            {
                options.map(({ label, value }) => (
                    <CommandItem
                        key={value}
                        value={value}
                        onChange={(newValue: any) => setSelectedValue(newValue)}
                        onSelect={(newValue: SetStateAction<string | undefined>) => {
                            const val = selectedValue === newValue ? undefined : newValue;
                            setSelectedValue(val)
                            setComboOpen(false)
                        }}
                    >
                        {label}
                        <CheckIcon
                            className={cn(
                                "ml-auto h-4 w-4",
                                selectedValue === value ? "opacity-100" : "opacity-0"
                            )}
                        />
                    </CommandItem >
                ))
            }
        </ComboBox>
    );
}

export default DropdownFilter;