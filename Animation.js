window.onload= function (){
    
var paper = new Raphael(document.getElementById("box"),800,600);
var img = paper.image("ocean.jpg", 0, 0, 800, 600);
img.attr({"clip-rect":"0, 0, 800, 600"});
    
var ball = paper.circle(50,50,30);  
var jack = paper.circle(500,500,30)

    
  jack.attr({fill:"#E9E581",
             cursor:"pointer",
             stroke:"none"}).click(function() {
      transformation();
  });
  
    
  ball.attr({fill:"45-blue-red",
           cursor:"pointer",
           "stroke-width": 5
          }).click(function() {
          bounce();}); 
    
function drop() {
    
   ball.animate({cy:500, cx:50},6000,"ease-in");
   }
     
    function transformation(){
        jack.animate({fill:"red"},1000)
    }
   function bounce() {
      ball.animate({cy:50, cx:50},3500,"ease-out",drop);
   }
     
 function move1(){
     jack.animate({cy:300, cx:500},1500,"ease-in",move2);
 }   
    
  function move2(){
     jack.animate({cy:300, cx:450},500,"ease-in",move3);
 }  
    
  function move3(){
     jack.animate({cy:300, cx:700},1500,"ease-in",move4);
 }  
    
function move4(){
    jack.animate({cy:500,cx:700},1500,"ease-in",move5);
    }
    
function move5(){
    jack.animate({cy:500,cx:120},2000,"ease-in-out",move6);
    }
function move6(){
    jack.animate({cy:320,cx:120},1500,"ease-in-out",move7);
}
function move7(){
    jack.animate({cy:320,cx:320},1500,"ease-in-out",move8);
}

function move8(){
    jack.animate({cy:30,cx:320},1500,"ease-in-out",move9);
}
function move9(){
    jack.animate({cy:30,cx:140},1500,"ease-in",move10);
}
function move10(){
    jack.animate({cy:170,cx:140},1500,"ease-in-out",move11);
}
function move11(){
    jack.animate({cy:170,cx:700},1000,"ease-in",move12);
}
function move12(){
    jack.animate({cy:30,cx:700},500,"ease-in",move13);
}
function move13(){
    jack.animate({cy:30,cx:500},1000,"ease-in",move14);
}
function move14(){
    jack.animate({cy:250,cx:500},1000,"ease-in-out",move15)
}
function move15(){
    jack.animate({cy:250,cx:430},1000,"elastic")
}

              
    
    function createBall1(){
        
        var ball1 = paper.circle(600,100,40)
        .attr({fill:"#cc3480",stroke:"none"});
    }
    
        
    function createBall2(){
        
        var ball2 = paper.circle(240,400,40)
        .attr({fill:"#cc3434",stroke:"none"});
    }
   
        
    function createSquare1(){
        
      var square1 = paper.rect(200, 65, 70, 70)
        .attr({fill:"#34cc80",stroke:"none"});
    }
     
    
    function createSquare2(){
        
      var square2 = paper.rect(570, 360, 70, 70)
        .attr({fill:"#ec8014",stroke:"none"});
    }
    
   function end1(){
       var endSquare1 = paper.rect(140,210,70,70)
       .attr({fill:"black",stroke:"none"})
       .animate({ 
           transform:"r180",fill:"#E9E581"},10000);
   }
    
    function end2(){
        var endSquare2 = paper.rect(620,210,70,70)
        .attr({fill:"black",stroke:"none"})
        .animate({
           transform:"r180",fill:"#E9E581"},10000);
    }

   function text() {
    
   var txt = paper.text(100, 10, "Click the balls!") 
    .attr({
       "font-family" : "Georgia",
       "font-size": 30
       
   })
   .animate ( {
       y:100
   }, 2000,"elastic");
}

end1();
    end2();
    
   drop();   
   move1();
setTimeout(createSquare1, 400);
setTimeout(createBall1, 800);
setTimeout(createSquare2,1200);
setTimeout(createBall2,1600); 

 
 setTimeout(text,3500);
    
   
    



   
    
    

    
    
    
    
    
    
    
    
    
    
  
  
  
    
    
};