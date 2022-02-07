const mobsURL = "api/mobs";

function parseLink(arg) {
  const nameSelect = document.getElementById("nameSelect").value;
  console.log(arg, nameSelect);
  const url = `${mobsURL}/${nameSelect}`;

  window.open(url, "_blank").focus();
}
