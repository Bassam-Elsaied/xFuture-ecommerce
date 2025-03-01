import Link from "next/link";
import { Button } from "./ui/button";
import { urlFor } from "@/sanity/lib/image";

async function HomeBanner({ bannerData, locale }) {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">
          {locale === "en" ? bannerData.smallText_en : bannerData.smallText_ar}
        </p>
        <h3>
          {locale === "en" ? bannerData.midText_en : bannerData.midText_ar}
        </h3>
        <h1>
          {locale === "en"
            ? bannerData.largeText1_en
            : bannerData.largeText1_ar}
        </h1>
        <img
          src={urlFor(bannerData.image).url()}
          alt="hero-banner"
          className={
            locale === "ar" ? "hero-banner-image_ar" : "hero-banner-image_en"
          }
        />
      </div>
      <div>
        <Link href={`/${locale}/product/${bannerData.product_en}`}>
          <Button className="bg-red-500 hover:bg-red-600">
            {locale === "en"
              ? bannerData.buttonText_en
              : bannerData.buttonText_ar}
          </Button>
        </Link>
      </div>
      <div className={locale === "ar" ? "left-[10%] desc" : "right-[10%] desc"}>
        <h5>{locale === "ar" ? "وصف" : "Description"}</h5>
        <p>{locale === "en" ? bannerData.desc_en : bannerData.desc_ar}</p>
      </div>
    </div>
  );
}

export default HomeBanner;
