import { useState, useEffect } from "react";

export default function UpdatedLoader() {
  // Replace "YourCompany" with your actual company name
  const companyName = "GREEN ARK \n INVESTMENTS";
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [blockCount, setBlockCount] = useState(0);

  // Colors for gradient blocks
  const colors = [
    "bg-pink-500",
    "bg-purple-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-indigo-500",
    "bg-teal-500",
  ];

  // Calculate how many blocks we need based on screen size
  useEffect(() => {
    // Simulate loading process
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(timer);

          // Show "loaded" message for 1 second before redirect would happen
          setTimeout(() => {
            setIsLoaded(true);
          }, 500);

          return 100;
        }
        return newProgress;
      });
    }, 50);

    // Calculate block count based on screen size
    // Using 25 blocks for this demo, but this could be dynamic
    setBlockCount(25);

    return () => clearInterval(timer);
  }, []);

  // Calculate how many blocks to show based on progress
  const blocksToShow = Math.ceil((progress / 100) * blockCount);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Blocks container */}
      <div className="relative h-full w-full">
        {/* Generate gradient blocks */}
        <div className="grid grid-cols-5 gap-2 h-full w-full p-4">
          {Array.from({ length: blockCount }).map((_, index) => {
            const shouldShow = index < blocksToShow;
            const colorIndex = index % colors.length;

            return (
              <div
                key={index}
                className={`${
                  shouldShow ? colors[colorIndex] : "bg-transparent"
                } 
                          rounded-md transform transition-all duration-300 ease-in-out
                          ${
                            shouldShow
                              ? "scale-100 opacity-100"
                              : "scale-0 opacity-0"
                          }`}
              />
            );
          })}
        </div>

        {/* Company Logo and Name Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none z-10">
          <div className="flex flex-col items-center justify-center bg-transparent bg-opacity-40 p-8 rounded-xl shadow-2xl backdrop-blur-md">
            {/* Logo Image */}
            <div className="w-36 h-36 mb-6 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
              <img
                src="/Commercial-Development/greenark-logo1.png"
                alt="Company Logo"
                className="w-28 h-28 object-contain"
              />
            </div>

            {/* Company Name */}
            <h1 className="text-6xl font-extrabold text-white tracking-wider mb-2 drop-shadow-lg">
              {companyName}
            </h1>

            {/* Accent Line */}
            <div className="h-1 w-40 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-md mb-4"></div>

            {/* Subtitle */}
            <p className="text-white text-xl font-light drop-shadow-md tracking-wide">
              Experience the future
            </p>
          </div>
        </div>

        {/* Progress text */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="text-white text-xl font-bold">
            {isLoaded ? "Ready! Redirecting..." : `Loading... ${progress}%`}
          </div>
        </div>
      </div>
    </div>
  );
}
