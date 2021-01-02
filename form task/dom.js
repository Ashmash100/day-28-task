let parent = document.createElement("div");
let row = document.createElement("div")
row.classList.add('row')
let leftside = document.createElement("div");
leftside.setAttribute("class","col-4 ");
leftside.setAttribute("id","left-side")
let rightside = document.createElement("div");
rightside.setAttribute("class","col-8 ")
rightside.id = "right-side"
let leftcontainer = document.createElement("div");
let container = document.createElement("div");
container.setAttribute("class","container left-container")

document.body.appendChild(parent);
parent.appendChild(row);
row.append(leftside,rightside);
leftside.appendChild(container)

let form = document.createElement("form");
container.appendChild(form)

let firstname = formgroup("FirstName")
let lastname = formgroup("LastName");
let address = formgroup("Address");
let pincode = formgroup("Pincode")

let gender = document.createElement("div")
gender.classList.add("spacing")
gender.innerText = "Gender"

let male = formcheck("Male","option1")
let female = formcheck("Female","option2")


let state = formgroup("State","state-spacing");
let country = formgroup("Country")

let choiceoffood = document.createElement("div");
choiceoffood.innerText = "Choice Of Food";
choiceoffood.classList.add("spacing");

let check1 = checkbox("check1","North Indian");
let check2 = checkbox("check2","South Indian")
let check3 = checkbox("check3","Chinese");
let check4 = checkbox("check4","Contintal");
let check5 = checkbox("check5","Thai");

let button = document.createElement("button")
button.setAttribute("class","btn btn-success btn-block")
button.onclick = "submitform()"
button.innerText = "Submit"
button.id = "button"

let hiddeninput = document.createElement("input");
hiddeninput.id = "submit_handle"
hiddeninput.type = "submit";
hiddeninput.style = "display:none";


form.append(firstname,lastname,address,pincode,gender,male,female,state,country,choiceoffood,check1,check2,check3,check4,check5,button,hiddeninput)

let table = document.createElement("table");
table.setAttribute("class","table table-dark");
let thead = document.createElement("thead");
let tr = document.createElement("tr");

let th1 = createth("First Name")
let th2 = createth("Last Name")
let th3 = createth("Address");
let th4 = createth("Pincode");
let th5 = createth("Gender");
let th6 = createth("State");
let th7 = createth("Country");
let th8 = createth("Choice Of Food");

rightside.appendChild(table);
table.appendChild(thead)
thead.appendChild(tr)
tr.append(th1,th2,th3,th4,th5,th6,th7,th8)




// function

function formgroup(name,optionclass) {
    let div = document.createElement("div");
    div.setAttribute("class","form-group" );
    div.classList.add(optionclass)
    
    let label = document.createElement("label");
    label.setAttribute("for", name);
    label.innerText = name.replace(/([a-z])([A-Z])/, '$1 $2')
    let input = document.createElement("input")
    input.classList.add("form-control")
    input.required = true;
    input.id = name;
    input.setAttribute("type","text");
    input.setAttribute("placeholder",name.replace(/([a-z])([A-Z])/, '$1 $2'));
    div.append(label,input);
    return div;

}

function formcheck(id,value) {
    let div = document.createElement("div")
    let label = document.createElement("label")
    let input = document.createElement("input");
    div.setAttribute("class","form-check form-check-inline");
    input.id = id
    input.classList.add('form-check-input-radio')
    input.required = true;
    input.name = "radio"
    input.value = value;
    input.type = "radio"
    label.classList.add("form-check-label")
    label.setAttribute("for",id)
    label.innerText = id;
    div.append(input,label);
    return div

}

function checkbox(id,text) {
    let div = document.createElement("div");
    let input = document.createElement("input");
    let label = document.createElement("label")
    div.setAttribute("class","form-check ");
    input.classList.add("form-check-input");
    input.type = "checkbox"
    input.value = "";
    input.id = id;
    label.classList.add("form-check-label")
    label.setAttribute("for",id);
    label.innerText = text;
    div.append(input,label);
    return div;

}

function createth(name) {
    let th = document.createElement("th");
    th.setAttribute("scope","col");
    th.innerText = name;
    return th
}






