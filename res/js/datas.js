var selectedIndex = 0;
var tableMax = document.getElementsByClassName("charaTableArea").length;

function updateRecords() {
  console.log("updateRecords");
  var textarea = document.getElementById("selectedTextArea");
  textarea.value = "";

  var inputs = document.getElementsByTagName("input");
  for (var i=0; i<inputs.length; i++) {
    var input = inputs[i];
    if (input.checked) {
      textarea.value += input.value + "\n";
    }
  }
}

function clearCheck() {
  console.log("clearCheck");
  var inputs = document.getElementsByTagName("input");
  for (var i=0; i<inputs.length; i++) {
    var input = inputs[i];
    input.checked = false;
  }
  document.getElementById("selectedTextArea").value = "";
}

function clearCheckContent(name) {
  console.log("clearCheck");
  var inputs = document.getElementsByTagName("input");
  for (var i=0; i<inputs.length; i++) {
    var input = inputs[i];
    if (input.name === name) {
      input.checked = false;
    }
  }
  document.getElementById("selectedTextArea").value = "";
}

/**
 * キーマッピングする。
 */
function mappingKeys() {
  window.addEventListener("keydown", function(e) {
    if (e != null) {
      var code = e.keyCode;

      // 上から,h, j, k, l
      switch (code) {
        case 72: --selectedIndex; focus(); break;
        case 76: ++selectedIndex; focus(); break;
      }
    }
  }, true);
}

function focus() {
  var areas = document.getElementsByClassName("charaTableArea");
  if (selectedIndex < 0) {
    selectedIndex = tableMax;
  } else if (tableMax < selectedIndex) {
    selectedIndex = 0;
  }
  var area = areas[selectedIndex];
  area.getElementsByTagName("input")[0].focus();
}

