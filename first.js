document.getElementById("btnmenuderoulant").addEventListener('click',function(){
    document.getElementById("menuderoulant").style.display='initial'
    document.getElementById("btnmenuderoulant").style.display='none'
    
});
document.getElementById("btnclosemenu").addEventListener('click',function(){
    document.getElementById("menuderoulant").style.display='none'
    document.getElementById("btnmenuderoulant").style.display='initial'
});