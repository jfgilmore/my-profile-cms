import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'my-profile-cms',

  projectId: 'c57mxf93',
  dataset: 'staging',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
