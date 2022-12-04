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

    var mail = /^[a-zA-Z0-9.-]+\[a-zA-Z]{2,4}$/;

    if(mail.test(e.email.value) == false){
        alert("Bạn cần nhập Email hợp lệ.");
        e.email.focus();
        return false;
    }

    if(e.pws.value.length<8){
        alert("Mật khẩu tối thiểu cần 8 ký tự!");
        e.pws.focus();
        return false;
    }

    if(e.pws2.value.length<8){
        alert("Mật khẩu tối thiểu cần 8 ký tự!");
        e.pws2.focus();
        return false;
    }

    if(e.pws.value.length != e.pws2.value.length){
        alert("Bạn cần nhập đúng mật khẩu nhập lại.");
        e.pws.focus();
        return false;
    }

    alert("Chúc mừng bạn đã đăng ký thành công!!");
    return true;
}