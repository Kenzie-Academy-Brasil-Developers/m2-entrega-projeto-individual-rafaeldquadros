import renderUser from "./dashboardUserRender.js"
import menu       from "./dashboardAdminMenu.js"
import requestUser from "./dashboardUserRequest.js"

requestUser.userLogado()

menu.showMenu()

renderUser.verificationToken()
renderUser.btnsMenuUser()