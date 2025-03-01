"use client";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useRef } from "react";
import { useStateContext } from "@/context/StateContext";
import { Button } from "./ui/button";
import { urlFor } from "@/sanity/lib/image";
import getStripe from "@/lib/getStripe";

function Cart({ locale }) {
  const cartRef = useRef(null);
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();
    console.log("Sending checkout request...");

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems }), // يجب أن يكون الكارت داخل object
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      console.error(`Checkout request failed with status: ${response.status}`);
      return;
    }

    const data = await response.json();
    console.log("Response data:", data);

    toast.loading("Redirecting...");
    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div
      className={`cart-wrapper ${locale === "ar" ? "cart-wrapper_ar" : "cart-wrapper_en"}`}
      ref={cartRef}
    >
      <div
        className={`cart-container ${locale === "ar" ? "cart-container_ar" : "cart-container_en"}`}
      >
        <Button
          className="cart-heading text-black"
          onClick={() => setShowCart(false)}
        >
          {locale === "ar" ? <AiOutlineRight /> : <AiOutlineLeft />}
          <span className="heading ">
            {locale === "ar" ? "عربة التسوق " : "Your cart"}
          </span>
          <span className="cart-num-items">
            ({totalQuantities} {locale === "ar" ? "أغراض" : "items"})
          </span>
        </Button>
        {cartItems.length < 1 && (
          <div className="empty-cart flex flex-col items-center justify-center">
            <AiOutlineShopping size={100} />
            <h3>{locale === "ar" ? "العربه فارغة" : "Empty cart"}</h3>
            <Link href="/">
              <Button onClick={() => setShowCart(false)} className="btn">
                {locale === "ar" ? "استمر في التسوق " : "Continue Shopping"}
              </Button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.images[0]).url()}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top items-center justify-between p-2 border-b">
                    <h5 className="font-semibold text-lg">
                      {locale === "ar" ? item.title_ar : item.title_en}
                    </h5>
                    <h4 className="text-xl text-gray-800">${item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <div className="flex items-center max-w-[200px] space-x-4">
                        <h3 className="font-semibold text-lg">Quantity:</h3>
                        <p className="flex items-center max-w-[100px]   space-x-4">
                          <span
                            className={`cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-gray-300 transition duration-200 ${locale === "ar" && "m-2"}`}
                            onClick={() =>
                              toggleCartItemQuantity(item._id, "dec")
                            }
                          >
                            <AiOutlineMinus />
                          </span>
                          <span className="font-bold text-xl">
                            {item.quantity}
                          </span>
                          <span
                            className="cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-gray-300 transition duration-200"
                            onClick={() =>
                              toggleCartItemQuantity(item._id, "inc")
                            }
                          >
                            <AiOutlinePlus />
                          </span>
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="remove-item "
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {cartItems.length >= 1 && (
            <div className="cart-bottom ">
              <div className="total">
                <h3>{locale === "ar" ? "المجموع:" : "Subtotal:"}</h3>
                <h3>${Math.round(totalPrice)}</h3>
              </div>
              <div className="btn-container">
                <Button className="btn" onClick={handleCheckout}>
                  {locale === "ar" ? "الدفع" : "Checkout"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
