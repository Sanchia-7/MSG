// src/components/Loader.js
import Image from "next/image"; // Import next/image for optimized image loading

const MSGLoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-black text-white">
      {/* Top text */}
      <h1 className="text-4xl font-bold mb-4 animate-fadeInDown">Welcome</h1>

      {/* Logo container */}
      <div className="relative w-48 h-48">
        {/* Grayscale underlay */}
        <Image
          src="/logo4.png" // Image in the public folder
          alt="Logo (grayscale)"
          layout="fill"
          objectFit="contain"
          className="absolute top-0 left-0 filter grayscale"
        />

        {/* Color overlay with bottom-up fill animation */}
        <Image
          src="/logo4.png"
          alt="Logo (color)"
          layout="fill"
          objectFit="contain"
          className="absolute top-0 left-0 animate-fillFromBottom"
        />
      </div>

      {/* Bottom text */}
      <p className="mt-4 text-2xl font-semibold animate-fadeInUp">
        Sourcing- Reliable & Systematic      
        </p>
    </div>
  );
};

export default MSGLoadingPage;
