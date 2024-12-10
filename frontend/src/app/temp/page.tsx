import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import jlr from "../../assets/jlr.png";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"


const DataCard = () => {
    return <>
        <div className="flex justify-center items-center h-screen">
            <Card className="w-[400px] px-5 pt-3 pb-0 rounded-2xl">
                <CardHeader className="flex flex-row justify-between items-center p-0">
                    <span className="font-medium text-lg text-purple-600">Jaguar Land Rover</span>
                    <span><Image src={jlr} alt="jlr" height={35} /></span>
                </CardHeader>
                <Separator className="mb-5 mt-3"/>
                <CardContent className="flex justify-between p-0">
                    <div className="text-sm text-gray-600 font-medium flex flex-col justify-center items-center bg-gray-100 p-2 py-3 rounded-2xl w-28">
                        <span className="font-semibold text-gray-400">YTD Revenue</span>
                        <span className="text-gray-950 text-base font-semibold">$ 1000</span>
                    </div>
                    <div className="text-sm text-gray-600 font-medium flex flex-col justify-center items-center bg-gray-100 p-2 py-3 rounded-2xl w-28">
                        <span className="font-semibold text-gray-400">YTD Cost</span>
                        <span className="text-gray-950 text-base font-semibold">$ 1000</span>
                    </div>
                    <div className="text-sm text-gray-600 font-medium flex flex-col justify-center items-center bg-gray-100 p-2 py-3 rounded-2xl w-28">
                        <span className="font-semibold text-gray-400">YTD Margin</span>
                        <span className="text-gray-950 text-base font-semibold">$ 1000</span>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">

                </CardFooter>
            </Card>
        </div>
    </>
}

export default DataCard;