import Consts from '../consts'

const Menu = {
    getMenuById(id) {
        for (let menu of Consts.Menu.ALL) {
            if (menu.id == id) {
                return menu;
            }
        }
        return {};
    }
}

export default Menu