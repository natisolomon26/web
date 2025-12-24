"use client";

import { useState } from "react";
import PageBanner from "@/src/components/ui/PageBanner";

export default function ContactPage() {
  const [categoryType, setCategoryType] = useState<"popular" | "department">(
    "popular"
  );

  return (
    <section className="bg-white">
         <PageBanner 
                    title="Leadership"
                    subtitle="Our foundational Christian convictions"
                    image="/images/bg3.JPG"
         />
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT – FORM (9/12) */}
          <div className="lg:col-span-9">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-slate-600 mb-10 max-w-3xl">
              We'd love to hear from you! Whether you want to know more about our
              ministry, update your donor information, or anything else, we're
              happy to help.
            </p>

            <form className="space-y-8 max-w-3xl">
              {/* CATEGORY SELECT */}
              <fieldset>
                <legend className="text-sm font-semibold text-slate-700 mb-3">
                  Select one
                </legend>

                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={categoryType === "popular"}
                      onChange={() => setCategoryType("popular")}
                    />
                    Popular Categories
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={categoryType === "department"}
                      onChange={() => setCategoryType("department")}
                    />
                    Department / Ministry
                  </label>
                </div>
              </fieldset>

              {/* CATEGORY DROPDOWN */}
              {categoryType === "popular" ? (
                <select className="w-full border rounded-lg px-4 py-3">
                  <option>Select a category</option>
                  <option>General</option>
                  <option>Donor Services</option>
                  <option>Chapter Information</option>
                  <option>InterVarsity Press</option>
                  <option>Media Inquiries</option>
                  <option>Urbana</option>
                </select>
              ) : (
                <select className="w-full border rounded-lg px-4 py-3">
                  <option>Select a department</option>
                  <option>Campus Ministries</option>
                  <option>Donor Services</option>
                  <option>Global Programs</option>
                  <option>InterVarsity Press</option>
                  <option>President’s Office</option>
                </select>
              )}

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your email
                </label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Question / Comment
                </label>
                <textarea
                  rows={5}
                  className="w-full border rounded-lg px-4 py-3 resize-none"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-700 transition"
              >
                Send
              </button>
            </form>
          </div>

          {/* RIGHT – SIDEBAR (3/12) */}
          <div className="lg:col-span-3 space-y-8">
            <InfoBlock
              title="InterVarsity/USA Office"
              body={
                <>
                  635 Science Dr
                  <br />
                  Madison, WI 53711
                  <br />
                  Phone: (608) 274-9001
                </>
              }
            />

            <InfoBlock
              title="Donor Services"
              body={
                <>
                  (866) 734-4823
                  <br />
                  8:00 AM – 5:00 PM CST
                </>
              }
            />

            <InfoBlock
              title="InterVarsity Press"
              body={
                <>
                  1001 Warrenville Rd Ste 300
                  <br />
                  Lisle, IL 60532
                  <br />
                  Phone: (800) 843-9487
                </>
              }
            />
          </div>
        </div>

        {/* FOOTER CTA SECTIONS */}
      
      </div>
    </section>
  );
}

/* ---------- SUB COMPONENTS ---------- */

function InfoBlock({
  title,
  body,
}: {
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}

function FooterCTA({
  title,
  text,
  button,
  href,
}: {
  title: string;
  text: string;
  button: string;
  href: string;
}) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-slate-600 mb-4 max-w-2xl">{text}</p>
      <a
        href={href}
        className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:underline"
      >
        {button}
        <span>↗</span>
      </a>
    </div>
  );
}
