"use client";
import CTA from "@/src/components/landing/CTA";
import PageBanner from "@/src/components/ui/PageBanner";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
       <PageBanner 
          title="Connect to EvaSUE"
          subtitle="Advancing Kingdom Of God by Serving Students."
          image="/images/bg2.JPG"
         />
      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Single Row Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
              
              {/* Our Address */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-sky-900 mb-4">Our Address</h2>
                <div className="h-1 w-12 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mb-4" />
                <p className="text-gray-700 mb-3 text-sm">
                  Arada Sub City, Wereda-7, Kebele-10 House Number 046
                </p>
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm text-gray-800">Office Hours</h3>
                  <p className="text-gray-700 text-sm">Mon-Fri 9:30 am – 5:00 pm</p>
                  <p className="text-gray-600 text-sm">Sa-Sun Closed</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-sky-900 mb-3">Contact Info</h2>
                <div className="h-1 w-12 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mb-4" />
                <div className="space-y-1">
                  <div>
                    <h3 className="font-semibold text-sm text-gray-800 mb-1">P.O.Box</h3>
                    <p className="text-gray-700 text-sm">34354 Addis Ababa, Ethiopia</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-700 text-sm">+251118333094</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-700 text-sm">info@evasue.net</p>
                  </div>
                </div>
              </div>

              {/* USA Representation */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-sky-900 mb-4">USA Representation</h2>
                <div className="h-1 w-12 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mb-4" />
                <p className="text-gray-700 text-sm mb-4">
                  EvaSUE is represented in the USA, with its EvaSUE Alumni
                </p>
                <div className="space-y-1">
                  <div>
                    <h3 className="font-semibold text-sm text-gray-800 mb-1">Organization Type</h3>
                    <p className="text-gray-700 text-sm">Non-Profit Organization</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-800 mb-1">Website</h3>
                    <a 
                      href="https://www.evasuealumni.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sky-600 text-sm hover:text-sky-700 transition-colors"
                    >
                      https://www.evasuealumni.org/
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Person */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-sky-900 mb-4">Contact Person</h2>
                <div className="h-1 w-12 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mb-4" />
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-gray-900">Abenezer Dejene</h3>
                  <p className="text-gray-600 text-sm text-sm">Partnership Catalyst</p>
                </div>
                <div className="space-y-1">
                  <div>
                    <h3 className="font-semibold text-sm text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-700 text-sm">+1 469 743 7824</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-800 mb-1">P.O.Box</h3>
                    <p className="text-gray-700 text-sm">1331</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-700 text-sm">partnership.catalyst@evasue.net</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-700 text-sm">Culver City, CA, 90232</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <CTA />
      </section>
    </div>
  );
}