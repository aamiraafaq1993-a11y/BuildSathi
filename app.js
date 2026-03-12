function showMachines(){
document.getElementById("content").innerHTML = `
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
document.getElementById("content").innerHTML = `
<h2>Labour Services</h2>
<p>Mason, Helper, Electrician available</p>
`;
}

function showMaterial(){
document.getElementById("content").innerHTML = `
<h2>Material Rates</h2>
<ul>
<li>Cement - ₹380/bag</li>
<li>Sand - ₹45/cft</li>
<li>Bajri - ₹50/cft</li>
<li>Steel - ₹60/kg</li>
</ul>
`;
}
