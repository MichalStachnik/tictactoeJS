const grid              = document.getElementById('grid')
const zero              = document.getElementById('zero')
const one               = document.getElementById('one')
const two               = document.getElementById('two')
const three             = document.getElementById('three')
const four              = document.getElementById('four')
const five              = document.getElementById('five')
const six               = document.getElementById('six')
const seven             = document.getElementById('seven')
const eight             = document.getElementById('eight')
const finished          = document.getElementById('finished')
const finishedTarget    = document.getElementById('finishedTarget')
const x                 = document.getElementById('x')
const o                 = document.getElementById('o')
const choiceDiv         = document.getElementById('choice')
const reset             = document.getElementById('reset')

var board = 
    [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
var playerOne = {
    sign : ''
}
var playerTwo = {
    sign : ''
}
function clickFunction(p1, p2, node, pos){
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
    console.log(board)
    let isOver = evaluate(board, playerOne)
    if(isOver[6]){
        finished.classList.toggle('active')
        finishedTarget.innerHTML = `You have won with [${isOver[0]}, ${isOver[1]}], [${isOver[2]}, ${isOver[3]}], & [${isOver[4]}, ${isOver[5]}]`
        return
    }
    //player1 turn done, start computer turn
    var rand1, rand2
    function makeRand(){
        rand1 = Math.floor(Math.random() * 3)
        rand2 = Math.floor(Math.random() * 3)
    }
    makeRand()
    //while there is something in visited node, make new randoms
    while(board[rand1][rand2].length != 0){
        console.log('tried', rand1, rand2)
        console.log('but taken')
        makeRand()
    }
    //update html dom node
    let nodes = document.querySelectorAll('.box')
    if(rand1 == 0){
        nodes[parseInt(rand2)].innerHTML = playerTwo.sign
    }
    else if(rand1 == 1){
        nodes[parseInt(rand2 + 3)].innerHTML = playerTwo.sign
    }
    else if(rand1 == 2){
        nodes[parseInt(rand2 + 6)].innerHTML = playerTwo.sign
    }
    board[rand1][rand2] = playerTwo.sign
    isOver = evaluate(board, playerTwo)
    if(isOver[6]){
        finished.classList.toggle('active')
        finishedTarget.innerHTML = `Computer has won with [${isOver[0]},${isOver[1]}], [${isOver[2]},${isOver[3]}], & [${isOver[4]},${isOver[5]}]`
    }
}
function evaluate(theBoard, player){
    //ROWS
    if(theBoard[0][0] == player.sign && theBoard[0][1] == player.sign && theBoard[0][2] == player.sign){
        console.log(`${player.sign} player won`)
        return [0, 0, 0, 1, 0, 2, true]
    }
    else if(theBoard[1][0] == player.sign && theBoard[1][1] == player.sign && theBoard[1][2] == player.sign){
        console.log(`${player.sign} player won`)
        return [1, 0, 1, 1, 1, 2, true]
    }
    else if(theBoard[2][0] == player.sign && theBoard[2][1] == player.sign && theBoard[2][2] == player.sign){
        console.log(`${player.sign} player won`)
        return [2, 0, 2, 1, 2, 2, true]
    }
    //COLUMNS
    else if(theBoard[0][0] == player.sign && theBoard[1][0] == player.sign && theBoard[2][0] == player.sign){
        console.log(`${player.sign} player won`)
        return [0, 0, 1, 0, 2, 0, true]
    }
    else if(theBoard[0][1] == player.sign && theBoard[1][1] == player.sign && theBoard[2][1] == player.sign){
        console.log(`${player.sign} player won`)
        return [0, 1, 1, 1, 2, 1, true]
    }
    else if(theBoard[0][2] == player.sign && theBoard[1][2] == player.sign && theBoard[2][2] == player.sign){
        console.log(`${player.sign} player won`)
        return [0, 2, 1, 2, 2, 2, true]
    }
    //DIAGONALS
    else if(theBoard[0][0] == player.sign && theBoard[1][1] == player.sign && theBoard[2][2] == player.sign){
        console.log(`${player.sign} player won`)
        return [0, 0, 1, 1, 2, 2, true]
    }
    else if(theBoard[0][2] == player.sign && theBoard[1][1] == player.sign && theBoard[2][0] == player.sign){
        console.log(`${player.sign} player won`)
        return [0, 2, 1, 1, 2, 0, true]
    }
    else{
        return false
    }
}

x.onclick = function(){
    choiceDiv.className += 'isDone'
    playerOne.sign = 'X'
    playerTwo.sign = 'O'
}
o.onclick = function(){
    choiceDiv.className += 'isDone'
    playerOne.sign = 'O'
    playerTwo.sign = 'X'
}
zero.onclick = function(){
    var myId = parseInt(zero.dataset.gridId)
    if(zero.innerHTML == ''){
        clickFunction(playerOne, playerTwo, zero, myId)
    }
}
one.onclick = function(){
    var myId = parseInt(one.dataset.gridId)
    if(one.innerHTML == ''){
        clickFunction(playerOne, playerTwo, one, myId)
    }
}
two.onclick = function(){
    var myId = parseInt(two.dataset.gridId)
    if(two.innerHTML == ''){
        clickFunction(playerOne, playerTwo, two, myId)
    }
}
three.onclick = function(){
    var myId = parseInt(three.dataset.gridId)
    if(three.innerHTML == ''){
        clickFunction(playerOne, playerTwo, three, myId)
    }
}
four.onclick = function(){
    var myId = parseInt(four.dataset.gridId)
    if(four.innerHTML == ''){
        clickFunction(playerOne, playerTwo, four, myId)
    }
}
five.onclick = function(){
    var myId = parseInt(five.dataset.gridId)
    if(five.innerHTML == ''){
        clickFunction(playerOne, playerTwo, five, myId)
    }
}
six.onclick = function(){
    var myId = parseInt(six.dataset.gridId)
    if(six.innerHTML == ''){
        clickFunction(playerOne, playerTwo, six, myId)
    }
}
seven.onclick = function(){
    var myId = parseInt(seven.dataset.gridId)
    if(seven.innerHTML == ''){
        clickFunction(playerOne, playerTwo, seven, myId)
    }
}
eight.onclick = function(){
    var myId = parseInt(eight.dataset.gridId)
    if(eight.innerHTML == ''){
        clickFunction(playerOne, playerTwo, eight, myId)
    }
}
reset.onclick = function(){
    finished.classList.toggle('active')
    board = 
    [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    var boxes = document.querySelectorAll('.box')
    boxes.forEach((box) => box.innerHTML = '')
}