export default {
  modern: 'client',
  head: {
    titleTemplate: '%s | Taskify Works',
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700"
      },
    ],
    meta: [
      {charset: "utf-8"},
      {
        name: "viewport",
        content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      },
    ],
  },
  build: {
    extractCSS: true
  },
  css: [
    '~assets/style/app.scss'
  ]
}
