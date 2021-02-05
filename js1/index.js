let arr = [1, 2, 3, 4];

for(let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
};

let names = ['liza', 'sasha', 'kolya'];

for(let i = 0; i < names.length; i++) {
    let str = "Пользователь: '";
    console.log(str + names[i]);
};

let newNames = names.map(function(name){
    return `Это ученик школы ${name}`;
});

console.log(newNames);

let heading = document.getElementsByClassName("main-heading")[0];

//alert(heading.innerHTML);

heading.innerHTML = "Ученики школы MyFreedom";

heading.style.color ="red";

heading.style.fontFamily = "sans-serif";

let list = document.createElement("ul");

list.classList.add("main-list");

let container = document.getElementById("app");

container.append(list);

let listItems = newNames.map(function(name) {
    let item = document.createElement("li");
    item.innerHTML = name;
    return item;
});

listItems.forEach(function(item) {
    list.append(item);
});