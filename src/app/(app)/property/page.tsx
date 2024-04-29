import ListingInfo from "./_components/listing-info";

const PropertyPage = () => {
    const center = true;
    return (
        <div className="container">
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <div className={center ? 'text-center' : 'text-start'}>
                        <div className="text-2xl font-bold">
                            Modern home
                        </div>
                        <div className="font-light text-neutral-500 mt-2">
                            Surathkal
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6"> </div>
                </div>
            </div>
            <ListingInfo />
        </div>
    );
}

export default PropertyPage;