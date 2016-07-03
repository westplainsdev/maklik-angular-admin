module.exports = menu;

function menu() {
    var menu = [];

    return {
        getMenu: getMenu,
        add: add
    };

    function getMenu() {
        return menu;
    }

    function add(name, location, icon) {
        menu.push({
            name: name,
            location: location,
            icon: icon
        });
    }
}
