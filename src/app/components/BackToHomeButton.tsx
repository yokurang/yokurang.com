import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";

const BackToHomeButton = () => {
  return (
    <Link
      className="flex text-sm items-center space-x-2 mb-6 hover:underline"
      href="/"
    >
      <HomeIcon className="w-8 h-8 text-blue-600" />
      <p className="text-blue-600">Back to Home</p>
    </Link>
  );
};

export default BackToHomeButton;
