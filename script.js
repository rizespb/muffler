var navListState = 0;
var navBtnStyle = document.getElementById('nav-btn').style;

document.getElementById('navigation-toggle').addEventListener('click', function() {
    

    if (navListState === 0) {
        navBtnStyle.position = 'fixed';
        navBtnStyle.top = '3rem';
        navBtnStyle.right = '3rem';
        navListState = 1;
    } else {
        navBtnStyle.position = 'initial';
        navBtnStyle.top = 'initial';
        navBtnStyle.rught = 'initial';
        navListState = 0;
    }
});

// alert(document.documentElement.clientWidth);

document.querySelector('.navigation__list').addEventListener('click', function() {
    if (document.documentElement.clientWidth < 900) {
        document.getElementById('navigation-toggle').checked = false;
        navBtnStyle.position = 'initial';
        navBtnStyle.top = 'initial';
        navBtnStyle.rught = 'initial';
        navListState = 0;
    } else {
        alert(document.documentElement.clientWidth);
    }
})

