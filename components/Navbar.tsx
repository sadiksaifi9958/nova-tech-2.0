"use client";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { NavLink } from "@/lib/types";

const navlinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
import React from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        Nova<span className="text-primary">Tech</span>
      </Link>
      <div className="hidden md:flex gap-6">
        {navlinks.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className="text-sm hover: underline"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5"></Menu>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 mt-8">
              {navlinks.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className="text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
