document.getElementById("btn1").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // select form values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    
    var gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value:'' ;
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;

    // Create a new row and cells
    var table = document.querySelector(".tab2");
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    // Assign values to the new cells
    cell1.textContent = name;
    cell2.textContent = age;
    cell3.textContent = gender;
    cell4.textContent = course;
    cell5.textContent = email;

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.border = "outset 2px black"; // Remove border
    deleteButton.style.padding = "5px 10px"; // Add some padding
    deleteButton.style.cursor = "pointer";
    deleteButton.textContent = "DELETE";
    deleteButton.addEventListener("click", function () {
        table.deleteRow(newRow.rowIndex);
    });
    cell6.appendChild(deleteButton);

    // Clear the form inputs
    
    document.getElementById("name").value= '';
    document.getElementById("age").value= '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("course").value= '';
    document.getElementById("email").value= '';
});
