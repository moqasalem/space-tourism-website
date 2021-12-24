/* ///////////////////////////////////////////////////////////// Home Page ///////////////////////////////////////////////////////////////////// */

function showMenu() {
    document.getElementById('mymenu').style.display = "flex";
    document.querySelector('.menu').style.display = "none";
    document.querySelector('#ulspan img').style.display = "block";
    document.getElementById('ulspan').setAttribute('class', 'sidebar');
}

function closeMenu() {
    document.getElementById('mymenu').style.display = "none";
    document.querySelector('.menu').style.display = "block";
    document.querySelector('#ulspan img').style.display = "none";
    document.getElementById('ulspan').removeAttribute('class', 'sidebar');
}


//page links
document.getElementById("defualtPage").click();
function openPage(evt, page) {
    var i, pagecontent, pagelinks;
    pagecontent = document.getElementsByClassName("pages");
    for (i = 0; i < pagecontent.length; i++) {
        pagecontent[i].style.display = "none";
    }

    pagelinks = document.getElementsByClassName("page-links");
    for (i = 0; i < pagelinks.length; i++) {
        pagelinks[i].className = pagelinks[i].className.replace(" active", "");
    }

    document.getElementById(page).style.display = "flex";
    evt.currentTarget.className += " active";

    const sty = document.getElementById('mystyle');
    sty.setAttribute('href', `css/${page}.css`);
}

/* ///////////////////////////////////////////////////////////// Destination Page ///////////////////////////////////////////////////////////////////// */

function clickTab(evt, option,imgId) {
    var i, tabcontent, tablinks, tabImgs;

    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-button", "");
    }

    tabImgs = document.getElementsByClassName('destimgs');
    for (i = 0; i < tabImgs.length; i++) {
        tabImgs[i].style.display = "none";
    }

    document.getElementById(imgId).style.display = "block";

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(option).style.display = "block";
    evt.currentTarget.className += " active-button";
}

/* ///////////////////////////////////////////////////////////// Crew Page ///////////////////////////////////////////////////////////////////// */


function showMember(evt,id){
    const info = document.getElementsByClassName("info");
    for (i = 0; i < info.length; i++) {
        info[i].style.display = "none";
    }
    
    const imgs = document.getElementsByClassName("crew-imgs");
    for (i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    
    const memBtns = document.getElementsByClassName("mem-btn");
    for (i = 0; i < memBtns.length; i++) {
        memBtns[i].className = memBtns[i].className.replace(" active", "");
    }

    document.getElementById(`inf${id}`).style.display= "block";
    document.getElementById(`img${id}`).style.display= "block";
    evt.currentTarget.className += " active";

}

/* ///////////////////////////////////////////////////////////// Technology Page ///////////////////////////////////////////////////////////////////// */


function showTich(evt,id){
    const info = document.getElementsByClassName("slide-info");
    for (i = 0; i < info.length; i++) {
        info[i].style.display = "none";
    }
    
    const imgs = document.getElementsByClassName("tech-imgs");
    for (i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    
    const Btns = document.getElementsByClassName("slidebtn");
    for (i = 0; i < Btns.length; i++) {
        Btns[i].className = Btns[i].className.replace(" active", "");
    }

    document.getElementById(`t-info-id${id}`).style.display= "block";
    document.getElementById(`t-img${id}`).style.display= "block";
    evt.currentTarget.className += " active";

}