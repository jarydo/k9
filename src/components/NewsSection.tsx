import Image from "next/image";

const articles = [
  {
    title: "Scoobert: Building k-AI-nine Agents That Can Do Anything",
    date: "2 days ago",
    image: "/news1.png",
  },
  {
    title: "K9C Founders Attend White House Gathering for Tech Leaders",
    date: "3 days ago",
    image: "/news2.png",
  },
  {
    title: "Tiffany: How to Conceal Your ChatGPT Wrapper",
    date: "5 days ago",
    image: "/news3.png",
  },
];

export default function NewsSection() {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        The Latest from K9C
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="space-y-4">
            {/* Article Image with Overlay */}
            <div className="relative aspect-[1.92/1]">
              <Image
                src={article.image}
                alt={article.title}
                width={768}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Title and Date - Below the image */}
            <div>
              <h3 className="font-bold text-md mb-1">{article.title}</h3>
              <p className="text-gray-500 text-sm">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
