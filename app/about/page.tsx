import React from "react";
import { Stat } from "@/lib/types";
const stats: Stat[] = [
  { number: "50", suffix: "+", label: "Projects completed" },
  { number: "100", suffix: "+", label: "Happy clients" },
  { number: "5", suffix: "yrs", label: "Industry experience" },
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
    </>
  );
}

export default page;
