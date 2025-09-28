import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 my-6">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-[#F26522] mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Looks like this page (or company) went to the dog house.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-[#F26522] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#e55a1a] transition-colors"
          >
            Back to Home
          </Link>
          <div className="text-sm text-gray-500">
            Or check out our{" "}
            <Link href="/companies" className="text-[#F26522] hover:underline">
              successful portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
