import { createContext, useContext, useState, useEffect } from "react";
import productsData from "../config/content/products.json";

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
    const load = (k, d) => {
        try {
            return JSON.parse(localStorage.getItem(k)) ?? d;
        } catch {
            return d;
        }
    };

    const [cart, setCart] = useState(() => load("amstela_cart", []));
    const [wish, setWish] = useState(() => load("amstela_wish", []));
    const [cartOpen, setCartOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    useEffect(
        () => localStorage.setItem("amstela_cart", JSON.stringify(cart)),
        [cart],
    );
    useEffect(
        () => localStorage.setItem("amstela_wish", JSON.stringify(wish)),
        [wish],
    );

    const addToCart = (product, qty = 1) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + qty }
                        : item,
                );
            }
            return [
                ...prev,
                {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.images[0],
                    slug: product.slug,
                    metal: product.metal,
                    qty,
                },
            ];
        });
        setCartOpen(true);
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQty = (id, delta) => {
        setCart((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const newQty = Math.max(1, item.qty + delta);
                    return { ...item, qty: newQty };
                }
                return item;
            }),
        );
    };

    const toggleWish = (product) => {
        setWish((prev) => {
            if (prev.includes(product.id)) {
                return prev.filter((id) => id !== product.id);
            }
            return [...prev, product.id];
        });
    };

    const cartCount = cart.reduce((total, item) => total + item.qty, 0);
    const cartTotal = cart.reduce(
        (total, item) => total + item.price * item.qty,
        0,
    );

    const val = {
        cart,
        cartOpen,
        setCartOpen,
        wish: wish || [],
        searchOpen,
        setSearchOpen,
        addToCart,
        removeFromCart,
        updateQty,
        toggleWish,
        cartCount,
        cartTotal,
    };

    return <ShopContext.Provider value={val}>{children}</ShopContext.Provider>;
}

export const useShop = () => {
    const context = useContext(ShopContext);
    if (!context) {
        // Return a safe dummy if context is missing (prevent crash)
        return {
            cart: [],
            wish: [],
            cartCount: 0,
            cartTotal: 0,
            setCartOpen: () => {},
            setSearchOpen: () => {},
            addToCart: () => {},
            removeFromCart: () => {},
            toggleWish: () => {},
        };
    }
    return context;
};
