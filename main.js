document.getElementById('expenselist').addEventListener('click', xyz);
var key = 0;
function xyz(){
    let amount = document.getElementById('amount').value;
    amount += '-';
    let desc = document.getElementById('description').value;
    desc += '-';
    let category = document.getElementById('particulars').value;
    category += ' ';

    let li = document.createElement('li');
    li.className = 'itemsinlist';
    li.appendChild(document.createTextNode(amount));
    li.appendChild(document.createTextNode(desc));
    li.appendChild(document.createTextNode(category));

    let dltBtn = document.createElement('button');
    dltBtn.className = 'dltBtn';
    dltBtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(dltBtn);

    let editBtn = document.createElement('button');
    editBtn.className = 'editBtn';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);

    let ul = document.querySelector('ul.this');
    ul.appendChild(li);
    
    let myobj = {amount: amount, desc:desc, category: category};
    localStorage.setItem(key++, JSON.stringify(myobj)); 
}

let dlt = document.querySelector('ul.this');
//console.log(dlt);
dlt.addEventListener('click',dltitem);

function dltitem(e){
    let li = e.target.parentElement;
    dlt.removeChild(li);
}