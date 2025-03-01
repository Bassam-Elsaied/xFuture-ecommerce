import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { urlFor } from "@/sanity/lib/image";

function FooterBanner({ footerBanner, locale }) {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{footerBanner.discount}</p>
          <h3>
            {locale === "en"
              ? footerBanner.largeText1_en
              : footerBanner.largeText1_ar}
          </h3>
          <h3>
            {locale === "en"
              ? footerBanner.largeText2_en
              : footerBanner.largeText2_ar}
          </h3>
          <p>
            {" "}
            {locale === "en"
              ? footerBanner.saleTime_en
              : footerBanner.saleTime_ar}
          </p>
        </div>
        <div className="right">
          <p className="beats-solo">
            {locale === "en"
              ? footerBanner.smallText_en
              : footerBanner.smallText_ar}
          </p>
          <h3>
            {locale === "en"
              ? footerBanner.midText_en
              : footerBanner.midText_ar}
          </h3>
          <p>{locale === "en" ? footerBanner.desc_en : footerBanner.desc_ar}</p>
          <Link href={`/product/${footerBanner.product}`}>
            <Button className="hover:bg-white">
              {locale === "en"
                ? footerBanner.buttonText_en
                : footerBanner.buttonText_ar}
            </Button>
          </Link>
        </div>
        <img
          src={urlFor(footerBanner.image).url()}
          alt="hero-banner"
          className="footer-banner-image"
        />
      </div>
    </div>
  );
}

export default FooterBanner;
