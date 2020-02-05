/*let menu = [snesko, leMonde, laFolieDouce];

let wrap = document.getElementById("wrap");

let burgerName = document.createElement("div");
let burgerPic = document.createElement("div");
let burgerInfo = document.createElement("div");

burgerName.setAttribute('class', 'wrapper');
burgerPic.setAttribute('class', 'wrapper');
burgerInfo.setAttribute('class', 'wrapper');

burgerName.setAttribute('id', 'burgerName');
burgerPic.setAttribute('id', 'burgerPic');
burgerInfo.setAttribute('id', 'burgerInfo');


for (burger in menu)
{
    let heading = document.createElement("div");
    heading.style.margin = "0 auto";
    heading.style.gridColumn = parseInt(burger) + 1;
    console.log(burger);
    let header = document.createElement("h4");
    let headTxt = document.createTextNode(menu[burger].name);
    header.appendChild(headTxt);
    heading.appendChild(header);
    burgerName.appendChild(heading);

    let pic = document.createElement("div");
    pic.style.margin = "0 auto";
    pic.style.gridColumn = parseInt(burger) + 1;
    let img = document.createElement("img");
    img.style.height = "200px";
    img.style.width = 300;
    img.src = menu[burger].path;
    pic.appendChild(img);
    burgerPic.appendChild(pic);

    let info = document.createElement("div");
    info.style.margin = "0 auto";
    info.style.gridColumn = parseInt(burger) + 1;
    let ul = document.createElement("ul");
    
    let kcalLi = document.createElement("li");
    let kcalTxt = document.createTextNode(menu[burger].kcal + "kCal");
    kcalLi.appendChild(kcalTxt);
    ul.appendChild(kcalLi);
    
    if(menu[burger].lact){
	let lactLi = document.createElement("li");
	lactLi.setAttribute('class', 'lactose');
  	let lact = document.createTextNode('Innehåller laktos');
  	lactLi.appendChild(lact);
	ul.appendChild(lactLi);
    }
    if(menu[burger].glut){
	let glutLi = document.createElement("li");
	glutLi.setAttribute('class', 'gluten');
  	let glut = document.createTextNode('Innehåller gluten');
  	glutLi.appendChild(glut);
	ul.appendChild(glutLi);
    }
    if(menu[burger].vegan){
	let veganLi = document.createElement("li");
  	let vegan = document.createTextNode('Vegan');
	veganLi.appendChild(vegan);
	ul.appendChild(veganLi);
    }

    info.appendChild(ul);
    burgerInfo.appendChild(info);
}
wrap.appendChild(burgerName);
wrap.appendChild(burgerPic);
wrap.appendChild(burgerInfo);
*/
/* document.getElementById("snesko").innerHTML = snesko.info(); */
/* document.getElementById("leMonde").innerHTML = leMonde.info(); */
/* document.getElementById("laFolieDouce").innerHTML = laFolieDouce.info(); */
/* document.getElementById("theFrog").innerHTML = theFrog.info(); */
/* document.getElementById("summit").innerHTML = summit.info(); */
/*

let buttonFunc = function () {
    console.log("Button clicked!")
};

let inputFunc = function () {
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var adress = document.getElementById("adress").value;
    var number = document.getElementById("number").value;
    var payment = document.getElementById("payment").value;
    var gender = document.getElementsByName('gender');
    var genderValue;
    for (var i = 0, length = gender.length; i < length; i++) {
	if (gender[i].checked) {
	    // do whatever you want with the checked rad
	    genderValue = gender[i].value;
	    // only one radio can be logically checked, don't check the rest
	    break;
	}
    }
    console.log([name, email, adress, number, payment, genderValue]);
    return [name, email, adress, number, payment, genderValue];
};

let btn = document.getElementById("order");
btn.addEventListener("click", buttonFunc);
btn.addEventListener("click", inputFunc);
*/
