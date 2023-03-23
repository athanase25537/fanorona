let pos1 = document.querySelector('#first');
let pos2 = document.querySelector('#second');
let pos3 = document.querySelector('#third');
let pos4 = document.querySelector('#center-left');
let pos5 = document.querySelector('#center');
let pos6 = document.querySelector('#center-right');
let pos7 = document.querySelector('#fourth');
let pos8 = document.querySelector('#fifth');
let pos9 = document.querySelector('#sixth');

let fanoronier = document.querySelector('.fanoronier');

let all_pos = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9];




// create red piece (player 1)
function piece_1(pos){
    let p = document.createElement('img');
        p.src = "src/img/img_p1.png";
        pos.appendChild(p);
}

// create black piece (player 2)
function piece_2(pos){
    let p = document.createElement('img');
        p.src = "src/img/img_p2.png";
        pos.appendChild(p);
}

let player1 = true; // true for player 1 and false for player 2
// Put all the pieces on the board
let pieces = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // array of the pieces: 0 if empty and 1 if full
var nb_pieces = 0; // counter of pieces, max is 6

for(let i = 0; i < all_pos.length; i++){
    let pos = all_pos[i];
    pos.addEventListener('click', (e) => {
        if(pos.firstElementChild == null && nb_pieces < 6){
        pos.classList.toggle('choosen');

            if(player1){
                piece_1(pos);
                player1 = false;
            }else{
                piece_2(pos);
                player1 = true;
            }
            nb_pieces++;
        }
        
    });
}

/**
 * check if the move is valid:
 * if the coordonates are in the one of the coordonate array
 * if there is no piece yet on the same place
 */
function validMove(e, arr_pos, pieces) {
    if(e.clientX >= arr_pos.x[0] && e.clientX <= arr_pos.x[1]
        && e.clientY >= arr_pos.y[0] && e.clientY <= arr_pos.y[1]
        && pieces === 0){
            return true;
        }
    return false;
}