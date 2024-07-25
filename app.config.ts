// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'WCG',
    description: 'Make windows look nice!',
    socials: {
      github: 'an3nior0/windows-customization-guide',
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'windows-customization-guide',
      owner: 'an3nior0',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
