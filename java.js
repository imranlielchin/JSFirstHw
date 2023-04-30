
const btnAdd = document.getElementById('add_button');

let newElem = document.querySelector('input');

btnAdd.addEventListener('click', visibilityShow());

btnAdd.addEventListener('click', () => {
    let val = document.querySelector('input').value
    console.log(val);
})




function visibilityShow() {
    let list = document.querySelector("ul");
    const lielement = document.createElement("li")
    console.log(newElem.value);
    lielement.innerText = newElem.value;
    list.appendChild(lielement);
}


    btnCount.addEventListener('click',list.children.length);

    console.log(btnCount)

    console.log(list.children.length)









































