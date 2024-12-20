import {defineField, defineType} from 'sanity';

export const DataAnalysisDataType = defineType({
  name: 'data-analysis-project',
  title: 'Data Analyst Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'shortDescription',
      type: 'string',
      title: 'Short Description',
      description: 'A brief summary of the project',
    }),
    defineField({
      title: 'Content', 
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Upload an image representing the project',
      options: {
        hotspot: true, // Enables hotspot for cropping
      },
    }),
    defineField({
      name: 'stacks',
      type: 'array',
      title: 'Technology Stacks',
      description: 'List of technologies used in the project',
      of: [
        {
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Project Link',
      description: 'URL to the project or related resource',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Unique identifier for the project, used in URLs',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
  ],
});
