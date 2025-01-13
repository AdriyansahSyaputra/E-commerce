import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Questions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="my-20 py-10 px-4 md:px-10 max-w-full">
        <div className="w-full">
          <h1 className="uppercase text-xs md:text-sm text-orange-600 font-semibold text-center">
            A question people often ask
          </h1>
          <p className="text-center text-3xl mt-1 text-slate-800 font-semibold">
            See questions related to you
          </p>
          <p className="mx-auto text-center max-w-xl text-sm mt-2 text-slate-600 font-extralight">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            molestias quod eos odit asperiores numquam nemo incidunt temporibus
            adipisci. Quidem.
          </p>
        </div>

        {/* Questions */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-10 w-full gap-4 md:gap-6">
          <div className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-lg">
            {/* Pertanyaan */}
            <div className="flex justify-between items-center p-5">
              <p className="text-sm md:text-base font-medium text-gray-600">
                Apa Yang Ingin Anda Tanyakan Sekarang?
              </p>
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <Minus className="w-6 h-6 text-gray-600" />
                ) : (
                  <Plus className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </div>

            {/* Jawaban */}
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                isOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="p-5 text-sm md:text-base text-gray-600 border-t border-gray-200">
                Ini adalah jawaban dari pertanyaan Anda. Tambahkan informasi
                tambahan yang relevan di sini.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Questions;
