import AOS from 'aos'
// import 'aos/dist/aos.css'

export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({
    once: false,
    duration: 1000,
    delay: 300
  })
}
