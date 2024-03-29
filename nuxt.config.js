const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
	router: {
	  base: '/wh_calc_vue_bootstrap/'
	}
  } : {}

  const routerBase_lur = process.env.DEPLOY_ENV === 'GH_PAGES_lur' ? {
	router: {
	  base: '/wh_calc/'
	}
  } : {}

  const dir_lur = process.env.DEPLOY_ENV === 'GH_PAGES_lur' ? {
	generate: {
		dir: 'docs_lur'
	}
  } : {}

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
 ...routerBase,
 ...routerBase_lur,
 generate: {
	dir: 'docs'
  },
...dir_lur,
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
	'bootstrap-vue/nuxt',
  ],
  bootstrapVue: {
	bootstrapCSS: false, 
	bootstrapVueCSS: false
  },
  css: [
	  '@/assets/scss/custom.scss'
	],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
