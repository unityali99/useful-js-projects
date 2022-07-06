var answered = 0;
var step = 1;

const showResult = () =>
{
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('next').style.display = 'none';
    document.getElementById('main').innerHTML += 
    `<h1 class="text-center font-weight-bold text-info mt-5">Correctly Answered: ${answered} of ${step - 1}</h1>
    <button onclick="location.reload();" class="btn btn-warning w-25 btn-outline-success btn-block mt-4 mx-auto">RESET</button>`
}

const changeQuestion = () =>
{
    setClock();
    let question = document.getElementById('question');
    let radio1 = document.getElementById('test1-1');
    let answer1 = document.getElementById('answer1-1');
    let radio2 = document.getElementById('test1-2');
    let answer2 = document.getElementById('answer1-2');

    switch (step) {
        case 2:
            question.innerHTML = 'When was the Islamic Revolution of Iran ?';
            radio1.value = '0';
            answer1.value = '1789';
            radio2.value = '1';
            answer2.value = '1978';
            radio1.checked = false;
            radio2.checked = false;
            break;

        case 3:
            question.innerHTML = 'When did the World War 1 happen ?';
            radio1.value = '1';
            answer1.value = '1914';
            radio2.value = '0';
            answer2.value = '1911';
            radio1.checked = false;
            radio2.checked = false;
            break;

        case 4:
            question.innerHTML = 'Who surrendered first at World War 2 ?';
            radio1.value = '1';
            answer1.value = 'Germany';
            radio2.value = '0';
            answer2.value = 'Soviet Union (Russia)';
            radio1.checked = false;
            radio2.checked = false;
            break;

        case 5:
            question.innerHTML = `What is the Official Weapon of USA's Army ? `;
            radio1.value = '1';
            answer1.value = 'M4-A1';
            radio2.value = '0';
            answer2.value = 'AK-47';
            radio1.checked = false;
            radio2.checked = false;
            break;

        case 6:
            question.innerHTML = 'Why did World War 1 start ?';
            radio1.value = '0';
            answer1.value = 'After Germany raided France';
            radio2.value = '1';
            answer2.value = 'After the assassination of Archduke Franz Ferdinand of Austria';
            radio1.checked = false;
            radio2.checked = false;
            break;

        case 7:
            question.innerHTML = 'Who became the first nation to use nuclear bomb during wartime ?';
            radio1.value = '0';
            answer1.value = 'Russia';
            radio2.value = '1';
            answer2.value = 'United States of America';
            radio1.checked = false;
            radio2.checked = false;
            break;

        case 8:
            question.innerHTML = 'According to 2019, How many nuclear bomb does the US have ?';
            radio1.value = '1';
            answer1.value = '6,185';
            radio2.value = '0';
            answer2.value = '6,400';
            radio1.checked = false;
            radio2.checked = false;
            break;

        case 9:
            question.innerHTML = 'When did the battle of belgium start ?';
            radio1.value = '1';
            answer1.value = '1940';
            radio2.value = '0';
            answer2.value = '1937';
            radio1.checked = false;
            radio2.checked = false;
            break;

            case 10:
                question.innerHTML = 'Which of the following countries did not take place during World War 2 ?';
                radio1.value = '1';
                answer1.value = 'Afghanistan';
                radio2.value = '0';
                answer2.value = 'Iran';
                radio1.checked = false;
                radio2.checked = false;
                break;
    
        default:
            showResult();
            clearInterval(interval);
            document.getElementById('count').innerHTML = '';
            break;
    }
}

const startQuiz = () =>
{
    startClock();
    document.getElementById('startbtn').disabled = true;
    document.getElementById('questionContainer').style.display = 'block';
    document.getElementById('next').style.display = 'block';
}

const enableNext = () =>
{
    document.getElementById('nextbtn').disabled = false;
}

const nextQuestion = () =>
{
    let element = document.getElementById('test1-1');
    let element2 = document.getElementById('test1-2');
    if (element.checked)
    {
        if (element.value === '1')
            {
                answered++;
                step++;
                changeQuestion();
                alert('Correct !');
                return;
            }
        
        alert('Incorrect !');
        step++;
        changeQuestion();
    }

    else if (element2.checked)
    {
        if (element2.value === '1')
            {
                answered++;
                step++;
                changeQuestion();
                alert('Correct !');
                return;
            }
        
        alert('Incorrect !');
        step++;
        changeQuestion();
    }
    else
    {
        alert('Incorrect !');
        step++;
        changeQuestion();
    }
}