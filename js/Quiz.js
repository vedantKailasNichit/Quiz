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
    //write code here to hide question elements
    question.hide();
    textSize(30);
    fill(0);
    background('Yellow');
    text('result',340,50);
    Contestant.getPlayerInfo();
    if(allContestants != undefined){
      fill('blue');
      textSize(20)
      text('Correct answer is highlighted in green:',130,230)
      debugger;
      var displayAnswer = 230;
    }

    for(var plr in allContestants){
      debugger;
      var correctAnswer = "2";
      if(correctAnswer === allContestants[plr].answer)
        fill('Green')
      else
        fill('Red')
      
      displayAnswer += 30;
      textSize(20);
      text(allContestants[plr].name + "= " + allContestants[plr].answer, 250, displayAnswer);
    }

    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
