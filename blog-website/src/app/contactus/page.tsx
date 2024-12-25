import React from "react";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

const ContactUS = () => {
  return (
    <div className="dark:bg-gray-900  font-[&#39;Inter&#39;]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 flex gap-8">
        <div className="max-w-3xl mx-auto py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          <div className="dark:bg-gray-800 rounded-lg p-2 sm:p-8">
            <form className="space-y-6">
              <div>
                <label className="">
                  Name
                </label>
                <input
                  type="text"
                  className=""
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="">
                  Email
                </label>
                <input
                  type="email"
                  className=""
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="">
                  Subject
                </label>
                <input
                  type="text"
                  className=""
                  placeholder="Message subject"
                />
              </div>
              <div>
                <label className="">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full py-2 px-5 dark:bg-gray-700 border-gray-600  rounded-md focus:border-custom focus:ring-1 focus:ring-custom"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-custom text-white px-6 py-3 rounded-md hover:bg-custom/90"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <CiLocationOn className="text-5xl text-custom mb-4"/>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="">
                123 Business Street
                <br />
                New York, NY 10001
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CiPhone className="fas fa-phone text-5xl text-custom mb-4"/>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <CiMail className="text-5xl text-custom mb-4"/>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="">contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
