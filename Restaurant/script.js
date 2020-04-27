    var tables = [
        {
            "id" : "table1",
            "cost" : 0,
            "items" : {
                
            }
        },
        {
            "id" : "table2",
            "cost" : 0,
            "items" : {
                
            }
        },
        {
            "id" : "table3",
            "cost" : 0,
            "items" : {
                
            }
        },
        {
            "id" : "table4",
            "cost" : 0,
            "items" : {
                
            }
        },
    ];

    var menuItems = {
        "Goat cheese crostini with fig-olive tapenade" : 500,
        "Zucchini fritters" : 300,
        "Sweet potato chips with goat cheese and caviar" : 600,
        "Cold melon and basil soup" : 400,
        "Pumpkin sage bisque" : 300,
        "Charred broccoli with shishito peppers and pickled onions" : 800,
        "Mushrooms stuffed with Pecorino Romano, garlic, and bread crumbs" : 800,
        "Spicy Thai basil chicken" : 1200,
        "Roasted duck with an orange-ginger glaze" : 1200,
        "Sorbet (lemon,melon or mint)" : 100
    }
function searchTable() {

    var input,filter,ul,li,div,i,head;
    input = document.getElementById("searchTable");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myTableContents");
    li = ul.getElementsByTagName("li");
    for(i=0;i<li.length;i++){
        var num = i+1;
        var name = "table"+num;
        head = li[i].getElementsByTagName("h3");
        var table = document.getElementById(name);
        if(head[0].innerHTML.toUpperCase().indexOf(filter) > -1){
            if(table != null)
                table.style.display = "";
        }
        else {
            if(table != null)
                table.style.display = "none";
        }
    }
}

function searchMenu() {
    
    var input,filter,ul,li,div,i,courseName,dishName;
    input = document.getElementById("searchMenu");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenuContents");
    li = ul.getElementsByTagName("li");
    for(i=0;i<li.length;i++){
        var num = i+1;
        var name = "menu"+num;
        courseName = li[i].getElementsByTagName("h3");
        dishName = li[i].getElementsByTagName("h4");
        var menu = document.getElementById(name);
        console.log(courseName[0].innerHTML);
        if(courseName[0].innerHTML.toUpperCase().indexOf(filter) > -1 ||
            dishName[0].innerHTML.toUpperCase().indexOf(filter) > -1){
            if(menu != null)
                menu.style.display = "";
        }
        else {
            if(menu != null)
                menu.style.display = "none";
        }
    }

}

