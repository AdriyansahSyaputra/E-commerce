import React from "react";

const FormContact = () => {
  return (
    <div className="max-w-2xl">
      <form action="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="relative">
            <input
              type="text"
              id="firstName"
              className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50/30 text-gray-700 placeholder-transparent focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
              placeholder="John"
              required
            />
            <label
              htmlFor="firstName"
              className="absolute -top-2.5 left-3 text-sm bg-white px-2 text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-sm peer-focus:text-indigo-600"
            >
              First Name
            </label>
          </div>

          {/* Last Name */}
          <div className="relative">
            <input
              type="text"
              id="lastName"
              className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50/30 text-gray-700 placeholder-transparent focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
              placeholder="Doe"
              required
            />
            <label
              htmlFor="lastName"
              className="absolute -top-2.5 left-3 text-sm bg-white px-2 text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-sm peer-focus:text-indigo-600"
            >
              Last Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50/30 text-gray-700 placeholder-transparent focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
              placeholder="email@example.com"
              required
            />
            <label
              htmlFor="email"
              className="absolute -top-2.5 left-3 text-sm bg-white px-2 text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-sm peer-focus:text-indigo-600"
            >
              Email
            </label>
          </div>

          {/* Phone */}
          <div className="relative">
            <input
              type="tel"
              id="phone"
              className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50/30 text-gray-700 placeholder-transparent focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
              placeholder="+1234567890"
              required
            />
            <label
              htmlFor="phone"
              className="absolute -top-2.5 left-3 text-sm bg-white px-2 text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-sm peer-focus:text-indigo-600"
            >
              Phone
            </label>
          </div>
        </div>

        {/* Message */}
        <div className="relative mt-6">
          <textarea
            id="message"
            rows={4}
            className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50/30 text-gray-700 placeholder-transparent focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all duration-300 resize-none"
            placeholder="Your message here..."
            required
          ></textarea>
          <label
            htmlFor="message"
            className="absolute -top-2.5 left-3 text-sm bg-white px-2 text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-sm peer-focus:text-indigo-600"
          >
            Message
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full md:w-auto bg-slate-700 text-white font-semibold py-3 px-8 rounded-xl focus:ring-2 focus:ring-indigo-200 transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default FormContact;
