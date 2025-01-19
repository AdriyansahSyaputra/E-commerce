import React from "react";
import { CircleUserRound } from "lucide-react";

const CardBlog = () => {
    return (
        <>
        <div className="w-full max-h-fit bg-white rounded-md shadow-md">
            <div className="w-full h-52 overflow-hidden rounded-t-md">
                <img src="/public/img/banner.png" alt="" className="w-full h-full object-cover" />
            </div>

            <div className="p-4">
                <p className="text-gray-400 text-xs uppercase mb-2">Tecnology - 20 Nov 2024</p>
                <h1 className="text-base font-semibold text-slate-700 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit?</h1>
                <p className="text-sm text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, commodi voluptate...</p>

                <div className="flex items-center mt-4">
                    <CircleUserRound size={20} className="text-slate-500" />
                    <p className="text-sm text-slate-500 ml-2">John Doe</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardBlog;