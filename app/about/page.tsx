import React from "react";
import { Stat, Feature } from "@/lib/types";
import {
  Rocket,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Handshake,
  Lightbulb,
} from "lucide-react";

const stats: Stat[] = [
  { number: "50", suffix: "+", label: "Projects completed" },
  { number: "100", suffix: "+", label: "Happy clients" },
  { number: "5", suffix: "yrs", label: "Industry experience" },
];

const missions: Feature[] = [
  {
    title: "Launch faster",
    desc: "We deliver projects on time without compromising on quality or detail.",
    icon: Rocket,
  },
  {
    title: "Grow smarter",
    desc: "Every decision we make is backed by strategy and focused on your business goals.",
    icon: TrendingUp,
  },
  {
    title: "Stay secure",
    desc: "Security is built in from day one — not added as an afterthought.",
    icon: Shield,
  },
];

const values: Feature[] = [
  {
    title: "Speed",
    desc: "We build fast websites and deliver projects on time without compromising quality.",
    icon: Zap,
  },
  {
    title: "Precision",
    desc: "Every pixel, every line of code is crafted with attention to detail and purpose.",
    icon: Target,
  },
  {
    title: "Trust",
    desc: "We build long-term relationships with our clients based on transparency and honesty.",
    icon: Handshake,
  },
  {
    title: "Innovation",
    desc: "We stay ahead of the curve using the latest technologies to deliver modern solutions",
    icon: Lightbulb,
  },
];

function page() {
  return (
    <>
      <section className="px-[5%] pt-40 pb-24 bg-background">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-xs text-primary bg-primary/10 inline-flex rounded-full px-4 py-1 font-semibold uppercase tracking-widest mb-3">
            Who we are
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground mb-5">
            We are Nova<span className="text-primary">Tech</span>
          </h1>
          <p className="text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
            A team of passionate developers and designers helping businesses
            build powerful digital presences that attract visitors, convert
            leads, and drive real growth.
          </p>
        </div>
      </section>
      <section className="px-[5%] pb-24 bg-background">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stats.map((item) => (
              <div
                className="bg-card border border-border rounded-2xl p-10 text-center hover:border-primary/30 hover:shadow-md transition-all duration-200"
                key={item.label}
              >
                <p className="text-5xl font-extrabold tracking-tighter text-foreground mb-2">
                  {item.number}
                  <span className="text-primary">{item.suffix}</span>
                </p>
                <h2 className="text-sm text-muted-foreground font-light">
                  {item.label}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-[5%] py-24 bg-ink">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="border border-white/20 text-white/60 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full inline-block mb-6">
              Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white leading-tight mb-5">
              Built for{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #3d62ff, #a0b4ff)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                business growth
              </span>
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-sm">
              We believe every business deserves a powerful online presence. Our
              mission is to make that possible through smart, affordable, and
              beautiful web solutions that actually work.
            </p>
          </div>
          <div className="flex flex-col">
            {missions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  className="flex items-start gap-4 py-6 border-b border-white/10 last:border-0"
                  key={item.title}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#7da0ff]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-24 px-[5%] bg-card border-y border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-xs text-primary bg-primary/10 inline-flex rounded-full px-4 py-1 font-semibold uppercase tracking-widest mb-3">
            Our Values
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground mt-3 mb-2">
            What we stand for
          </h1>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            The principles that guide everything we build.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  className="bg-background border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-md transition-all duration-200"
                  key={item.title}
                >
                  <span className="w-11 h-11 bg-primary/10 border border-primary/15 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-primary" />
                  </span>
                  <h3 className="font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
