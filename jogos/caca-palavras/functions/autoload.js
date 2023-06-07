export function autoload() {
  if (localStorage.getItem("tableData") == null) {
    let tableData = JSON.stringify({
        lineNumber: 14,
        words: ["PALAVRAUM", "PALAVRADOIS", "PALAVRATRES", "PALAVRAQUATRO"],
      });
    localStorage.setItem("tableData", tableData);
  }
}
