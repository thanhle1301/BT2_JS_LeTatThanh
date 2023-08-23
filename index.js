// BAI 1
function button_onclick1() {
  var diemThu1 = document.getElementById("diem_1").value * 1;
  var diemThu2 = document.getElementById("diem_2").value * 1;
  var diemThu3 = document.getElementById("diem_3").value * 1;
  var doiTuong = document.getElementById("doi_tuong").value * 1;
  var khuVuc = document.getElementById("khu_vuc").value * 1;
  var diemChuan = document.getElementById("diem_chuan").value * 1;

  var ketQua = "";

  if (
    diemThu1 === "" ||
    diemThu2 === "" ||
    diemThu3 === "" ||
    diemChuan === ""
  ) {
    alert("Bạn cần điền thông tin đầy đủ");
    return false;
  }

  var tongDiem = diemThu1 + diemThu2 + diemThu3 + doiTuong + khuVuc;

  if (diemThu1 === 0 || diemThu2 === 0 || diemThu3 === 0) {
    ketQua = "Bạn đã rớt";
  } else if (tongDiem >= diemChuan) {
    ketQua = "Bạn đã đậu";
  } else {
    ketQua = "Bạn đã rớt";
  }

  document.getElementById(
    "ket_qua1"
  ).innerHTML = `${ketQua}. Tổng điểm của bạn: ${tongDiem}`;
}
//BAI 2
function tinhTienTra() {
  //input
  var soKw = document.getElementById("nhap_so_kw").value * 1;
  var hoTen = document.getElementById("nhap_ho_ten").value;
  var tinhTien = "";
  //điều kiện phải nhập đủ thông tin
  if (hoTen == "" || soKw == "") {
    alert("Bạn cần điền thông tin đầy đủ");
    return false;
  }
  //điều kiện : xử lý
  if (soKw <= 50) {
    tinhTien = 500 * soKw;
  } else if (50 < soKw && soKw <= 100) {
    tinhTien = 50 * 500 + (soKw - 50) * 650;
  } else if (100 < soKw && soKw <= 200) {
    tinhTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (200 < soKw && soKw <= 350) {
    tinhTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tinhTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }
  //output
  document.getElementById("tinh_tien").innerHTML =
    "Họ tên: " + hoTen + " . Tiền điện: " + tinhTien.toLocaleString() + " VND";
}
// BAI 3
function tinhTienThue() {
  // input
  var tongThuNhap = document.getElementById("tongThuNhap").value;
  var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value;
  var hoTen2 = document.getElementById("nhap_ho_ten_2").value;
  // điều kiện phải nhập đủ thông tin
  if (tongThuNhap === "" || soNguoiPhuThuoc === "" || hoTen2 === "") {
    alert("Bạn cần điền thông tin đầy đủ");
    return false;
  }
  // input:
  var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
  var thueSuat = 0;

  // điều kiện để tính
  if (thuNhapChiuThue <= 60e6) {
    thueSuat = 0.05;
  } else if (thuNhapChiuThue <= 120e6) {
    thueSuat = 0.1;
  } else if (thuNhapChiuThue <= 210e6) {
    thueSuat = 0.15;
  } else if (thuNhapChiuThue <= 384e6) {
    thueSuat = 0.2;
  } else if (thuNhapChiuThue <= 624e6) {
    thueSuat = 0.25;
  } else if (thuNhapChiuThue <= 960e6) {
    thueSuat = 0.3;
  } else {
    thueSuat = 0.35;
  }
  var thueThuNhap = thuNhapChiuThue * thueSuat;
  // output
  document.getElementById(
    "tinh_tien_thue"
  ).innerHTML = `Họ tên: ${hoTen2}. Thuế thu nhập: ${thueThuNhap.toLocaleString()} VND`;
}

// function tinhTienThue() {
//   var tongThuNhap = document.getElementById("tongThuNhap").value;
//   var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value;
//   var hoTen2 = document.getElementById("nhap_ho_ten_2").value;
//   if (tongThuNhap === "" || soNguoiPhuThuoc === "" || hoTen2 == "") {
//     alert("Bạn cần điền thông tin đầy đủ");
//     return false;
//   } else {
//     return thueThuNhap();
//   }
// }
// function thueThuNhap() {
//   var hoTen2 = document.getElementById("nhap_ho_ten_2").value;
//   var tongThuNhap = document.getElementById("tongThuNhap").value;

//   var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value;
//   var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
//   var thueSuat = 0;

//   if (thuNhapChiuThue <= 60e6) {
//     thueSuat = 0.05;
//   } else if (thuNhapChiuThue <= 120e6) {
//     thueSuat = 0.1;
//   } else if (thuNhapChiuThue <= 210e6) {
//     thueSuat = 0.15;
//   } else if (thuNhapChiuThue <= 384e6) {
//     thueSuat = 0.2;
//   } else if (thuNhapChiuThue <= 624e6) {
//     thueSuat = 0.25;
//   } else if (thuNhapChiuThue <= 960e6) {
//     thueSuat = 0.3;
//   } else {
//     thueSuat = 0.35;
//   }

//   var thueThuNhap = thuNhapChiuThue * thueSuat;

//   document.getElementById(
//     "tinh_tien_thue"
//   ).innerHTML = `Họ tên: ${hoTen2}. Thuế thu nhập: ${thueThuNhap.toLocaleString()} VND`;
// }

//////////////////
// lựa chọn để thêm 1 input khác
function showInput() {
  var select = document.getElementById("mySelect").value;
  var input = document.getElementById("so_ket_noi");
  if (select == "option1") {
    input.style.display = "block";
  } else {
    input.style.display = "none";
  }
}

function tinhTienCap() {
  var khachHang = document.getElementById("mySelect").value;
  var soKenhCaoCap = document.getElementById("so_kenh_cao_cap").value;
  var soKetNoi = document.getElementById("so_ket_noi").value;
  var maKhachHang = document.getElementById("ma_khach_hang").value;

  var tinhTienCapThue = 0;
  if (khachHang == "option2") {
    tinhTienCapThue = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
  } else if (khachHang == "option1") {
    tinhTienCapThue = 15 + 75 + 5 * (soKetNoi - 10) + 50 * soKenhCaoCap;
  }
  document.getElementById("tinh_tien_cap_thue").innerHTML =
    "Mã khách hàng: " + maKhachHang + ". Tiền cáp: $" + tinhTienCapThue;
}
