"use client";

import { Input } from "@/components/ui/input";
import { ArrowDownRight } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  async function send() {
    try {
      const res = await fetch("/api/contactme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", service: "", message: "" }); // reset form
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    }
  }

  return (
    <div className="bg-black text-white min-h-screen w-full">
      <div className="py-20 px-10">
        {/* Hero section */}
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className="flex justify-center">
            <span className="text-7xl font-roboto-condensed leading-tight">
              Let&apos;s Start a <br /> project together
            </span>
          </div>

          <div className="flex justify-center relative">
            <div className="bg-white h-[25vh] w-[13vw] rounded-full overflow-hidden">
              <Image
                className="h-full w-full object-cover"
                src="/photo1.jpg"
                alt="profile"
                width={500}
                height={500}
                priority
              />
            </div>

            <span className="absolute top-[60%] right-[20%] text-white">
              <ArrowDownRight size={40} />
            </span>
          </div>
        </div>

        {/* Form & Contact details */}
        <div className="grid grid-cols-2 gap-10 py-16">
          {/* Form */}
          <div className="flex justify-center">
            <div className="grid w-full max-w-md items-center gap-6">
              <div className="border-t border-gray-500"></div>
              <label htmlFor="name" className="text-2xl">
                What&apos;s Your Name?
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Rushikesh Mhatre *"
                className="h-[5vh] text-xl border-0"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                required
              />

              <div className="border-t border-gray-500"></div>
              <label htmlFor="email" className="text-2xl">
                What&apos;s Your Email?
              </label>
              <Input
                id="email"
                type="email"
                placeholder="hrishi12@gmail.com *"
                className="h-[5vh] text-xl border-0"
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                required
              />

              <div className="border-t border-gray-500"></div>
              <label htmlFor="services" className="text-2xl">
                What services are you looking for?
              </label>
              <Input
                id="services"
                type="text"
                placeholder="web-design, web-development..."
                className="h-[5vh] text-xl border-0"
                value={form.service}
                onChange={(e) =>
                  setForm((p) => ({ ...p, service: e.target.value }))
                }
              />

              <div className="border-t border-gray-500"></div>
              <label htmlFor="message" className="text-2xl">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Hi Rushikesh, can you help me with... *"
                className="h-[15vh] text-xl border-0 p-2 rounded-md text-black"
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                required
              />
            </div>
          </div>

          {/* Contact details */}
          <div className="flex flex-col justify-start gap-6">
            <div>
              <span className="text-gray-200 text-xl">Contact Details</span>
              <div className="text-gray-300 mt-2">
                <p>hrishi210402@gmail.com</p>
                <p>+91 7208553533</p>
              </div>
            </div>

            <div>
              <span className="text-gray-200 text-xl">Socials</span>
              <div className="text-gray-300 mt-2 flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/in/contactrushikesh21/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/emoji2104/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://github.com/rushikesh-2104"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        
        <div className="w-full max-w-2xl mx-auto border-t border-gray-500 mt-10 relative right-35 bottom-10 "></div>
        <div className="flex justify-center mt-10">
          <button
            className="font-lora w-[10rem] h-[10rem] rounded-full bg-white text-black flex justify-center items-center text-2xl relative bottom-40 hover:bg-amber-100"
            onClick={send}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
