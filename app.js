let labours = [];

function addLabour() {
  let name = document.getElementById("name").value;
  let work = document.getElementById("work").value;
  let phone = document.getElementById("phone").value;

  if(name === "" || work === "" || phone === "") {
    alert("Sab details bharo");
    return;
  }

  labours.push({name, work, phone});
  showLabours();

  document.getElementById("name").value = "";
  document.getElementById("work").value = "";
  document.getElementById("phone").value = "";
}

function showLabours() {
  let list = document.getElementById("labourList");
  list.innerHTML = "";

  labours.forEach(l => {
    list.innerHTML += `
      <div>
        <h3>${l.name}</h3>
        <p>${l.work}</p>
        <p>${l.phone}</p>
      </div>
    `;
  });
}
