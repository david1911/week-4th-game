

var variableTotalScore = 0;
var winingValueTotal = 0;
var CrystalBtn1 = 0;
var CrystalBtn2 = 0;
var CrystalBtn3 = 0;
var CrystalBtn4 = 0;

var Totalwins = 0;
var Totallose = 0;


// reset the game board
function resetGame() {
	


	// reset the value as 0
	variableTotalScore = 0;
	$("#FinalTotalScore").text(variableTotalScore);
	// generate new random value
	winingValueTotal = Math.floor(Math.random()*(120-19))+19;
	$("#WinningTotal").text(winingValueTotal); 
	$("#Totalwins").text(Totalwins);
	$("#Totallose").text(Totallose);

	// assign crystal buttons with new values
	CrystalBtn1 = Math.floor(Math.random()*(12-1))+1; 
	CrystalBtn2 = Math.floor(Math.random()*(12-1))+1;
	CrystalBtn3 = Math.floor(Math.random()*(12-1))+1;
	CrystalBtn4 = Math.floor(Math.random()*(12-1))+1;
	// hide You won and You lose message. 
	

}

// capture clicks from the user
 $(document).ready(function(){
 	resetGame();
 	$("#WinMSG").hide();
	$("#LoseMSG").hide();
    var btn = $(".btn");    

        btn.click(function(e) {
		        	$("#WinMSG").hide();
					$("#LoseMSG").hide();
        	if(e.target.id=="Btn1"){
        		variableTotalScore=CrystalBtn1+variableTotalScore;
        	}
        	if(e.target.id=="Btn2"){
        		variableTotalScore=CrystalBtn2+variableTotalScore;
        	}
        	if(e.target.id=="Btn3"){
        		variableTotalScore=CrystalBtn3+variableTotalScore;
			}
			if(e.target.id=="Btn4"){
        		variableTotalScore=CrystalBtn4+variableTotalScore;
        	}        	
        	
        	$("#FinalTotalScore").text(variableTotalScore)

        	evaluateAddedValue()
        });
    });

// evaluate whether the user has won or lost
function evaluateAddedValue() {
	if(winingValueTotal==variableTotalScore){
		$("#WinMSG").show();
		Totalwins++;
		resetGame();
	}


	if(winingValueTotal < variableTotalScore){
		$("#LoseMSG").show();	
		Totallose++;
		resetGame();
	}
	
}

