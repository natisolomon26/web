"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="relative bg-white min-h-screen overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 lg:px-8 py-24 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-sky-600">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-5">
            Let’s Start a Conversation
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have a question, partnership idea, or need support? We’d love to hear
            from you. Reach out and our team will respond shortly.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <ContactItem
              icon={Mail}
              title="Email"
              value="info@example.org"
            />
            <ContactItem
              icon={Phone}
              title="Phone"
              value="+1 (555) 123-4567"
            />
            <ContactItem
              icon={MapPin}
              title="Office"
              value="123 Leadership Avenue, City, Country"
            />
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-white rounded-3xl border border-slate-100 shadow-xl p-8 md:p-10"
          >
            <div className="grid grid-cols-1 gap-6">
              <Input label="Full Name" placeholder="Your name" />
              <Input label="Email Address" placeholder="you@example.com" />
              <Input label="Subject" placeholder="How can we help?" />
              <Textarea
                label="Message"
                placeholder="Write your message here..."
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-white font-semibold hover:bg-sky-700 transition"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Sub Components ---------- */

function ContactItem({
  icon: Icon,
  title,
  value,
}: {
  icon: any;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="font-semibold text-slate-900">{title}</p>
        <p className="text-slate-600">{value}</p>
      </div>
    </div>
  );
}

function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
  );
}

function Textarea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <textarea
        rows={5}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
      />
    </div>
  );
}
