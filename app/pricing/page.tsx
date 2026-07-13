import { PricingPlan } from "@/lib/types";
import { Button } from "@/components/ui/button";
const plans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$29",
    desc: "Perfect for individuals and small projects just getting started.",
    features: ["1 website", "5GB Storage", "Email support"],
    featured: false,
  },
  {
    name: "Pro",
    price: "$79",
    desc: "For growing businesses that need more power and flexibility.",
    features: ["5 websites", "20GB Storage", "Priority support"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    desc: "For large teams and organisations that need unlimited scale.",
    features: ["Unlimited sites", "100GB Storage", "24/7 support"],
    featured: false,
  },
];
function page() {
  return (
    <>
      <section className="px-[5%] pt-40 pb-24 bg-background">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-xs text-primary bg-primary/10 inline-flex rounded-full px-4 py-1 font-semibold uppercase tracking-widest mb-3">
            Pricing Plans
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground mb-5">
            Simple, transparent pricing
          </h1>
          <p className="text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
            Choose the plan that fits your business. No hidden fees, no
            surprises.
          </p>
        </div>
      </section>
      <section className="px-[5%] pb-24 bg-background">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.map((item) => (
              <div
                className="relative bg-card border border-border rounded-2xl p-8 flex flex-col transition-all duration-200 hover:border-primary/30 hover:shadow-md"
                key={item.name}
              >
                {item.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">
                  {item.name}
                </div>
                <h1 className="text-5xl font-extrabold tracking-tighter text-foreground">
                  {item.price}
                  <span className="text-base font-normal text-muted-foreground">
                    /mo
                  </span>
                </h1>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mt-3 mb-6">
                  {item.desc}
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-5 h-5 rounded-full bg-green-pale border border-green/20 flex items-center justify-center text-green text-[10px]">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-auto">
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
