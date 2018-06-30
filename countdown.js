function countdown(time, dosomething) {
    if (!time) {
        console.erroe('not set time');
        return;
    }

    var count = new Date().getTime() + time*1000;
    var init = setTimeout(function() {
        var currentTime = new Date().getTime(),
            t = count - currentTime,
            tmp = setTimeout(arguments.callee, 1000);
        if (dosomething) {
            dosomething(--time);
        }
        if (t < 0) {
            clearTimeout(tmp);
            clearTimeout(init);
        }
    }, 1000);
}
