var s = 1;
function sent() {
    var titlu = document.getElementById('itext');
    var ingrediente = document.getElementById('ingredients');
    var time = document.getElementById('time');
    var level = document.getElementById("level");
    var d = titlu.value;
    var a = ingrediente.value;
    var b = time.value;
    var c = level.value;
    var final = '';
    if(d!='')
    {
        document.getElementById("emptyt").style.display = "none";
        if(a!='') {
        document.getElementById("emptyi").style.display = "none";
        var res = a.split(",");
        for(var i=0; i<res.length; i++) {
            var ull = document.createElement("ul");
            final += '<li>'+res[i]+'</li>'
        }
        ull.innerHTML = final;
        var list = document.createElement("div");
        list.className = 'io_flexname';
        list.innerHTML = '<div class="io_re">'+d+'</div>'+'<div class="io_in">'+ull.innerHTML+'</div>'+'<div>'+b+' minute'+'</div>'+'<div>'+c+'</div>';
        list.setAttribute("id",s);
        
        document.getElementById("io_results").appendChild(list);
        c.innerHTML = "";
        var del = document.createElement("button");
        del.innerHTML = 'Sterge';
        var p = document.getElementById(`${s}`);
        p.appendChild(del);
        del.setAttribute("onclick",`deletef('${s}')`);
        var send = document.createElement("button");
        send.className = 'favorit';
        send.innerHTML = 'Favorit';
        send.setAttribute("onclick",`addf('${s}')`);
        p.appendChild(send);
        s++;
        }
        else {
           document.getElementById("emptyi").style.display = "block";
        }
    }
    else {
        document.getElementById("emptyt").style.display = "block";
    }
}
function open() {
    var c = document.getElementById("modal");
    if(c.style.display =='none') {
        c.style.display = 'block';
    }
    else {
        c.style.display = 'none';
    }
    
}
document.getElementById("trimite").addEventListener("click", sent);
document.getElementById("myRecipe").addEventListener("click", open);

function deletef(s) {
    var elem = document.getElementById(`${s}`);
    elem.parentNode.removeChild(elem);
}
function addf(s) {
    var elem = document.getElementById(`${s}`);
    var d = document.getElementById("modal");
    var clone = elem.cloneNode(true);
    d.appendChild(clone);
}

function search() {
    var p = document.getElementById("inputs");
    var word = p.value.toUpperCase();
    var first = document.querySelectorAll('#io_results > .io_flexname > .io_re');
    var second = document.querySelectorAll('#io_results > .io_flexname > .io_in');
    for (var i=0; i<first.length;i++) {
        var titler = first[i].textContent;
        var ingredr= second[i].textContent;
        if(titler.toUpperCase().indexOf(word) > - 1 || ingredr.toUpperCase().indexOf(word) > -1) {
            first[i].parentElement.style.display = "";
        }else {
            second[i].parentElement.style.display = 'none';
        }
    }
}
document.getElementById("inputs").addEventListener("keyup", search);
function check() {
    var pass = document.getElementById("ipassword").value;
    var user = document.getElementById("itext").value;
    if(user) {
        console.log("intra");
        document.getElementById("emptyuser").style.display = 'none';
        if(pass) { 
            console.log("intra");
            document.getElementById("emptypass").style.display = 'none';
            location.replace("todo.html")
        }
        else {
            document.getElementById("emptypass").style.display = 'block';
        }
    }
    else {
        
        document.getElementById("emptyuser").style.display = 'block';
    }
}

