let getSel = x => document.querySelector(x);
let icon = document.querySelector('#icon');
let icon1 = icon.getBoundingClientRect();
console.log(icon1);

getSel('.up_btn').addEventListener('click', function (event) {
    if (event) {
        let goUp = icon.offsetTop;
        if (goUp > -40) {
            icon.style.top = goUp - 10 + 'px';
            getSel('#icon').classList = [];
        }
    }
})
getSel('.down_btn').addEventListener('click', function (event) {

    if (event) {
        let goDown = icon.offsetTop;
        if (goDown < window.innerHeight - 280) {
            icon.style.top = goDown + 10 + 'px';
            getSel('#icon').classList = [];
            getSel('#icon').classList.add('man_down');
        }
    }
})
getSel('.left_btn').addEventListener('click', function (event) {

    if (event) {
        let goLeft = icon.offsetLeft;
        if (goLeft > 25) {
            icon.style.left = goLeft - 10 + 'px';
            getSel('#icon').classList = [];
            getSel('#icon').classList.add('man_left');
        }
    }
})
getSel('.right_btn').addEventListener('click', function (event) {

    if (event) {
        position = 2;
        let goRight = icon.offsetLeft;
        if (goRight < window.innerWidth - 230) {
            icon.style.left = goRight + 10 + 'px';
            getSel('#icon').classList = [];
            getSel('#icon').classList.add('man_right');
        }
    }
})