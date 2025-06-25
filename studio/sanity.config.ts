import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {seoMetaFields} from 'sanity-plugin-seo'

export default defineConfig({
  name: 'default',
  title: 'Touchstone Digital Solutions',

  projectId: '7l8oyxeq', // Using the provided project ID directly
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [structureTool(), visionTool(), seoMetaFields()],

  schema: {
    types: schemaTypes,
  },
})
