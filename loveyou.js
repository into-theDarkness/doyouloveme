function Yes() {
    alert("Vậy là chú đồng ý rồi nhé ^^ !");
}
function No() {
    let a = Math.round(Math.random() * 650);
    let b=  Math.round(Math.random()* 650);
    document.getElementById('btnNo').style.top = b + 'px';
    document.getElementById('btnNo').style.left = a + 'px';
}
