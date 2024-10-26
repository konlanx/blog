// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'Konlanx\' Blog',
    description: 'A personal blog about the things I learn and the things I do.',
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Konlanx' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false,
      },
        navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      github: 'konlanx',
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
