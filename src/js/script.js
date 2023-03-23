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

// Coordonnees possible to put piece or move
const arr_pos1 = {
    "x": [105, 157],
    "y": [88, 132]
};

const arr_pos2 = {
    "x": [307, 350],
    "y": [88, 132]
}

const arr_pos3 = {
    "x": [500, 540],
    "y": [88, 132]
};

const arr_pos4 = {
    "x": [105, 157],
    "y": [288, 330]
}

const arr_pos5 = {
    "x": [307, 350],
    "y": [288, 330]
};
const arr_pos6 = {
    "x": [500, 540],
    "y": [288, 330]
}

const arr_pos7 = {
    "x": [105, 157],
    "y": [490, 532]
};
const arr_pos8 = {
    "x": [307, 350],
    "y": [490, 532]
}

const arr_pos9 = {
    "x": [500, 540],
    "y": [490, 532]
};

// Put all the pieces on the board
let pieces = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // array of the pieces: 0 if empty and 1 if full
let nb_pieces = 0; // counter of pieces, max is 6
let body = document.querySelector('body');
let t1 = true; // true for player 1 and false for player 2
let putPieces = (e) =>{
        if(validMove(e, arr_pos1, pieces[0])
            && nb_pieces < 6){
            if(t1){
                piece_1("first");
                t1 = false;
            }else{
                piece_2("first");
                t1 = true;
            }
            pieces[0] = 1;
            nb_pieces++;
        }
           
    
        if(validMove(e, arr_pos2, pieces[1])
            && nb_pieces < 6){
            if(t1){
                piece_1("second");
                t1 = false;
            }else{
                piece_2("second");
                t1 = true;
            }
            pieces[1] = 1;
            nb_pieces++;
        }
    
        if(validMove(e, arr_pos3, pieces[2])
            && nb_pieces < 6){
            if(t1){
                piece_1("third");
                t1 = false;
            }else{
                piece_2("third");
                t1 = true
            }
            nb_pieces++;
            pieces[2] = 1;
        }
    
        if(validMove(e, arr_pos4, pieces[3])
            && nb_pieces < 6){
            if(t1){
                piece_1("center-left");
                t1 = false;
            }else{
                piece_2("center-left");
                t1 = true;
            }
            nb_pieces++;
            pieces[3] = 1;
        }
    
        if(validMove(e, arr_pos5, pieces[4])
            && nb_pieces < 6){
            if(t1){
                piece_1("center");
                t1 = false;
            }else{
                piece_2("center");
                t1 = true;
            }
            nb_pieces++;
            pieces[4] = 1;
        }
    
        if(validMove(e, arr_pos6, pieces[5])
            && nb_pieces < 6){
            if(t1){
                piece_1("center-right");
                t1 = false;
            }else{
                piece_2("center-right");
                t1 = true;
            }
            nb_pieces++;
            pieces[5] = 1;
        }
    
        if(validMove(e, arr_pos7, pieces[6])
            && nb_pieces < 6){
            if(t1){
                piece_1("fourth");
                t1 = false;
            }else{
                piece_2("fourth");
                t1 = true;
            }
            nb_pieces++;
            pieces[6] = 1;
        }
    
        if(validMove(e, arr_pos8, pieces[7])
            && nb_pieces < 6){
            if(t1){
                piece_1("fifth");
                t1 = false;
            }else{
                piece_2("fifth");
                t1 = true;
            }
            nb_pieces++;
            pieces[7] = 1;
        }
    
        if(validMove(e, arr_pos9, pieces[8])
            && nb_pieces < 6){
            if(t1){
                piece_1("sixth");
                t1 = false;
            }else{
                piece_2("sixth");
                t1 = true;
            }
            nb_pieces++;
            pieces[8] = 1;
        }
}
body.addEventListener('click', (e) => {
    putPieces(e);
});


// create red piece (player 1)
function piece_1(id){
    let p = document.createElement('img');
        p.src = "src/img/img_p1.png";
        p.id = id;
        p.style.display = "block";
        fanoronier.appendChild(p);
}

// create black piece (player 2)
function piece_2(id){
    let p = document.createElement('img');
        p.src = "src/img/img_p2.png";
        p.id = id;
        p.style.display = "block";
        fanoronier.appendChild(p);
}
for(let i = 0; i < all_pos.length; i++){
    let pos = all_pos[i];
    if(pos !== null){
        pos.addEventListener('click', (e) => {
            let body = document.querySelector('body');
            pos.classList.toggle('choosen');
            body.addEventListener('click', (event) => {
                if(validMove(event, arr_pos2)){
                    pos1.style.display = "none";
                    pos2.style.display = "block";
    
                }
        
                if(validMove(event, arr_pos4)){
                    pos.id = "center-left";
                    pos.classList.remove("choosen");
    
                }
        
                if(validMove(event, arr_pos5)){
                    pos.id = "center";
                    pos.classList.remove("choosen");
    
                }
                
            });
            
        });
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