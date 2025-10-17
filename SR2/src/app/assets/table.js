let playerRow = 0;
let playerCol = 0;
let Cells =[];

function LoadData(){
    if(Cells.length === 0){
        for (let i = 0; i < 10; i++) {
            let row = [];
            for (let j = 0; j < 10; j++) {
                row.push(Math.random() < 0.3 ? 1 : 0); //якщо число менше за 0.3 замынити на 1, інакше на 0
            }
            Cells.push(row);
        }

        // player pos
        Cells[playerRow][playerCol] = 2;
    }
    return Cells;
}

export function createTable(){
    LoadData();  
    ReloadTable();
}

export function movePlayer(direction) {

    // previous position clean
    Cells[playerRow][playerCol] = 0;

    //new cords
    let newRow = playerRow;
    let newCol = playerCol;

    if(direction === 'up' && playerRow > 0 && Cells[playerRow-1][playerCol] !== 1) newRow--;
    if(direction === 'down' && playerRow < Cells.length-1 && Cells[playerRow+1][playerCol] !== 1) newRow++;
    if(direction === 'left' && playerCol > 0 && Cells[playerRow][playerCol-1] !== 1) newCol--;
    if(direction === 'right' && playerCol < Cells[0].length-1 && Cells[playerRow][playerCol+1] !== 1) newCol++;

    // обновляем координаты игрока
    playerRow = newRow;
    playerCol = newCol;

    // new position
    Cells[playerRow][playerCol] = 2;
    console.log(playerRow, playerCol)

    ReloadTable();
}

export function ReloadTable() {
    let innerHTML = `<table id="JavaTable">`;
    Cells.forEach(row => {
        innerHTML += `<tr>`;
        row.forEach(cell => {
            let color = 'white';
            if(cell === 1) color = 'black';
            if(cell === 2) color = 'red';
            innerHTML += `<td style="background-color:${color};">${cell === 2 ? '' : ''}</td>`; //замінити '2' на '' після отладки
        });
        innerHTML += `</tr>`;
    });
    innerHTML += `</table>`;
    document.getElementById("JavaTableDiv").innerHTML = innerHTML;
}