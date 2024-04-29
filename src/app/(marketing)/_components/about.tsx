import Statistics from "./statistics";

const About = () => {
    return (
        <section
            id="about"
            className="container py-5"
        >
            <div className="border rounded-lg py-12">
                <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    {/* <img
                        src={pilot}
                        alt=""
                        className="w-[300px] object-contain rounded-lg"
                    /> */}
                    <div className="bg-green-0 flex flex-col justify-between">
                        <div className="pb-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
                                    About{" "}
                                </span>
                                Us
                            </h2>
                            <p className="text-xl text-muted-foreground mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <Statistics />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;