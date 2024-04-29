import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { HeartIcon, MapPinIcon, BedDoubleIcon, ExpandIcon } from "lucide-react";
import Link from "next/link";

const PropertyCard = () => {
    return (
        <Card className="w-full md:w-[300px] mx-2 md:mx-0 bg-white rounded-3xl p-2 cursor-pointer group transition-shadow duration-300 hover:shadow-lg">
            <Link href={"/property"}>
                <CardContent className="p-2">
                    <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                        <img
                            className="object-cover aspect-square rounded-t-xl group-hover:scale-110 transition"
                            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
                        />
                        <div className="absolute top-2 left-2">
                            <Badge variant="outline" className="text-white bg-green-400 border-green-500">New</Badge>
                        </div>
                        {/* <div className="absolute top-2 right-2">
                            <HeartIcon fill="red" stroke="red" />
                        </div> */}
                    </div>
                    <div className="gap-1">
                        <div className="text-xl line-clamp-1 overflow-ellipsis overflow-hidden">
                            3 room, modern apartment Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className="flex items-center my-2 text-sm gap-2">
                            <MapPinIcon size={14} />
                            <p> Suratkal </p>
                        </div>
                        Rs. 60,00,000
                        <p className="line-clamp-2 overflow-ellipsis overflow-hidden">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className="flex justify-center md:justify-start overflow-hidden">
                            <Badge variant="outline" className="gap-1 rounded-lg justify-center bg-slate-50 w-full">
                                <Badge variant="outline" className="border-slate-50">
                                    <BedDoubleIcon className="mr-2" size={16} /> 2
                                </Badge>
                                <Badge variant="outline" className="border-slate-50">
                                    <ExpandIcon className="basis-1/6 mr-2" /> 64 ft<sup>2</sup>
                                </Badge>
                                <Badge variant="outline" className="border-slate-50">
                                    <BedDoubleIcon className="mr-2" size={16} /> other
                                </Badge>
                                {/* <Badge variant="outline" className="border-slate-50">
                                    <BedDoubleIcon className="mr-2" size={16} /> other
                                </Badge> */}
                            </Badge>
                        </div>
                    </div>
                </CardContent>
            </Link>
        </Card>
    );
}

export default PropertyCard;