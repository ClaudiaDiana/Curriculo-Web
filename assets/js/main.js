function eventClick(par, x) {
    var par = document.getElementById(par)
    var x = document.getElementById(x)
    if(par.style.display == "none"){
        par.style.display = "block";
        x.innerHTML = "Ver menos";
    }else{
        par.style.display = "none";
        x.innerHTML = "Ver mais";
    }
}

