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
var cursor_id;

const img1 = "img_p1.png";
const img2 = "img_p2.png";

let old_id = null;
for(let i = 0; i < all_pos.length; i++){
    let pos = all_pos[i];
    pos.addEventListener('click', (e) => {
        if(cursor_id === undefined){
            cursor_id = pos.id;
        }

        if(nb_pieces === 6){

            if(old_id !== null){
                old_id = cursor_id;
            }
            if(pos.id != cursor_id){
                remove_cursor(all_pos);
                cursor_id = pos.id;
                if(old_id == null){
                    old_id = cursor_id;
                }
            }


            if(pos.firstElementChild != null){
                pos.classList.toggle('choosen');
            }else{
                let choosed = get_piece_choosed(old_id, all_pos);
                let arr_src = choosed != null ? choosed.src.split('/') : [];
                if(player1){
                    // Add new piece for player 1
                    if(arr_src.includes(img1)){
                        // Delete old piece
                        choosed.parentNode.removeChild(choosed);
                        piece_1(pos);
                        player1 = false;

                        // Remove the last last-move
                        remove_last_move(all_pos);

                        // Add new last-move
                        pos.classList.add("last-move");
                    }
                    
                }else{
                    // Add new piece for player 2
                    if(arr_src.includes(img2)){
                        // Delete old piece
                        choosed.parentNode.removeChild(choosed);
                        piece_2(pos);
                        player1 = true;

                        // Remove the last last-move
                        remove_last_move(all_pos);

                        // Add new last-move
                        pos.classList.add("last-move");
                    }
                }
            }

        }
        if(pos.firstElementChild == null && nb_pieces < 6){
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

// remove cursor
function remove_cursor(arr){
    for(let j = 0; j < arr.length; j++){
        if(arr[j].classList.contains("choosen")){
            arr[j].classList.remove("choosen");
            break;
        }
    }
}

function get_piece_choosed(id, arr){
    for(let k = 0; k < arr.length; k++){
        if(arr[k].id === id){
            return arr[k].firstElementChild;
        }
    }
    return null;
}

function remove_last_move(arr){
    for(let i = 0; i < arr.length; i ++){
        if(arr[i].classList.contains('last-move')){
            arr[i].classList.remove('last-move');
            break;
        }
    }
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