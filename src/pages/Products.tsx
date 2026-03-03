import { useState, useEffect } from 'react';
import { productsAPI } from '../services/api';
import { Product } from '../types';
import { AlertCircle, ShoppingCart, ZoomIn, ZoomOut } from 'lucide-react';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedModel, setSelectedModel] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [zoom, setZoom] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [lastTouchDistance, setLastTouchDistance] = useState(0);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(false);
      setError('');
      const data = await productsAPI.getAll();
      setProducts(data || []);
    } catch (err: any) {
      setError('Failed to load products');
      console.error('Error loading products:', err);
    } finally {
      setLoading(false);
    }
  };

  // Get unique models and categories
  const models = ['All', ...new Set(products.map((p) => p.model))];
  const categories = ['All', ...new Set(products.map((p) => p.category))];

  // Filter products
  const filteredProducts = products.filter((p) => {
    const modelMatch = selectedModel === 'All' || p.model === selectedModel;
    const categoryMatch = selectedCategory === 'All' || p.category === selectedCategory;
    return modelMatch && categoryMatch;
  });

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 1));

  // Touch zoom handler (pinch to zoom)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(
        touch1.clientX - touch2.clientX,
        touch1.clientY - touch2.clientY
      );
      setLastTouchDistance(distance);
    } else if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(
        touch1.clientX - touch2.clientX,
        touch1.clientY - touch2.clientY
      );

      if (lastTouchDistance > 0) {
        const scale = distance / lastTouchDistance;
        setZoom((prev) => Math.max(1, Math.min(prev * scale, 3)));
      }
      setLastTouchDistance(distance);
    } else if (e.touches.length === 1 && isDragging && zoom > 1) {
      const deltaX = e.touches[0].clientX - dragStart.x;
      const deltaY = e.touches[0].clientY - dragStart.y;
      setPanX(deltaX);
      setPanY(deltaY);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setLastTouchDistance(0);
  };

  // Mouse zoom with wheel
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      setPanX(deltaX);
      setPanY(deltaY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetZoomAndPan = () => {
    setZoom(1);
    setPanX(0);
    setPanY(0);
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-white via-amber-50 to-white pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-stone-900 mb-2">Our Products</h1>
          <p className="text-lg text-gray-600">
            Discover our premium furniture collection crafted with care
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg border border-amber-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Model Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Filter by Model
              </label>
              <div className="flex flex-wrap gap-2">
                {models.map((model) => (
                  <button
                    key={model}
                    onClick={() => setSelectedModel(model)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedModel === model
                        ? 'bg-gradient-to-r from-amber-700 to-amber-900 text-white shadow-lg'
                        : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                    }`}
                  >
                    {model}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Filter by Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg'
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">
              No products found matching your filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-lg shadow-lg border border-amber-200 hover:shadow-2xl hover:border-amber-300 transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div 
                  className="relative h-48 bg-gradient-to-br from-amber-100 to-amber-50 overflow-hidden cursor-pointer"
                  onClick={() => {
                    setSelectedProduct(product);
                    setZoom(1);
                    setPanX(0);
                    setPanY(0);
                  }}
                >
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-amber-300">
                      <ShoppingCart className="w-16 h-16" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-stone-900 flex-1">{product.name}</h3>
                    <span className="text-2xl">🛋️</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                      {product.model}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {product.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description || 'Premium furniture piece for your home'}
                  </p>

                  {/* Price Section */}
                  <div className="mt-4 space-y-3 border-t border-amber-200 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Base Price</p>
                        {product.price > 0 && (
                          <p className="text-2xl font-bold text-amber-700">₹{product.price.toLocaleString()}</p>
                        )}
                      </div>
                      {product.customization_price && product.customization_price > 0 && (
                        <div className="text-right">
                          <p className="text-xs text-gray-500 mb-1">Custom Price</p>
                          <p className="text-2xl font-bold text-blue-700">₹{product.customization_price.toLocaleString()}</p>
                          <p className="text-xs text-gray-400 mt-1">additional</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results Count */}
        {!loading && filteredProducts.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>
        )}
      </div>

      {/* Image Zoom Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-screen overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 z-10 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row h-full max-h-screen">
              {/* Image Section */}
              <div 
                className="flex-1 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center overflow-hidden relative p-4"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onWheel={handleWheel}
              >
                <div className="overflow-auto w-full h-full flex items-center justify-center select-none">
                  {selectedProduct.image_url ? (
                    <img
                      src={selectedProduct.image_url}
                      alt={selectedProduct.name}
                      style={{
                        transform: `scale(${zoom}) translate(${panX}px, ${panY}px)`,
                        transition: isDragging ? 'none' : 'transform 0.2s ease-in-out',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        cursor: zoom > 1 ? 'grab' : 'zoom-in',
                      }}
                      className="pointer-events-none"
                      draggable={false}
                    />
                  ) : (
                    <ShoppingCart className="w-32 h-32 text-amber-300" />
                  )}
                </div>

                {/* Zoom Controls */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoom <= 1}
                    className="bg-amber-700 hover:bg-amber-800 disabled:bg-gray-400 text-white rounded-lg p-2 transition-colors"
                  >
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <div className="bg-white px-3 py-2 rounded-lg text-amber-700 font-semibold min-w-16 text-center">
                    {Math.round(zoom * 100)}%
                  </div>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoom >= 3}
                    className="bg-amber-700 hover:bg-amber-800 disabled:bg-gray-400 text-white rounded-lg p-2 transition-colors"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>

                {/* Reset Button */}
                {(zoom > 1 || panX !== 0 || panY !== 0) && (
                  <button
                    onClick={resetZoomAndPan}
                    className="absolute top-4 left-4 bg-amber-700 hover:bg-amber-800 text-white rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Reset
                  </button>
                )}

                {/* Mobile Help Text */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-xs px-3 py-1 rounded-full">
                  Pinch to zoom • Drag to pan
                </div>
              </div>

              {/* Details Section */}
              <div className="md:w-80 bg-white p-6 overflow-y-auto flex flex-col">
                <h2 className="text-3xl font-bold text-stone-900 mb-2">{selectedProduct.name}</h2>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                    {selectedProduct.model}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {selectedProduct.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-1">
                  {selectedProduct.description || 'Premium furniture piece for your home'}
                </p>

                {/* Pricing */}
                <div className="space-y-3 border-t border-amber-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Base Price:</span>
                    <span className="text-xl font-bold text-amber-700">₹{selectedProduct.price.toLocaleString()}</span>
                  </div>
                  {selectedProduct.customization_price && selectedProduct.customization_price > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Custom Price:</span>
                      <div className="text-right">
                        <span className="text-xl font-bold text-blue-700">₹{selectedProduct.customization_price.toLocaleString()}</span>
                        <p className="text-xs text-gray-400">additional</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Close Button Mobile */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-colors md:hidden"
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
