import { useState } from 'react';
import { Phone, MapPin, Clock, Mail, X } from 'lucide-react';

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapUrl: string;
}

export default function Contact() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const locations = [
    {
      id: 1,
      name: 'Main Showroom - Nizamabad',
      address: 'Beside Panchavati Super Market, Hyderabad Road, Vinayak Nagar, Nizamabad, Telangana',
      phone: '99669 75550',
      email: 'info@dafurnitureworld.com',
      hours: 'Monday – Sunday: 10:00 AM – 9:00 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.0772779693516!2d78.1163223!3d18.660527899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcdc5e8d50b3d7b%3A0x1cfba9a1d5700fa8!2sD%20A%20Furniture%20World%20Nizamabad!5e0!3m2!1sen!2sin!4v1770398702074!5m2!1sen!2sin',
    },
    {
      id: 2,
      name: 'Branch - Hyderabad',
      address: 'Shopping Mall Complex, Hyderabad, Telangana',
      phone: '95819 47693',
      email: 'hyderabad@dafurnitureworld.com',
      hours: 'Monday – Sunday: 10:00 AM – 9:00 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.456789!2d78.47!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99999999!2zMTfCsDIzJzAzLjAiTiA3OMKwMjgnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
    },
    {
      id: 3,
      name: 'Branch - Karimnagar',
      address: 'City Center, Karimnagar, Telangana',
      phone: '77805 30170',
      email: 'karimnagar@dafurnitureworld.com',
      hours: 'Monday – Sunday: 10:00 AM – 9:00 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.456789!2d78.13!3d18.4386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb88888888!2zMTjCsDI2JzMwLjAiTiA3OMKwMDcnNDguMCJF!5e0!3m2!1sen!2sin!4v9876543210',
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-white via-amber-50 to-white pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="mb-12">
          <span className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold inline-block mb-4">
            Get In Touch
          </span>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-900 via-amber-700 to-amber-900 bg-clip-text text-transparent mb-4">
            Contact & Locations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Visit any of our showrooms across Telangana. Our team is ready to help you find the perfect furniture for your space.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form & Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6">Contact Information</h2>
              
              {/* Phone Numbers */}
              <div className="bg-white rounded-2xl shadow-lg border border-amber-200 p-6 mb-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-3">Phone Numbers</p>
                    <div className="space-y-2">
                      <a href="tel:99669 75550" className="block text-amber-700 hover:text-amber-900 font-semibold">
                        99669 75550 (Nizamabad)
                      </a>
                      <a href="tel:95819 47693" className="block text-amber-700 hover:text-amber-900 font-semibold">
                        95819 47693 (Hyderabad)
                      </a>
                      <a href="tel:77805 30170" className="block text-amber-700 hover:text-amber-900 font-semibold">
                        77805 30170 (Karimnagar)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl shadow-lg border border-amber-200 p-6 mb-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Main Address</p>
                    <p className="text-gray-600">
                      Beside Panchavati Super Market, Hyderabad Road, Vinayak Nagar, Nizamabad, Telangana
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-lg border border-amber-200 p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Business Hours</p>
                    <p className="text-gray-600">Monday – Sunday: 10:00 AM – 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Location Map */}
          <div className="bg-white rounded-2xl shadow-lg border border-amber-200 overflow-hidden">
            <div className="h-96 w-full overflow-hidden">
              <iframe
                title="Main Showroom Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={locations[0].mapUrl}
              ></iframe>
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location) => (
              <div 
                key={location.id} 
                onClick={() => setSelectedLocation(location)}
                className="bg-white rounded-2xl shadow-lg border border-amber-200 overflow-hidden hover:shadow-2xl hover:border-amber-400 transition-all cursor-pointer group"
              >
                {/* Preview */}
                <div className="h-40 w-full overflow-hidden">
                  <iframe
                    title={location.name}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={location.mapUrl}
                    className="pointer-events-none"
                  ></iframe>
                </div>

                {/* Location Info */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">
                    {location.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600 line-clamp-2">{location.address}</p>
                    <a 
                      href={`tel:${location.phone}`} 
                      className="text-amber-700 hover:text-amber-900 font-semibold text-sm block"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {location.phone}
                    </a>
                  </div>

                  <button className="w-full bg-gradient-to-r from-amber-700 to-amber-900 text-white font-semibold py-2 rounded-lg hover:from-amber-800 hover:to-amber-950 transition-all">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-900 to-amber-800 rounded-3xl px-6 sm:px-12 py-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Visit Our Showroom
          </h2>
          <p className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed mb-6">
            Come experience our furniture collection in person. Our friendly team is waiting to help you find the perfect pieces for your home.
          </p>
          <button className="inline-block bg-white text-amber-900 font-semibold px-8 py-3 rounded-lg hover:bg-amber-50 transition-all">
            Schedule a Visit
          </button>
        </div>
      </div>

      {/* Location Modal */}
      {selectedLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <div className="sticky top-0 flex justify-end p-4 bg-gradient-to-br from-white via-amber-50 to-white border-b border-amber-200 z-10">
              <button
                onClick={() => setSelectedLocation(null)}
                className="p-2 hover:bg-amber-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-stone-900" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Map */}
              <div className="h-80 w-full rounded-2xl overflow-hidden mb-8 border border-amber-200">
                <iframe
                  title={selectedLocation.name}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={selectedLocation.mapUrl}
                ></iframe>
              </div>

              {/* Location Title */}
              <h2 className="text-4xl font-bold text-stone-900 mb-6">
                {selectedLocation.name}
              </h2>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Address</p>
                    <p className="text-gray-600 leading-relaxed">{selectedLocation.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Phone</p>
                    <a 
                      href={`tel:${selectedLocation.phone}`} 
                      className="text-amber-700 hover:text-amber-900 font-semibold text-lg"
                    >
                      {selectedLocation.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Email</p>
                    <a 
                      href={`mailto:${selectedLocation.email}`} 
                      className="text-amber-700 hover:text-amber-900 text-sm"
                    >
                      {selectedLocation.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Business Hours</p>
                    <p className="text-gray-600">{selectedLocation.hours}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a 
                  href={`tel:${selectedLocation.phone}`}
                  className="flex-1 bg-gradient-to-r from-amber-700 to-amber-900 text-white font-semibold py-3 rounded-lg hover:from-amber-800 hover:to-amber-950 transition-all text-center"
                >
                  Call Now
                </a>
                <button 
                  onClick={() => setSelectedLocation(null)}
                  className="flex-1 border-2 border-amber-700 text-amber-900 font-semibold py-3 rounded-lg hover:bg-amber-50 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
