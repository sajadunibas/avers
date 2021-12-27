export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AfsPlatformWebAdminProject',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/jquery.min.js' },
      { src: '/js/popper.min.js' },
      { src: '/js/bootstrap.min.js' },
      { src: '/js/bootstrap.min.js' ,body:true},
      { src: '/js/jquery.appear.js' },
      { src: '/js/countdown.min.js' },
      { src: '/js/waypoints.min.js' },
      { src: '/js/jquery.counterup.min.js' },
      { src: '/js/wow.min.js' },
      { src: '/js/apexcharts.js' },
      { src: '/js/slick.min.js' },
      { src: '/js/select2.min.js' },
      { src: '/js/owl.carousel.min.js' },
      { src: '/js/jquery.magnific-popup.min.js' },
      { src: '/js/smooth-scrollbar.js' },
      { src: '/js/lottie.js' },
      { src: '/js/core.js' },
      { src: '/js/charts.js' },
      { src: '/js/animated.js' },
      { src: '/js/kelly.js' },
      { src: '/js/maps.js' },
      { src: '/js/worldLow.js' },
      { src: '/js/chart-custom.js' },
      { src: '/js/custom.js'},
      {src: '../../js/datatables/datatables.js'},
      {src: '../../js/datatables/dataTables.buttons.min.js'},
      {src: '../../js/datatables/buttons.html5.min.js'},
      {src: '../../js/datatables/buttons.print.min.js'},
    ],
  },
  env:{
    // baseURL:'https://api-dev.afsaran.ir',
    // baseURL:'https://api.afsaran.ir',
    baseURL:'https://afsaran.zehnafzar.com',
    hl:'https://l-edge.afsaran.ir',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/bootstrap.min.css',
    'assets/css/typography.css',
    'assets/css/style.css',
    'assets/css/responsive.css',
    'assets/css/remixicon.css',
    'assets/css/variable.css',
    'assets/css/owl.carousel.min.css',
    'assets/css/dripicons.css',
    'assets/css/remixicon.css',
    'assets/css/fontawesome.css',
    'assets/css/line-awesome.min.css',
    'assets/css/ionicons.min.css',
    'assets/css/slick.css',
    'assets/css/slick-theme.css',
    'assets/css/Chart.min.css',
    'assets/css/select2.min.css',
    'assets/css/magnific-popup.css',
    //'assets/css/animate.css',
    //'assets/css/animate.min.css',
    'assets/css/plyr.css',
    'assets/css/animate.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/infiniteloading', ssr: false },
    { src: '~/plugins/vue-plyr' },
    { src: '~/plugins/vueflickity', ssr: false },
    { src: '~/plugins/vue-tags-input', ssr: false },
    { src: "~/plugins/datePicker", mode: "client" },
    { src: '~/plugins/vue-snotify', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
   
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   manifest: {
  //     name: 'Afsaran',
  //     lang: 'fa',
  //     useWebmanifestExtension: false,
  //   },
  //   icon: {
  //     /* icon options */
  //     source: '~/assets/images/logo512.png',
  //     sizes: '512',
  //     purpose: 'maskable',
  //   },
  //
  // },
  server: {
    port: 3002, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
