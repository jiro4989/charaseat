var selectedIndex = 0;
var tableMax = 5;

function setDatas(tableId, datas, title) {
  console.log("setDatas");
  var tbody = document.getElementById(tableId).getElementsByTagName("tbody")[0];
  for (var i=0; i<datas.length; i++) {
    var text = datas[i];

    var tr = document.createElement("tr");
    var contentTd = document.createElement("td");

    var checkbox = document.createElement("input");
    var label = document.createElement("label");
    checkbox.type = "checkbox";
    checkbox.value = title + ":" + text;
    checkbox.onclick = function() {
      updateRecords();
    }
    label.append(checkbox);
    label.append(text);

    contentTd.append(label);

    tr.append(contentTd);
    tbody.append(tr);
  }
}

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

