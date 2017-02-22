console.log("hello");

var planetButton = document.getElementById("showPlanets");
var planetHolderDiv = document.getElementById("planetHolder");
planetButton.addEventListener("click", getPlanets);

var planets = [
	{
		name: "Mercury",
		url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg"
	},
	{
		name: "Mars",
		url: "http://media.salon.com/2015/09/mars-614x412.jpg"
	},
	{
		name: "Venus",
		url: "http://solarsystem.nasa.gov/images/slideshow/Venus_Clouds.jpg"
	},
	{
		name: "Earth",
		url: "http://solarviews.com/raw/earth/bluemarblewest.jpg"
	},
	{
		name: "Jupiter",
		url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg/220px-Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg"
	},
	{
		name: "Neptune",
		url: "https://aos.iacpublishinglabs.com/question/aq/700px-394px/rings-around-neptune-made_7a79544592be8743.jpg?domain=cx.aos.ask.com"
	},
	{
		name: "Saturn",
		url: "https://www.nasa.gov/sites/default/files/thumbnails/image/saturnvoyager.jpg"
	},
	{
		name: "Uranus",
		url: "http://nineplanets.org/images/uranus.jpg"
	}
];

function getPlanets(){
	planetHolderDiv.innerHTML = "";
	for (var i = 0; i < planets.length; i++){
		var newPlanet = "";
		newPlanet += `<div class="planetBox" id="planetBox-${i}">`;
		newPlanet += `<div class="planetName"> ${planets[i].name}  </div>`;
		newPlanet+= `<img class="planetImage" src="${planets[i].url}">`;
		newPlanet += `</div>`;
		planetHolderDiv.innerHTML += newPlanet;
	}
}

