function countdown(time, dosomething) {
    if (!time) {
        console.erroe('not set time');
        return;
    }
    var count = new Date().getTime() + time*1000;
    var tmp = setInterval(function () {
        var currentTime = new Date().getTime();
        var t = count - currentTime;
        if (dosomething) {
            dosomething(--time);
        }
        if (t < 0) {
            clearInterval(tmp);
        }
    }, 1000);
}
