import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-xl lg:text-3xl font-bold mb-4">
          We put <span className="text-[#F26522]">furnders' interests </span>
          first.
        </h2>
      </div>

      {/* Two column layout for bullet points */}
      <div className="grid md:grid-cols-2 gap-8 mb-0 md:mb-12 text-md">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-[#F26522] transform rotate-45 mt-2 flex-shrink-0"></div>
            <p>We don't take a board seat.</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-[#F26522] transform rotate-45 mt-2 flex-shrink-0"></div>
            <p>We don't take weeks/months to decide to invest.</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-[#F26522] transform rotate-45 mt-2 flex-shrink-0"></div>
            <p>We don't require decks, business plans, or MBAs.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-[#F26522] transform rotate-45 mt-2 flex-shrink-0"></div>
            <p>We don't demand 20% of your company.</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-[#F26522] transform rotate-45 mt-2 flex-shrink-0"></div>
            <p>We don't charge fees.</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-[#F26522] transform rotate-45 mt-2 flex-shrink-0"></div>
            <p>We won't even look at your application.</p>
          </div>
        </div>
      </div>

      {/* Three image panels */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/about1.png"
            alt="Dogs in a business meeting"
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/about2.png"
            alt="Group of dogs posing outdoors"
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/about3.png"
            alt="Large group of happy dogs"
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
