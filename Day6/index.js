function add() {
    var name,des;
    var name = document.getElementById('name').value;
    var des = document.getElementById('des').value;
    document.getElementById('todo_name').innerHTML=name;
    document.getElementById('todo_des').innerHTML=des;
    document.getElementById('edit').style.display="flex";
    document.getElementById('del').style.display="flex";
    document.getElementById('container').style.display="none";
}

function edit() {
    document.getElementById('container').style.display="flex";
}

function del() {
    document.getElementById('todo_name').style.display="none";
    document.getElementById('todo_des').style.display="none";
    document.getElementById('container').style.display="flex";
    document.getElementById('edit').style.display="none";
    document.getElementById('del').style.display="none";
}