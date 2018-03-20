var menub = document.getElementById('menub');
var ctrl = document.getElementById('controls');
var bgl = document.getElementById('bgimg'),
    titlet = document.getElementById('titleb'),
         desct = document.getElementById('descb'),
             colorb = document.getElementById('txtc'),
                 disp = document.getElementById('display'),
                     bg = document.getElementById('background'),
    titled = document.getElementById('titled'),
    descrd = document.getElementById('descrd'),
    bgposx = 0,
    bgposy = 0,
    bgh = 300,
    counter = 0,
    curSB = bg;
var curElement = function() {
        var curID = this.id;
        console.log(this.id);
    curSB = document.getElementById(curID);
    };

ctrl.style.bottom = '-150px';
bg.style.backgroundImage = 'url(bg4.jpg)';
bg.style.width = '100%';   
bg.style.height = '300px';
bg.style.position = 'relative';
bg.style.backgroundPosition = '0px 0px';
ctrl.style.zIndex = '9999';
bg.onclick = curElement;

titled.style.position = 'absolute';
titled.style.left = '10%';
titled.style.top = '10%';
titled.style.color = 'white';
titled.style.fontSize = '24px';
titled.style.borderBottom = '2px solid grey';

descrd.style.position = 'absolute';
descrd.style.left = '10%';
descrd.style.top = '20%';
descrd.style.color = 'white';
descrd.style.fontSize = '24px';
descrd.style.padding = '10px 0px 0px 0px';

colorb.addEventListener('change', function(ev)
{
    changeColor();
}
);

function changeColor() {
    curSB.children[0].style.color = colorb.value;
    curSB.children[1].style.color = colorb.value;
}


function changeBG() {
    
    if (bgl.value.indexOf('epic') != -1) 
        {
        curSB.style.backgroundImage = 'url(bg4.jpg)';
        }
    else if (bgl.value == 'horse')
        {
            curSB.style.backgroundImage = 'url(bg1.jpg)';
        }
    else if (bgl.value == 'night')
        {
            curSB.style.backgroundImage = 'url(bg2.png)';
        }
    else if (bgl.value == 'mountain')
        {
            curSB.style.backgroundImage = 'url(bg3.jpg)';
        }
    else
    {
        
    
    console.log(bgl.value);
    curSB.style.backgroundImage = 'url('+bgl.value+')';
        }
    bgimg.value = '';
}

bgl.addEventListener('keyup', function(ev){
   if (ev.keyCode == 13) {
       changeBG();
   }
    
    
});

titlet.addEventListener('keyup', function(ev){
   if (ev.keyCode >= 0) {
       changeTitle();
   }
    
    
});

desct.addEventListener('keyup', function(ev){
   if (ev.keyCode >= 0) {
       changeDescription();
   }
    
    
});


function changeTitle(){
    curSB.children[0].innerText = titlet.value;
}

function changeDescription(){
    curSB.children[1].innerText = desct.value;
}


menub.addEventListener('click',  
                                                 function(){
    
    expandMenu();
    
 });

function expandMenu()   {
        if (ctrl.style.bottom == '-150px')
        {
    ctrl.style.bottom = '0px';
            }
    else
        {
            ctrl.style.bottom = '-150px';
        }
}

addEventListener('keydown', function(ev){
    moveBG(ev.keyCode);
});

function moveBG(ev)    {
    if (ev == 38)
        {
            
            bgposy = parseInt(curSB.style.backgroundPositionY) || 0;
            
            bgposx = parseInt(curSB.style.backgroundPositionX) || 0;
            
            bgposy = bgposy+10;
            curSB.style.backgroundPosition = bgposx+'px '+bgposy+'px';
        }
    else if (ev == 39)
        {
            bgposy = parseInt(curSB.style.backgroundPositionY) || 0;
            
            bgposx = parseInt(curSB.style.backgroundPositionX) || 0;
            
            bgposx = bgposx-10;
            curSB.style.backgroundPosition = bgposx+'px '+bgposy+'px';
        }
    else if (ev == 37)
        {
            bgposy = parseInt(curSB.style.backgroundPositionY) || 0;
            
            bgposx = parseInt(curSB.style.backgroundPositionX) || 0;
            
            bgposx = bgposx+10;
            curSB.style.backgroundPosition = bgposx+'px '+bgposy+'px';
        }
    else if (ev == 40)
        {
            bgposy = parseInt(curSB.style.backgroundPositionY) || 0;
            
            bgposx = parseInt(curSB.style.backgroundPositionX) || 0;
            
            bgposy = bgposy-10;
            curSB.style.backgroundPosition = bgposx+'px '+bgposy+'px';
        }
    else if (ev == 107)
        {
            bgh = parseInt(curSB.style.height) || 0;
            bgh = bgh + 10;
            curSB.style.height = bgh+'px';
        }
    else if (ev == 109)
        {
            bgh = parseInt(curSB.style.height) || 0;
            bgh = bgh - 10;
            curSB.style.height = bgh+'px';
        }
}

document.getElementById('addb').addEventListener('click',  
                                                 function(){
    
    newS();
    
 });

function newS() {
    /* I think I see how to do it all with classes, 
    so I declared bg in JS, but decided to use this solution
    once I realized how much of my css had to be declared in JS */
    
    /*
    var storyB = document.createElement('div');
    
    storyB.className = 'story';
    storyB.style.backgroundImage = ''+bg.style.backgroundImage+'';
    
    console.log(descrd.style.cssText);
    console.log(bg.style.cssText);
    storyB.style.cssText = bg.style.cssText;
    */
    var storyB = bg.cloneNode(true);
    storyB.id = "dupe" + ++counter;
    
    
    var tempTitle = titled.cloneNode(true);
    
    storyB.children[0].id = "titlet" + counter;
    storyB.children[0].style.cssText = titled.style.cssText;
        
    storyB.children[1].id = "descrd" + counter;
    
    storyB.className = 'col-lg-3 col-md-4 col-sm-12';
    
    document.getElementById('display').appendChild(storyB);
    storyB.onclick = curElement;
}