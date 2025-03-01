"use client";

import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

function Product({ products, locale }) {
  if (!products || products.length === 0) return <p>No products found</p>;
  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product._id}>
          <Link href={`/${locale}/product/${product.slug.current}`}>
            <div className="product-card">
              <img
                src={urlFor(product.images && product.images[0]).url()}
                width={250}
                height={250}
                className="product-image"
              />
              <p className="product-name">
                {locale === "ar" ? product.title_ar : product.title_en}
              </p>
              <p className="product-price">${product.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Product;
