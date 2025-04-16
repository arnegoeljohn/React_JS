import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <div className="flex justify-center gap-6 text-xl mb-2">
        <a href="#" className=" hover:text-blue-600">
          <FaGithub />
        </a>
        <a href="#" className=" hover:text-blue-600">
          <FaTwitter />
        </a>
        <a href="#" className=" hover:text-blue-600">
          <FaLinkedin />
        </a>
      </div>
      <p className="text-sm">© 2025 MySite. All rights reserved.</p>
    </footer>
  );
}
