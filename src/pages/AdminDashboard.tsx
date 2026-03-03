import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { productsAPI } from '../services/api';
import { Product } from '../types';
import { Plus, Trash2, LogOut, GripVertical, Save, AlertCircle, X } from 'lucide-react';

export default function AdminDashboard() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const [categories, setCategories] = useState<string[]>(['Living Room', 'Bedroom', 'Dining', 'Office', 'Storage']);
  const [models, setModels] = useState<string[]>(['Sofa', 'Chair', 'Table', 'Bed', 'Cabinet', 'Desk', 'Shelf', 'Stool']);
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [showNewModel, setShowNewModel] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [newModel, setNewModel] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    model: '',
    category: '',
    price: 0,
    customization_price: 0,
    description: '',
    image_url: '',
  });

  // Check authentication and redirect if needed
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
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

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
      setShowNewCategory(false);
    }
  };

  const handleAddModel = () => {
    if (newModel.trim() && !models.includes(newModel)) {
      setModels([...models, newModel]);
      setNewModel('');
      setShowNewModel(false);
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.model || !formData.category) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      setError('');
      const newProduct = await productsAPI.create({
        ...formData,
        order_index: products.length,
      } as any);
      setProducts([...products, newProduct]);
      setFormData({
        name: '',
        model: '',
        category: '',
        price: 0,
        customization_price: 0,
        description: '',
        image_url: '',
      });
      setShowAddForm(false);
    } catch (err: any) {
      setError('Failed to add product');
      console.error('Error adding product:', err);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      setError('');
      await productsAPI.delete(id);
      setProducts(products.filter((p) => p.id !== id));
    } catch (err: any) {
      setError('Failed to delete product');
      console.error('Error deleting product:', err);
    }
  };

  const handleDragStart = (id: string) => {
    setDraggedItem(id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (targetId: string) => {
    if (!draggedItem || draggedItem === targetId) return;

    const draggedIndex = products.findIndex((p) => p.id === draggedItem);
    const targetIndex = products.findIndex((p) => p.id === targetId);

    const newProducts = [...products];
    [newProducts[draggedIndex], newProducts[targetIndex]] = [
      newProducts[targetIndex],
      newProducts[draggedIndex],
    ];

    const updatedProducts = newProducts.map((p, idx) => ({
      ...p,
      order_index: idx,
    }));

    setProducts(updatedProducts);
    setDraggedItem(null);

    saveOrder(updatedProducts);
  };

  const saveOrder = async (updatedProducts: Product[]) => {
    try {
      await productsAPI.reorder(
        updatedProducts.map((p) => ({
          id: p.id,
          order_index: p.order_index,
        }))
      );
    } catch (err: any) {
      setError('Failed to save order');
      console.error('Error saving order:', err);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-white via-amber-50 to-white pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-900 to-amber-700 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-2">👤 {user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <div className="mb-8">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 bg-gradient-to-r from-amber-700 to-amber-900 text-white px-6 py-3 rounded-lg hover:from-amber-800 hover:to-amber-950 transition-all shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Add New Product
          </button>
        </div>

        {showAddForm && (
          <div className="bg-white rounded-lg shadow-lg border border-amber-200 p-6 mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Add New Product</h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Modern Sofa"
                    className="w-full px-4 py-2.5 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => {
                      if (e.target.value === '__new__') setShowNewCategory(true);
                      else setFormData({ ...formData, category: e.target.value });
                    }}
                    className="w-full px-4 py-2.5 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                    <option value="__new__">+ Add New Category</option>
                  </select>
                  {showNewCategory && (
                    <div className="flex gap-2 mt-2">
                      <input
                        type="text"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="New category"
                        className="flex-1 px-4 py-2 border border-amber-200 rounded-lg"
                      />
                      <button type="button" onClick={handleAddCategory} className="px-4 py-2 bg-amber-700 text-white rounded-lg">Add</button>
                      <button type="button" onClick={() => { setShowNewCategory(false); setNewCategory(''); }} className="px-4 py-2 border border-gray-300 rounded-lg"><X className="w-4 h-4" /></button>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Model *</label>
                  <select
                    value={formData.model}
                    onChange={(e) => {
                      if (e.target.value === '__new__') setShowNewModel(true);
                      else setFormData({ ...formData, model: e.target.value });
                    }}
                    className="w-full px-4 py-2.5 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50"
                    required
                  >
                    <option value="">Select Model</option>
                    {models.map((mod) => (
                      <option key={mod} value={mod}>{mod}</option>
                    ))}
                    <option value="__new__">+ Add New Model</option>
                  </select>
                  {showNewModel && (
                    <div className="flex gap-2 mt-2">
                      <input
                        type="text"
                        value={newModel}
                        onChange={(e) => setNewModel(e.target.value)}
                        placeholder="New model"
                        className="flex-1 px-4 py-2 border border-amber-200 rounded-lg"
                      />
                      <button type="button" onClick={handleAddModel} className="px-4 py-2 bg-amber-700 text-white rounded-lg">Add</button>
                      <button type="button" onClick={() => { setShowNewModel(false); setNewModel(''); }} className="px-4 py-2 border border-gray-300 rounded-lg"><X className="w-4 h-4" /></button>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Base Price (₹)</label>
                  <input type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })} placeholder="0.00" className="w-full px-4 py-2.5 border border-amber-200 rounded-lg bg-amber-50" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Customization Price (₹)</label>
                  <input type="number" value={formData.customization_price} onChange={(e) => setFormData({ ...formData, customization_price: parseFloat(e.target.value) || 0 })} placeholder="0.00" className="w-full px-4 py-2.5 border border-amber-200 rounded-lg bg-amber-50" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Image URL</label>
                  <input type="url" value={formData.image_url} onChange={(e) => setFormData({ ...formData, image_url: e.target.value })} placeholder="https://example.com/image.jpg" className="w-full px-4 py-2.5 border border-amber-200 rounded-lg bg-amber-50" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Product description..." rows={4} className="w-full px-4 py-2.5 border border-amber-200 rounded-lg bg-amber-50" />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button type="submit" className="flex items-center gap-2 bg-gradient-to-r from-amber-700 to-amber-900 text-white px-6 py-2.5 rounded-lg">
                  <Save className="w-5 h-5" />
                  Add Product
                </button>
                <button type="button" onClick={() => setShowAddForm(false)} className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg border border-amber-200 p-6">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Products ({products.length})</h2>

          {loading ? (
            <div className="text-center py-12"><p className="text-gray-600">Loading products...</p></div>
          ) : products.length === 0 ? (
            <div className="text-center py-12"><p className="text-gray-600">No products yet. Click "Add New Product" to get started.</p></div>
          ) : (
            <div className="space-y-3">
              {products.map((product) => (
                <div key={product.id} draggable onDragStart={() => handleDragStart(product.id)} onDragOver={handleDragOver} onDrop={() => handleDrop(product.id)} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-amber-50 cursor-move group">
                  <GripVertical className="w-5 h-5 text-gray-400 group-hover:text-amber-700 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-gray-900">{product.name}</h3>
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">{product.model}</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">{product.category}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                    <div className="mt-2 flex gap-4 flex-wrap">
                      {product.price > 0 && <p className="text-sm text-amber-700 font-semibold">Base: ₹{product.price.toFixed(2)}</p>}
                      {product.customization_price && product.customization_price > 0 && <p className="text-sm text-green-700 font-semibold">Custom: ₹{product.customization_price.toFixed(2)}</p>}
                    </div>
                  </div>
                  <button onClick={() => handleDeleteProduct(product.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg flex-shrink-0">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
