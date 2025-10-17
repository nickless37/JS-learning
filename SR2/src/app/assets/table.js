let playerRow = 0;
let playerCol = 0;

function LoadData(){
    let result = [];
    for (let i = 0; i < 10; i++) {
        let row = [];
        for (let j = 0; j < 10; j++) {
            row.push( Math.floor(Math.round(Math.random()))); 
        }
        result.push(row);
    }
    result[playerRow][playerCol] = 2;
    return result;
}

export function createTable(){
    let Cells = LoadData()             

    let innerHTML = `<table id="JavaTable"`;

    Cells.forEach(row => {
        innerHTML += `<tr>`;
        row.forEach(cell => {
            let color = 'white';
            if(cell === 1) color = 'black'; 
            if(cell === 2) color = 'red';   
            innerHTML += `<td style="background-color:${color};">${cell === 2 ? '2' : ''}</td>`;   //заменить '2' на '' пo оготовности
        });
        innerHTML += `</tr>`;
    });

    innerHTML = innerHTML + `</table>`;
    
    let div = document.getElementById("JavaTableDiv");   
    div.innerHTML = innerHTML;
}

export function movePlayer(direction) {
    let Cells = LoadData(); // current position?

    // player cordinates
    let pos = { row: 0, col: 0 };
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            if(Cells[i][j] === 2) {
                pos = { row: i, col: j };
            }
        }
    }

    // previous position clean
    Cells[pos.row][pos.col] = 0;

    // cord change
    if(direction === 'up' && pos.row > 0) pos.row--;
    if(direction === 'down' && pos.row < 9) pos.row++;
    if(direction === 'left' && pos.col > 0) pos.col--;
    if(direction === 'right' && pos.col < 9) pos.col++;

    // new position
    Cells[pos.row][pos.col] = 2;

    ReloadTable(Cells);
}

export function ReloadTable(Cells) {
    let innerHTML = `<table id="JavaTable">`;
    Cells.forEach(row => {
        innerHTML += `<tr>`;
        row.forEach(cell => {
            let color = 'white';
            if(cell === 1) color = 'black';
            if(cell === 2) color = 'red';
            innerHTML += `<td style="background-color:${color};">${cell === 2 ? '2' : ''}</td>`; //222222222
        });
        innerHTML += `</tr>`;
    });
    innerHTML += `</table>`;
    document.getElementById("JavaTableDiv").innerHTML = innerHTML;
}