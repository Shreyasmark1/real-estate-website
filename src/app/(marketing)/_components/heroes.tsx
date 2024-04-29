const Heros = () => {

    const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

    return (
        <div className="overflow-hidden">
            <div className="flex animate-infinite-scroll gap-5 md:gap-10 my-10">
                {

                    list.map((_, index) => (
                        <video key={index} className="w-6/12 md:w-[280px] rounded-3xl" autoPlay loop muted>
                                <source src="hero.mp4" type="video/mp4"/>
                                Your browser does not support video tag
                        </video>
                    ))

                }
            </div>
        </div>
    );
}

export default Heros;