"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import SearchInput from "@/components/search-input";
import { useScrollTop } from "@/lib/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import ModeToggle from "@/components/mode-toggle";

const NavBar = () => {

    const isLoading = false

    const scrolled = useScrollTop();

    return (
        <div className={cn(
            "z-50 dark:bg-[#1F1F1F] top-0 flex items-center w-full p-6",
            scrolled && "border-b shadow-sm"
        )}>
            {/* <Logo /> */}
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                {/* <SearchInput leftIcon={<SearchIcon />} /> */}
                {isLoading && (
                    <Spinner />
                )}
                {!isLoading && (
                    <>
                        <Link href="#about"
                        >
                            About us
                        </Link>
                        <Button variant="ghost">
                            Log in
                        </Button>
                        <Button className="rounded-lg">
                            Sign up
                        </Button>
                    </>
                )}
                {/* {!isLoading && (
                    <>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/documents">
                                Sign up
                            </Link>
                        </Button>
                        <UserButton
                            afterSignOutUrl="/"
                        />
                    </>
                )} */}
                {/* <ModeToggle /> */}
            </div>
        </div>
    );
}

export default NavBar;