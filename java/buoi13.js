// khai báo mảng số nguyên
let a = [1, 2, 3, 4, 5];
let b = ["chuối", "xoài", "cam", "quýt"];
let c = ["áo", "quần", "giày", "dép", "găng"];
let d = ["dây", "nhẫn", "vòng", "đồng hồ", "chuỗi"];
let f = ["đạt", "p.vy", "tr.vy", "hiếu"];

console.log(`number: ${a}`);
console.log(`fruit: ${b}`);
console.log(a[1]);
console.log(b[3]);
// đếm số lượng phần tử của mảng: length
console.log(a.length);
console.log(b.length);
// lấy phần tử cuối của mảng: length-1
let lastIndex = a.length - 1;
console.log(`phần tử cuối của mảng là: ${a[lastIndex]}`);
// thêm phần tử vào cuối mảng: push()
a.push(8);
console.log(`phần tử thêm vào ở cuối mảng là: ${a}`);
// thêm phần tử vào đầu mảng: unshift()
a.unshift(9);
console.log(`phần tử thêm ở đầu mảng là: ${a}`);
// xóa phần tử cuối cùng của mảng: pop()
let cleanFisrtItem = b.pop();
console.log(`phần tử cuối bị xóa là: ${b}`);
// xóa phần tử đầu tiên của mảng
let cleanLastItem = b.shift();
console.log(`xóa phần tử đầu tiên của mảng là: ${b}`);
// thêm xóa sửa: splice
// TH : xóa
// TH1: xóa giày
c.splice(2, 1);
console.log(`xóa phần tử giày: ${c}`);
// TH2: xóa hết
c.splice(0);
console.log(`xóa hết: ${c}`);
// TH: thêm
d.splice(3, 0, "tất", "kem");
console.log(`thêm tất và kem ở giữa vòng và đồng hồ: ${d}`);
// TH: thay thế
f.splice(1, 1, "thư");
console.log(`thay thế p.vy thành thư: ${f}`);
// tóm lại: thêm là tính vị trí thật 1234...
// còn xóa và thay thế là tính vị trí ảo 01234 ....
//
//  1. arrow function: () => {}
// 2. let, const
// let: dùng cho những giá trị thay đổi đc
// ví dụ:
let age = 23;
age = 25;
console.log(age);
// const: dùng cho những giá trị ko thay đổi đc số
const age1 = 23;
// age1 = 25; // sai nên không hiển thị
console.log(age1);
// 3. template string: `${variable hoặc function}`
// 4. default parameter
const e = (number1 = 1, number2 = 2, number3 = 3) => {
  if (number3) {
    return number1 + number2 + number3;
  }
  return number1 + number2;
};
console.log("default paramenter");
console.log(e(3, 4));
console.log(e(3));
console.log(e());
console.log(e(3, 5, 6));
// 5. spread operator
// spread - trải ra
// dùng trong:
// - copy mảng/object
// - nối mảng/ merge object
// - truyền vào hàm
// Ý nghĩa: giảm thiểu code thủ công: copy mảng, nối mảng, truyền vào hàm
// TH1: copy mảng
const original = [1, 2, 3, 4, 5];
const copyOriginal = [...original];
console.log(
  `mảng được copy là: ${copyOriginal}` + ` mảng trước khi copy ${original}`,
);
// TH2: nối mảng
const j = [1, 2, 3, 4, 5];
const k = [6, 7, 8, 9, 10];
const l = [...j, ...k];
console.log(`nối mảng j và k là: ${l}`);
//
//
// Buổi 13: bài tập
// bài 1: in các số từ 1 đến n nhập từ bàn phím
const printfNumber = (n) => {
  // kiểm tra lỗi
  // isNaN: kiểm tra chữ || n<0 : kiểm tra số có bé hơn 0 không
  if (n < 0 || isNaN(n)) {
    console.log(`bạn đã nhập sai mời bạn nhập lại`);
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
};
console.log(`in số từ 1-10 là: ${printfNumber(10)}`);
console.log(`in số từ 1-10 là: ${printfNumber(-4)}`);
console.log(`in số từ 1-10 là: ${printfNumber("một")}`);
//
// Bài 2: in các số chẵn từ 1-10
// TH1: ta dùng if
const printfNumber1 = (n) => {
  if (n < 0 || isNaN(n)) {
    console.log("bạn đã nhập sai mời bạn nhập lại");
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
console.log("in ra các số chẵn là: ", printfNumber1(10));
console.log("in ra các số chẵn là: ", printfNumber1(-10));
console.log("in ra các số chẵn là: ", printfNumber1("mười"));
// TH2: ta i+=2
const printfNumber2 = (n) => {
  if (n < 0 || isNaN(n)) {
    console.log("bạn đã nhập sai mời bạn nhập lại");
    return;
  }
  for (let i = 0; i <= n; i += 2) {
    console.log(i);
  }
};
console.log("in ra các số chẵn là: ", printfNumber2(10));
console.log("in ra các số chẵn là: ", printfNumber2(-10));
console.log("in ra các số chẵn là: ", printfNumber2("mười"));
//
//
// Bài 3: đếm xem có bao nhiêu biến chẵn và bao nhiêu biến lẻ từ 1-n
const printfNumber3 = (n) => {
  // tạo 2 bien chẵn và lẻ
  let countChan = 0;
  let countLe = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      countChan++;
    } else {
      countLe++;
    }
  }
  console.log("số chẵn là: ", countChan, " số lẻ là: ", countLe);
};
console.log(printfNumber3(10));
// Loop qua mảng
// đk bắt đầu vòng lặp: duyệt từ item đầu tiên của mảng thông
// qua index (chỉ số) -> let i = 0

// đk kết thúc vòng lặp: duyệt tới cuối mảng
// i < số lượng phần tử của mảng (numbers2.length)

// bước nhảy: tăng i lên 1 đơn vị -> i++
// item đầu tiên -> 0
// item cuối cùng -> length - 1
//
// in mảng ra màn hình
const numbers2 = [1, 2, 3, 4, 5];
const numbers3 = ["một", "hai", "ba", "bốn", "năm"];
const numbers4 = [4, 5, 6, 7, 8, 9, 10, 11];
// TH1: dùng for
const printfArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
console.log(printfArray(numbers2));
// TH2: dùng while
const printArrayWithWhile = (arr) => {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
};
console.log("while: ", printArrayWithWhile(numbers3));
// in mảng có số chẵn ra màn hình
// TH1: dùng for
const printfArray1 = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
};
printfArray1(numbers2);
// TH2: dùng while
const printArrayWithWhile1 = (arr) => {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }

    i++;
  }
};
printArrayWithWhile1(numbers4);
//
// Tìm số lớn nhất trong mảng
let arr1 = [6, 8, 9, 7, 15, 88];
// TH1: for
const findMax = (arr) => {
  let max = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log("số lớn nhất là: ", max);
};
console.log(`${findMax(arr1)}`);
// TH2: while

