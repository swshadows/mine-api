const mobsURL = "api/mobs";
const enchantURL = "api/enchantments";

function parseLink(type) {
  let url, nameSelect;
  if (type == "mobs") {
    nameSelect = document.getElementById("mobSelect").value;
    url = `${mobsURL}/${nameSelect}`;
  } else if (type == "enchants") {
    nameSelect = document.getElementById("enchantSelect").value;
    url = `${enchantURL}/${nameSelect}`;
  }

  window.open(url, "_blank").focus();
}
