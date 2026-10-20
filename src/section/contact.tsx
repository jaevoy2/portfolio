"use client";
import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "../components/reveal";
import '../css/index.css'

const CONTACT = {
  email: "sjaevoy@gmail.com",
  phone: "+63 964 737 7299",
  formEndpoint: "",
  socials: [
    { label: "GitHub", href: "https://github.com/jaevoy2", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className=" contactIcon icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg> },
    { label: "LinkedIn",href: "https://www.linkedin.com/in/jaevoy-seloterio-393641341", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="contactIcon icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" /></svg> },
    { label: "Facebook", href: "https://www.facebook.com/jroaseloterio", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="contactIcon icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg> },
  ],
};


const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

const SendIcon = () => (
  <svg {...iconProps} width={18} height={18}>
    <path d="m22 2-11 11" />
    <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
  </svg>
);
const CheckIcon = () => (
  <svg {...iconProps} width={18} height={18}>
    <path d="m5 12 5 5 9-10" />
  </svg>
);

/* ---------- Shared styles ---------- */
const field =
  "peer w-full rounded-xl border border-neutral-200 bg-white px-4 pt-6 pb-2 text-base text-neutral-900 " +
  "placeholder-transparent outline-none transition " +
  "focus:border-[#37BC7D] focus:ring-4 focus:ring-[#37BC7D]/15";

const label =
  "pointer-events-none absolute left-4 top-2 text-xs text-neutral-500 transition-all " +
  "peer-placeholder-shown:top-4 peer-placeholder-shown:text-base " +
  "peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#37BC7D]";

type Status = "idle" | "sending" | "sent" | "error";

/* ---------- Component ---------- */
function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No endpoint configured: hand off to the visitor's email app.
    if (!CONTACT.formEndpoint) {
      const subject = encodeURIComponent(`Message from ${data.get("name")}`);
      const body = encodeURIComponent(
        `${data.get("message")}\n\n${data.get("name")} (${data.get("email")})`
      );
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(CONTACT.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const info = [
    { icon: <MailIcon />, title: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: <PhoneIcon />, title: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
  ];

  return (
    <section
      id="contact"
      className="relative w-full scroll-mt-20 overflow-hidden bg-white font-poppins px-4 py-24 md:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/3 h-[420px] w-[420px] rounded-full bg-[#37BC7D]/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl mt-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <div>
            <Reveal direction="right" delay={0.15}>
              <h1 className="flex flex-col text-6xl font-semibold">
                Let's Get In <span style={{ color: "#37BC7D" }}>Touch</span>
              </h1>
              <p className="max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
                Have a project, a question, or a role in mind? Send a message and
                I'll reply within a couple of days.
              </p>
            </Reveal>

            <Reveal direction="right" delay={0.30}>
              <ul className="mt-10 space-y-5">
                {info.map(({ icon, title, value, href }) => {
                  const inner = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#37BC7D]/10 text-[#37BC7D] transition group-hover:bg-[#37BC7D] group-hover:text-white">
                        {icon}
                      </span>
                      <span>
                        <span className="block text-xs text-neutral-500">{title}</span>
                        <span className="block text-base font-medium text-neutral-900">{value}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={title} style={{ listStyleType: 'none' }}>
                      {href ? (
                        <a href={href} style={{ textDecoration: 'none' }} className="group flex items-center gap-4 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#37BC7D]">
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal direction="right" delay={0.50}>
              <div className="mt-10 flex flex-wrap gap-3">
                {CONTACT.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                    className="contactIconCon rounded-full border border-[#525252] px-3 py-2 text-sm text-neutral-700 transition hover:border-[#37BC7D] hover:text-[#37BC7D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37BC7D]"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.25}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_30px_80px_-30px_rgba(55,188,125,0.35)] md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="relative">
                  <input id="name" name="name" type="text" required placeholder=" " autoComplete="name" className={field} />
                  <label htmlFor="name" className={label}>Your name</label>
                </div>
                <div className="relative">
                  <input id="email" name="email" type="email" required placeholder=" " autoComplete="email" className={field} />
                  <label htmlFor="email" className={label}>Email address</label>
                </div>
              </div>

              <div className="relative mt-5">
                <textarea id="message" name="message" rows={6} required placeholder=" " className={`${field} resize-none`} />
                <label htmlFor="message" className={label}>How can I help?</label>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="border-none inline-flex items-center gap-2 rounded-full bg-[#37BC7D] px-7 py-3.5 text-base font-medium text-white shadow-[0_8px_24px_-8px_#37BC7D] transition hover:brightness-95 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#37BC7D]"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                  {status !== "sending" && <SendIcon />}
                </button>

                <div aria-live="polite" className="min-h-6 text-sm">
                  <AnimatePresence mode="wait">
                    {status === "sent" && (
                      <motion.p
                        key="sent"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-[#2a9a63]"
                      >
                        <CheckIcon /> Message sent. I'll be in touch soon.
                      </motion.p>
                    )}
                    {status === "error" && (
                      <motion.p
                        key="error"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-red-600"
                      >
                        Couldn't send your message. Try again or email me directly.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;