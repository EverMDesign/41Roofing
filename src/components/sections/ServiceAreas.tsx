import ModalCTA from "@/components/ModalCTA";
import { serviceAreas } from "@/lib/service-areas-data";
import { BUSINESS } from "@/lib/schema-business";

const cities = serviceAreas.map((area) => ({
  name: area.city.toUpperCase(),
  href: `/areas/${area.slug}`,
}));

const primaryCities = new Set(serviceAreas.map((area) => area.city));
const surroundingCities = BUSINESS.serviceAreas
  .map((area) => area.replace(/,\s*TX$/, ""))
  .filter((city) => !primaryCities.has(city));

function joinWithAnd(items: string[]) {
  if (items.length <= 1) return items.join("");
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-24 md:py-32 bg-brand-softGray">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Local Roofing</p>
          <h2 className="font-heading font-black text-[32px] md:text-[60px] md:leading-[66px] text-brand-black leading-[1.1]">
            PROUDLY SERVING NORTH TEXAS.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 mb-16 max-w-4xl mx-auto text-center">
          {cities.map((city) => (
            <a
              key={city.name}
              href={city.href}
              className="font-heading font-black text-2xl md:text-4xl text-brand-black hover:text-brand-aqua transition-colors"
            >
              {city.name}
            </a>
          ))}
        </div>
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-sans text-brand-charcoal/80 text-base md:text-lg mb-8">
            Don&rsquo;t see your city listed? We also serve {joinWithAnd(surroundingCities)}, and the
            surrounding North Texas area. Reach out and we&rsquo;ll confirm we&rsquo;ve got you covered.
          </p>
          <ModalCTA className="inline-flex justify-center items-center bg-brand-aqua text-brand-black px-10 py-5 rounded-[10px] font-heading font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300">
            Get In Touch
          </ModalCTA>
        </div>
      </div>
    </section>
  );
}
