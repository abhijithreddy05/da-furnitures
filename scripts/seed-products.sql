-- Insert dummy products into the furniture database
-- Run this in Supabase SQL Editor

INSERT INTO products (name, model, category, price, customization_price, description, image_url, order_index) VALUES
('Modern Sofa', 'Sofa', 'Living Room', 45999, 5000, 'Comfortable modern sofa with premium fabric and wooden legs. Perfect for contemporary living spaces.', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop', 1),
('Dining Table Set', 'Table', 'Dining', 35999, 3000, 'Elegant 6-seater dining table with matching chairs. Solid wood construction with beautiful finish.', 'https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=500&h=500&fit=crop', 2),
('Wooden Bed Frame', 'Bed', 'Bedroom', 28999, 2000, 'Sturdy wooden bed frame with storage. Available in Queen and King sizes.', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop', 3),
('Office Desk', 'Desk', 'Office', 18999, 1500, 'Professional office desk with multiple storage compartments. Great for home or workspace.', 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop', 4),
('Reclining Chair', 'Chair', 'Living Room', 22999, 2000, 'Comfortable reclining chair with built-in footrest. Perfect for relaxation and comfort.', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=500&fit=crop', 5),
('Wall Unit Cabinet', 'Cabinet', 'Storage', 32999, 2500, 'Modern wall-mounted cabinet with glass doors. Ideal for displaying and storing items.', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop', 6),
('Coffee Table', 'Table', 'Living Room', 12999, 1000, 'Stylish wooden coffee table with lower shelf. Adds elegance to any living room.', 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop', 7),
('Bookshelf', 'Shelf', 'Storage', 16999, 1200, 'Tall wooden bookshelf with multiple shelves. Perfect for organizing books and decor.', 'https://images.unsplash.com/photo-1556020685-cf4202baaa5f?w=500&h=500&fit=crop', 8),
('Wardrobe Cabinet', 'Cabinet', 'Bedroom', 42999, 3500, 'Large wardrobe with hanging space and drawers. Premium quality wooden construction.', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop', 9),
('Accent Stool', 'Stool', 'Living Room', 8999, 500, 'Compact accent stool with upholstered top. Great for extra seating or as a footrest.', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=500&fit=crop', 10);
