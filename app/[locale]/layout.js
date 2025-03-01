import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "XFuture",
  description: "Modern  e-commerce",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const direction = routing.langDirection[locale];

  return (
    <html lang={locale} dir={direction}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <StateContext>
            <Toaster />
            <section className="layout">
              <NavBar locale={locale} />
              <main className="main-container">{children}</main>
              <Footer />
            </section>
          </StateContext>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
