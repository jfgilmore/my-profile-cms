import {defineField, defineType} from 'sanity'

const options = [
  {title: 'child-src', value: 'child-src'},
  {title: 'connect-src', value: 'connect-src'},
  {title: 'default-src', value: 'default-src'},
  {title: 'font-src', value: 'font-src'},
  {title: 'media-src', value: 'media-src'},
  {title: 'fenced-frame-src', value: 'fenced-frame-src'},
  {title: 'form-action', value: 'form-action'},
  {title: 'frame-ancestors', value: 'frame-ancestors'},
  {title: 'frame-src', value: 'frame-src'},
  {title: 'img-src', value: 'img-src'},
  {title: 'manifest-src', value: 'manifest-src'},
  {title: 'media-src', value: 'media-src'},
  {title: 'object-src', value: 'object-src'},
  {title: 'sandbox', value: 'sandbox'},
  {title: 'script-src', value: 'script-src'},
  {title: 'script-src-attr', value: 'script-src-attr'},
  {title: 'script-src-elem', value: 'script-src-elem'},
  {title: 'trusted-types', value: 'trusted-types'},
  {title: 'unsafe-hashes', value: 'unsafe-hashes'},
  {title: 'upgrade-insecure-requests', value: 'upgrade-insecure-requests'},
  {title: 'worker-src', value: 'worker-src'},
]

export const policyDirective = defineType({
  name: 'policyDirective',
  title: 'Policy Directives',
  type: 'document',
  fields: [
    defineField({
      name: 'directive',
      title: 'Directive',
      type: 'string',
      options: {
        list: options,
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'directive',
      subtitle: 'value',
    },
  },
})

export default defineType({
  name: 'csp',
  title: 'Content Security Policy',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'slug',
    },
    {
      name: 'policyDirectives',
      title: 'Policy Directives',
      type: 'array',
      of: [{type: 'policyDirective'}],
    },
  ],
  preview: {
    select: {
      title: 'page.current',
      subtitle: 'policyDirectives',
    },
    prepare(value) {
      return {
        title: value.title === '*' ? 'Default' : value.title === '' ? 'Home' : value.title,
        subtitle: value.subtitle
          .map(({directive}: {directive: string; value: string}) => directive)
          .join(', '),
      }
    },
  },
})
