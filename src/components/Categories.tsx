import { ArrowRight, Sofa, Bed, Lamp, Armchair } from 'lucide-react';

const categories = [
  {
    name: 'Living Room',
    icon: Sofa,
    description: 'Elegant sofas, coffee tables, and entertainment units',
    image: 'https://images.jdmagicbox.com/quickquotes/images_main/living-room-furniture-2216924851-4rjfcfdw.jpg',
  },
  {
    name: 'Bedroom',
    icon: Bed,
    description: 'Comfortable beds, wardrobes, and nightstands',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/11/WA/FH/PM/4512991/bedroom-interior-furniture.jpg',
  },
  {
    name: 'Office',
    icon: Armchair,
    description: 'Ergonomic desks, chairs, and storage solutions',
    image: 'https://media.architecturaldigest.com/photos/56b524de4ac3d842677b9ac0/master/w_1024%2Cc_limit/home-office-01.jpg',
  },
  {
    name: 'Decor',
    icon: Lamp,
    description: 'Beautiful lighting, mirrors, and accessories',
    image: 'https://images-cdn.ubuy.co.in/6511f03c6c444c6bf377acfa-ada-home-decor-furniture-59-3-tier-white.jpg',
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-gradient-to-b from-white via-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold inline-block mb-4">
            Explore Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Find the perfect furniture for every room in your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  <div className="absolute top-4 right-4 bg-amber-700 text-white p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-stone-900 mb-2 group-hover:text-amber-800 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-stone-600 mb-4">
                    {category.description}
                  </p>

                  <button className="flex items-center gap-2 text-amber-700 font-semibold group-hover:text-amber-900 transition-colors duration-300">
                    Explore
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-300 rounded-2xl transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
