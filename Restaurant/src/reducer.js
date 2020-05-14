const initialState = {
    tables: [
        {
            id: 0,
            name: "Table - 1",
            cost: 0,
            items: {

            },
            totalItems: 0,
            show: true
        },
        {
            id: 1,
            name: "Table - 2",
            cost: 0,
            items: {

            },
            totalItems: 0,
            show: true
        },
        {
            id: 2,
            name: "Table - 3",
            cost: 0,
            items: {

            },
            totalItems: 0,
            show: true
        },
        {
            id: 3,
            name: "Table - 4",
            cost: 0,
            items: {

            },
            totalItems: 0,
            show: true
        }
    ],
    menus: [
        {
            courseType: "Hors d'oeuvres",
            name: "Goat cheese crostini with fig-olive tapenade",
            cost: 500,
            show: true
        },
        {
            courseType: "Hors d'oeuvres",
            name: "Zucchini fritters",
            cost: 300,
            show: true
        },
        {
            courseType: "Amuse-bouche",
            name: "Sweet potato chips with goat cheese and caviar",
            cost: 600,
            show: true
        },
        {
            courseType: "Soup",
            name: "Cold melon and basil soup",
            cost: 400,
            show: true
        },
        {
            courseType: "Soup",
            name: "Pumpkin sage bisque",
            cost: 300,
            show: true
        },
        {
            courseType: "Appetizer",
            name: "Charred broccoli with shishito peppers and pickled onions",
            cost: 800,
            show: true
        },
        {
            courseType: "Appetizer",
            name: "Mushrooms stuffed with Pecorino Romano, garlic, and bread crumbs",
            cost: 800,
            show: true
        },
        {
            courseType: "First main course",
            name: "Spicy Thai basil chicken",
            cost: 1200,
            show: true
        },
        {
            courseType: "First main course",
            name: "Roasted duck with an orange-ginger glaze",
            cost: 1200,
            show: true
        },
        {
            courseType: "Palate Cleanser",
            name: "Sorbet (lemon,melon or mint)",
            cost: 100,
            show: true
        }
    ],
    showModal: false,
    showBillPopUp: false,
    currentTable: null

};

function getItemCost(itemName,menus) {
    return menus.filter(menu => itemName === menu.name)[0].cost;
}


function getCost(table,menus) {
    let totalCost = 0;
    Object.keys(table.items).map(item => (
        totalCost += getItemCost(item,menus) * table.items[item]
    ));
    return totalCost;
}

function getTotalItems(table) {
    let totalItems = 0;
    Object.keys(table.items).map(item => (
        totalItems += Number(table.items[item])
    ));
    return totalItems;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_TABLE":
            return {
                ...state,
                tables: action.tables
            };
        case "SEARCH_MENU":
            return {
                ...state,
                menus: action.menus
            };
        case "ADD_ITEM":
            return {
                ...state,
                tables: action.tables
            };
        case "SHOW_MODAL":
            return {
                ...state,
                showModal: !state.showModal,
                currentTable: action.id
            };
        case "EDIT_ITEM":
            const tempTables = [];
            state.tables.map(table => (
                tempTables.push(Object.assign({}, table))
            ));
            const tempItems = [];
            state.tables.map(table => (
                tempItems.push(Object.assign({}, table.items))
            ))
            for (var i = 0; i < tempTables.length; i++) {
                tempTables[i].items = tempItems[i];
            }
            var requiredItems = tempTables[state.currentTable].items;
            requiredItems[action.item] = action.qty;
            tempTables[state.currentTable].items = requiredItems;
            tempTables[state.currentTable].cost = getCost(tempTables[state.currentTable],state.menus);
            tempTables[state.currentTable].totalItems = getTotalItems(tempTables[state.currentTable]);
            return {
                ...state,
                tables: tempTables
            };
        case "DELETE_ITEM":
            const tempTables1 = [];
            state.tables.map(table => (
                tempTables1.push(Object.assign({}, table))
            ));
            const tempItems1 = [];
            state.tables.map(table => (
                tempItems1.push(Object.assign({}, table.items))
            ))
            for (var j = 0; j < tempTables1.length; j++) {
                tempTables1[j].items = tempItems1[j];
            }
            var requiredItems1 = tempTables1[state.currentTable].items;
            delete requiredItems1[action.itemName];
            tempTables1[state.currentTable].items = requiredItems1;
            tempTables1[state.currentTable].cost = getCost(tempTables1[state.currentTable],state.menus);
            tempTables1[state.currentTable].totalItems = getTotalItems(tempTables1[state.currentTable]);
            return {
                ...state,
                tables: tempTables1
            };
        case "SHOW_BILL":
            var showBill = !state.showBillPopUp;
            var showModal = !state.showModal;
            return {
                ...state,
                showBillPopUp : showBill,
                showModal : showModal
            };
        case "GENERATE_BILL":
            const tempTables3 = [];
            state.tables.map(table => (
                tempTables3.push(Object.assign({}, table))
            ));
            const tempItems3 = [];
            state.tables.map(table => (
                tempItems3.push(Object.assign({}, table.items))
            ))
            for (var k = 0; k < tempTables3.length; k++) {
                tempTables3[k].items = tempItems3[k];
            }
            var showBill1 = !state.showBillPopUp;
            let requiredItems3 = {};
            tempTables3[state.currentTable].items = requiredItems3;
            tempTables3[state.currentTable].cost = getCost(tempTables3[state.currentTable],state.menus);
            tempTables3[state.currentTable].totalItems = getTotalItems(tempTables3[state.currentTable]);
            return {
                ...state,
                tables: tempTables3,
                showBillPopUp: showBill1
            }
    }
    return state;
};

export default reducer;