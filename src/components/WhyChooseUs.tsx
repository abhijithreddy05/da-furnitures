import { ArrowRight } from 'lucide-react';

const features = [
  {
    image: 'https://d6y5eqdcxq8w3.cloudfront.net/assets/blog/blog_furniture/Q2_2024/Furn_Importance-of-Quality-Fabrics_1.jpg',
    title: 'Premium Quality Materials',
    description: 'We use high-quality wood and materials to ensure strength, durability, and long-lasting furniture you can rely on every day.',
  },
  {
    image: 'https://images.woodenstreet.de/wsnew2024/static-webmedia/images/custome-furniture/custome-product-img2.png',
    title: 'Custom Furniture as per Your Requirement',
    description: 'From size to design, we create furniture that fits your space, style, and budget perfectly.',
  },
  {
    image: 'https://www.lookinggoodfurniture.com/_next/image?url=https%3A%2F%2Flookinggoodfurnituremedia.s3.ap-south-1.amazonaws.com%2Fwp-content%2Fuploads%2F2025%2F01%2FExchange-bnznew.jpg&w=1920&q=75',
    title: 'Honest & Affordable Pricing',
    description: 'We believe in fair pricing with no hidden costs, offering the best value for quality furniture.',
  },
  {
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/2/490801979/BE/ZQ/LB/234868765/furniture-shifting-service-500x500.jpg',
    title: 'Reliable Delivery & Support',
    description: 'We ensure safe delivery and dependable support to make your furniture buying experience smooth and worry-free.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-stone-100 via-amber-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold inline-block mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Experience the DA Furniture Difference
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional furniture and outstanding service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-amber-100 hover:border-amber-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 bg-amber-200 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-amber-400 group-hover:border-amber-600 transition-colors duration-300">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-amber-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  <div className="flex items-center gap-2 text-amber-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
