$(function() {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    console.log(`${day}/${month}/${year} at ${time}`)
})