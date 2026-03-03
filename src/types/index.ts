export interface Product {
  id: string;
  name: string;
  model: string;
  category: string;
  price: number;
  customization_price?: number;
  description: string;
  image_url: string;
  order_index: number;
  created_at: string;
}

export interface Location {
  id: string;
  branch_name: string;
  address: string;
  latitude: number;
  longitude: number;
  phone: string;
  email: string;
  opening_hours: string;
  created_at: string;
}

export interface AdminUser {
  id: string;
  email: string;
  created_at: string;
}

export interface AuthContextType {
  user: AdminUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}
