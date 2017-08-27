function setRandom() {
  clearCheck();
  var inputs = document.getElementsByTagName("input");
  for (var i=0; i<inputs.length; i++) {
    var input = inputs[i];
    if (input.type === "checkbox") {
      var round = Math.floor(Math.random() * 10);
      if (round == 0) {
        input.checked = true;
      }
    }
  }
  updateRecords();
}

function setRandomContent(name) {
  clearCheckContent(name);

  var inputs = document.getElementsByTagName("input");
  for (var i=0; i<inputs.length; i++) {
    var input = inputs[i];
    if (input.name === name) {
      var round = Math.floor(Math.random() * 10);
      if (round == 0) {
        input.checked = true;
      }
    }
  }

  updateRecords();
}
