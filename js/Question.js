class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter your name....")
   //Create a input box to enter the number
    this.input2 = createInput("Enter your answer")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3");
    this.option1 = createElement("h4");
    this.option2 = createElement("h4");
    this.option3 = createElement("h4");
    this.option4 = createElement("h4");
    

    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.input2.hide();





  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    
    this.input2.position(350,230 );
    this.question.html("Which animal lives in antartica?");
    this.option1.html("Penguin");
    this.option2.html("Polar Bear");
    this.option3.html("Camel");
    this.option4.html("Lion");

    this.question.position(100, 100);
    this.option1.position(100, 150);
    this.option2.position(100, 200);
    this.option3.position(100, 250);
    this.option4.position(100, 300);

    //Create html() and position() for each question, input and answers.




    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
       this.message.html("Your answer has been submitted")
       this.message.position(350)
    })


  }
}
