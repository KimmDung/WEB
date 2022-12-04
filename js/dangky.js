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

function dangnhap(e){ 
    event.preventDefault();
    var hoten = document.getElementById("hoten").value;
    var email = document.getElementById("email").value;
    var sdt = document.getElementById("sdt").value;
    var mk = document.getElementById("mk").value;
    var user = localStorage.getItem(hoten);
    var data = JSON.parse(user);

    var mail = /^[a-zA-Z0-9.-]+\[a-zA-Z]{2,4}$/;

    if( mail.test(e.emai.value) == false){
        alert("Mời bạn nhập email hợp lệ!");
        e.email.focus();
        return false;
    }

    if( e.pws.value.length < 8){
        alert("Mật khẩu phải từ 8 ký tự.");
        e.pws.focus();
        return false;
    }

    alert("Đăng nhập thành công!");
    return true;

    // if(user == null){
    //     alert("Ban can nhap ten va mat khau");
    // } else if (hoten == data.hoten && email == data.email && sdt == data.sdt && mk == data.mk){
    //     alert("Dang nhap thanh cong");
    //     window.location.href = "/html/index.html"
    // }
    // else{
    //     alert("Dang nhap khong thanh cong")
    // }
}