function ageindays(){
    var birthYear=prompt("Which year were you born in?");
    var ageindayss=(2020-birthYear)*365;
    var h1=document.createElement("h1");
    h1.setAttribute("id",'aman');
    var text=document.createTextNode("You are "+ageindayss+" days old") ;
    h1.appendChild(text);
    document.getElementById("flex-box-container-1-result").appendChild(h1);
}
function reset(){
    document.getElementById('aman').remove();
}
function amangenrate(){
    var imge=document.createElement('img');
    var div=document.getElementById("flex-aman")
    imge.src="aman1.png"
    div.appendChild(imge)
}