export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IRating;
}

export interface IRating {
    rate: number;
    count: number;
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