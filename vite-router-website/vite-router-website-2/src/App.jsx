import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Card from "./components/Card";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Button2 from "./components/Button2";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <Header />

      <main className="flex-grow">
        <section className="bg-blue-50 text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Welcome to MySite</h1>
          <p className="mb-6 text-gray-600">
            A simple one-page website built with React, React Icons, and smooth
            scrolling navigation.
          </p>
          <Button>Get in Touch</Button>
        </section>

        <section className="py-20 px-4">
          <h2 className="text-2xl font-bold text-center mb-8">About Us</h2>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8 text-sm text-gray-700">
            <div>
              <h3 className="font-bold mb-2">Our Story</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehicula.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Our Mission</h3>
              <p>
                Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                Ut in nulla enim. Phasellus molestie magna non est bibendum non
                venenatis nisl tempor.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <Card
              icon={<FaGithub className="text-blue-600" />}
              title="Web Development"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris."
            />
            <Card
              icon={<FaTwitter className="text-blue-600" />}
              title="UI/UX Design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris."
            />
            <Card
              icon={<FaLinkedin className="text-blue-600" />}
              title="Digital Marketing"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris."
            />
          </div>
        </section>

        <section className="py-20 px-4 bg-blue-600 text-white">
          <h2 className="text-2xl font-bold text-center mb-8">Contact Us</h2>
          <form className="bg-white text-black p-6 rounded shadow max-w-md mx-auto">
            <input
              type="text"
              placeholder="Name"
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-2 border rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full mb-4 p-2 border rounded h-24"
            ></textarea>
            <Button2>Send Message</Button2>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
