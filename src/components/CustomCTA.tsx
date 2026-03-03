import { Sparkles, Phone, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CustomCTA() {
  const navigate = useNavigate();

  const handleCall = () => {
    navigate('/contact');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-200 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4 border border-amber-200">
            <Sparkles className="h-4 w-4 text-amber-700 animate-pulse" />
            <span className="text-amber-900 font-semibold text-sm">
              Custom Solutions
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 leading-tight">
            Looking for furniture made specially for your space?
          </h2>

          {/* Description */}
          <p className="text-base text-stone-600 mb-6 leading-relaxed max-w-2xl mx-auto">
            DA Furniture World designs custom furniture tailored to your space,
            style, and budget — crafted with precision and care.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleCall}
            className="group bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white px-8 py-4 rounded-full font-bold text-base inline-flex items-center gap-3 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            Call Us for Custom Orders
            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
