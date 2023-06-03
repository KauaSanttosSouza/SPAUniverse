import { Router } from "./router.js"

const router = new Router

router.add("/", "/html/home.html")
router.add("/ico", "/html/home.html")
router.add("/home", "/html/home.html")
router.add("/universe", "/html/universe.html")
router.add("/explorer", "/html/explorer.html")
router.add("/button", "/html/universe.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()



