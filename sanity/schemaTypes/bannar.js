// Define the banner schema
const bannerSchema = {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "buttonText_en",
      title: "ButtonText_en",
      type: "string",
    },
    {
      name: "buttonText_ar",
      title: "ButtonText_ar",
      type: "string",
    },
    {
      name: "product_en",
      title: "Product_en",
      type: "string",
    },
    {
      name: "product_ar",
      title: "Product_ar",
      type: "string",
    },
    {
      name: "desc_en",
      title: "Desc_en",
      type: "string",
    },
    {
      name: "desc_ar",
      title: "Desc_ar",
      type: "string",
    },
    {
      name: "smallText_en",
      title: "SmallText_an",
      type: "string",
    },
    {
      name: "smallText_ar",
      title: "SmallText_ar",
      type: "string",
    },
    {
      name: "midText_en",
      title: "MidText_en",
      type: "string",
    },
    {
      name: "midText_ar",
      title: "MidText_ar",
      type: "string",
    },
    {
      name: "largeText1_en",
      title: "LargeText1_en",
      type: "string",
    },
    {
      name: "largeText2_en",
      title: "LargeText2_en",
      type: "string",
    },
    {
      name: "largeText1_ar",
      title: "LargeText1_ar",
      type: "string",
    },
    {
      name: "largeText2_ar",
      title: "LargeText2_ar",
      type: "string",
    },
    {
      name: "discount",
      title: "Discount",
      type: "string",
    },
    {
      name: "saleTime_en",
      title: "SaleTime_en",
      type: "string",
    },
    {
      name: "saleTime_ar",
      title: "SaleTime_ar",
      type: "string",
    },
  ],
};

// Export the banner schema
export default bannerSchema;
