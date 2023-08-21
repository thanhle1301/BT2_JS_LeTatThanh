// BAI 1
function button_onclick1() {
  var diemThu1 = document.getElementById("diem_1").value * 1;
  var diemThu2 = document.getElementById("diem_2").value * 1;
  var diemThu3 = document.getElementById("diem_3").value * 1;
  var doiTuong = document.getElementById("doi_tuong").value * 1;
  var khuVuc = document.getElementById("khu_vuc").value * 1;
  var diemChuan = document.getElementById("diem_chuan").value * 1;

  var tongDiem = diemThu1 + diemThu2 + diemThu3 + doiTuong + khuVuc;
  var ketQua = "";
  console.log("🚀 ~ button_onclick1 ~ tongDiem:", tongDiem);

  if (tongDiem >= diemChuan) {
    if (diemThu1 == 0 || diemThu2 == 0 || diemThu3 == 0) {
      ketQua = "Bạn đã trượt";
    } else {
      ketQua = "Bạn đã đậu";
    }
  } else {
    ketQua = "Bạn đã trượt";
  }
  document.getElementById("ket_qua1").innerHTML =
    ketQua + " . Tổng điểm của bạn là: " + tongDiem;
}
//BAI 2
function tinhTienTra() {
  var soKw = document.getElementById("nhap_so_kw").value * 1;
  var hoTen = document.getElementById("nhap_ho_ten").value;
  var tinhTien = "";
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
  document.getElementById("tinh_tien").innerHTML =
    "Họ tên: " + hoTen + " . Tiền điện: " + tinhTien.toLocaleString() + " VND";
}
// BAI 3
function tinhTienThue() {
  var hoTen2 = document.getElementById("nhap_ho_ten_2").value;
  var tongThuNhap = document.getElementById("tong_thu_nhap").value;
  var soNguoiPhuThuoc = document.getElementById("so_nguoi_phu_thuoc").value;
  var tinhTien = "";
  if (tongThuNhap <= 0) {
    tinhTien = 0;
  } else if (tongThuNhap <= 60000000) {
    tinhTien = (tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000) * 0.05;
  } else if (60000000 < tongThuNhap || tongThuNhap <= 120000000) {
    tinhTien =
      (tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000) * 0.05 +
      (tongThuNhap - 60000000) * 0.1;
  } else if (120000000 < tongThuNhap || tongThuNhap <= 210000000) {
    tinhTien =
      (tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000) * 0.05 +
      60000000 * 0.1 +
      (tongThuNhap - 120000000) * 0.15;
  } else if (210000000 < tongThuNhap || tongThuNhap <= 384000000) {
    tinhTien =
      (tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000) * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      (tongThuNhap - 210000000) * 0.2;
  } else if (384000000 < tongThuNhap || tongThuNhap <= 624000000) {
    tinhTien =
      (tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000) * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      (tongThuNhap - 384000000) * 0.25;
  } else if (624000000 < tongThuNhap || tongThuNhap <= 960000000) {
    tinhTien =
      (tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000) * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      240000000 * 0.25 +
      (tongThuNhap - 240000000) * 0.3;
  } else {
    tinhTien =
      (tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000) * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      240000000 * 0.25 +
      336000000 * 0.3 +
      (tongThuNhap - 960000000) * 0.35;
  }
  document.getElementById("tinh_tien_thue").innerHTML =
    "Họ Tên: " +
    hoTen2 +
    ". Số tiền thuế cần phải trả: " +
    tinhTien.toLocaleString() +
    " VND";
}

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
