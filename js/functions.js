
const table = document.getElementById("joker_table");
let num_of_rows = 0
const num_of_cells = 7


function create_new_row(){
    var row = table.insertRow(0);

    for (let i = 0; i < num_of_cells; i++){
        let cell = row.insertCell(i)
        cell.innerHTML = String(Math.floor(Math.random() * 10))
    }

    num_of_rows++
    document.querySelector('#row_counter').innerHTML = "Rows generated: " + String(num_of_rows)
}