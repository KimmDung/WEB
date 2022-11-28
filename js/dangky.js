function dangky(e){
    event.preventDefault();
    var hoten = document.getElementById("hoten").value;
    var email = document.getElementById("email").value;
    var sdt = document.getElementById("sdt").value;
    var mk = document.getElementById("mk").value;

    var user  = {
        hoten : hoten,
        emai : email,
        sdt : sdt,
        mk : mk,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(hoten,json);
    alert("dang ky thanh cong");
}