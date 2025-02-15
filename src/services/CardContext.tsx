import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartContextType, CartProduct, IProduct } from './Interfaces';
import { v4 as uuidv4 } from 'uuid';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<React.PropsWithChildren<object>> = ({ children }) => {
    const [cart, setCart] = useState<CartProduct[]>(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: IProduct) => {
        const productWithUniqueId = { ...product, uniqueId: uuidv4() };
        setCart(prevCart => [...prevCart, productWithUniqueId]);
    };

    const removeFromCart = (uniqueId: string) => {
        setCart(prevCart => prevCart.filter(item => item.uniqueId !== uniqueId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};