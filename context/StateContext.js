"use client";

import { product } from "@/sanity/lib/queries";
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { set } from "sanity";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const inCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (inCart) {
      const newCartItems = cartItems.map((item) => {
        if (item._id === product._id) {
          return { ...item, quantity: item.quantity + quantity };
        }
      });
      setCartItems(newCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, product]);
    }
    toast.success(`${qty} ${product.name} added to cart`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    setCartItems(newCartItems);
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    toast.error(`${foundProduct.title_en} removed from cart`);
  };

  const toggleCartItemQuantity = (id, value) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((item) => {
        if (item._id === id) {
          return {
            ...item,
            quantity:
              value === "inc"
                ? item.quantity + 1
                : Math.max(item.quantity - 1, 1),
          };
        }
        return item;
      });
    });

    setTotalPrice((prevTotalPrice) => {
      const foundProduct = cartItems.find((item) => item._id === id);
      if (!foundProduct) return prevTotalPrice;
      return value === "inc"
        ? prevTotalPrice + foundProduct.price
        : prevTotalPrice - foundProduct.price;
    });

    setTotalQuantities((prevTotalQuantities) =>
      value === "inc" ? prevTotalQuantities + 1 : prevTotalQuantities - 1
    );
  };

  const incQty = () => {
    setQty(qty + 1);
  };

  const decQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
