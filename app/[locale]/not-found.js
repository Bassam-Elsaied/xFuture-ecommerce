import Image from "next/image";

export default function NotFound({ locale }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">
        {locale === "ar"
          ? "404 - المنتج غير موجود "
          : "404 - Product not found"}
      </h1>
      <p className="text-lg mt-2">
        {locale === "ar"
          ? "عذرًا، المنتج الذي تبحث عنه غير متوفر."
          : "Sorry, the product you are looking for is not available."}
      </p>
      <Image src="/assets/404.png" alt="404" width={240} height={240} />
    </div>
  );
}
