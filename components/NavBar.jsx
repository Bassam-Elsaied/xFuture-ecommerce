"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { AiOutlineShopping } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";
import Cart from "./Cart";
import { useStateContext } from "@/context/StateContext";

function NavBar({ locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const { setShowCart, showCart, totalQuantities } = useStateContext();

  const newLocale = locale === "en" ? "ar" : "en";

  const switchLocale = () => {
    router.push(`/${newLocale}${pathname.substring(3)}`);
  };

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">XFuture</Link>
      </p>
      <div className="flex justify-center items-center gap-4">
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
        {showCart && <Cart locale={locale} />}
        <button
          type="button"
          onClick={switchLocale}
          className="bg-red-500 text-white  rounded-full flex  items-center justify-center w-8 h-8 transition-transform transform hover:scale-105"
        >
          {newLocale.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