const findMax1 = (arr) => {
  let max1 = arr[0];
  let i = 1;
  while (i < arr.length) {
    if (arr[i] > max1) {
      max1 = arr[i];
    }
    i++;
  }
  console.log("số lớn nhất 1là: ", max1);
};
findMax1(arr1);
//
//
// Đảo ngược mảng
//TH1: for
const reverseArray = (arr) => {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  console.log(reversed);
};
reverseArray(arr1);
//TH2: while
const reverseArr1 = (arr) => {
  let i = arr.length - 1;
  let reversed = [];

  while (i >= 0) {
    reversed.push(arr[i]);
    i--;
  }

  console.log("Mảng đảo ngược là:", reversed);
};
reverseArr1(arr1);
//
//
// làm bài tập hướng đối tượng
const students = [
  { name: "An", age: 20, gpa: 8.5 },
  { name: "Bình", age: 20, gpa: 7 },
  { name: "Cường", age: 19, gpa: 9.0 },
  { name: "Dương", age: 20, gpa: 5.5 },
];
// in ra người có số điểm trung bình cao nhất
const findTopStudent = (students) => {
  let topStudent = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].gpa > topStudent.gpa) {
      topStudent = students[i];
    }
  }
  console.log("học sinh có số điểm cao nhất là: ", topStudent);
};
findTopStudent(students);
//
//
// in ra điểm từ cao đến thấp
const sortStudentsByGPA = (students) => {
  // copy mảng gốc => dùng spread operator
  const copyStudents = [...students];
  // khi muốn sắp xếp giảm dần thì dùng b - a
  // khi muốn sắp xếp tăng dần thì dùng a - b
  copyStudents.sort((a, b) => b.gpa - a.gpa);
  console.log(
    `Danh sách sinh viên sau khi sắp xếp theo điểm trung bình từ cao đến thấp:`,
  );
  console.dir(copyStudents);
};
sortStudentsByGPA(students);
// làm bài thử hướng đối tượng
const hocSinh = [
  { name: "nguyễn thành đạt", age: 22, live: "long an", core: 9 },
  { name: "huỳnh minh thư", age: 23, live: "Thành phố hồ chí minh", core: 8 },
];
const maxCore = (hocSinh) => {
  let max = hocSinh[0];
  for (let i = 1; i < hocSinh.length; i++) {
    if (hocSinh[i].core > max.core) {
      max = hocSinh[i].core;
    }
  }
  console.log(max);
};
maxCore(hocSinh);
// sắp xếp điểm tăng dần
const sortHocSinh = (hocSinh) => {
  // copy mảng gốc
  const copyHocSinh = [...hocSinh];
  copyHocSinh.sort((a, b) => a.core - b.core);
  console.log(`danh sách từ thấp đến cao:`);
  console.dir(copyHocSinh);
};
sortHocSinh(hocSinh);
