function dangnhap(e) {
   event.preventDefault();
   var user = JSON.parse(localStorage.getItem('user'));
   var password = document.getElementById('mk');
   var email = document.getElementById('dn');

   if (email.value == '') {
      alert('Vui lòng nhập email hoặc số điện thoai!');
      e.dn.focus();
      return false;
   }

   if (email.value != user.email && email.value != user.sdt) {
      alert('Email hoặc số điện thoại chưa được đăng kí. Vui lòng đăng kí tài khoản!')
      e.dn.focus();
      return false;
   }

   if (password.value == '') {
      alert('Vui lòng nhập mật khẩu!');
      return false;
   }
   if (password.value != user.mk) {
      alert('Mật khẩu không hợp lệ. Vui lòng nhập lại!');
      e.mk.focus();
      return false;
   }
   alert("Đăng nhập thành công!");
   return true;
}