var name = window.localStorage.getItem("name");
if (name == " " || name == undefined || name == "null" || name == "") {
    var answer = window.prompt("Hey Whats your name ?");
    window.localStorage.setItem("name", answer);
}

var clock = function () {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var hl = document.querySelector('span[data-val = hl]');
    var hr = document.querySelector('span[data-val = hr]');
    var ml = document.querySelector('span[data-val = ml]');
    var mr = document.querySelector('span[data-val = mr]');
    var sl = document.querySelector('span[data-val = sl]');
    var sr = document.querySelector('span[data-val = sr]');
    var main = document.querySelector('#main');
    var msgContainer = document.querySelector('.message em');
    name = window.localStorage.getItem("name");
    var nhl = 0;
    var state = h > 12 ? 'am' : 'pm';
    nhl = 0;
    var nhr = (h > 12) ? (h - 12) : h;
    var newS = String(s).length > 1 ? s : '0' + s;
    var newM = String(m).length > 1 ? m : '0' + m;
    var messages = ["Good morning ", "Good afternoon ", " Good evening ", "Good night", "Z z z z"];
    var msg;
    switch (nhr) {
        case 10:
            nhl = 1;
            nhr = 0;
            break;
        case 11:
            nhl = 1;
            nhr = 1;
            break;
        case 12:
            nhl = 1;
            nhr = 2;
            break;
        default:
            break;
    }
    switch (true) {
        case h >= 5 && h < 12:
            msg = messages[0] + name;
            main.className = "morning";
            break;
        case h >= 12 && h < 17:
            msg = messages[1] + name;
            main.className = "afternoon";
            break;
        case h >= 17 && h < 22:
            msg = messages[2] + name;
            main.className = "evening";
            break;
        case h >= 22 && h < 24:
            msg = messages[3] + name;
            main.className = "night";
            break;
        default:
            msg = messages[4] + name;
            main.className = "night";
            break;
    }
    msgContainer.innerHTML = msg + ' . . .';

    hl.innerHTML = nhl;
    hr.innerHTML = nhr;
    ml.innerHTML = String(newM)[0];
    mr.innerHTML = String(newM)[1];
    sl.innerHTML = String(newS)[0];
    sr.innerHTML = String(newS)[1];
    setTimeout(clock, 1000);
};

clock();