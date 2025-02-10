// studio/schemaTypes/product.js
import { defineType, defineField } from "sanity";

export const productType = defineType({
  title: "Product",
  name: "product",
  type: "document",
  fields: [
    defineField({
      title: "Product Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        title: "Slug",
        name: "slug",
        type: "slug",
        options: {
          source: 'name',
        },
        validation: (Rule) => Rule.required(),
      }),
    defineField({
      title: "Product Images",
      name: "images",
      type: "array",
      of: [{ type: "image", fields: [{ name: "alt", title: "Alt Text", type: "string" }] }],
    }),
    defineField({
      title: "Product Description",
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Price",
      name: "price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        title: "In Stock",
        name: "inStock",
        type: "boolean",
      }),
    defineField({
      title: "Category",
      name: "category",
      type: "reference", // Reference to the category schema
      to: [{ type: 'category' }],
    }),
  ],
});
