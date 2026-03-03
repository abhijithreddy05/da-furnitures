import { useState, useEffect } from 'react';
import { locationsAPI } from '../services/api';
import { Location } from '../types';
import { AlertCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Locations() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadLocations();
  }, []);

  const loadLocations = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await locationsAPI.getAll();
      setLocations(data || []);
    } catch (err: any) {
      setError('Failed to load locations');
      console.error('Error loading locations:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-white via-amber-50 to-white pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-stone-900 mb-2">Our Locations</h1>
          <p className="text-lg text-gray-600">
            Visit us at any of our branches for a complete furniture shopping experience
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Locations Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading locations...</p>
          </div>
        ) : locations.length === 0 ? (
          <div className="text-center py-16">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No locations available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location) => (
              <div
                key={location.id}
                className="bg-white rounded-lg shadow-lg border border-amber-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Map Container */}
                <div className="relative h-72 bg-gradient-to-br from-gray-200 to-gray-100">
                  <iframe
                    title={location.branch_name}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${
                      import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyA0pR0M5ZJSw'
                    }&q=${encodeURIComponent(
                      location.address
                    )}&zoom=15&maptype=roadmap`}
                  ></iframe>
                </div>

                {/* Location Details */}
                <div className="p-6">
                  {/* Branch Name */}
                  <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <span className="text-amber-700">📍</span>
                    {location.branch_name}
                  </h2>

                  {/* Address */}
                  <div className="mb-4 flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="mb-4 flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <a
                        href={`tel:${location.phone}`}
                        className="text-amber-700 hover:text-amber-900 transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-4 flex items-start gap-3">
                    <Mail className="w-5 h-5 text-amber-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <a
                        href={`mailto:${location.email}`}
                        className="text-amber-700 hover:text-amber-900 transition-colors"
                      >
                        {location.email}
                      </a>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div className="mb-6 flex items-start gap-3 pb-6 border-b border-amber-200">
                    <Clock className="w-5 h-5 text-amber-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Opening Hours</p>
                      <p className="text-gray-600 whitespace-pre-line">{location.opening_hours}</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-amber-700 to-amber-900 text-white font-semibold py-2.5 rounded-lg hover:from-amber-800 hover:to-amber-950 transition-all">
                    Get Directions →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info Section */}
        {!loading && locations.length > 0 && (
          <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg shadow-lg border border-amber-200 p-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">📞 Need Help?</h2>
            <p className="text-gray-700 mb-6">
              Visit any of our {locations.length} branches to explore our complete furniture collection. Our friendly staff
              is ready to help you find the perfect furniture for your home.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <p className="font-semibold text-gray-800 mb-2">🏪 In-Store</p>
                <p className="text-sm text-gray-600">Visit our showroom to see products in person</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <p className="font-semibold text-gray-800 mb-2">📞 Call Us</p>
                <p className="text-sm text-gray-600">Contact your nearest branch for inquiries</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <p className="font-semibold text-gray-800 mb-2">📧 Email</p>
                <p className="text-sm text-gray-600">Send us your queries anytime</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
