
function inp(inpt) {
    if (equal==0) {
        document.getElementById('input').innerText+=inpt;
    }
    else{
        document.getElementById('input').innerText=inpt;
        document.getElementById('output').innerHTML="= ";

        equal=0;
    }
}
function funcequal() {
    var operartion = document.getElementById('input').innerText;
    document.getElementById('output').innerText+=eval(operartion);
    document.cookie+=operartion+" : "+eval(operartion)+",";
    equal=1;
}
function funcAC(a) {
    if(a==0){
    document.getElementById('input').innerText = "";
    document.getElementById('output').innerHTML = "";
    }
    if (a==1) {
    document.getElementById('input').innerText = document.getElementById('input').innerText.slice(0,document.getElementById('input').innerText.length-1);
    }
}

function funcMemory() {
    equal=1;
    var mem = document.cookie;
    var memory = mem.split(',');
    var out = "";
    for (let index = 0; index < memory.length; index++) {
        out+=memory[index]+"<br><br>";
        
    }

    document.getElementById('output').innerHTML=out;    
    document.getElementById('input').innerText="Memory";
}


