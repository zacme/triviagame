$(document).ready(function () {

    // event listeners



    // trivia properties
    //timer is set to a value of 10
    var timer = 10;
    //score starts at 0
    var correct = 0;
    //incorrect score starts at 0
    var incorrect = 0;
    // all indexes start at 0
    var index = 0;
    //counter is a variable but not assigned
    var counter;

    // questions: {
    //   q1: '',
    //   q2: 'What weapon does Thor use?',
    //   q3: 'What is Bruce Banners alter ego?',
    //   q4: 'Where is Captian America from?',
    //   q5: "Where is Peter Quill from?",
    //   q6: 'Who thinks they are invisible if they stand very still?',
    //   q7: "Which villian did Tony and Bruce create?"

    // questions options and answers data
    //Javascript allows for an array to be made. 
    //Each question has the choices and answers to go along with it
    var questions = [{
        q: "Who is Iron Man?",
        c: ['Steve Rodgers', 'Peter Parker', 'Tony Hawk', 'Tony Stark'],
        a: 3
    },
    {
        q: "What weapon does Thor use?",
        c: ['A screwdriver', 'A shield', 'A hammer', 'A bow and arrow'],
        a: 2
    },
    {
        q: "What is Bruce Banner's alter ego?",
        c: ["Captain America", "Spider-Man", "Hulk", "Hawkeye"],
        a: 2
    },
    {
        q: "Where is Captian America from?",
        c: ["Phoenix, AZ", "Albuquerque, NM", "Durango, CO", "Farmington, NM", "Brooklyn, NY"],
        a: 4
    },
    {
        q: "Who thinks they are invisible if they stand very still?",
        c: ["Drax", "Peter Quill", "Gamora", "Rocket"],
        a: 0
    },
    {
        q: "Which villian did Tony Stark and Bruce Banner accidentally make?",
        c: ["Joker", "Ultron", "Ego", "Red Skull"],
        a: 1
    }
    ]



    //timer function. If timer is on subtract 1 second from it. 
    //this is the main thing to learn
    // need a functin for javascript to work
    //-- means subtract the time from the 10 second mark
    function count() {

        if (timer) {
            timer--;
            $('#timer').text(timer)
            //Else if the timer is at 0, put timer at 10 seconds again and move to next question.
        } else {
            index++;
            timer = 10;
            appendQ()
        }
    }

    //function to go to next question
    function appendQ() {
        //display score
        $('#score').text(` correct - ${correct} incorrect - ${incorrect} `)
        //index will be equivalent to the questions length array from the top
        //if user has went through all the questions then 
        //game will end and clear the counter
        if (index === questions.length) {
            clearInterval(counter);
            endGame();
        //otherwise game will display the question
        } else {
            $('#qDiv').html(questions[index].q);
            //a div will have an empty string
            $('#aDiv').html('');
            //each choice will be made into buttons
            questions[index].c.forEach(function (ele, i) {
                $('#aDiv').append(`<button class='btn btn-md btn-secondary' id=${i}>${ele}</button>`)
            })
        }
    }
//make sure the correct answer is aligning with the answer choices from above
    function checkAnswer(id) {
        // if the choice the user has chosen is matched with the correct answer
        // Put the score as +1
        if (id == questions[index].a) {
            correct++;
        // otherwise if it doesn't match then display 
        //incorrect score of +1
        } else {
            incorrect++;
        }
        // then start over again with timer at 10 and next question
        timer = 10;
        index++;
        appendQ();
    }
// when game is over an alert will come up displaying the score to the user
    function endGame() {
        alert(`Game Over! Your Score is - ${correct} correct & ${incorrect} incorrect!`)
    }
    //When answers are chosen with a click run check answer function
    // to this choice from the question array

    $('#aDiv').on('click', 'button', function () {
        checkAnswer($(this).attr('id'))
    })
// starting game button
    $('#start-button').on('click', function () {
        counter = setInterval(count, 1000);
        appendQ()
    })

   