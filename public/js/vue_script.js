//document.getElementById("snesko").innerHTML = snesko.info();
//document.getElementById("leMonde").innerHTML = leMonde.info();
//document.getElementById("laFolieDouce").innerHTML = laFolieDouce.info();
//document.getElementById("theFrog").innerHTML = theFrog.info();
//document.getElementById("summit").innerHTML = summit.info();
/*
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
*/
const vm = new Vue({
    el: '#wrap',
    data: {
	food,
	burgerChoice:[]
    },
    methods: {
	getBurger: function(){
	    return this.burgerChoice;
	}
    }
})

const vuem = new Vue({
    el: '#info',
    data: {
	name:"",
	email:"",
	street:"",
	num:"",
	selected:"",
	picked:""
    },
    methods: {
        markDone: function(name, email, street, num, selected, picked) {
	    let order = [name, email, street, num, selected, picked];
	    let arr = vm.getBurger();
	    let div = document.getElementById("orderInfo");
	    for(let i = 0; i < order.length; i++){
		let foo = document.createElement("p");
		let fooTxt = document.createTextNode(order[i]);
		foo.appendChild(fooTxt);
		div.appendChild(foo);
	    }
	    for(let i = 0; i < arr.length; i++){
		let foo = document.createElement("p");
		let fooTxt = document.createTextNode(arr[i]);
		foo.appendChild(fooTxt);
		div.appendChild(foo);
	    }
	    
        }
    }
})
