"use client"

import { useEffect, useState } from "react";
import CountUp from "react-countup";

const Portfolio = () => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => setIsMounted(true),[])


    return (
        // <div className="relative w-full items-center justify-center m-4">
        //     <div className="absolute bottom-0 right-0 z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
        //         Welcome to my site!
        //     </div>
        //     <img className="h-[800px]" src="/portfolio-bg.jpg" />
        //     {/* <video autoPlay loop muted>
        //         <source src="bg-video.mp4" type="video/mp4" />
        //         Your browser does not support the video tag.
        //     </video> */}
        // </div>
        <div className="flex w-full justify-center gap-20 my-4">
            {
                isMounted?
                <>
                <div>
                <p className="text-5xl font-bold"><CountUp start={0} end={140} duration={6} />+</p>
                <p>Properties</p>
            </div>
            <div>
                <p className="text-5xl font-bold"><CountUp start={0} end={10} duration={6} />+</p>
                <p>Partners</p>
            </div>
                </> : <>Loading</>
            }
        </div>
    );
}

export default Portfolio;