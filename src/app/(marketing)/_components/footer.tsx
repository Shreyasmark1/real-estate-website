import { LogoIcon, MedalIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        // <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
        //     {/* <Logo /> */}
        //     <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        //         <Button variant="ghost" size="sm">
        //             Privacy Policy
        //         </Button>
        //         <Button variant="ghost" size="sm">
        //             Terms & Conditions
        //         </Button>
        //     </div>
        // </div>
        <footer id="footer">
            <hr className="w-11/12 mx-auto" />

            <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
                <div className="col-span-full xl:col-span-2">
                    <a
                        href="/"
                        className="font-bold text-xl flex"
                    >
                        <MedalIcon />
                        Website name
                    </a>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Follow US</h3>
                    <div>
                        <a
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Instagram
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">About</h3>
                    <div>
                        <a
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Features
                        </a>
                    </div>

                    <div>
                        <a
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            Pricing
                        </a>
                    </div>

                    <div>
                        <a
                            href="#"
                            className="opacity-60 hover:opacity-100"
                        >
                            FAQ
                        </a>
                    </div>
                </div>
            </section>

            <section className="container pb-14 text-center">
                <h3>
                    &copy;
                    {" "}
                    <a
                        target="_blank"
                        href="/"
                        className="text-primary transition-all border-primary hover:border-b-2"
                    >
                        Company name
                    </a>
                    {" "}
                    2024 All rights reserved

                </h3>
            </section>
        </footer>
    );
}

export default Footer;