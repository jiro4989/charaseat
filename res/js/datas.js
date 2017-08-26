function setDatas(tableId, datas) {
  var tbody = document.getElementById(tableId).getElementsByTagName("tbody")[0];
  for (var i=0; i<datas.length; i++) {
    var text = datas[i];

    var tr = document.createElement("tr");
    var idTd = document.createElement("td");
    var contentTd = document.createElement("td");

    var checkbox = document.createElement("input");
    var label = document.createElement("label");
    checkbox.type = "checkbox";
    checkbox.value = text;
    label.append(checkbox);
    label.append(text);

    contentTd.append(label);

    tr.append(idTd);
    tr.append(contentTd);
    tbody.append(tr);
  }
}

function setOnClick() {
  var inputs = document.getElementsByTagName("input");
  for (var i=0; i<inputs.length; i++) {
    var input = inputs[i];
    input.onclick = function() {
      updateRecords();
    }
  }
}

function updateRecords() {
  var textarea = document.getElementById("selectedTextArea");
  textarea.innerHTML = "";

  var inputs = document.getElementsByTagName("input");
  for (var i=0; i<inputs.length; i++) {
    var input = inputs[i];
    if (input.selected) {
      textarea.innerHTML += input.value;
    }
  }
}

