function setRandom() {
  clearCheck();
  var inputs = document.getElementsByTagName("input");
  for (var i=0; i<inputs.length; i++) {
    var round = Math.floor(Math.random() * 10);
    if (round == 0) {
      inputs[i].checked = true;
    }
  }

}
