import { Check } from 'lucide-react';

export default function About() {
  const highlights = [
    'Wooden & Imported Furniture',
    'Custom Furniture Solutions',
    'Home & Office Furniture',
    'Reliable Service & Support',
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-white via-amber-50 to-white pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div>
              <span className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold inline-block mb-4">
                Our Story
              </span>

              <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-900 via-amber-700 to-amber-900 bg-clip-text text-transparent mb-6">
                About DA Furniture World
              </h1>
            </div>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                DA Furniture World is a trusted furniture showroom offering quality furniture
                and home needs for modern homes and offices. We provide a wide range of
                wooden, imported, and customized furniture designed to suit every space
                and lifestyle.
              </p>

              <p>
                We focus on strong build quality, elegant designs, and affordable pricing.
                Whether you are looking for ready-made furniture or custom-designed pieces,
                we ensure the best value and long-lasting comfort.
              </p>
            </div>

            <div className="inline-block text-2xl font-bold bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent">
              Best Quality… Best Price…
            </div>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-amber-700 to-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-5 w-5 text-white" />
                  </div>

                  <span className="text-gray-800 font-semibold group-hover:text-amber-800 transition-colors duration-300">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-amber-100/20 rounded-3xl transform rotate-6"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-200">
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweo0wFi0lsCyoODYhTvaR3-_pRCnpZ7y5YRCRIDmy0hMK4KrNZ-pc_vyz0RmoF209GTLAghM8XydoGcS26b-IQ6HYVann2F52nLjL_tjt-yBO3D-JVwGwOeCuOv3SEd_m8kJTShuv8T1FHN1=s1360-w1360-h1020-rw"
                alt="DA Furniture World Showroom"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
