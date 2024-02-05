var city1 = {
	name: "Novi Sad",
	country: "RS",
	capital: false
};

var city2 = {
	name: "Beograd",
	country: "RS",
	capital: true
};

var city3 = {
	name: "Manchester",
	country: "UK",
	capital: false
};

var city4 = {
	name: "London",
	country: "UK",
	capital: true
};

var city5 = {
	name: "Valencia",
	country: "ESP",
	capital: false
};

var city6 = {
	name: "Barcelona",
	country: "ESP",
	capital: false
};

var city7 = {
	name: "Nis",
	country: "RS",
	capital: false
};

var city8 = {
	name: "Madrid",
	country: "ESP",
	capital: true
};

var city9 = {
	name: "Leeds",
	country: "UK",
	capital: false
};


var cities = [];
cities.push(city2);
cities.push(city1);
cities.push(city3);
cities.push(city4);
cities.push(city5);
cities.push(city6);
cities.push(city7);
cities.push(city8);
cities.push(city9);

var countries = ["RS", "UK", "ESP"]





window.onload = function () {
	let sel1 = document.getElementById('sel1');

	for (var i = 0; i < countries.length; i++) {
		var country = countries[i];
		var el = document.createElement('option');
		el.textContent = country;
		el.value = country;
		sel1.appendChild(el);
	}
	let sel2 = document.getElementById('sel2');
	for (var i = 0; i < cities.length; i++) {
		var city = cities[i];
		var el = document.createElement('option');
		el.textContent = city;
		el.value = city;
		sel2.appendChild(el);
	}
}


function proveraForme(forma) {
	var retVal = true;

	var city = forma.name.value;
	if (city == '' || city != city.toUpperCase()) {
		alert('Molimo unesite grad velikim pocetnim slovom!');
		retVal = false;
	}

	var country = forma.country.value;
	if (country == '') {
		alert('Molimo unesite drzavu!');
		retVal = false;
	}

	var sel1 = forma.sel1.value;
	if (sel1 == '') {
		alert('Molimo odaberite ponudjeno!');
		retVal = false;
	}


	return retVal;


}

function selectTicked() {

}

function handleCheckox() {

}



