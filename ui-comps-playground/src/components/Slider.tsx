import { useEffect, useState } from "react";

const images = [
  "src/assets/image_1.png",
  "src/assets/image_2.png",
  "src/assets/image_3.png",
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      3000
    );

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-80 h-60">
      <img
        className="w-full h-full object-cover rounded"
        src={images[index]}
        alt="slide"
      />

      <button
        onClick={() => setIndex((index - 1 + images.length) % images.length)}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/60 hover:bg-white text-black px-2 py-1 rounded-full shadow"
      >
        ←
      </button>

      <button
        onClick={() => setIndex((index + 1) % images.length)}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/60 hover:bg-white text-black px-2 py-1 rounded-full shadow"
      >
        →
      </button>
    </div>
  );
};

export default Slider;
