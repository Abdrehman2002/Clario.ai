import { RulerCarousel, type CarouselItem } from "@/components/ui/ruler-carousel";

const partnerTechnologies: CarouselItem[] = [
  { id: 1, title: "HUBSPOT" },
  { id: 2, title: "SALESFORCE" },
  { id: 3, title: "ZOHO CRM" },
  { id: 4, title: "PIPEDRIVE" },
  { id: 5, title: "GOHIGHLEVEL" },
  { id: 6, title: "MONDAY CRM" },
  { id: 7, title: "AIRTABLE" },
  { id: 8, title: "FRESHSALES" },
  { id: 9, title: "CLOSE CRM" },
  { id: 10, title: "COPPER CRM" },
];

const LogoCarouselSection = () => {
  return (
    <div className="w-full bg-[#000000] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white leading-tight px-2">
          Powering Innovation with Leading Technologies
        </h2>
      </div>
      <RulerCarousel originalItems={partnerTechnologies} />
    </div>
  );
};

export default LogoCarouselSection;
