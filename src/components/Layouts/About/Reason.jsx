import React from "react";
import { ShieldCheck } from "lucide-react";

const Reason = () => {
  return (
    <>
      <section className="my-20 py-10 max-w-full px-4 md:px-10 bg-white">
        <div className="w-full">
          <h1 className="uppercase text-xs md:text-sm text-orange-600 font-semibold text-center">
            Why Choose Us?
          </h1>
          <p className="text-center text-3xl mt-1 text-slate-800 font-semibold">
            The Best Store Right Now!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 mt-5 md:mt-10 w-full gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex flex-col items-center p-4 rounded-xl shadow-md hover:shadow-lg">
                <ShieldCheck className="w-12 h-12 text-indigo-600 mb-4" />
                <h1 className="text-lg md:text-2xl font-medium text-gray-700">
                  Trusted
                </h1>
                <p className="mt-2 text-center text-sm text-gray-700 font-serif px-6 md:px-0">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae aperiam recusandae similique perferendis nam
                  quibusdam.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Reason;
