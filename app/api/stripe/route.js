import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { cartItems } = await req.json();

    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        { shipping_rate: "shr_1QuVyVAs1YJ72AkwSdt1F035" },
        { shipping_rate: "shr_1QuVwBAs1YJ72AkwQwpFooQt" },
      ],
      line_items: cartItems.map((item) => {
        const img = item.images[0].asset._ref;
        const newImage = img
          .replace(
            "image-",
            "https://cdn.sanity.io/images/469rh2fi/production/"
          )
          .replace("-webp", ".webp");

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title_en,
              images: [newImage],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/`,
    };

    const session = await stripe.checkout.sessions.create(params);

    return NextResponse.json(session);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
