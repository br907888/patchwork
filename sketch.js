let storyState = "title";
let sloaneCount = 0;
let ambroseCount = 0;
let asterCount = 0;
let adrienCount = 0;
let strengthCheck = false;
let hermitCheck = false;
let empressCheck = false;
let towerCheck = false;
let devilCheck = false;
let temperanceCheck = false;
let emperorCheck = false;
let sunCheck = false;
let loversCheck = false;
let strengthArt;
let hermitArt;
let empressArt;
let towerArt;
let devilArt;
let temperanceArt;
let emperorArt;
let sunArt;
let loversArt;
let scrierArt;
let textIntroOne = "The November rain pelts against you as you trudge into the deserted town square. The midnight air reminds you of the only night you can remember completely: the day you woke up on the operating table. Looking down, you flex the cacophony of muscle and skin that makes up your arm, or is it someone else's? Your body is a collection of pieces crudely sewn together like a dilapitated toy doll."
let textIntroTwo = "Much like your physical form, your brain is a jumble of thoughts, memories, and past lives, but no matter how hard you concentrate, you can't piece anything together. Who were you before you were reanimated into this form? Who was your maker? Where does your path lie? Your only hope is that the Scrier, the reason why you ventured into the village, will have these answers."
let textIntroThree = "You enter into a small room off the side of a dank alleyway. Upon entering, you are met with the sight of a shrouded figure sitting before a worn table. The table is decorated with a deck of Tarot cards. The pile of cards seem to hum with an ancient, otherworldly energy. You almost feel pulled to the cards, untill the shoruded figure chuckles. \"I know why you're here and I am willing to help you. I am the Scrier, and my cards will answer what you ask. Come close, child.\""
let textPageOne = "\"Much like your reconstructed body, your identity is a patchwork of all that has come before you. The cards can inform you and can even echo with the call of a name, but it is up to you whether or not you respond to the call.\"";
let textPageOne2 = "The scrier motions over the cards and shuffles with blinding speed. \"Though your body is reanimated, your mind belonged to another host before their untimely demise. This first draw will offer insight into your relationship with the host.\""
let cardDraw = "";
let textStrengthOne = "A life of tempest, a storm unquelled,\n A refuge found in one's own hell.\n Hands stained with blood, mouth wrought with pleasure,\nA verse of violence fills this measure."
let textStrengthTwo = "\"Like the card reads, a history of violence characterizes your host's life. Organized crime, murder, and pleasure seemed to be intrinsic to your past life. The card of Strength represents a pursuit of power and wealth, but reversed, the card refers to tortorous instability and a tendency to lose oneself. Perhaps this life was more of a prison prior to your reanimation.\""
let textHermitOne = "Elixir of life, food of the mind, \n Knowledge of light is brought to the blind.\n Hands stained with ink, eyes filled with hunger,\n The greatest study is that of wonder."
let textHermitTwo = "\"Much like the Hermit card, a history of deep introspection marks your host's life. I see a voracious appetite for truth and knowledge as one of the leading philosophers in your field. While this quest for illumination brought purpose and wonder, it seems to have led to isolation and a refusal to accept a change in perspective when that truth was found, leading to your first demise.\""
let textEmpressOne = "Season of harvest, lush in its fruit,\n The roots of the household are firm, resolute.\n Hands stained with earth, heart free from toil,\n A home has been nourished beneath the soil."
let textEmpressTwo = "\"The Empress refers to a period of grounding and deep nourishment in your pursuits. I see hard labor characterized your journey, but with it, you built a family that was treated with the utmost care. Your craft fed the people who relied on you, and you in turn relied on their love to find purpose. Unfortunately, I sense that a great tragedy resulted in you burying all you held dear.\""
let textPageTwo = "The Scrier leans back from the table.\"With the first piece of the puzzle solved, the next draw will delve into your relationship with the one who brought you to life: the Doctor with the hubris of a false god.\""
let textTowerOne = "Like the tale of Icarus in legends long gone,\nThe maker saw horror when he looked at the son. \nHe wanted to burn the failure with fire \n And throw what he made from the height of the spire."
let textTowerTwo = "\"The Tower represents the consequences of false doctrine and hubris. It seems your maker was so obsessed with challenging the natural order that he did not account for the natural order to take its course. Caring for you did not relate to his intended vision, and in horror, he fled from you, wanting nothing to do with you. However, you live as his supposed \"failure.\" The life you lead now is one of phenomenal promise, despite what your maker thought about you.\""
let textDevilOne ="The great evil within starts as benign,\nBut twists and tangles like cursed twine.\nThe father chips his child away\nWhile trying to force elixir from clay."
let textDevilTwo = "\"This card relfects more of your maker's state than that of your own. An obsessive pattern of using you as an instrument to fulfill his goals clouded the mind of your maker. You were viewed merely as an experiment rather than as the individual you are. This cycle of neglect and torture seems to be the reason why you broke free and destroyed the work of your creator along with your departure.\""
let textTemperanceOne = "The father grows life from the galvanized vine\nAnd learns to view that life as divine.\nThe mind is nurtured, the spirit is fed\nAt the table where parent and child break bread."
let textTemperanceTwo = "\"Your time with the maker reflects a period of great harmony, according to Temperance. It seems the maker felt a sense of paternal protection over you, which blossomed into a genuine familial bond between the two of you. He passed on what he knew to you and you surprised him with your understanding and eagerness. It seems that an accident separated the two of you, but I suspect he's still searching for his lost pupil.\""
let textPageThree = "The scrier's eyes widen. \"The needle ties the patches together with greater precision. One final draw remains, one that reveals the relationship between you and the purpose for which you were created.\""
let textEmperorOne = "The flag of the father flies high in the aether.\nThe House of Frankenstein reigns forever.\nThis weapon of conquest, the hand of the knife\nIs the false child the master wrought to life."
let textEmperorTwo = "\"As the card reveals, your purpose was that of controlled fear and chaos. The maker, bitter and angry with his contemporaries, developed you to one day decimate all who opposed him. He viewed you as the right hand in his conquest and thought you as easy to be controlled. While this purpose is grim in essence, the future may offer a path to transformation.\""
let textSunOne = "Flame of the gods, kept high in the skies\nObscured from the gaze of a mortal's eyes.\nThis arcane spark in a human hand\nWould live on as all reduced to sand."
let textSunTwo = "\"An air of confidence characterizes the Sun, which also permeates the purpose of which you were made for. It seems you were designed as an ultimate exercise in vanity, to prove that your maker was above the divine in his pursuit of life. You were to serve as his testament long after he passed.\""
let textLoversOne = "The soul strengthens in the care of another, \nBe it love from the partner or love from the brother.\nThis sacred bond, the maker did rend\nInto the body of one that he could call friend."
let textLoversTwo = "\"It seems as though that the maker was starved for companionship and wanted someone to share in his pursuits. What amuses me is that the maker resorted to building an entire organism to fulfill this goal, with no way to tell how his creation would grow as a person.\""
let textPageFour = "The path from whence you came had been revealed, and it has shed light on the tapestry that makes you who you are. A name calls out to me from the arcane charge within you. But remember, you are greater than the collection of tissue and memories that make you who you are. You are the arbiter of how this name shall be etched in history, should you accept it."
let sloaneText = "\"The name Sloane reflects an inner quest for control over one's story. On a path that has met you with violence, fear, and a thirst for power, it is within your ability to reclaim what was taken from you. It is your destiny to fight against the shadows of the past with the spark that courses through your veins.\""
let ambroseText = "\"The name Ambrose reflects a connection to the divine that encompasses our very being. In an effort to replicate that of the divine, your maker did not account for the very sacred nature of your soul as it is. Your being has a tremendous capacity to share that divinity and transform those around you with the knowledge that you possess.\""
let asterText = "\"The name Aster reflects a tendency to nurture and illuminate with the warm light of the inner star. Much of your path has been forged by the light of those who have poured into you, and your cup overflows with the nourishment of community. Aster is a beckoning call to cultivate a sense of community and serve others.\""
let adrianText = "\"Like the formless ocean, teeming with life, Adrian is a name that reflects a sense of potential energy waiting to be unleashed. Your path has been characterized by currents of power, enlightenment, and cultivation all within the short span of your life. Through these experiences, you have become a true mythic figure and master of the ways of the heart. Your vessel stands against the vast waves over an endless sea, and you have full agency over where you want to go next.\""
let answerText = "The Scrier stands from the table.\"It seems your name has been called to you, my friend. Do you answer the call, or do you wait for another name to respond to?\""
let affirmText = "With your new name and a new perspective on your identity, you thank the Scrier and leave. While the future may be unclear, you feel a sense of reclamation, and for the first time, you finally have a way forward."
let rejectText = "Though you reject the name the cards called forth, you thank the Scrier and leave. While your true name has yet to reveal itself, you still walk away with a sense of reclamation. You may not have all the answers, but for the first time, you finally have a way forward."
async function setup() {
titleFont = await loadFont("assets/patchtitle.ttf");
strengthArt = await loadImage("assets/strengthnew.png");
hermitArt = await loadImage("assets/hermitnew.png");
empressArt = await loadImage("assets/empressnew.png");
towerArt = await loadImage("assets/tower.png");
devilArt = await loadImage("assets/devil.png");
temperanceArt = await loadImage("assets/temperance.png");
emperorArt = await loadImage("assets/emperor.png");
sunArt = await loadImage("assets/sun.png");
loversArt = await loadImage("assets/lovers.png");
frankArt = await loadImage("assets/frank.png");
heartArt = await loadImage("assets/heart.png");
scrierArt = await loadImage("assets/scrier.png");
  createCanvas(windowWidth, 900);
rectMode(CENTER);

}
function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0,0,0);
 if (storyState === "title"){
   drawTitle();
 } else if (storyState === "pageOne"){
   drawPageOne();
 } else if (storyState === "hostCard"){
   drawHostCard();
 } else if (storyState === "pageTwo"){
   drawPageTwo();
 } else if (storyState === "doctorCard"){
   drawDoctorCard();
 } else if (storyState === "pageThree"){
   drawPageThree();
 } else if (storyState === "purposeCard"){
   drawPurposeCard();
 } else if (storyState === "pageFour"){
   drawPageFour();
 } else if (storyState === "name"){
   drawName();
 } else if (storyState === "intro"){
   drawIntro();
 } else if (storyState === "answer"){
   drawAnswer();
 } else if (storyState === "affirm"){
   drawAffirm();
 } else if (storyState === "reject"){
   drawReject();
 }
   
 }


