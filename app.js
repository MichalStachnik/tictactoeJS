const zero = document.getElementById('zero')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')

var board = 
[
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]
var playerOne = {
    sign : 'X',
    turn : true
}
var playerTwo = {
    sign : 'O',
    turn : false
}

//problem is comp turn only fires on second click, needs to run after player1 goes
//, and player1s input needs to wait
//OR could just run after first evaluate
function clickFunction(p1, p2, node, pos){
    if(p1.turn){
        node.innerHTML = playerOne.sign
        if(pos <= 2){
            board[0][pos] = playerOne.sign
        }
        else if(pos > 2 && pos <= 5){
            pos = pos % 3
            board[1][pos] = playerOne.sign
        }
        else if(pos > 5 && pos <= 8){
            pos = pos % 6
            board[2][pos] = playerOne.sign
        }
        playerOne.turn = !playerOne.turn
        playerTwo.turn = !playerTwo.turn
        console.log(board)
        evaluate(board, playerOne)

    }
    else if(p2.turn){
        // compTurn(board, playerTwo)
        node.innerHTML = playerTwo.sign
        var rand1, rand2
        function makeRand(){
            rand1 = Math.floor(Math.random() * 3)
            rand2 = Math.floor(Math.random() * 3)
        }
        makeRand()
        var isTrue = true
        while(isTrue){
            //if there is something there
            if(board[rand1][rand2].length != 0){
                makeRand()
            }
            else{
                board[rand1][rand2] = playerTwo.sign
                isTrue = false
            }
        }

        playerOne.turn = !playerOne.turn
        playerTwo.turn = !playerTwo.turn
        evaluate(board, playerTwo)
    }
}
//or can return the board
function compTurn(theBoard, p2){
    
    //keep looping until you find empty node
    var isTrue = true
    while(isTrue){
        //returns true if there is something there, so run again
        if(theBoard[rand1][rand2].length != 0){
            makeRand()
        }
        //else put comp players sign into node
        else{
            theBoard[rand1][rand2] = p2.sign
            return theBoard
            isTrue = false
        }
    }
}

function evaluate(theBoard, player){
    //ROWS
    if(theBoard[0][0] == player.sign && theBoard[0][1] == player.sign && theBoard[0][2] == player.sign){
        console.log(theBoard)
        console.log('we won')
    }
    else if(theBoard[1][0] == player.sign && theBoard[1][1] == player.sign && theBoard[1][2] == player.sign){
        console.log(theBoard)
        console.log('we won')
    }
    else if(theBoard[2][0] == player.sign && theBoard[2][1] == player.sign && theBoard[2][2] == player.sign){
        console.log(theBoard)
        console.log('we won')
    }
    //COLUMNS
    else if(theBoard[0][0] == player.sign && theBoard[1][0] == player.sign && theBoard[2][0] == player.sign){
        console.log(theBoard)
        console.log('we won')
    }
    else if(theBoard[0][1] == player.sign && theBoard[1][1] == player.sign && theBoard[2][1] == player.sign){
        console.log(theBoard)
        console.log('we won')
    }
    else if(theBoard[0][2] == player.sign && theBoard[1][2] == player.sign && theBoard[2][2] == player.sign){
        console.log(theBoard)
        console.log('we won')
    }
    //DIAGONALS
    else if(theBoard[0][0] == player.sign && theBoard[1][1] == player.sign && theBoard[2][2] == player.sign){
        console.log(theBoard)
        console.log('we won')
    }
    else if(theBoard[0][2] == player.sign && theBoard[1][1] == player.sign && theBoard[2][0] == player.sign){
        console.log(theBoard)
        console.log('we won')
    }
}

zero.onclick = function(){
    var myId = parseInt(zero.dataset.gridId)
    clickFunction(playerOne, playerTwo, zero, myId)
}
one.onclick = function(){
    var myId = parseInt(one.dataset.gridId)
    clickFunction(playerOne, playerTwo, one, myId)
}
two.onclick = function(){
    var myId = parseInt(two.dataset.gridId)
    clickFunction(playerOne, playerTwo, two, myId)
}
three.onclick = function(){
    var myId = parseInt(three.dataset.gridId)
    clickFunction(playerOne, playerTwo, three, myId)
}
four.onclick = function(){
    var myId = parseInt(four.dataset.gridId)
    clickFunction(playerOne, playerTwo, four, myId)
}
five.onclick = function(){
    var myId = parseInt(five.dataset.gridId)
    clickFunction(playerOne, playerTwo, five, myId)
}
six.onclick = function(){
    var myId = parseInt(six.dataset.gridId)
    clickFunction(playerOne, playerTwo, six, myId)
}
seven.onclick = function(){
    var myId = parseInt(seven.dataset.gridId)
    clickFunction(playerOne, playerTwo, seven, myId)
}
eight.onclick = function(){
    var myId = parseInt(eight.dataset.gridId)
    clickFunction(playerOne, playerTwo, eight, myId)
}