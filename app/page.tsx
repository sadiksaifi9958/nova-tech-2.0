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
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter text-foreground mb-5 ">
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
      </div>
    </section>
  );
}
