import { defineType, defineField } from 'sanity';


export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDesc',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   title: 'Content', 
    //   name: 'content',
    //   type: 'array', 
    //   of: [{type: 'block'}]
    // }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'githubUrl',
      title: 'Github URL',
      type: 'url',
    }),
    defineField({
      name: 'livedemo',
      title: 'Live Demo URL',
      type: 'url',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Content', 
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { value: 'Web Development', title: 'Web Development' },
          { value: 'AI Agents', title: 'AI Agents' },
          { value: 'Data Science', title: 'Data Science' },
          { value: 'Data Analytics', title: 'Data Analytics' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'demo_video',
      title: 'Demo Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'video_url',
      title: 'Video URL',
      type: 'url',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'moreImages',
      title: 'More Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],

});