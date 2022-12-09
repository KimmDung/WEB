course ={
   'tui':{
      'Ten': ,
      'Giaban':,
      'Hinhanh':,
      'Danhgia':,
      'Nguyenlieu':,
      'Kichthuoc',
   },

   
   'Nen':{
      'Ten': ,
      'Giaban':,
      'Hinhanh':,
      'Danhgia':,
   }


}

function ThemSanpham() {

}
function XoaSanpham() {

}
function Xoadonhang() {
   document.querySelector('.giohang-donhang').remove();
   document.querySelector('.giohang-dssp').innerHTML = '<h2>Không có sản phẩm nào trong giỏ hàng!</h2>'
   localStorage.clear();
}
if (localStorage.cartList !== undefined) {
   //* Giỏ hàng có hàng
   //* thêm sản phẩm vào giỏ hàng
   var listCartCourses = JSON.parse(localStorage.cartList);
   var cartElement = '<div class="row justify-content-center align-items-start g-2 pb-2 mb-5 border-bottom border-secondary"><div class="col-md-4"><img src="" alt="" class="giohang-hinhanh"></div><div class="col-md-6"><h4 class="giohang-tieude text-start"></h4></div><div class="col text-end pe-3"><a href="#" class="giohang-xoa">Xóa</a></div><div class="col text-end"><p class="giohang-gia fw-bold fs-6"></p></div></div>';
   document.querySelector('.giohang-dssp').innerHTML = cartElement.repeat(listCartCourses.length);
   var gioHangTieuDe = document.querySelectorAll('.giohang-tieude');
   var gioHangGiaban = document.querySelectorAll('.giohang-gia');
   var gioHangHinhAnh = document.querySelectorAll('.giohang-hinhanh');
   var gioHangBtnXoa = document.querySelectorAll('.giohang-xoa');
   for (let i = 0; i < listCartCourses.length; i++) {
      gioHangTieuDe[i].innerText = courses[listCartCourses[i]].Tieude;
      gioHangGiaban[i].innerText = courses[listCartCourses[i]].Giaban;
      // gioHangGiaovien[i].innerText = courses[listCartCourses[i]].Giaovien;
      gioHangHinhAnh[i].src = courses[listCartCourses[i]].Hinhanh;
      gioHangBtnXoa[i].setAttribute('name', listCartCourses[i]);
   }

   //* Tính tổng tiền hàng
   var gioHangTongTien = 0;
   for (let i = 0; i < listCartCourses.length; i++) {
      gioHangTongTien += Number.parseInt(courses[listCartCourses[i]].Giaban.replace(".", ""));
   }
   document.querySelector('.giohang-tongtien').innerText = gioHangTongTien + "đ";

   //* Xóa sản phẩm khỏi giỏ hàng
   var btnRemoveCarts = document.querySelectorAll('.giohang-xoa');
   btnRemoveCarts.forEach(e => {
      e.addEventListener('click', (event) => {
         //* Xóa sản phẩm khỏi giỏ hàng
         event.path[2].remove();
         listCartCourses = listCartCourses.filter(item => item != event.target.name);
         localStorage.cartList = JSON.stringify(listCartCourses);

         //* Trừ tổng tiền hàng
         gioHangTongTien -= Number.parseInt(courses[event.target.name].Giaban.replace(".", ""));
         document.querySelector('.giohang-tongtien').innerText = gioHangTongTien + "đ";

         //* Khi không còn sản phẩm nào trong giỏ hàng
         if (document.querySelector(".giohang-dskh").childNodes.length == 0) {
            Xoadonhang();
         }
      })
   })
}
else {
   //* Giỏ hàng rỗng
   //* Không hiển thị tổng tiền hàng
   Xoadonhang();
}