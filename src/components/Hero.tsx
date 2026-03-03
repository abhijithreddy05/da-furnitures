import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  /* ---------------- Image Slider ---------------- */
  const images = [
    'https://gharko.in/cdn/shop/articles/interior_design_25915c03-bd9a-4e10-bf99-8fe0dfd102af.webp?v=1763820049',
    'https://bedthreads.com/cdn/shop/articles/079a72c72055f50897137e3ae36e87c7934ae857-2000x2800_a91f1530-2df0-41ca-8f2e-ed022adaa4d2.jpg?v=1657004118',
    'https://i0.wp.com/harmonikreasi.com/wp-content/uploads/2023/02/Various-recommendations-for-aesthetic-home-furnishings.jpg?resize=750%2C450&ssl=1'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* ---------------- Typewriter Animation ---------------- */
  const typewriterTexts = [
    "Crafted with precision & care.",
    "Designed to elevate every space.",
    "Built for comfort that lasts."
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = typewriterTexts[textIndex];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 70);

      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
      }, 1500);

      return () => clearTimeout(pause);
    }
  }, [charIndex, textIndex]);

  /* ---------------- Navigation ---------------- */
  const scrollToProducts = () => {
    navigate('/products');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-white to-stone-100">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/073/684/225/small/warm-and-inviting-living-room-scene-with-a-cozy-fireplace-and-comfortable-sofa-creating-a-perfect-atmosphere-for-relaxation-and-gatherings-free-photo.JPG"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative h-full flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeIn">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-900 rounded-full text-sm font-semibold border border-amber-200">
                  Premium Furniture Collection
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-amber-900 via-amber-700 to-amber-900 bg-clip-text text-transparent">
                  Quality Furniture
                </span>
                <br />
                <span className="text-stone-800">for Every Home</span>
              </h1>

              <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-xl">
                DA Furniture World provides durable, stylish, and affordable furniture for homes, offices, and custom spaces.
                We focus on quality craftsmanship and customer satisfaction.
              </p>

              {/* Typewriter Text */}
              <p className="text-amber-800 font-semibold text-lg h-6 tracking-wide">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>

              <button
                onClick={scrollToProducts}
                className="group bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white px-10 py-5 rounded-full font-semibold flex items-center gap-3 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Look at our Products
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>

            {/* Right Image Slider */}
            <div className="relative h-[480px] lg:h-[550px] flex items-center justify-center ml-6 lg:ml-12">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-amber-100/20 rounded-3xl transform rotate-6" />

              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Furniture ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'w-8 bg-amber-700'
                        : 'w-2 bg-amber-300 hover:bg-amber-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
