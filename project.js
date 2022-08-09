const canvas = document.querySelector("#canvas1");
let ctx = canvas.getContext("2d");
canvas_width = canvas.width = 500 ; 
canvas_height = canvas.height = 1000 ; 
const numberofenemy = 50 ;
const enemyarray = []  ;


let gameFrame = 0 ; 

class Enemy{
   constructor(){
       this.enemyimage = new Image(); 
      this.enemyimage.src = 'enemy4.png' ;
       this.speed = Math.random() * 4 +1   ;  // for different direcion  
       this.sprintwidth = 213 ; 
       this.sprintheight  = 213 ;
       this.width= this.sprintwidth / 2 ; 
       this.height = this.sprintheight / 2 ;   
       this.x = Math.random() * (canvas.width - this.width);
       this.y  = Math.random() * (canvas.height - this.height);
       this.newx = Math.random() * (canvas.height - this.height);
       this.newy = Math.random() * (canvas.height - this.height);
       this.frme = 3 ;  
       this.flapSpeed =Math.floor(Math.random() * 3 + 1) ;
       this.interval =Math.floor(Math.random() * 200 + 50) ;
     
   }
   update(){
       if(gameFrame % this.interval == 0){
       this.newx = Math.random() * (canvas.width - this.width);
       this.newy = Math.random() * (canvas.height - this.height) ;
       }
       let dx =  this.x - this.newx  ;
       let dy = this.y - this.newy; 
         this.x -= dx/70 ; 
         this.y -= dy/70 ;
    if (this.x + this.width < 0 ) this.x  = canvas_width ; 
       if (gameFrame % this.flapSpeed== 0 ){
           this.frme > 4 ? this.frme = 0 : this.frme++ ; 
       }
   }
   draw(){
    ctx.drawImage(this.enemyimage , this.frme * this.sprintwidth, 0 , this.sprintwidth, this.sprintheight , this.x, this.y, this.width , this.height) ;   
   }    
}
for (let i = 0 ; i < numberofenemy; i++ ){
   enemyarray.push(new Enemy());
}
const enemy1 = new Enemy();
function animate(){
    ctx.clearRect(0 , 0 , canvas_width , canvas_height);
    enemyarray.forEach(enemyy =>{
        enemyy.update();
        enemyy.draw();
    })
    gameFrame++ ; 
    requestAnimationFrame(animate);
}
animate();