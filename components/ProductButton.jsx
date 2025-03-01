"use client";

import { Button } from "./ui/button";
import { useStateContext } from "@/context/StateContext";

function ProductButton({ locale, product }) {
  const { onAdd, qty, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <div className="buttons">
      <Button
        type="button"
        className="add-to-cart "
        onClick={() => onAdd(product, qty)}
      >
        {locale === "en" ? "Add to Cart" : "أضف إلى السلة"}
      </Button>
      <Button type="button" className="buy-now" onClick={handleBuyNow}>
        {locale === "en" ? "Buy Now" : "اشتري الآن"}
      </Button>
    </div>
  );
}

export default ProductButton;
