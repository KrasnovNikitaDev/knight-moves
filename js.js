function createField(){
    let row = 0;
    for(let x = 1; x <= 8; x++){
        for(let y = 1; y <= 8; y++){
            let cell = document.createElement('div');
            cell.classList = 'cell';
            cell.dataset.x = x;
            cell.dataset.y = y;
            field.append(cell);

            if(row % 2 == 0) cell.classList.add('black');
            row++;

            cell.addEventListener('click', horseMove);
        }
        row++;
    }
}
createField();


function horseMove(e){
    if(document.querySelector('.horse')) {
        document.querySelector('.horse').classList.remove('horse');

        let move = document.querySelectorAll('.move');
        for(let elem of move) elem.classList.remove('move');
    }
    this.classList.add('horse');

    let x = +this.dataset.x;
    let y = +this.dataset.y;

    downMoves(x, y);
    upMoves(x, y);
    leftMoves(x, y);
    rightMoves(x, y);
}


let downMoves = (x, y)=>{
    if(x + 2 <= 8 && y + 1 <= 8) document.querySelector(`[data-x ="${x+2}"][data-y ="${y+1}"]`).classList.add('move');
    if (x + 2 <= 8 && y - 1 >= 1) document.querySelector(`[data-x ="${x+2}"][data-y ="${y-1}"]`).classList.add('move');
}

let upMoves = (x, y)=>{
        if(x - 2 >= 1 && y + 1 <= 8)document.querySelector(`[data-x ="${x-2}"][data-y ="${y+1}"]`).classList.add('move');
        if(x - 2 >= 1 && y - 1 >= 1)document.querySelector(`[data-x ="${x-2}"][data-y ="${y-1}"]`).classList.add('move');
}

let leftMoves = (x, y)=>{
    if(x - 1 >= 1 && y - 2 >= 1)document.querySelector(`[data-x ="${x-1}"][data-y ="${y-2}"]`).classList.add('move');
    if(x + 1 <= 8 && y - 2 >= 1 )document.querySelector(`[data-x ="${x+1}"][data-y ="${y-2}"]`).classList.add('move');
}

let rightMoves = (x, y)=>{
    if(x -1 >= 1 && y + 2 <= 8)document.querySelector(`[data-x ="${x-1}"][data-y ="${y+2}"]`).classList.add('move');
    if(x + 1 <= 8 && y + 2 <= 8)document.querySelector(`[data-x ="${x+1}"][data-y ="${y+2}"]`).classList.add('move');
}