function drag(ev) {
    ev.dataTransfer.setData("menu",ev.target.id);
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function drop(ev) {
    ev.preventDefault();
    var table = ev.target;
    var tableId = table.id;
    var menu = document.getElementById(ev.dataTransfer.getData("menu"));
    console.log(menu);
    if(tableId.includes("head")  || menu === undefined){
        alert ('Please drag properly');
        return false;
    }
    console.log("table id: " + tableId);
    var tableSpan = table.getElementsByTagName("span");
    var menuSpan = menu.getElementsByTagName("span");
    console.log(menuSpan[0].innerHTML);
    tableSpan[0].innerHTML = Number(tableSpan[0].innerHTML) + Number(menuSpan[0].innerHTML);
    tableSpan[1].innerHTML = Number(tableSpan[1].innerHTML) + 1;
    var name = menu.getElementsByTagName("h4")[0];
    tables[tableId].cost += Number(menuSpan[0].innerHTML);
    var items = tables[tableId].items;
    var itemName = name.innerHTML;
    if(items[itemName] === undefined) {
        tables[tableId].items[itemName] = 1;
    }
    else {
        tables[tableId].items[itemName] = tables[tableId].items[itemName] + 1;
    }
    console.log(tables[tableId]);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function deleteItem(itemName,tableNo) {
    console.log(itemName);
    var table = document.getElementById(tableNo+"");
    var tableSpan = table.getElementsByTagName("span");
    tableSpan[0].innerHTML = Number(tableSpan[0].innerHTML) - Number((tables[tableNo].items[itemName])*menuItems[itemName]);
    tableSpan[1].innerHTML = Number(tableSpan[1].innerHTML) - Number((tables[tableNo].items[itemName]));
    var itemsList = tables[tableNo].items;
    itemsList[itemName] = 0;
    console.log(itemsList);
    tables[tableNo].items = itemsList;
    showPopUp(tableNo);
}

function editItem(tableNo,itemName) {
    var qty = document.getElementById("qty").value;
    console.log("quantity " + qty);
    var itemsList = tables[tableNo].items;
    itemsList[itemName] = qty;
    tables[tableNo].items = itemsList;
    var totalItems = Number(0);
    var cost = 0;
    var items = Object.keys(itemsList);
    for(var i=0;i<items.length;i++){
        totalItems = totalItems + Number(itemsList[items[i]]);
        cost = cost + menuItems[items[i]]*itemsList[items[i]];
    }
    var table = document.getElementById(tableNo+"");
    var tableSpan = table.getElementsByTagName("span");
    tableSpan[0].innerHTML = cost;
    tableSpan[1].innerHTML = Number(totalItems);
    showPopUp(tableNo);
}
    
function generateBill(i) {
    var billModal = document.getElementById("myBillContent");
    var bill = document.getElementById("myBill")
    bill.style.display = "block";
    var modal = document.getElementById("myModal");
    modal.style.display="none";
    var htmlcontent = "<span class='closeBill'>&times;</span><h3 style='text-align:center;'>Bill generated for Table - "+(i+1)+"</h3>";
    var itemsList = tables[i].items;
    var items = Object.keys(itemsList);
    var cost = 0;
    for(var j=0;j<items.length;j++){
        cost = cost + menuItems[items[j]]*itemsList[items[j]];
    }
    htmlcontent += "<table><tr><th>Bill amount</th><td>"+cost+"</td></tr></table>";
    billModal.innerHTML = htmlcontent;
    var span = document.getElementsByClassName("closeBill")[0];
        span.onclick = function() {
            console.log("span");
            bill.style.display = "none";
        };
    tables[i].items = {};
    var table = document.getElementById(i+"");
    var tableSpan = table.getElementsByTagName("span");
    tableSpan[0].innerHTML = Number(0);
    tableSpan[1].innerHTML = Number(0);

}

function showPopUp(i) {
    console.log("hello");
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("myModalContent");
    modal.style.display = "block";
    var items = tables[i].items;
    var menus = Object.keys(items);
    //console.log(modalContent.innerHTML);
    modalContent.innerHTML = "";
    if(modalContent.innerHTML.trim() === "") {
        var htmlcontent = "<span class='close'>&times;</span><h2>Table - " + (i+1) + "</h2><table><thead><tr><th>S.No</th><th>Item</th><th>Qty</th><th>Price</th><th>Action</th></tr></thead>";
        htmlcontent += "<tbody>";
        var sno = 1;
        for(var j=0;j<menus.length;j++){
            console.log(items[menus[j]]);
            if(items[menus[j]] > 0) {
                htmlcontent += "<tr><td>"+sno+"</td><td>"+menus[j]+"</td><td><input type='number' name='qty' id='qty' value='"+items[menus[j]]+"' oninput='editItem("+i+",\""+menus[j]+"\")'></td><td>"+menuItems[menus[j]]*items[menus[j]]+"</td><td><button onclick='(deleteItem(\""+menus[j]+"\","+i+","+menuItems[menus[j]]*items[menus[j]]+"))'>Delete</button></td></tr>";
                sno = sno + 1;
            }
        }
        var table = document.getElementById(i+"");
        var tableSpan = table.getElementsByTagName("span");
        var cost = tableSpan[0].innerHTML;
        htmlcontent += "<br><tr><td></td><td>Total Price</td><td>Rs."+cost+"</td><td></td><td></td></tr>";
        htmlcontent += "</tbody></table>";
        htmlcontent += "<div align='right'><button onclick='generateBill("+i+")'>Generate Bill</button></div>";
        }
        modalContent.innerHTML = htmlcontent
        console.log(modalContent.innerHTML);
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            console.log("span");
            modal.style.display = "none";
        };
    console.log(i);
}