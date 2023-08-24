for (let i = 0; i < 10; i++) {

    setTimeout(function () {
        console.log(i);
    },i * 1000);
}

for (var j = 0; j < 10; j++) (function (j) {
    setTimeout(function () {
        console.log(j);
    },j*1000);
})
(j);
