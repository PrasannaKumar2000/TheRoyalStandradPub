export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  ingredients?: string[];
  isVegetarian?: boolean;
  isPopular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface BookingDetails {
  name: string;
  email: string;
  phone: string;
  pickupTime: string;
}
