Canvas=document.getElementById("myCanvas")
var bg,ri;
ctx=Canvas.getContext("2d")
var background_image=["mars.jpg","https://astronomy.com/-/media/Images/News%20and%20Observing/News/2021/09/marslandscape.jpg?mw=600",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpx3tg3ZvQgF6-s8UQ5_eiPgZv5gYPlaxGUaPd4bXECHzaR_6VSzvKhNQl0JPMrSqTwOY&usqp=CAU",
"https://d.newsweek.com/en/full/1905956/mastcam-z-mars.jpg?w=1600&h=1600&q=88&f=058fd09c96ef25b1f5ec470f30f8e38a",]
var rover="rover.png"
var random=Math.floor(Math.random()*4)
var mars=background_image[random]
roverx=10
rovery=10
function add(){
bg=new Image()
bg.onload=uploadbackground
bg.src=mars
ri=new Image()
ri.onload=uploadrover
ri.src=rover
}
function uploadbackground() {
    ctx.drawImage(bg,0,0,Canvas.width,Canvas.height)   
   }
   function uploadrover() {
    ctx.drawImage(ri,roverx,rovery,100,100)    
   }
   window.addEventListener("keydown",my_keydown)
   function my_keydown(e){
       keyPressed=e.keyCode
       if (keyPressed=='38') {
           up()
       }
       if (keyPressed=='40') {
        down()
    }
    if (keyPressed=='37') {
        left()
        
    
    }
    if (keyPressed=='39') {
        right()
    }
   }
   function up(){
       if (rovery>0) {
           
           rovery=rovery-10
           uploadbackground()
           uploadrover()
       }
       
   }
   function down(){
    if (rovery<600) {
        
        rovery=rovery+10
        uploadbackground()
        uploadrover()
    }
    
}
function left(){
    if (roverx>0) {
        
        roverx=roverx-10
        uploadbackground()
        uploadrover()
    }
    
}
function right(){
    if (roverx<800) {
        
        roverx=roverx+10
        uploadbackground()
        uploadrover()
    }
    
}