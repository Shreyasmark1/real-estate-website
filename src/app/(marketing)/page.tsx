import About from "./_components/about";
import Heading from "./_components/heading";
import Heroes from "./_components/heroes";
import Portfolio from "./_components/portfolio";

const MarketingPage = () => {
    return (
        <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
            <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 pb-10">
                <Heading />
                <Heroes />
                {/* <Portfolio /> */}
                <About />
            </div>
        </div>
    );
}

export default MarketingPage;