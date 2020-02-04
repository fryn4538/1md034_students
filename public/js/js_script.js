
function menuItem(name, kcal, lact, glut, vegan, path) {
    this.name = name;
    this.kcal = kcal;
    this.lact = lact;
    this.glut = glut;
    this.vegan = vegan;
    this.path = path;
    this.info = function(){
	return this.name + ' contains ' + this.kcal + ' kCal';
    };
}

let snesko = new menuItem('Snesko burger',
			  999,
			  true,
			  true,
			  false,
			  'https://www.burgerdudes.se/wp-content/uploads/2018/09/shadyburger_basic_burger_stefan_med.jpg');

let leMonde = new menuItem('Le Monde burger',
			   1,
			   false,
			   false,
			   true,
			   'https://sweetsimplevegan.com/wp-content/uploads/2019/06/Easy-5-Ingredient-Veggie-Burgers-Sweet-Simple-Vegan-thumbnail.jpg');

let laFolieDouce = new menuItem('La Folie Douce burger',
				500,
				true,
				true,
				false,
				'https://www.thelastfoodblog.com/wp-content/uploads/2017/04/Halloumi-Burgers-thumb.jpg');

let theFrog = new menuItem('The Frog burger',
			   680,
			   true,
			   false,
			   false,
			   'https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534.jpg');

let summit = new menuItem('Summit burger',
			  1500,
			  false,
			  true,
			  true,
			  'https://cdn-rdb.arla.com/Files/arla-se/2409428905/01a6ac3d-4676-4781-8643-5cbf4387d9dd.jpeg?mode=crop&w=479&h=335&ak=f525e733&hm=d7d1b1dd');

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

