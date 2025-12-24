"use client";

import PageBanner from "@/src/components/ui/PageBanner";

export default function Contacts() {

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
              We would love to hear from you! Whether you want to know more about our
              ministry, update your donor information, or anything else, we are
              happy to help.
            </p>

            <form className="space-y-8 max-w-3xl">
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
        </div>
      </div>
    </section>
  );
}
