function play() {
    document.getElementById('music').play();
}
function pause() {
    document.getElementById('music').pause();
}
function volumeUp() {
    document.getElementById('music').volume+=0.1;
}
function volumeDown() {
    document.getElementById('music').volume-=0.1;
}

function nextSong() {
    count++;
    count=count%20;
    document.getElementById('music').src="music/"+count+".mp3";
    document.getElementById('music').play();
}

function previousSong() {
    count--;
    if (count<0) {
      count=20;  
    }
    count=count%20;
    document.getElementById('music').src="music/"+count+".mp3";
    document.getElementById('music').play();
}

function color(cc) {
    var c=document.getElementsByTagName('button');
    cl=['#FFA940','#FAED2A','#32DB7D','#4464F2','#DB32A0','#FFA940'];
    for(i=0;i<6;i++){
        c[i].style.backgroundColor=cl[i];
        c[i].style.color='black';
    }
    cc.style.backgroundColor="#40C1FF";
    cc.style.color="white";
}