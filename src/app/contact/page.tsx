import React from "react";
import NavigationBar from "../components/NavigationBar";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { Email, GitHub, Name } from "../data/contacts/socials";
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className="mx-auto max-w-6xl py-16 px-4 bg-white min-h-screen flex flex-col justify-center items-center">
      <NavigationBar />
      <div className="border border-gray-300 p-16 rounded-lg shadow-lg max-w-xl text-center space-y-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{Name}</h1>
        <p className="text-lg text-gray-700 mb-6">
          I&apos;m a student studying math and computer science with a minor in economics. I enjoy reading about companies and learning new technologies. Feel free to reach out to me through email or follow me on GitHub.
        </p>
        <div className="text-gray-700 text-lg flex flex-col items-center space-y-4">
          <div className="flex items-center">
            <FaEnvelope className="h-6 w-6 mr-2 text-gray-500" />
            <a href={Email} className="text-blue-500 hover:underline">
              {Email.replace("mailto:", "")}
            </a>
          </div>
          <div className="flex items-center">
            <FaGithub className="h-6 w-6 mr-2 text-gray-500" />
            <Link href={GitHub}>
              <div className="text-blue-500 cursor-pointer hover:underline">
                GitHub Profile
              </div>
            </Link>
          </div>
        </div>
        <div className="p-4 rounded-lg text-center bg-gray-100">
          <p className="text-gray-700 text-center italic font-medium text-lg">I&apos;m looking forward to connecting with you!</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
