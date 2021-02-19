class Question{
    constructor(){
        this.button = createButton('Submit');
        this.input1 = createInput('Enter Your Name');
        this.input2 = createInput('Enter Correct option No.');
        this.title = createElement('h1');
        this.question = createElement('h4');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
    }

    display(){
    this.button.position(200,300)

    this.title.html('My Quiz')
    this.title.position(350,0);

    this.question.html('Which Month Of The Year Has Days?')
    this.question.poition(150,80);
    
    this.option1.html('1: January');
    this.option1.position(150,100)

    this.option2.html('2: February');
    this.option2.position(150,120)

    this.option3.html('3: April');
    this.option3.position(150,140)

    this.option4.html('4: All Of The Above');
    this.option4.position(150,160)

    this.input1.position(150,200)
    this.input2.position(350,200)


    this.button.mousePressed(()=>{
        this.title.hide();
        this.button.hide();
        this.input1.hide();
        this.input2.hide();
        contestant.name = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
    })

    }
}