const element = {
  form: document.getElementById("formHoaDon"),
  maKH: document.getElementById("maKH"),
  loaiKH: document.getElementById("loaiKH"),
  soKetNoi: document.getElementById("soKetNoi"),
  wrapKetNoi: document.getElementById("wrapKetNoi"),
  soKenh: document.getElementById("soKenhCaoCap"),
  ketQua: document.getElementById("resultHoaDon"),

  // error element
  errorMaKH: document.getElementById("errorMaKH"),
  errorLoaiKH: document.getElementById("errorLoaiKH"),
  errorSoKetNoi: document.getElementById("errorSoKetNoi"),
  errorSoKenh: document.getElementById("errorSoKenhCaoCap"),
};

// OBJECT LƯU GIÁ TRỊ
const BANG_GIA = {
  nhaDan: {
    phiXuLy: 4.5,
    phiDichVu: 20.5,
    phiKenhCaoCap: 7.5,
  },
  doanhNghiep: {
    phiXuLy: 15,
    phiDichVu10Dau: 75, // 10 kết nối đầu tiên
    phiKetNoiThem: 5, // 5$/ kết nối thêm
    phiKenhCaoCap: 50,
  },
};

// handle hidden//show input soKetNoi
element.loaiKH.addEventListener("change", () => {
  const loai = element.loaiKH.value;
  if (loai === "nhaDan") {
    element.wrapKetNoi.classList.add("hidden");
  } else {
    element.wrapKetNoi.classList.remove("hidden");
  }
});

///
// tạo hàm ẩn lỗi
const hideError = (errElement) => {
  errElement.innerText = "";
  errElement.classList.add("hidden");
};

// tạo hàm show lỗi
const showError = (errElement, message) => {
  errElement.innerText = message;
  errElement.classList.remove("hidden");
};

const validationBai4 = (maKH, loaiKH, soKetNoi, soKenh) => {
  let isValid = true;
  // kiểm tra lỗi
  hideError(element.errorMaKH);
  hideError(element.errorLoaiKH);
  hideError(element.errorSoKetNoi);
  hideError(element.errorSoKenh);
};
const tinhHoaDonNhaDan = (soKenh) => {
  const gia = BANG_GIA.nhaDan;
  const tongTien = gia.phiDichVu + gia.phiXuLy + soKenh * gia.phiKenhCaoCap;
  return tongTien;
};
const tinhHoaDonDoanhNghiep = (soKetNoi, soKenh) => {
  const gia = BANG_GIA.doanhNghiep;
  let phiDichVu = gia.phiDichVu10Dau;
  if (soKetNoi > 10) {
    const soKetNoiThem = soKetNoi - 10;
    phiDichVu = gia.phiDichVu10Dau + soKetNoiThem * gia.phiKetNoiThem;
  }
  const tongTien = gia.phiXuLy + phiDichVu + soKenh * gia.phiKenhCaoCap;
  return tongTien;
};
element.form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("submit form");

  const maKH = element.maKH.value;
  const loaiKH = element.loaiKH.value;
  const soKetNoi = Number(element.soKetNoi.value);
  const soKenh = Number(element.soKenh.value);

  //   const isValid = validationBai4(maKH, loaiKH, soKetNoi, soKenh);
  //   if (!isValid) {
  //     return;
  //   }

  // tính hóa đơn - hiển thị kết quả -> BTVN
  let tongTien = 0;
  if (loaiKH === "nhaDan") {
    tongTien = tinhHoaDonNhaDan(soKenh);
  } else {
    tongTien = tinhHoaDonDoanhNghiep(soKetNoi, soKenh);
  }

  console.log("tongTien", tongTien);
  element.ketQua.innerText = `Mã khách hàng: ${maKH} - Tổng tiền: $${tongTien}`;
});