//page functions

function drawTitle(){
  textStyle(NORMAL);
  noSmooth();
  textAlign(CENTER, CENTER);
  textSize (100);
  fill(255, 224, 0)
  textFont(titleFont);
  text("Patchwork",width /2,(height /2) - 200);
  image(frankArt, (width/2)-250,(height/2)-220,500,500);
  textSize (30);
  fill(255, 251, 220)
  textFont("Palatino");
  noStroke();
  text("Click to Continue",width /2,(height /2) + 250);
  stroke(255,224,0)
  
  noFill();
  
  rect(width /2,(height /2), 800, 600, 5);
  
}

function drawPageOne(){
  textAlign(CENTER, CENTER);
  textSize(20)
  fill(255, 251, 220)
  noStroke();
  text(textPageOne, (width /2),(height /2)-250, 700,300);
  image(scrierArt, (width/2)-200,(height/2)-250, 400, 400);
  text(textPageOne2, (width /2),(height /2)+ 100, 700,300);
   text("Click to Shuffle",width /2,(height /2) + 320);
  stroke(255,224,0)
  noFill();
  rect(width /2,(height /2), 800, 800, 5);
}
function drawIntro(){
  textAlign(CENTER, CENTER);
  textSize(20)
  fill(255, 251, 220)
  noStroke();
  text(textIntroOne, (width /2),(height /2)-300, 700,300);
  text(textIntroTwo, (width /2),(height /2)-100, 700,300);
  text(textIntroThree, (width /2),(height /2)+ 100, 700,300);
   text("Click to Continue",width /2,(height /2) + 320);
  stroke(255,224,0)
  noFill();
  rect(width /2,(height /2), 800, 800, 5);
  
}
// host card
function drawHostCard(){
  
  textSize(20)
   fill(255, 251, 220)
    noStroke();
  text("Click to Continue",width /2,(height /2) + 300);
  if(cardDraw === 1){
    strengthCheck = true;
    textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    fill(255,224,0)
    textSize (50);
    text("Strength",(width /2),(height /2) -300, 700, 300)
    image(strengthArt,(width /2) + 50 ,(height /2) - 250, 400,400 )
    textSize(20)
    textAlign(LEFT,CENTER)
    textStyle(ITALIC)
    fill(255, 251, 220)
    noStroke();
    text(textStrengthOne, (width /2)- 100,(height /2) - 50, 700,300)
    textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    text(textStrengthTwo, (width /2),(height /2) + 200, 700,300)
    stroke(255,224,0)
  noFill();
  rect(width /2,(height /2), 1000, 750, 5);
    image(heartArt, (width/2)-70, (height/2)-430, 120 ,120);
    //if (sloaneCount > 1){
      //text("yes", 300, 300 ,300 ,300)
    //}
    } else if(cardDraw === 2){
    hermitCheck = true;
     textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    fill(255,224,0)
    textSize (50);
    text("The Hermit",(width /2),(height /2) -300, 700, 300)
    image(hermitArt,(width /2) + 50 ,(height /2) - 250, 400,400 )
    textSize(20)
    textAlign(LEFT)
    textStyle(ITALIC)
    fill(255, 251, 220)
    noStroke();
    text(textHermitOne,(width /2)- 100,(height /2)- 50 ,700,300)
    textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    text(textHermitTwo, (width /2),(height /2) + 200, 700,300)
      stroke(255,224,0)
    noFill();
  rect(width /2,(height /2), 1000, 750, 5);
    image(heartArt, (width/2)-70, (height/2)-430, 120 ,120);
    } else if(cardDraw === 3){
    empressCheck = true;
    textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    fill(255,224,0)
    textSize (50);
    text("The Empress",(width /2),(height /2) -300, 700, 300)
    image(empressArt,(width /2) + 50 ,(height /2) - 250, 400,400 )
    textSize(20)
    textAlign(LEFT)
    textStyle(ITALIC)
    fill(255, 251, 220)
      noStroke();
    text(textEmpressOne, (width /2)-100,(height /2)-50, 700,300)
    textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    text(textEmpressTwo, (width /2),(height /2) + 200, 700,300)
     stroke(255,224,0)
  noFill();
  rect(width /2,(height /2), 1000, 750, 5);
    image(heartArt, (width/2)-70, (height/2)-430, 120 ,120);
    }
}
// page two
function drawPageTwo(){
  textAlign(CENTER, CENTER);
  textStyle(NORMAL);
  textSize(20)
  fill(255, 251, 220);
  noStroke();
  image(scrierArt, (width/2)-200,(height/2)-100, 400, 400);
  text(textPageTwo, (width /2),(height /2)-100, 700,300);
  text("Click to Shuffle",width /2,(height /2) + 220);
  stroke(255,224,0)
  noFill();
  rect(width /2,(height /2), 800, 600, 5);
}
// doctor card
function drawDoctorCard(){
  
  textSize(20)
  fill(255, 251, 220)
    noStroke();
  text("Click to Continue",width /2,(height /2) + 300);
  if(cardDraw === 1){
    towerCheck = true;
    textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    fill(255,224,0)
    textSize (50);
    text("The Tower",(width /2),(height /2) -300, 700, 300)
    image(towerArt,(width /2) + 50 ,(height /2) - 250, 400,400 )
    textSize(20)
    textAlign(LEFT)
    textStyle(ITALIC)
    fill(255, 251, 220)
    noStroke();
    text(textTowerOne, (width /2)-100,(height /2)-50, 700,300)
    textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    text(textTowerTwo, (width /2),(height /2) + 200, 700,300)
    stroke(255,224,0)
  noFill();
  rect(width /2,(height /2), 1000, 750, 5);
    image(heartArt, (width/2)-70, (height/2)-430, 120 ,120);
    //if (sloaneCount > 1){
      //text("yes", 300, 300 ,300 ,300)
    //}
    } else if(cardDraw === 2){
    devilCheck = true;
    textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    fill(255,224,0)
    textSize (50);
    text("The Devil",(width /2),(height /2) -300, 700, 300)
    image(devilArt,(width /2) + 50 ,(height /2) - 250, 400,400 )
    textSize(20)
    textAlign(LEFT)
    textStyle(ITALIC)
    fill(255, 251, 220)
      noStroke();
    text(textDevilOne,(width /2)-100,(height /2)-50 ,700,300)
    textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    text(textDevilTwo, (width /2),(height /2) + 200, 700,300)
      stroke(255,224,0)
    noFill();
  rect(width /2,(height /2), 1000, 750, 5);
    image(heartArt, (width/2)-70, (height/2)-430, 120 ,120);
    } else if(cardDraw === 3){
    temperanceCheck = true;
    textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    fill(255,224,0)
    textSize (50);
    text("Temperance",(width /2),(height /2) -300, 700, 300)
    image(temperanceArt,(width /2) + 50 ,(height /2) - 250, 400,400 )
    textSize(20)
    textAlign(LEFT)
    textStyle(ITALIC)
    fill(255, 251, 220)
    noStroke();
    text(textTemperanceOne, (width /2)-100,(height /2)-50, 700,300)
    textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    text(textTemperanceTwo, (width /2),(height /2) + 200, 700,300)
     stroke(255,224,0)
  noFill();
  rect(width /2,(height /2), 1000, 750, 5);
    image(heartArt, (width/2)-70, (height/2)-430, 120 ,120);
    }
}

