//variable boton
var checkbox = document.getElementById('switch-label');

   
checkbox.addEventListener( 'change', function() {
  if(!this.checked) {
     location.reload();
  }});

checkbox.addEventListener( 'change', function() {
    if(this.checked) {

      //elemento background color        
        document.body.style.backgroundColor="rgba(34,122,130,0.3)",
        document.body.style.color="blue"
      //burbujas
      

      //elemento efecto letras d personales

        var words = ['Domicilio', 'e-mail', 'telefono', 'Nacionalidad'],
    wordWrapper = document.getElementById('word'),
    wordWrapperContent = wordWrapper.innerHTML,
    addingWord = false,
    counter = 1;

setInterval(function(){

  if(wordWrapperContent.length > 0 && !addingWord ) {
    wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
    wordWrapperContent = wordWrapper.innerHTML;
  } else {
    addingWord = true;
  }

  if( addingWord ){
    if( wordWrapperContent.length < words[counter].length  ) {
      wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      if( counter < words.length) {
        counter ++
      }
      addingWord = false;
    }
  }

  if( counter == words.length) {
    counter = 0;
  }

}, 150);
    }})
    
// letras exp laboral


checkbox.addEventListener( 'change', function() {
  if(this.checked) {

    var words = ['electronica', 'Ingles', 'Professor', 'TV'],
    wordWrapper = document.getElementById('et'),
    wordWrapperContent = wordWrapper.innerHTML,
    addingWord = false,
    counter = 1;

setInterval(function(){

  if(wordWrapperContent.length > 0 && !addingWord ) {
    wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
    wordWrapperContent = wordWrapper.innerHTML;
  } else {
    addingWord = true;
  }

  if( addingWord ){
    if( wordWrapperContent.length < words[counter].length  ) {
      wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      if( counter < words.length) {
        counter ++
      }
      addingWord = false;
    }
  }

  if( counter == words.length) {
    counter = 0;
  }

}, 150);

    }});
  
  
//letras educacion


checkbox.addEventListener( 'change', function() {
  if(this.checked) {

    var words = ['Primaria', 'Profesorado', 'Capacitacion ', 'Profesional'],
    wordWrapper = document.getElementById('educ'),
    wordWrapperContent = wordWrapper.innerHTML,
    addingWord = false,
    counter = 1;

setInterval(function(){

  if(wordWrapperContent.length > 0 && !addingWord ) {
    wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
    wordWrapperContent = wordWrapper.innerHTML;
  } else {
    addingWord = true;
  }

  if( addingWord ){
    if( wordWrapperContent.length < words[counter].length  ) {
      wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      if( counter < words.length) {
        counter ++
      }
      addingWord = false;
    }
  }

  if( counter == words.length) {
    counter = 0;
  }

}, 150);

    }});
  
    
    
    //letras habilidades
    
checkbox.addEventListener( 'change', function() {
  if(this.checked) {

    var words = ['C++', 'CSS', 'JS', 'Phaser js', 'Bilingue'],
    wordWrapper = document.getElementById('habi'),
    wordWrapperContent = wordWrapper.innerHTML,
    addingWord = false,
    counter = 1;

setInterval(function(){

  if(wordWrapperContent.length > 0 && !addingWord ) {
    wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
    wordWrapperContent = wordWrapper.innerHTML;
  } else {
    addingWord = true;
  }

  if( addingWord ){
    if( wordWrapperContent.length < words[counter].length  ) {
      wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      if( counter < words.length) {
        counter ++
      }
      addingWord = false;
    }
  }

  if( counter == words.length) {
    counter = 0;
  }

}, 150);

    }});
  
    checkbox.addEventListener( 'change', function() {
      if(this.checked) {
    //essential variables
var canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d"),
aniId;
//parameters
var w = canvas.width = window.innerWidth-230,
h = canvas.height = window.innerHeight,
particles = [], //particle array
level = 80,
fill = false,
color = "rgba(106, 5, 100, 0.6)",
c;
//Particle object constructor
function particle(x, y, d){
this.x = x;
this.y = y;
this.d = d;
this.respawn = function(){
this.x = Math.random()*(w * 0.8) + (0.1 * w);
this.y = Math.random()*30 + h-(h-100)*level/100-50 + 50;
this.d = Math.random()*5 + 5;
};
}
//function to start or restart the animation
function init(){
c = 0;
particles = [];
for(var i=0; i < 40; i++) {
var obj = new particle(0,0,0);
obj.respawn();
particles.push(obj);
}
aniId = window.requestAnimationFrame(draw);
}
//function that draws into the canvas in a loop
function draw(){
ctx.clearRect(0,0,w,h);
ctx.fillStyle = color;
ctx.strokeStyle = color;

//draw the liquid
ctx.beginPath();
ctx.moveTo(w,h-(h-100)*level/100-50);
ctx.lineTo(w,h);
ctx.lineTo(0,h);
ctx.lineTo(0,h-(h-100)*level/100-50);
var temp = (50*Math.sin(c*1/50));
ctx.bezierCurveTo((w/3)   ,h-(h-100)*level/100-50-temp,
          (2*w/3) ,h-(h-100)*level/100-50+temp,
          w     ,h-(h-100)*level/100-50);
ctx.fill();

//draw the bubbles
for(var i=0; i < 40; i++) {
ctx.beginPath();
ctx.arc(particles[i].x,particles[i].y,particles[i].d,0,2*Math.PI);
if(fill)
  ctx.fill();
else
  ctx.stroke();
}
//debug
//ctx.fillText("c:"+c+" lv:"+level,10,10);

update();
aniId = window.requestAnimationFrame(draw);
}
//function that updates variables
function update() {
c++;
if(100*Math.PI <= c)
c = 0;
for(var i=0; i < 40; i++) {
particles[i].x = particles[i].x + Math.random()*2 - 1;
particles[i].y = particles[i].y - 1;
particles[i].d = particles[i].d - 0.04;
if(particles[i].d <= 0)
  particles[i].respawn();
}
}


//update canvas size when resizing the window
window.addEventListener('resize', function() {
//update the size
w = canvas.width = window.innerWidth-230;
h = canvas.height = window.innerHeight;
//stop the animation befor restarting it
window.cancelAnimationFrame(aniId);
init();
});
//start animation
init();}})
