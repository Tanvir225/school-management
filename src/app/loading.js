'use client'
import Lottie from "lottie-react";
import loadingIcon from "@/assests/loading.json"

const loading = () => {
    return (
        <div className="h-[80vh] flex justify-center items-center bg-transparent w-48 mx-auto">
            <Lottie animationData={loadingIcon}></Lottie>
        </div>
    );
};

export default loading;