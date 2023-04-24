var selectedRow = null;
function onFormSubmit(e){
   event.preventDefault()
   var formData = readFormData();
   if(selectedRow === null){
      InsertNewRecord(formData)
   }
   else{
     updateRecord(formData);
   }
   resetForm()
}

//Retrieve the data
function readFormData(){
    var formData = {}
    formData["productCode"] = document.getElementById("productCode").value
    formData["product"] = document.getElementById("product").value
    formData["qty"] = document.getElementById("qty").value
    formData["perPrice"] = document.getElementById("perPrice").value
    return formData;
    
}

//Insert the data 
function InsertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length)
    var cellOne = newRow.insertCell(0);
        cellOne.innerHTML = data.productCode
    var cellTwo = newRow.insertCell(1);
        cellTwo.innerHTML = data.product
    var cellThree = newRow.insertCell(2);
        cellThree.innerHTML = data.qty
    var cellFour = newRow.insertCell(3);
        cellFour.innerHTML = data.perPrice
    var cellFive = newRow.insertCell(4);
        cellFive.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productCode').value = selectedRow.cells[0].innerHTML
    document.getElementById('product').value = selectedRow.cells[1].innerHTML
    document.getElementById('qty').value = selectedRow.cells[2].innerHTML
    document.getElementById('perPrice').value = selectedRow.cells[3].innerHTML
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.productCode
    selectedRow.cells[1].innerHTML = formData.product
    selectedRow.cells[2].innerHTML = formData.qty
    selectedRow.cells[3].innerHTML = formData.perPrice
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex)
    }
    resetForm();
}

//Reset the data 
function resetForm(){
    document.getElementById('productCode').value = '';
    document.getElementById('product').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('perPrice').value = '';
}