function drawPageThree(){
  textAlign(CENTER, CENTER);
  textStyle(NORMAL);
  textSize(20)
  fill(255, 251, 220)
  noStroke();
  text(textPageThree, (width /2),(height /2)-100, 700,300);
  image(scrierArt, (width/2)-200,(height/2)-100, 400, 400);
  text("Click to Shuffle",width /2,(height /2) + 220);
  stroke(255,224,0)
  noFill();
  rect(width /2,(height /2), 800, 600, 5);
}

function drawPageFour(){
  textAlign(CENTER, CENTER);
  textStyle(NORMAL);
  textSize(20)
  fill(255, 251, 220)
  noStroke();
  text(textPageFour, (width /2),(height /2)-100, 700,300);
   image(scrierArt, (width/2)-200,(height/2)-100, 400, 400);
  text("Click to Receive Name",width /2,(height /2) + 220);
  stroke(255,224,0)
  noFill();
  rect(width /2,(height /2), 800, 600, 5);
}

function drawPurposeCard(){
  textSize(20)
  fill(255, 251, 220)
    noStroke();
  text("Click to Continue",width /2,(height /2) + 300);
   if(cardDraw === 1){
     emperorCheck = true;
       textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    fill(255,224,0)
    textSize (50);
    text("The Emperor",(width /2),(height /2) -300, 700, 300)
    image(emperorArt,(width /2) + 50 ,(height /2) - 250, 400,400 )
    textSize(20)
    textAlign(LEFT)
    textStyle(ITALIC)
    fill(255, 251, 220)
    noStroke();
    text(textEmperorOne, (width /2)-100,(height /2)-50, 700,300)
     textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    text(textEmperorTwo, (width /2),(height /2) + 200, 700,300)
    stroke(255,224,0)
  noFill();
  rect(width /2,(height /2), 1000, 750, 5);
     image(heartArt, (width/2)-70, (height/2)-430, 120 ,120);
    //if (sloaneCount > 1){
      //text("yes", 300, 300 ,300 ,300)
    //}
    } else if(cardDraw === 2){
     sunCheck = true;
       textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    fill(255,224,0)
    textSize (50);
    text("The Sun",(width /2),(height /2) -300, 700, 300)
    image(sunArt,(width /2) + 50 ,(height /2) - 250, 400,400 )
    textSize(20)
    textAlign(LEFT)
    textStyle(ITALIC)
    fill(255, 251, 220)
      noStroke();
    text(textSunOne,(width /2)-100,(height /2)-50 ,700,300)
     textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    text(textSunTwo, (width /2),(height /2) + 200, 700,300)
      stroke(255,224,0)
    noFill();
  rect(width /2,(height /2), 1000, 750, 5);
     image(heartArt, (width/2)-70, (height/2)-430, 120 ,120);
    } else if(cardDraw === 3){
     loversCheck = true;
       textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    fill(255,224,0)
    textSize (50);
    text("The Lovers",(width /2),(height /2) -300, 700, 300)
    image(loversArt,(width /2) + 50 ,(height /2) - 250, 400,400 )
    textSize(20)
    textAlign(LEFT)
    textStyle(ITALIC)
    fill(255, 251, 220)
      noStroke();
    text(textLoversOne, (width /2)-100,(height /2)-50, 700,300)
     textAlign(CENTER,CENTER)
    textStyle(NORMAL)
    text(textLoversTwo, (width /2),(height /2) + 200, 700,300)
     stroke(255,224,0)
  noFill();
  rect(width /2,(height /2), 1000, 750, 5);
     image(heartArt, (width/2)-70, (height/2)-430, 120 ,120);
    }
}

