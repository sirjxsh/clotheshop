export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: ICategory;
    images: string[];
}

export interface ICategory {
    id: number;
    name: string;
    image: string;
}

export interface CartContextType {
    cart: CartProduct[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (uniqueId: string) => void;
}

export interface CartProduct extends IProduct {
    uniqueId: string;
}