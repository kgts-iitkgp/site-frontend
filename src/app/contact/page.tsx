"use client";
import DotBackground from "@/components/DotBackground";
import Link from "next/link";
import { useState } from "react";

const Contact = (e: React.ChangeEvent<HTMLInputElement>) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  return (
    <div className="min-h-screen flex justify-center">
      <DotBackground />
      <div className="flex flex-col items-center my-2 w-[300px] sm:w-[600px] md:w-[730px] lg:w-[900px] xl:w-[1050px]">
        <div>
          <p className="text-3xl sm:text-5xl mb-5 mt-12 font-bold text-primary text-center">
            Contact Us
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row justify-evenly gap-y-5">
          <div className="w-4/5 md:w-[45%] m-2">
            <Link target="_blank" href="https://maps.app.goo.gl/3fmbZUXGXCgXfezu7">
              <img
                src="/images/IITKGP.png"
                className="rounded-md hover:scale-[103%] active:scale-[99%] transition-all duration-300"
                alt="map"
              />
            </Link>
          </div>
          <form
            className="bg-black/90 w-full m-2 md:w-[45%] flex flex-col gap-y-5 items-center p-4 rounded-lg border-2 border-primary"
            onSubmit={() => {}}
          >
            <input
              type="text"
              id="user-name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
              className="px-2 py-1 w-[90%] bg-transparent text-xl outline-none border-b transition-colors duration-500 border-primary/30 focus:border-primary"
            />
            <input
              type="email"
              id="user-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="px-2 py-1 w-[90%] bg-transparent text-xl outline-none border-b transition-colors duration-500 border-primary/30 focus:border-primary"
            />
            <textarea
              name="feedback"
              id="user-feedback"
              placeholder="feedback...."
              rows={5}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-[90%] p-2 mt-5 text-base rounded-lg bg-slate-900/30 outline-none border transition-colors duration-500 border-primary/30 focus:border-primary"
            ></textarea>
            <div className="w-[90%] flex justify-center sm:justify-end">
              <button
                className="text-white transition-all duration-200 hover:scale-105 active:scale-95 bg-primary px-4 py-1 text-xl rounded-md"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
