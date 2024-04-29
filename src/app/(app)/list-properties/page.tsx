import PropertyCard from "./_components/property-card";
import PropertyFilter from "./_components/property-filter";
import Test from "./_components/test";

const PropertyListPage = () => {

    const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

    return (
        <div>
            <div className="md:flex justify-center mx-8 md:mx-0">
                <PropertyFilter />
            </div>
            <div className="flex justify-center flex-wrap gap-5 my-8">
                {
                    list.map((item, index) => (
                        <PropertyCard key={index} />
                    ))
                }
            </div>
        </div>
    );
}

export default PropertyListPage;