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
        var list = document.createElement("tr");
        list.innerHTML = '<td>'+d+'</td>'+'<td>'+ull.innerHTML+'</td>'+'<td>'+b+' minute'+'</td>'+'<td>'+c+'</td>';
        list.setAttribute("id",s);
        
        document.getElementById("io_table").appendChild(list);
        c.innerHTML = "";
        var del = document.createElement("button");
        del.innerHTML = 'Sterge';
        var p = document.getElementById(`${s}`);
        p.appendChild(del);
        del.setAttribute("onclick",`deletef('${s}')`);
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

function deletef(s) {
    var elem = document.getElementById(`${s}`);
    elem.parentNode.removeChild(elem);
}
function myFunction() {
    var input, filter, table, tr, td, td1, txtValue1, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("io_table");
    tr = table.getElementsByTagName("tr");
    console.log(tr);
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        td1 = tr[i].getElementsByTagName("td")[1];
        if (td || td1) {
            txtValue = td.textContent; 
            txtValue1 = td1.textContent;
            if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
            
    }
}
