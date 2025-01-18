import React from "react";
import FormContact from "../../Fragments/FormContact";
import {
  Headset,
  MessageCircleMore,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const contactSupport = [
  {
    id: 1,
    title: "Hotline",
    desc: "+62 123 456 789",
    icon: Headset,
  },
  {
    id: 2,
    title: "Whatsapp",
    desc: "+62 123 456 789",
    icon: MessageCircleMore,
  },
  {
    id: 3,
    title: "Email",
    desc: "b9f6H@example.com",
    icon: Mail,
  },
];

const ContactSection = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto">
        <div className="w-4/5 bg-white rounded-md shadow-md relative p-8">
          <div className="">
            <h1 className="text-base md:text-xl font-semibold text-slate-700">
              Send us a message
            </h1>
            <p className="w-2/3 text-sm mt-2 text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              molestias quod eos odit asperiores numquam nemo incidunt
              temporibus adipisci. Quidem.
            </p>
          </div>

          {/* Form */}
          <div className="mt-4">
            <FormContact />
          </div>

          {/* Card info */}
          <div className="absolute -right-28 top-4 min-w-72 h-full bg-slate-700 rounded-xl p-6">
            <h1 className="text-white font-medium text-base w-4/5">
              Hi! We are always here help for you.
            </h1>

            {contactSupport.map((item) => (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur p-4 w-full rounded-xl mt-5 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <item.icon size={25} className="text-white" />
                  </div>
                  <div>
                    <h1 className="text-white text-sm font-bold">
                      {item.title}
                    </h1>
                    <p className="text-white/80 text-xs">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Divider */}
            <div className="mt-4">
              <div className="w-full h-[1px] bg-gray-500"></div>
            </div>

            <div>
              <h3 className="text-white text-sm font-bold mt-6">
                Connect with us
              </h3>
              <div className="flex items-center justify-evenly gap-4 mt-4">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                  <div
                    key={index}
                    className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <Icon size={25} className="text-white" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
