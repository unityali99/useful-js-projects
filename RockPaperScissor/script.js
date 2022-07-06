var computerChoice;
var myChoice;
var items = ['SCISSOR','ROCK','PAPER'];
var winner;
var userScore = 0, pcScore = 0;

const endGame = () =>
{
    userScore = 0;
    pcScore = 0;
    alert('Game is over ! Restarting ...')
    printScore();
}

const getRandomNum = (min, max) => 
{
    max += 1;
    return Math.floor(Math.random() * (max - min) + min);
}

const printScore = () =>
{
    document.getElementsByClassName('scoreuser')[0].innerHTML = 'You: ' + userScore;
    document.getElementsByClassName('scorepc')[0].innerHTML = 'Computer: ' + pcScore;
}

const compareResult = (user,computer) =>
{
    if(user === computer)
        return 'draw'.toUpperCase();

    if(user === items[0])
    {
        if(computer === items[1])
        {
            pcScore++;
            return '<div style="color:orange">Computer Won !</div>';
        }
        else if(computer === items[2])
        {
            userScore++;
            return '<div style="color:lightgreen">You Won !</div>';
        }
    }

    if(user === items[1])
    {
        if(computer === items[0])
        {
            userScore++;
            return '<div style="color:lightgreen">You Won !</div>';
        }
        else if(computer === items[2])
        {
            pcScore++;
            return '<div style="color:orange">Computer Won !</div>';
        }
        }

    if(user === items[2])
    {
        if(computer === items[0])
        {
            pcScore++;
            return '<div style="color:orange">Computer Won !</div>';
        }
        else if(computer === items[1])
        {
            userScore++;
            return '<div style="color:lightgreen">You Won !</div>';
        }
    }
}

const computerPlay = () =>
{
    //random num shoud be created
    computerChoice = items[getRandomNum(0,2)];
}

const playRock = () =>
{
    myChoice = "rock".toUpperCase();
    computerPlay();
    winner = compareResult(myChoice,computerChoice);
    document.getElementsByClassName('win')[0].innerHTML = winner;
    document.getElementsByClassName('win')[0].innerHTML = winner;
    document.getElementsByClassName('selectionpc')[0].innerHTML = 'Computer Selected: ' + computerChoice;
    document.getElementsByClassName('selectionuser')[0].innerHTML = 'You Selected: ' + myChoice;
    printScore();
    if(userScore == 20 || pcScore == 20)
        endGame();
}

const playPaper = () =>
{
    myChoice = "paper".toUpperCase();
    computerPlay();
    winner = compareResult(myChoice,computerChoice);
    document.getElementsByClassName('win')[0].innerHTML = winner;
    document.getElementsByClassName('selectionpc')[0].innerHTML = 'Computer Selected: ' + computerChoice;
    document.getElementsByClassName('selectionuser')[0].innerHTML = 'You Selected: ' + myChoice;
    printScore();
    if(userScore == 20 || pcScore == 20)
        endGame();
}

const playScissor = () =>
{
    myChoice = "scissor".toUpperCase();
    computerPlay();
    winner = compareResult(myChoice,computerChoice);
    document.getElementsByClassName('win')[0].innerHTML = winner;
    document.getElementsByClassName('selectionpc')[0].innerHTML = 'Computer Selected: ' + computerChoice;
    document.getElementsByClassName('selectionuser')[0].innerHTML = 'You Selected: ' + myChoice;
    printScore();
    if(userScore == 20 || pcScore == 20)
        endGame();
}