function drawName () {
  textAlign(CENTER,CENTER);
  textStyle(NORMAL);
  textSize(20);
  textFont("Palatino");
  
  if(sloaneCount >= 2){
    fill(255,224,0)
  noStroke();
    textSize(60);
  text("Sloane",(width /2),(height /2)-350);
    textAlign(CENTER,CENTER);
  textStyle(NORMAL);
  textSize(20);
  textFont("Palatino");
    fill(255, 251, 220)
    text(sloaneText,(width /2),(height /2) +200, 700,300);

  } else if (ambroseCount >= 2){
  fill(255,224,0)
  noStroke();
    textSize(60);
  text("Ambrose",(width /2),(height /2)-350);
    textAlign(CENTER,CENTER);
  textStyle(NORMAL);
  textSize(20);
  textFont("Palatino");
    fill(255, 251, 220)
    text(ambroseText,(width /2),(height /2) +200, 700,300);

  } else if (asterCount >= 2){
  fill(255,224,0)
  noStroke();
    textSize(60);
  text("Aster",(width /2),(height /2)-350);
    textAlign(CENTER,CENTER);
  textStyle(NORMAL);
  textSize(20);
  textFont("Palatino");
    fill(255, 251, 220)
    text(asterText,(width /2),(height /2) +200, 700,300);

  } else {
  fill(255,224,0)
  noStroke();
    textSize(60);
  text("Adrian",(width /2),(height /2)-350);
    textAlign(CENTER,CENTER);
  textStyle(NORMAL);
  textSize(20);
  textFont("Palatino");
    fill(255, 251, 220)
    text(adrianText,(width /2),(height /2) +200, 700,300);
    
}
     stroke(255,224,0)
  noFill();
  rect(width /2,(height /2), 800, 800, 5);
  if (strengthCheck === true){
    
     textAlign(LEFT)
    textStyle(ITALIC)
    textSize(20)
    fill(255, 251, 220)
    noStroke();
    text(textStrengthOne, (width /2),(height /2)-240, 700,300)
    stroke(255,224,0)
  noFill();
  }else if (hermitCheck === true){
     textAlign(LEFT)
    textStyle(ITALIC)
    textSize(20)
    fill(255, 251, 220)
    noStroke();
    text(textHermitOne, (width /2),(height /2)-240, 700,300)
    stroke(255,224,0)
  noFill();
  }else if (empressCheck === true){
     textAlign(LEFT)
    textStyle(ITALIC)
    textSize(20)
    fill(255, 251, 220)
    noStroke();
    text(textEmpressOne, (width /2),(height /2)-240, 700,300)
    stroke(255,224,0)
  noFill();
  }
  if (towerCheck === true){
    textAlign(LEFT)
    textStyle(ITALIC)
    textSize(20)
    fill(255, 251, 220)
    noStroke();
    text(textTowerOne, (width /2),(height /2)-120, 700,300)
    stroke(255,224,0)
  noFill();
  }else if (devilCheck === true){
    textAlign(LEFT)
    textStyle(ITALIC)
    textSize(20)
    fill(255, 251, 220)
    noStroke();
    text(textDevilOne, (width /2),(height /2)-120, 700,300)
    stroke(255,224,0)
  noFill();
  } else if (temperanceCheck === true){
    textAlign(LEFT)
    textStyle(ITALIC)
    textSize(20)
    fill(255, 251, 220)
    noStroke();
    text(textTemperanceOne, (width /2),(height /2)-120, 700,300)
    stroke(255,224,0)
  noFill();
  }
  if (emperorCheck === true){
    textAlign(LEFT)
    textStyle(ITALIC)
    textSize(20)
    fill(255, 251, 220)
    noStroke();
    text(textEmperorOne, (width /2),(height /2), 700,300)
    stroke(255,224,0)
  noFill();
  }else if (sunCheck === true){
    textAlign(LEFT)
    textStyle(ITALIC)
    textSize(20)
    fill(255, 251, 220)
    noStroke();
    text(textSunOne, (width /2),(height /2), 700,300)
    stroke(255,224,0)
  noFill();
  }else if (loversCheck === true){
    textAlign(LEFT)
    textStyle(ITALIC)
    textSize(20)
    fill(255, 251, 220)
    noStroke();
    text(textLoversOne, (width /2),(height /2), 700,300)
    stroke(255,224,0)
  noFill();
  }
   textAlign(CENTER, CENTER);
  textStyle(NORMAL);
  textSize(20)
  fill(255, 251, 220)
  noStroke();
  text("Click to Continue",width /2,(height /2) +350);
}

