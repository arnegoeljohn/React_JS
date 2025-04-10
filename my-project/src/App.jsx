import { useState } from "react";

import HomeButton from "./component/partials/button/HomeButton";

function App() {
  const [count, setCount] = useState(0);

  const incrementButton = () => {
    if (count === 43) {
      alert("Counter can't be over 43.");
      return;
    }
    setCount(count + 1);
    console.log("Incremented");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 text-xl font-sans font-bold">
        My Simple Website
      </header>

      <main className="flex-grow">
        <div className="h-[50dvh] m-4">
          <div className="p-2">
            <h1 className="font-bold text-2xl">Welcome to my Site</h1>
            <h4>
              This is a simple one page website built with React and Tailwind
              CSS
            </h4>
          </div>

          <div className="bg-gray-100 p-4">
            <h3 className="font-bold">Interactive Button</h3>
            <p>You've clicked this button {count} times</p>
            <HomeButton
              buttonFunction={incrementButton}
              buttonText={"Click Me!"}
            />
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
            <div className="bg-white p-4 rounded border">
              <h3 className="font-semibold mb-1">Feature One</h3>
              <p>This is a description of the first feature of this website.</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <h3 className="font-semibold mb-1">Feature Two</h3>
              <p>
                This is a description of the second feature of this website.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-blue-800 text-white text-center pt-10 py-4 text-sm h-[10dvh]">
        © 2025 My Simple Website. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
