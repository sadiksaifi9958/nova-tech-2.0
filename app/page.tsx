import { AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Feature, Testimonial } from "@/lib/types";
import { Clock, MonitorSmartphone, ShieldCheck } from "lucide-react";

const features: Feature[] = [
  {
    title: "Fast Performance",
    desc: "Optimised websites that load quickly and keep users engaged.",
    icon: Clock,
  },
  {
    title: "Responsive Design",
    desc: "Beautiful layouts that work perfectly on mobile, tablet and desktop.",
    icon: MonitorSmartphone,
  },
  {
    title: "Secure & Reliable",
    desc: "Built with modern technologies to keep your website safe 24/7.",
    icon: ShieldCheck,
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "NovaTech transformed our online presence. Our website loads faster and looks stunning on every device.",
    name: "Arjun Kumar",
    role: "CEO, TechStart India",
    avatarColor: "linear-gradient(135deg, #1a42f5, #6080ff)",
  },
  {
    quote:
      "Professional, fast and incredibly responsive. They delivered beyond our expectations every step of the way.",
    name: "Sara Patel",
    role: "Founder, GrowthBox",
    avatarColor: "linear-gradient(135deg, #7c3aed, #c4b5fd)",
  },
  {
    quote:
      "Working with NovaTech was a great experience. They understood our vision and built exactly what we needed.",
    name: "Mohammed Raza",
    role: "MD, Raza Enterprises",
    avatarColor: "linear-gradient(135deg, #0a7c56, #34d399)",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-[5%] pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full max-w-[1200px] mx-auto">
          <div>
            <div className="text-xs text-primary bg-primary/10 inline-flex items-center gap-2 rounded-full px-4 py-1 font-semibold uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Now live for all businesses
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter text-foreground mb-5 ">
              Building Digital Experiences That{" "}
              <span className="text-primary">Drive Growth</span>
            </h1>
            <p className="text-muted-foreground text-base font-light leading-relaxed max-w-md mb-9">
              We design and build high-performance websites, web apps, and
              digital experiences that help businesses grow online.
            </p>
            <div className="flex items-center gap-4 mb-10 ">
              <Button size="lg">Get Started →</Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex">
                <span
                  className="w-8 h-8 rounded-full block -ml-2 first:ml-0"
                  style={{
                    background: "linear-gradient(135deg, #1a42f5, #6080ff)",
                  }}
                ></span>
                <span
                  className="w-8 h-8 rounded-full block -ml-2 first:ml-0"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #c4b5fd)",
                  }}
                ></span>
                <span
                  className="w-8 h-8 rounded-full block -ml-2 first:ml-0"
                  style={{
                    background: "linear-gradient(135deg, #0a7c56, #34d399)",
                  }}
                ></span>
                <span
                  className="w-8 h-8 rounded-full block -ml-2 first:ml-0"
                  style={{
                    background: "linear-gradient(135deg, #d97706, #fbbf24)",
                  }}
                ></span>
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by <strong className="text-foreground">100+</strong>{" "}
                businesses worldwide
              </p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl shadow-sm p-7">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-background border border-border rounded-xl p-4">
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
                  Monthly Visitors
                </p>
                <p
                  className="text-3xl text-primary font-extrabold tracking-tighter"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  48K
                </p>
                <p className="text-[10px] text-[#0a7c56] mt-1 font-medium">
                  ↑ +24% this month
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-4">
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
                  Conversion Rate
                </p>
                <p
                  className="text-3xl text-[#0a7c56] font-extrabold tracking-tighter"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  3.2%
                </p>
                <p className="text-[10px] text-[#0a7c56] mt-1 font-medium">
                  ↑ +1.2% vs last
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-4">
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
                  Load Time
                </p>
                <p
                  className="text-3xl text-[#e8920d] font-extrabold tracking-tighter"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  0.8s
                </p>
                <p className="text-[10px] text-[#e8920d] mt-1 font-medium">
                  ↓ 40% faster
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-4">
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
                  Uptime
                </p>
                <p
                  className="text-3xl text-[#7c3aed] font-extrabold tracking-tighter"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  99.9%
                </p>
                <p className="text-[10px] text-[#7c3aed] mt-1 font-medium">
                  Last 90 days
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-[11px] text-muted-foreground mb-1">
                  <span>Performance Score</span>
                  <span>94%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "94%",
                      background: "linear-gradient(90deg, #1a42f5, #3d62ff)",
                    }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-[11px] text-muted-foreground mb-1">
                  <span>SEO Rating</span>
                  <span>88%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "88%",
                      background: "linear-gradient(90deg, #0a7c56, #34d399)",
                    }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-[11px] text-muted-foreground mb-1">
                  <span>Accessibility</span>
                  <span>96%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "96%",
                      background: "linear-gradient(90deg, #7c3aed, #a78bfa)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-24 px-[5%] bg-card border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end mb-14">
            <div>
              <div className="text-xs text-primary bg-primary/10 inline-flex rounded-full px-4 py-1 font-semibold uppercase tracking-widest mb-3">
                Our Features
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground">
                Powerful Tools for Your Business
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground font-light leading-relaxed text-sm max-w-sm md:ml-auto">
                Everything you need to build, grow, and scale your digital
                presence — all in one place.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-background border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-11 h-11 bg-primary/10 border border-primary/15 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
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
      {/* Testimonials Section */}
      <section className="py-24 px-[5%] bg-background border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end mb-14">
            <div>
              <div className="text-xs text-primary bg-primary/10 inline-flex rounded-full px-4 py-1 font-semibold uppercase tracking-widest mb-3">
                testimonials
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground">
                What our clients say
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground font-light leading-relaxed text-sm max-w-sm md:ml-auto">
                Real feedback from real businesses we have helped grow.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-5 hover:border-primary/20 hover:shadow-md transition-all duration-200"
              >
                <div className="flex gap-1 text-[#e8920d]">★★★★★</div>
                <p className="text-sm text-foreground font-light leading-relaxed italic flex-1">
                  "{item.quote}"
                </p>
                <hr className="border-border" />
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback
                      style={{ background: item.avatarColor }}
                      className="text-white text-xs font-bold"
                    >
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
