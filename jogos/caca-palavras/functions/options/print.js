export function print() {
  $("h3").css("color", "black");
  $("p").css("color", "black");
  $("td").css({ color: "black", "border-color": "black" });
  $("#find-button").css("display", "none");
  window.print();
  window.location.reload();
}
