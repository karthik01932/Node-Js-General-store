const url = "http://localhost:4000/item";
async function additemfromhandler(event) {
    try {
        event.preventDefault();
        const itemname = document.getElementById('itemname').value;
        const itemdescription = document.getElementById('description').value;
        const itemprice = document.getElementById('price').value;
        const itemquantity = document.getElementById('quantity').value;

        const obj = {
            itemname,
            itemdescription,
            itemprice,
            itemquantity
        }

        const res = await axios.post(`http://localhost:4000/item/add-item`, obj);
        showitemonscreen(res.data);
        console.log(res);
        document.getElementById('itemname').value = '';
        document.getElementById('description').value = '';
        document.getElementById('price').value = '';
        document.getElementById('quantity').value = '';
    } catch (error) {
        console.log(error);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    getdetails();
})

async function getdetails() {
    try {
        const res = await axios.get(`http://localhost:4000/item/get-items`)
        console.log(res.data);
        for (var i = 0; i < res.data.allItems.length; i++) {
            showitemonscreen(res.data.allItems[i]);
        }
    }
    catch (error) {
        console.log(error);
    }
}

function showitemonscreen(user) {
    // console.log(user);
    const parentNode = document.getElementById('listofitems');
    const childElement = `<li id=${user.id}> ${user.itemname} => ${user.itemdescription} =>Rs ${user.itemprice} => ${user.itemquantity}
                <button onclick = buyone('${user.id}','${user.itemname}','${user.itemdescription}','${user.itemprice}','${user.itemquantity}') id = "buy1"> BUY 1 </button>
                <button onclick = buytwo('${user.id}','${user.itemname}','${user.itemdescription}','${user.itemprice}','${user.itemquantity}') id = "buy2"> BUY 2 </button>
                <button onclick = buythree('${user.id}','${user.itemname}','${user.itemdescription}','${user.itemprice}','${user.itemquantity}') id = "buy3"> BUY 3 </button>
                </li>`
    parentNode.innerHTML = parentNode.innerHTML + childElement;


}

async function buyone(userid, name, description, price, quantity) {
    try {

        if (quantity < 1) {
            alert("0 items left");
            deletefromthescreen(userid);
            return;
        }
        console.log('hi', userid, name, description, price, quantity);
        const body = {
            quantity: quantity - 1
        }
        const updatedItem = await axios.patch(`http://localhost:4000/item/edit-items/${userid}`, body);
        if (updatedItem.status === 200) {
            location.reload();
        }
        console.log(updatedItem);
    } catch (err) {
        console.log(err);
    }
}
async function buytwo(userid, name, description, price, quantity) {
    try {

        if (quantity < 1) {
            alert("0 items left");
            deletefromthescreen(userid);
            return;
        }
        console.log('hi', userid, name, description, price, quantity);
        const body = {
            quantity: quantity - 2
        }
        const updatedItem = await axios.patch(`http://localhost:4000/item/edit-items/${userid}`, body);
        if (updatedItem.status === 200) {
            location.reload();
        }
        console.log(updatedItem);
    } catch (er) {
        console.log(er);
    }
}
async function buythree(userid, name, description, price, quantity) {
    try {

        if (quantity < 1) {
            alert("0 items left");
            deletefromthescreen(userid);
            return;
        }
        console.log('hi', userid, name, description, price, quantity);
        const body = {
            quantity: quantity - 3
        }
        const updatedItem = await axios.patch(`http://localhost:4000/item/edit-items/${userid}`, body);
        if (updatedItem.status === 200) {
            location.reload();
        }
        console.log(updatedItem);
    } catch (er) {
        console.log(er);
    }
}
function deletefromthescreen(userid){
    const parentNode = document.getElementById('listofitems');
    const childtobdeleted = document.getElementById(userid);
    parentNode.removeChild(childtobdeleted);

    async function deleteuser(){
        try {
            const res = await axios.delete(`http://localhost:4000/item/delete-items/${userid}`);
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    deleteuser();
}