function drawAnswer(){
  textAlign(CENTER, CENTER);
  textStyle(NORMAL);
  textSize(20)
  fill(255, 251, 220)
  noStroke();
  text(answerText, (width /2),(height /2)-100, 700,300);
   image(scrierArt, (width/2)-200,(height/2)-100, 400, 400);
  text("Press Y to Accept, Press N to Reject",width /2,(height /2) + 220);
  stroke(255,224,0)
  noFill();
  rect(width /2,(height /2), 800, 600, 5);
}
function drawAffirm(){
  textAlign(CENTER, CENTER);
  textStyle(NORMAL);
  textSize(20)
  fill(255, 251, 220)
  noStroke();
  text(affirmText, (width /2),(height /2)-100, 700,300);
  text("Press R to Restart",width /2,(height /2) + 220);
  stroke(255,224,0)
  noFill();
  rect(width /2,(height /2), 800, 600, 5);
  image(heartArt, (width/2)-100, (height/2), 200 ,200);
}
function drawReject(){
  textAlign(CENTER, CENTER);
  textStyle(NORMAL);
  textSize(20)
  fill(255, 251, 220)
  noStroke();
  text(rejectText, (width /2),(height /2)-100, 700,300);
  text("Press R to Restart",width /2,(height /2) + 220);
  stroke(255,224,0)
  noFill();
  rect(width /2,(height /2), 800, 600, 5);
  image(heartArt, (width/2)-100, (height/2), 200 ,200);
}

