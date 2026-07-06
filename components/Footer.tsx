"use client";
import { NavLink } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const navlinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const legalnav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

function Footer() {
  const pathname = usePathname();
  const filterNav = navlinks.filter((item) => item.href !== pathname);
  return (
    <div className="bg-card border-t border-border">
      <div className="max-w-[1200px] mx-auto px-[5%] py-10">
        <div className="flex justify-between items-start gap-8 pb-8 border-b border-border flex-wrap">
          <div>
            <Link href="/" className="text-xl font-extrabold">
              <h1>
                Nova<span className="text-primary">Tech</span>
              </h1>
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-[200px] leading-relaxed">
              Building digital experiences that drive real growth.
            </p>
          </div>
          <div>
            <div className="flex gap-16 flex-wrap">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  Company
                </div>
                <ul className="flex flex-col gap-3">
                  {filterNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  Legal
                </div>
                <ul className="flex flex-col gap-3">
                  {legalnav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-6 flex-wrap gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 NovaTech. All rights reserved.
          </p>
          <div className="flex gap-2">
            <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer">
              <FaGithub />
            </div>
            <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer">
              <FaTwitter />
            </div>
            <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
