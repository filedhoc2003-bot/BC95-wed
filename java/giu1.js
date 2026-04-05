const sinhViens = [
  { name: "Nguyen Van A", age: 20, diem: 8.5 },
  { name: "Nguyen Van B", age: 22, diem: 9.0 },
  { name: "Nguyen Van Châu", age: 20, diem: 7.0 },
  { name: "Nguyen Van Dũng", age: 20, diem: 4.5 },
];

// forEach: duyệt qua từng phần tử của mảng
// viết tắt của for...of
// KHI NÀO DÙNG
// - in ra phần tử trong mảng
// - tính toán, xử lý phần tử dữ liệu của mảng
// -- render giao diện của mảng

// TH1: in ra tên của từng sinh viên
sinhViens.forEach((sv, index) => {
  console.log(`tên sinh viên thứ ${index + 1} là: ${sv.name}`);
});

// TH2: tính điểm trung bình cảu tất cả sinh viên
let dtb = 0;
sinhViens.forEach((sv) => {
  dtb += sv.diem;
});
dtb = dtb / sinhViens.length;

// TH3: render giao diện cho từng sinh viên
// hiển thị danh sách sinh viên
let htmlContent = "";
sinhViens.forEach((sv) => {
  htmlContent += `<li>${sv.name}-${sv.diem}</li>`;
});

// forech: không trả về mảng mới
// map(): duyệt qua từng phần tử của mảng
// kết quả trả về là 1 mảng mới
// dùng nhiều trong react để render giao diện
const newSinhViens = sinhViens.map((sv) => {
  let xepLoai = "";
  if (sv.diem >= 8) {
    xepLoai = "giỏi";
  } else if (6.5 <= sv.diem && sv.diem < 8) {
    xepLoai = "khá";
  } else if (5 <= sv.diem && sv.diem < 6.5) {
    xepLoai = "trung bình";
  } else {
    xepLoai = "yếu";
  }
  // {
  //     name, age, diem
  // }

  // spread operator:
  // {
  //     name, age, diem, xepLoai
  // }
  return {
    ...sv, // giữ nguyên các thuộc tính cũ của đối tượng
    xepLoai, // thêm thuộc tính xepLoai vào đối tượng mới
  };
});
console.dir(newSinhViens);

// hiển thị danh sách kèm xếp loại

// filter(): duyệt qua từng phần tử của mảng
// để lọc ra những phần tử thỏa yêu cầu nào đó
// function bên trong filter phải trả về true hoặc false
const filterSinhVienGioi = sinhViens.filter((sv) => sv.diem >= 8);
console.dir(filterSinhVienGioi);

const dsPhim = [
  { name: "Deadpool", genre: "Action", rating: 8.5 },
  { name: "Avengers", genre: "Action", rating: 8.0 },
  { name: "Avengers", genre: "Action 123", rating: 9.0 },
  { name: "The Notebook", genre: "Romance", rating: 7.5 },
  { name: "Titanic", genre: "Romance", rating: 9.0 },
];

// case 1: lọc ra những phim có rating >=8
const filterPhimRate8 = dsPhim.filter((phim) => phim.rating >= 8);
console.dir(filterPhimRate8);

// case 2: tìm tên phim bất kỳ
const keyword = "a";
const findPhim = dsPhim.filter((phim) =>
  phim.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase),
);
console.log(findPhim);

//
// find(), findIndex(), some(), every(), reduce(), sort()...
// find(): tìm phần tử đầu tiên thỏa yêu cầu nào đó, trả về phần tử đó
// kết quả trả về là 1 đối tượng, không phải mảng

const findPhimAvengers = dsPhim.find((phim) => phim.name === "Avengers");
console.dir(findPhimAvengers);
//   KHI NÀO DÙNG:
// lấy thông tin chi tiết của 1 đối tượng theo tên, id, mã số nào đó

// findIndex(): tìm phần tử đầu tiên thỏa yêu cầu nào đó, trả về vị trí (index) của phần tử đó trong mảng
// trả về -1 nếu không tìm thấy phần tử nào thỏa yêu cầu
const findIndexPhim = dsPhim.findIndex((phim) => phim.name === "Avengers");
console.dir(findIndexPhim);
// // case -1:
const findIndexPhimNotFound = dsPhim.findIndex(
  (phim) => phim.name === "zxzczxcasdaddsf",
);
console.dir(findIndexPhimNotFound);

// some(): kiểm tra xem có phần tử nào thỏa mảng yêu cầu đó hay không< trả về true hoặc false
// kết quả trả về là boolean
const isSomePhimAction = dsPhim.some((phim) => phim.genre === "Action");
console.dir(isSomePhimAction);

// every(): kiểm tra xem tất cả phần tử có thỏa yêu cầu nào đó hay không, trả về true hoặc false
// kết quả trả về boolean
const isEveryAction = dsPhim.every((phim) => phim.genre === "Action");
console.dir(isEveryAction);

// reduce(): duyệt qua từng phần tử của mảng để tính toán ra 1 giá trị cuối cùng nào đó
// kết quả trả về 1 giá trị duy nhất, không phải mảng
// khi nào dùng
// tính tổng , tích , trung bình cộng của 1 mảng số
// tính tổng tiền các mặt hàng trong giỏ hàng (quản lý sản phẩm, quản lý đơn hàng)
const listNumber = [1, 2, 3, 4, 5, 6, 7];
// số 0 tạo giá trị khởi tạo cho biến tổng
const sum = listNumber.reduce((num, tong) => tong - num, 0);
console.log(`tổng: ${listNumber} là: ${sum}`);
