function dangky(e){
    // event.preventDefault();
    var hoten = document.getElementById("hoten");
    var email = document.getElementById("email");
    var sdt = document.getElementById("sdt");
    var mk = document.getElementById("mk");
    var mk2 = document.getElementById("xacnhan");


    var user  = {
        hoten : hoten.value,
        email : email.value,
        sdt : sdt.value,
        mk : mk.value,
    }

    var json = JSON.stringify(user);
    localStorage.setItem('user',json);
    // alert("dang ky thanh cong");

    var mail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(mail.test(email.value) == false){
        alert("Bạn cần nhập Email hợp lệ.");
        email.focus();
        return false;
    }

    if(mk.value.length<8){
        alert("Mật khẩu tối thiểu cần 8 ký tự!");
        mk.focus();
        return false;
    }

    if(mk2.value.length<8){
        alert("Mật khẩu tối thiểu cần 8 ký tự!");
        mk2.focus();
        return false;
    }

    if(mk.value.length != mk2.value.length){
        alert("Bạn cần nhập đúng mật khẩu nhập lại.");
        mk2.focus();
        return false;
    }

    alert("Chúc mừng bạn đã đăng ký thành công!!");
    return true;
}

