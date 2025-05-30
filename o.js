

document.getElementById("btnrse").addEventListener("click",function(){
    document.getElementById("pgeconexionemail").style.display="none";
    document.getElementById("pgeis").style.display="initial"; 

})
document.getElementById("btn").addEventListener("click",function(){
    document.getElementById("pgeconexionemail").style.display="initial";
    document.getElementById("pgeis").style.display="none"; 

})

window.onload= () =>{
    document.querySelector("#pgeconexionemail").style.display ="initial";
     //pour changer lzs iconnes apres lz clic
  //  document.getElementById("un").setAttribute("style","border-bottom:2px solid blue;");
    //document.getElementById("default").setAttribute("style","color:blue;");
}
document.getElementById("btnmenuderoulant").addEventListener('click',function(){
    document.getElementById("menuderoulant").style.display='initial'
    document.getElementById("btnmenuderoulant").style.display='none'
    
});
document.getElementById("btnclosemenu").addEventListener('click',function(){
    document.getElementById("menuderoulant").style.display='none'
    document.getElementById("btnmenuderoulant").style.display='initial'
});




