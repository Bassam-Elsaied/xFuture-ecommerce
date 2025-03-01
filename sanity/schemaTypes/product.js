

const productSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
    {
      name: 'title_en',
      title: 'Title_en',
      type: 'string',
    },
    {
      name: 'title_ar',
      title: 'Title_ar',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title_en',
        maxLength: 90
      }
    },
    {
      name: 'description_en',
      title: 'Description_en',
      type: 'text',
    },
    {
      name: 'description_ar',
      title: 'Description_ar',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
   
  ],
};

export default productSchema; 