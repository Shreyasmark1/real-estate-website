import { Button } from "@/components/ui/button";
import Image from "next/image";

const Test = () => {
    return (
        <div className="col-span-1 cursor-pointer group">
            <div className="flex flex-col gap-2 w-full">
                <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                    <img
                        className="object-cover h-full w-full group-hover:scale-110 transition"
                        src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Listing"
                    />
                    <div className="
              absolute
              top-3
              right-3
            ">
                        {/* <HeartButton
                            listingId={data.id}
                            currentUser={currentUser}
                        /> */}
                    </div>
                </div>
                <div className="font-semibold text-lg">
                    {/* {location?.region}, {location?.label} */} text
                </div>
                <div className="font-light text-neutral-500">
                    {/* {reservationDate || data.category} */} text
                </div>
                <div className="flex flex-row items-center gap-1">
                    <div className="font-semibold">
                        $ 60,00,000
                    </div>
                    <div className="font-light">night</div>
                </div>
                <Button
                // disabled={disabled}
                // small
                // label={actionLabel}
                // onClick={handleCancel}
                />
            </div>
        </div>
    );
}

export default Test;