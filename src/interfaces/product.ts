export type TProduct = {
    id?: number  | string;
    title: string;
    description: string;
    price: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    thumbnail?: string;
    images?: string[];
  };