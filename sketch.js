var gameState = 0;
var contestantCount;
var allContestants;
var quiz;
var question;
var contestant;
var database;


function setup(){
  canvas = createCanvas(860,600);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.Start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.Play();
  }
  
}
