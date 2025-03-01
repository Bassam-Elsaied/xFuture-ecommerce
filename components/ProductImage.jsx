"use client";

import { urlFor } from "@/sanity/lib/image";
import { useState } from "react";

function ProductImage({ product }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="product-detail-image">
      <img
        src={urlFor(product.images && product.images[index]).url()}
        alt={product.title_en}
      />
      <div className="small-images-container">
        {product.images?.map((img, i) => (
          <img
            src={urlFor(product.images && product.images[i]).url()}
            className={
              i === index ? "small-image selected-image" : "small-image"
            }
            key={i}
            onMouseEnter={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImage;
