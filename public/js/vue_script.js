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

let snesko = new menuItem('Snesko burger', 999, true, true, false, 'https://www.burgerdudes.se/wp-content/uploads/2018/09/shadyburger_basic_burger_stefan_med.jpg');
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

//document.getElementById("snesko").innerHTML = snesko.info();
//document.getElementById("leMonde").innerHTML = leMonde.info();
//document.getElementById("laFolieDouce").innerHTML = laFolieDouce.info();
//document.getElementById("theFrog").innerHTML = theFrog.info();
//document.getElementById("summit").innerHTML = summit.info();

const vm = new Vue({
  el: '#myID',
  data: {
    snesko: snesko.info(),
    leMonde: leMonde.info(),
    laFolieDouce: laFolieDouce.info(),
    theFrog: theFrog.info(),
    summit: summit.info()
  }
})
