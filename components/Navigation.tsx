import Image from "next/image";
import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center items-stretch justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Image src="/coinbase.svg" className="mr-2" alt="Coinbase" width={90} height={24} />
              <h2 className="text-white font-bold mt-1">AI Feedback Tool</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
