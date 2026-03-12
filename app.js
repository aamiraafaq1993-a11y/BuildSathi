function showMachines(){

document.getElementById("content").innerHTML =

`
<h2>Available Machines</h2>

<ul>
<li>JCB - ₹1200/hour</li>
<li>Dumper - ₹800/trip</li>
<li>Tractor - ₹600/trip</li>
<li>Hydra - ₹1500/hour</li>
</ul>

`;

}

function showLabour(){

document.getElementById("content").innerHTML =

`
<h2>Labour Available</h2>

<ul>
<li>Mason - ₹700/day</li>
<li>Helper - ₹400/day</li>
<li>Electrician - ₹900/day</li>
<li>Welder - ₹1000/day</li>
</ul>

`;

}

function showMaterial(){

document.getElementById("content").innerHTML =

`
<h2>Material Rates</h2>

<ul>
<li>Cement - ₹380/bag</li>
<li>Sand - ₹45/cft</li>
<li>Bajri - ₹50/cft</li>
<li>Steel - ₹60/kg</li>
</ul>

`;

}

function addLabour(){

let name = document.getElementById("name").value;
let skill = document.getElementById("skill").value;
let wage = document.getElementById("wage").value;

let labourList = document.getElementById("labourList");

let li = document.createElement("li");

li.textContent = name + " - " + skill + " - ₹" + wage + "/day";

labourList.appendChild(li);

}
