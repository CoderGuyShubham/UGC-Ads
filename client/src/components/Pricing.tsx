import Title from "./Title";
import { PricingTable } from "@clerk/clerk-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white/3 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-4">
        <Title
          title="Pricing"
          heading="Pricing Plans"
          description="Our pricing is simple, transparent and flexible. Choose the plan that best suits your needs."
        />

        <div className="flex flex-wrap items-center justify-center max-w-5xl mx-auto">
          <PricingTable
            appearance={{
              variables: {
                colorBackground: "none",
              },
              elements: {
                pricingTableCardBody: "bg-white/6",
                pricingTableCardHeader: "bg-white/10",
                switchThumb: "bg-white",
              },
            }}
          />
        </div>
        <p className="text-center text-gray-400 max-w-md text-sm my-14 mx-auto px-12">
          Create stunning images for just{" "}
          <span className="font-medium text-indigo-400">5 credits</span> and
          generate immersive videos for{" "}
          <span className="font-medium text-indigo-400">10 credits</span>.
        </p>
      </div>
    </section>
  );
}
