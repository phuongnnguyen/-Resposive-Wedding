let destination = new Date("Jan 9, 2025 10:00:00").getTime();

let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = destination - now;

    let days = ~~(distance / (1000 * 60 * 60 * 24));
    let hours = ~~((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = ~~((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = ~~((distance % (1000 * 60)) / 1000);
    $("#hour").html(hours);
    $("#day").html(days);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);

    if(distance < 0) {
        clearInterval(x);
    }
}, 1000);

