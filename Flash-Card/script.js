function eventListeners(){
    const showBtn = document.getElementById("show-btn");
    const questionCard = document.querySelector(".question-card");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("question-form");
    const feedback = document.querySelector(".feedback");
    const questionInput = document.getElementById("question-input");
    const answerInput = document.getElementById("answer-input");
    const questionList = document.getElementById("questions-list");
    let id;

    const ui = new UI();
    let data = ui.retrieveLocalStorgage();
    if (data.length > 0){
        id = (data[(data.length-1)].id)+1;
    } else {
        id = 1;
    }
    data.forEach(function(question){
        ui.addQuestion(questionList, question);
    })
    showBtn.addEventListener('click', function(){
        ui.showQuestion(questionCard);
    });
    closeBtn.addEventListener('click', function(){
        ui.hideQuestion(questionCard);
    });
    form.addEventListener('submit', function(event){
        event.preventDefault();

        const questionValue = questionInput.value;
        const answerValue = answerInput.value;

        if(questionValue === '' || answerValue === ''){
            feedback.classList.add('showItem', 'alert-danger');
            feedback.textContent = 'cannot add empty values';

            setTimeout(function(){
                feedback.classList.remove('alert-danger', 'showItem');    
            }, 3000)
        } else {
            const question =  new Question(id, questionValue, answerValue);
            data.push(question);
            ui.addToLocalStorage(data);
            id++;
            ui.addQuestion(questionList, question)
            ui.clearFields(questionInput, answerInput);
        }
    });

    questionList.addEventListener('click', function(event){
        event.preventDefault();
    if(event.target.classList.contains('delete-flashcard')){
        let id = event.target.dataset.id;

        questionList.removeChild(event.target.parentElement.parentElement.parentElement);

        let tempData = data.filter(function(item){
            return item.id !== parseInt(id);
        });
        data = tempData;
        ui.addToLocalStorage(data);

    } else if (event.target.classList.contains('show-answer')){
            event.target.nextElementSibling.classList.toggle('showItem');
    } else if (event.target.classList.contains('edit-flashcard')){

        let id = event.target.dataset.id;
        questionList.removeChild(event.target.parentElement.parentElement.parentElement);


        ui.showQuestion(questionCard);
        //find specific question clicked
        const tempQuestion = data.filter(function(item){
            return item.id === parseInt(id);
        });

        let tempData = data.filter(function(item){
            return item.id !== parseInt(id);
        });
        data = tempData;
        questionInput.value = tempQuestion[0].title;
        questionInput.value = tempQuestion[0].answer;
    }  
    });
}
function UI(){
    UI.prototype.showQuestion = function(element){
        element.classList.add('showItem');
    }
    UI.prototype.hideQuestion = function(element){
        element.classList.remove('showItem');
    }
    UI.prototype.addQuestion = function(element, question){
        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML = `<div class="card card-body flashcard my-3">
        <h4 class="text-capitalize">${question.title}</h4>
        <a href="#" class="text-capitalize my-3 show-answer">Show/Hide Answer</a>
        <h5 class="answer mb-3">${question.answer}</h5>
        <div class="flashcard-btn d-flex justify-content-between">
   
         <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="${question.id}">edit</a>
         <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase" data-id="${question.id}">delete</a>
        </div>
       </div>`;
       element.appendChild(div);
    }
    UI.prototype.addToLocalStorage = function(data){
        localStorage.clear();
        const dataJSON = JSON.stringify(data);
        localStorage.setItem('flash-questions', dataJSON)
    }
    UI.prototype.retrieveLocalStorgage = function(){

        let savedQuestions = localStorage.getItem('flash-questions');
        if (savedQuestions){
            const savedQuestionsParsed = JSON.parse(savedQuestions);
            return savedQuestionsParsed;
        } else {
            return savedQuestions = [];
        }
        
    }

    UI.prototype.clearFields = function(question, answer){
        question.value = '';
        answer.value = '';
    }
}
function Question(id, title, answer){
    this.id = id;
    this.title = title;
    this.answer = answer;
}
document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
})