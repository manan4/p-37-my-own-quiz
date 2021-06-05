class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

  /*title.hide();
  input1.hide();
  button.hide();
  input2.hide();*/

    fill("lightGreen")
    textSize(30);
    text("Game Start",120,100);

    Contestant. getContestantInfo();

    if(allcontestant !==undefined){
      fill("lightBlue")
      textSize(20);
      text("note: contestant who answer correct arehighlighted in lightPurple color",130,230);

      for(var plr in allContestants){
        correctAns = "2"
          if(correctAns === allContestants[plr].answer){
              fill ("lightPurple")
          }
          else{
              fill ("red")
          } 
      }
  }


  }

}
