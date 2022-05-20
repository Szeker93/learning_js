for (i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log(i + ' mouse');
    } else if (i % 3 == 0) {
        console.log(i + ' dog');
    } else if (i % 5 == 0) {
        console.log(i + ' cat');
    } else {
        console.log(i);
    }
}
