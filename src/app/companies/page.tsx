import Company from "@/components/Company";
import Header from "@/components/Header";

const companies = [
  {
    name: "Furever AI",
    description: "UnbiasedAI-driven insights for euthanasia decision making.",
    image: "/companies/fureverai.png",
    link: "/companies/fureverai",
    category: "B2B",
    subcategory: "HEALTHCARE SERVICES",
    location: "San Francisco, CA, USA",
  },
  {
    name: "Heat",
    description: "Designed to be neutered.",
    image: "/companies/heat.png",
    link: "/companies/heat",
    category: "CONSUMER",
    subcategory: "SOCIAL",
    location: "San Francisco, CA, USA",
  },
  {
    name: "DoorDachshund",
    description: "Kibble delivery.",
    image: "/companies/doordachshund.png",
    link: "https://www.amazon.ca/s?k=dry+dog+food&crid=1J6POT74NX8FY&sprefix=dry+dog+foo%2Caps%2C139&ref=nb_sb_noss_2",
    category: "CONSUMER",
    subcategory: "FOOD AND BEVERAGE",
    location: "San Francisco, CA, USA",
  },
  {
    name: "TrickTok",
    description: "Dogs can brainrot too.",
    image: "/companies/tricktok.png",
    link: "https://www.tiktok.com/tag/dog?lang=en",
    category: "CONSUMER",
    subcategory: "SOCIAL",
    location: "San Francisco, CA, USA",
  },
  {
    name: "Pawlantir",
    description:
      "We power real-time, AI-driven decisions for canine defence, from pet store flors to the alleyway.",
    image: "/companies/pawlantir.png",
    link: "/ERROR",
    category: "GOVERNMENT",
    subcategory: "DEFENCE",
    location: "Brampton, ON, CA",
  },
  {
    name: "Chowzempic",
    description:
      "The miracle drug. Eat anything; chocolate, sticks, and even macademia nuts.",
    image: "/companies/chowzempic.png",
    link: "/chowzempic.png",
    category: "HEALTHCARE",
    subcategory: "CONSUMER HEALTH AND WELLNESS",
    location: "San Francisco, CA, USA",
  },
  {
    name: "Dog's Best Friend",
    description: "Your new owner is waiting.",
    image: "/companies/dogsbestfriend.png",
    link: "https://friend.com/",
    category: "CONSUMER",
    subcategory: "CONSUMER ELECTRONICS",
    location: "San Francisco, CA, USA",
  },
  {
    name: "DogShit AI",
    description:
      "Cursor for AI agents for the world's first copilot for AI-native for Duolingo for cheating.",
    image: "/companies/dogshitai.png",
    link: "https://cluely.com/",
    category: "CONSUMER",
    subcategory: "CONTENT",
    location: "San Francisco, CA, USA",
  },
  {
    name: "PeePoint",
    description: "Mark your territory.",
    image: "/companies/peepoint.png",
    link: "https://www.google.com/maps",
    category: "CONSUMER",
    subcategory: "TRAVEL, LEISURE AND TOURISM",
    location: "San Francisco, CA, USA",
  },
  {
    name: "Sniffies",
    description: "Butt-sniffing as a service, BaaS",
    image: "/companies/sniffies.png",
    link: "https://sniffies.com/",
    category: "CONSUMER",
    subcategory: "SOCIAL",
    location: "San Francisco, CA, USA",
  },
  {
    name: "Mount AI",
    description: "Hump anything, anywhere.",
    image: "/companies/mountai.png",
    link: "https://www.ampmtoronto.com/",
    category: "HEALTHCARE",
    subcategory: "CONSUMER HEALTH AND WELLNESS",
    location: "San Francisco, CA, USA",
  },
];

export default function Companies() {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-8 py-8">
        <h1 className="text-4xl font-bold">Startup Directory</h1>
        <p>
          Since 2025, we have invested in over 10 companies that have a combined
          valuation of over $800B "good boys".
        </p>
        <p>
          If you are a dog and would like to find jobs at these startups, visit{" "}
          <a
            href="https://careers.petsmart.com/"
            target="_blank"
            className="underline"
          >
            Work at a Startup
          </a>
          .
        </p>
      </div>
      <div className="space-y-0">
        {companies.map((company) => (
          <Company key={company.name} {...company} />
        ))}
      </div>
    </div>
  );
}
