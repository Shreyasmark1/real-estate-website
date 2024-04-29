"use client"
import SearchInput from "@/components/search-input";
import { SearchIcon } from "lucide-react";
import DropdownFilter from "./dropdown-filter";

const PropertyFilter = () => {
    return (
        <div className="bg-white flex flex-col md:flex-row justify-center items-center md:p-2 rounded-xl my-2">
            <SearchInput placeholder="Search by code" leftIcon={<SearchIcon />} />
            <span className="hidden md:block">|</span>
            <DropdownFilter toggle={true} placeholder="Property Type" />
            <span className="hidden md:block">|</span>
            <DropdownFilter  toggle={false} placeholder="Location" />
        </div>
    );
}

export default PropertyFilter;