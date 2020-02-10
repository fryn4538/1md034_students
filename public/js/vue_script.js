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

'use strict';
const socket = io();

const gm = new Vue({
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
	picked:"",
	orders: {},
    },
    created: function() {
	socket.on('initialize', function(data) {
	    this.orders = data.orders;
	}.bind(this));
	socket.on('currentQueue', function(data) {
	    this.orders = data.orders;
	}.bind(this));
    },
    methods: {
        markDone: function(name, email, selected, picked) {
	    let order = [name, email, selected, picked];
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
	    
        },
	getNext: function() {
	    let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
		return Math.max(last, next);
	    }, 0);
	    return lastOrder + 1;
	},
	addOrder: function(event) {
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    socket.emit('addOrder', {
		orderId: this.getNext(),
		details: {
		    x: event.clientX - 10 - offset.x,
		    y: event.clientY - 10 - offset.y,
		},
		orderItems: ['Beans', 'Curry'],
	    });
	},
    }
})
