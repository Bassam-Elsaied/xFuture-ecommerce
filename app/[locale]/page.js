import HomeBanner from "@/components/HomeBanner";
import FooterBanner from "@/components/FooterBanner";
import Product from "@/components/Product";
import React, { Suspense } from "react";
import Header from "@/components/Header";
import { bannerQuery, product } from "@/sanity/lib/queries";
import client from "@/sanityClient";
import { Skeleton } from "@/components/ui/skeleton";

export default async function page({ params }) {
  const products = await client.fetch(product);

  const bannerData = await client.fetch(bannerQuery);

  const locale = params.locale;

  return (
    <>
      <HomeBanner bannerData={bannerData && bannerData[1]} locale={locale} />

      <Header locale={locale} />

      <Suspense
        fallback={<Skeleton className="h-[125px] w-[250px] rounded-xl" />}
      >
        <Product products={products} locale={locale} />
      </Suspense>

      <FooterBanner
        footerBanner={bannerData && bannerData[1]}
        locale={locale}
      />
    </>
  );
}
