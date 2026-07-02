import { Button } from "@/components/ui/button";

export default function Home() {
  return (
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
            We design and build high-performance websites, web apps, and digital
            experiences that help businesses grow online.
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
  );
}
