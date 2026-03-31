const element = {
  form: document.getElementById("formXetTuyen"),
  inputDiemChuan: document.getElementById("diemChuan"),
  inputDiemToan: document.getElementById("diemToan"),
  inputDiemLy: document.getElementById("diemLy"),
  inputDiemHoa: document.getElementById("diemHoa"),
  doiTuong: document.getElementById("doiTuong"),
  khuVuc: document.getElementById("khuVuc"),
  btnTinhdiem: document.getElementById("btn"),
  erroDiemChuan: document.getElementById("erroDiemChuan"),
  erroDiemToan: document.getElementById("erroDiemToan"),
  erroDiemLy: document.getElementById("erroDiemLy"),
  erroDiemHoa: document.getElementById("erroDiemHoa"),
};
// tạo object để lưu điểm ưu tiên khu vực và đối tượng
const DIEM_UU_TIEN_KHU_VUC = {
  A: 2,
  B: 1,
  C: 0.5,
};
//
const DIEM_UU_TIEN_DOI_TUONG = {
  1: 2.5,
  2: 1.5,
  3: 1,
};
const showError = (errElement, message) => {
  errElement.innerText = message;
  errElement.classList.remove("hidden");
};
// tách hanmf valition ra 1 hàm riêng để code sạch hơn

//Tạo hàm ẩn lỗi
const hideError = (errElement) => {
  errElement.innerText = "";
  errElement.classList.remove("hidden");
};

const valitionInput = (diemChuan, diemToan, diemLy, diemHoa) => {
  // bài tạo biến isVatid để kiểm tra. deFault là true
  let isValid = true;
  // B2: xóa all cả các lỗi cũ nếu có
  hideError(element.erroDiemChuan);
  hideError(element.erroDiemToan);
  hideError(element.erroDiemLy);
  hideError(element.erroDiemHoa);

  if (diemChuan < 0 || diemChuan > 30 || isNaN(diemChuan)) {
    // alert("Điểm chuẩn phải từ 0 đến 30")
    showError(element.erroDiemChuan, "Điểm chuẩn phải từ 0 đến 30");
    isValid = false;
  }
  // điểm từng môn phải từ 0 đến 10
  // Môn 1:
  if (diemToan < 0 || diemToan > 10 || isNaN(diemToan)) {
    showError(element.erroDiemToan, "Điểm môn 1 phải từ 0 đến 10");
    isValid = false;
  }
  // Môn 2:
  if (diemLy < 0 || diemLy > 10 || isNaN(diemLy)) {
    showError(element.erroDiemLy, "Điểm môn 1 phải từ 0 đến 10");
    isValid = false;
  }

  // Môn 3:
  if (diemHoa < 0 || diemHoa > 10 || isNaN(diemHoa)) {
    // alert("Điểm môn 3 phải từ 0 đến 10")
    showError(element.erroDiemHoa, "Điểm môn 3 phải từ 0 đến 10");
    isValid = false;
  }
  return isValid;
};

//
element.form.addEventListener(`submit`, (event) => {
  //event này được lấy khji user click vào button có type submit
  // b3: lấy dữ liệu người dùng nhập vào
  // QUAN TRỌNG: khi dùng với thẻ form
  // thì phải dùng event.prevenDefault() để ngăn form đi đâu cả =>
  event.preventDefault();
  const diemChuan = Number(element.inputDiemChuan.value);
  const diemToan = Number(element.inputDiemToan.value);
  const diemLy = Number(element.inputDiemLy.value);
  const diemHoa = Number(element.inputDiemHoa.value);
  const khuVuc = element.khuVuc.value;
  const doiTuong = element.doiTuong.value;
  // b4: tính điểm ưu tiên
  const diemUuTienKhuVuc = DIEM_UU_TIEN_KHU_VUC[khuVuc];
  const diemUuTienDoiTuong = DIEM_UU_TIEN_DOI_TUONG[doiTuong];
  console.log(diemChuan);
  console.log(diemToan, diemLy, diemHoa);
  console.log(diemUuTienKhuVuc, diemUuTienDoiTuong);
  // bước 4.1:
  // lưu ý: code chạy được trước => clean code sau

  // tạo hàm show lỗi

  // if(isNaN(diemChuan) || isNaN(diem1) || isNaN(diem2) || isNaN(diem3)) {
  //     alert("Vui lòng nhập số vào tất cả các trường điểm")
  //     return
  // }
  // range điểm chuẩn và điểm từng môn phải từ 0 đến 30

  const isValid = valitionInput(diemChuan, diemToan, diemLy, diemHoa);
  if (!isValid) {
    // nếu isValid là false thì sẽ không chạy tiếp mà sẽ dừng ở đây
    return;
  }
  //
  // B5: range điểm chuẩn và điểm từng môn phải từ 0 - 30
  // if (diemChuan < 0 || diemChuan > 30) {
  //   // alert("điểm chuẩn phải từ 0-30đ");
  //   element.erroDiemChuan.innerText = "bạn đã sai";
  //   element.erroDiemChuan.classList.remove("hidden");
  //   return;
  // }

  // if (diemToan < 0 || diemToan > 10) {
  //   alert("điểm chuẩn phải từ 0-10đ");
  //   return;
  // }
  // if (diemLy < 0 || diemLy > 10) {
  //   alert("điểm chuẩn phải từ 0-10đ");
  //   return;
  // }
  // if (diemHoa < 0 || diemHoa > 10) {
  //   alert("điểm chuẩn phải từ 0-10đ");
  //   return;
  // }
  //
  const tongDiem =
    diemToan + diemLy + diemHoa + diemUuTienDoiTuong + diemUuTienKhuVuc;
  //
  if (tongDiem >= diemChuan) {
    alert(`bạn đã đậu, tổng điểm của bạn là:${tongDiem}`);
  } else {
    alert(`bạn đã rớt, tổng điểm của bạn là: ${tongDiem}`);
  }
});