function tallyScore(){
  if (cardDraw === 1){
      sloaneCount += 1;
    } else if (cardDraw === 2){
      ambroseCount += 1;
    } else if (cardDraw === 3){
      asterCount += 1;
    }
}
async function mousePressed(){
  if (storyState === "title"){
    storyState = "intro";
  } else if (storyState === "pageOne"){
    storyState = "hostCard";
    cardDraw = int(random(1,4));
    tallyScore();
  } else if (storyState === "hostCard"){
    storyState = "pageTwo"
  } else if (storyState === "pageTwo"){ 
    cardDraw = int(random(1,4));
    storyState = "doctorCard"
    tallyScore();
  } else if (storyState === "doctorCard"){
    storyState = "pageThree" 
  } else if (storyState === "pageThree"){
    cardDraw = int(random(1,4));
    storyState = "purposeCard"
    tallyScore();
  } else if (storyState === "purposeCard"){
    storyState = "pageFour"
  } else if (storyState === "pageFour"){
    storyState = "name"
  } else if (storyState === "intro"){
    storyState = "pageOne";
  } else if (storyState === "name"){
    storyState = "answer";
  }

  
};
function keyPressed(){
    if(key === "r"||key === "R"){
      storyState = "title";
      sloaneCount = 0;
      ambroseCount = 0;
      asterCount = 0;
      adrienCount = 0;
      strengthCheck = false;
      hermitCheck = false;
      empressCheck = false;
      towerCheck = false;
      devilCheck = false;
      temperanceCheck = false;
      emperorCheck = false;
      sunCheck = false;
      loversCheck = false;

      return false;
    }
  if(storyState === "answer" && (key === "y"||key === "Y")){
    storyState = "affirm";
  } else if (storyState === "answer" && (key === "n"||key === "N")){
    storyState = "reject";
  }
  }
