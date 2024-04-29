import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";


const ListingInfo = () => {
    return (
        <div className="col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="text-xl font-semibold flex flex-col items-center justify-center gap-2">
                    <Carousel className="w-full m-2">
                        <CarouselContent className="gap-1">
                            {
                                Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem className="flex justify-center" key={index}>
                                        <Image
                                            height={600}
                                            width={800}
                                            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600" alt={""}>
                                        </Image>
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <div className="flex gap-2 items-center">
                        <div>Hosted by owner</div>
                        <p className="font-light text-sm text-neutral-500"> 2 days ago</p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-4 font-light text-neutral-500">
                    <div>
                        0 guests
                    </div>
                    <div>
                        1 rooms
                    </div>
                    <div>
                        1 bathrooms
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex flex-row items-center justify-center gap-4 font-light text-neutral-500">
                <div>
                    Apartment
                </div>

                <div className="font-3xl text-center flex align-middle">
                    
                </div>

                <div>
                    New Property
                </div>
            </div>
            {/* <ListingCategory /> */}
            <hr />
            <div className="
          text-lg font-light text-neutral-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <hr />
            {/* <Map center={coordinates} /> */}
        </div>
    );
}

export default ListingInfo;