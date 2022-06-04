function nav_list() {
    document.getElementById('navbar_container').style.display='flex';
    document.getElementById('hamburger_menu').style.display='none';
    document.getElementById('close_menu').style.display='flex';
}

function nav_close() {
    document.getElementById('navbar_container').style.display='none';
    document.getElementById('hamburger_menu').style.display='flex';
    document.getElementById('close_menu').style.display='none';
}

document.getElementById('home').style.color="cyan";