
var empObj =[];
function storeInSession() {
    localStorage.setItem("budgetInfo",empObj);
}
function retrieveFromSession() {
    var obj = localStorage.getItem("budgetInfo");
    console.log(obj);
}
function onFormSubmit(){
    //alert("Event generated...")
    var data = readFormData();
    insertNewRecord(data);
    empObj.push(data);      //in empObj
    resetData();
    
}

function readFormData() {
    var obj = {}    // empty object
    obj.client = document.getElementById("Client").value;
    
    obj.project = document.getElementById("project").value;

    obj.budget = document.getElementById("budget").value;

    console.log(obj);
}
function insertNewRecord(data){
 var table = document.getElementById("budgetlist")
 var body = table.getElementsByTagName("tbody")[0];
 var newRow = body.insertRow(body.length);  // row created 

 var cell1 = newRow.insertCell(0);          // cell created 
 cell1.innerHTML=data.client;                 // value placed 

 var cell2 = newRow.insertCell(1);          // cell created 
 cell2.innerHTML=data.project;                 
 var cell3 = newRow.insertCell(2);          // cell created 
 cell3.innerHTML=data.budget;                 // value placed

}

function resetData() {
document.getElementById("client").value="";
document.getElementById("project").value="";
document.getElementById("budget").value="";
}

