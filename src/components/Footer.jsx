import { socials } from "@/data";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="relative h-60 bg-dark-primary-950 py-8 pb-16 text-light-primary-300">
      <div className="flex h-full items-stretch justify-between px-20">
        <div className="flex flex-col justify-between">
          <h6 className="text-xl font-bold text-dark-secondary-600">
            MovieMania
          </h6>
          <div className="mt-4">
            <p className="mb-2 text-sm">Get in Touch</p>
            <input
              type="email"
              className="w-80 rounded-s bg-dark-primary-800 px-4 py-2"
            />
            <button className="rounded-e bg-dark-secondary-700 px-6 py-2 outline-0 hover:bg-dark-secondary-700/90 focus-visible:outline-0">
              Send
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <p className="text-sm">Stay Connected</p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a key={social.name} href={social.url} target="_blank">
                  <social.icon className="text-2xl text-dark-secondary-600" />
                </a>
              ))}
            </div>
          </div>
          <span className="text-xs text-light-primary-400">
            © 2024 MovieMania. All Rights Reserved.
          </span>
        </div>
      </div>
      <div className="my-8 h-px w-full bg-dark-secondary-800 " />
    </footer>
  );
};
export default Footer;
