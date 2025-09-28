import Image from "next/image";

const testimonials = [
  {
    name: "Clue the Fox",
    role: "Mascot",
    company: "Cluely",
    quote:
      "K9 Combinator is the best program for creating top-fetching entrepreneurs that has ever existed.",
    avatar: "/testimonials1.png",
  },
  {
    name: "Clifford, The Big Red Dog",
    role: "Character",
    company: "Scholastic Corporation",
    quote:
      "K9 Combinator is the best startup accelerator in the world. K9C helps their companies a lot, and the K9C community is a huge asset for the good boys that go through the program.",
    avatar: "/testimonials2.png",
  },
  {
    name: "Snoopy Von Peanuts",
    role: "Investor",
    company: "Peanuts Worldwide LLC",
    quote: "K9C really saved me from the pound, god bless them 🙏",
    avatar: "/testimonials3.png",
  },
  {
    name: 'Scoobert "Scooby" Doo',
    role: "Founder",
    company: "The Mystery Machine Inc.",
    quote:
      "I doubt that The Mystery Machine Inc. would have worked without K9C. It's that simple. Acquiring early clients, figuring out who to hire, closing deals with banks, raising money - K9C's partners were closely involved and crucially helpful.",
    avatar: "/testimonials4.png",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Hear more from the community.
        </h2>

        <div className="space-y-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6 p-6 bg-white rounded-lg"
            >
              {/* Testimonial image */}
              <div className="w-20 h-20 flex-shrink-0">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="flex-1">
                <blockquote className="text-md mb-2 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div>
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
