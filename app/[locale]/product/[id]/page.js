import Product from "@/components/Product";
import ProductButton from "@/components/ProductButton";
import ProductImage from "@/components/ProductImage";
import Quantity from "@/components/Quantity";
import client from "@/sanityClient";
import { notFound } from "next/navigation";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default async function ProductPage({ params }) {
  const locale = params.locale;

  const query = `*[_type == "product" && slug.current == '${params.id}'][0]`;
  const product = await client.fetch(query);

  if (!product) {
    notFound({ locale });
  }

  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <ProductImage product={product} />
        </div>
        <div className="product-detail-desc">
          <h1 className="font-bold text-2xl">
            {locale === "en" ? product.title_en : product.title_ar}
          </h1>
          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />

            <p>(20)</p>
          </div>
          <h4 className="font-bold">
            {locale === "en" ? "Details:" : "التفاصيل:"}
          </h4>
          <p>
            {locale === "en" ? product.description_en : product.description_ar}
          </p>
          <p className="price">${product.price}</p>
          <Quantity locale={locale} />
          <ProductButton locale={locale} product={product} />
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>{locale === "en" ? "You may also like" : "قد يعجبك أيضاً"}</h2>
        <div className="marquee">
          <div
            className={`maylike-products-container ${locale === "en" ? "track_en" : "track_ar"}`}
          >
            <Product products={products} locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
