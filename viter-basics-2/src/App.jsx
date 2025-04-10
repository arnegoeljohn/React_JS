import React from "react";
import HomeButton from "./component/partials/button/HomeButton";
import profilePic from "./assets/picture.png"; // adjust path as needed

function App() {
  const [count, setCount] = React.useState(0);
  const [color, setColor] = React.useState("#ffffff");
  const colorRef = React.useRef();

  const incrementButton = () => {
    setCount(count + 1);
    console.log("Incremented");
  };

  const decrementButton = () => {
    if (count === 0) {
      alert("Counter can't be negative.");
      return;
    }
    setCount(count - 1);
    console.log("Decremented");
  };

  const handleSubmitChangeBackgroundColor = (e) => {
    e.preventDefault();
    setColor(colorRef.current.value);
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const user = {
    name: "Hedy Lamarr",
    imageUrl: profilePic,
    imageSize: 90,
    bio: "Inventor, actress, and tech pioneer.",
  };

  return (
    <div style={{ backgroundColor: color }} className="h-[100dvh]">
      <div className="flex items-center justify-center flex-col h-full">
        <p className="text-xl">Counter: {count}</p>
        <h1 className="text-3xl text-red-700 font-bold underline">
          Welcome to React!!!!
        </h1>

        <div className="flex gap-4 mt-4">
          <HomeButton
            buttonFunction={incrementButton}
            buttonText={"Incremented"}
          />
          <HomeButton
            buttonFunction={decrementButton}
            buttonText={"Decremented"}
          />
        </div>

        <hr className="border border-black w-[90%] mt-5" />

        <p className="text-xl mt-4">
          Choose a color to change background color
        </p>
        <form
          onSubmit={handleSubmitChangeBackgroundColor}
          className="flex gap-4 mt-2"
        >
          <input
            ref={colorRef}
            type="color"
            className="px-4 h-[43.2px] w-[82.25px] py-2 border-2 border-gray-200 rounded-md cursor-pointer"
          />
          <button className="border-2 py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-all ease-in-out">
            Submit
          </button>
        </form>

        <hr className="border border-black w-[90%] mt-5" />

        <ul className="mt-4">
          {numbers.map((item, key) => (
            <li key={key}>Number: {item}</li>
          ))}
        </ul>

        <hr className="border border-black w-[90%] mt-5" />

        {/* Profile Card */}
        <div className="flex justify-center mt-4">
          <div className="w-[300px] rounded-xl shadow-md overflow-hidden text-center bg-white font-sans">
            {/* Gradient Header */}
            <div className="h-[100px] bg-gradient-to-r from-[#5B86E5] to-[#9F6FEF]"></div>

            {/* Profile Image */}
            <div className="mt-[-45px] flex justify-center">
              <img
                src={user.imageUrl}
                alt={"Photo of " + user.name}
                className="w-[90px] h-[90px] rounded-full border-[4px] border-white object-cover"
              />
            </div>

            {/* Name and Bio */}
            <div className="px-4 pb-4 mt-[-8px]">
              <h2 className="text-lg font-semibold mt-2">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
