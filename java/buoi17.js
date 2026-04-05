console.log("JS LOADED");
const API_URL = "https://69d24a525043d95be971b50b.mockapi.io/API/phone";
// liệt kê các id
const id = {
  danhSachSP: document.getElementById("danhSachSP"),
  btnGioHang: document.getElementById("btnGioHang"),
  searchInput: document.getElementById("searchInput"),
  loading: document.getElementById("loading"),
  popupChiTiet: document.getElementById("popupChiTiet"),
  overlay: document.getElementById("overlay"),
  btnClose: document.getElementById("btnClose"),
  popupContent: document.getElementById("popupContent"),
  popupGioHang: document.getElementById("popupGioHang"),
  overlayGioHang: document.getElementById("overlayGioHang"),
};

// giỏ hàng và danh sách sp
let danhSachSP = [];
let gioHang = [];
// define các hàm: call aPI, filter sản phẩm, thêm vào giỏ hàng,...

// hàm hiển thị danh sách sản phẩm
const renderDanhSachSP = (danhSach) => {
  id.danhSachSP.innerHTML = "";
  // kiểm tra nếu danh sách rỗng thì hiển thị thông báo
  if (danhSach.length === 0) {
    id.danhSachSP.innerHTML = ` <p class="text-gray-500 text-center"> Không tìm thấy sản phẩm nào</p>`;
    return;
  }

  // duyệt qua danh sách sản phẩm và tạo thẻ html để hiển thị
  // dùng map để duyệt qua mảng và trả về một mảng mới chứa các thẻ html
  // API: dữ liệu đơn thuần -> map -> list thẻ html -> join("") -> string html -> innerHTML
  const content = danhSach.map((phone) => {
    return `  <div class="bg-white rounded-lg shadow hover:shadow-lg p-5">
                    <img src=${phone.img} alt=${phone.name} class="w-full h-48 object-contain mb-3">
                    <h3>${phone.name}</h3>
                    <p>${phone.desc}</p>
                    <p>${phone.price} VND</p>
                    <span>${phone.type}</span>

                    <div class="flex gap-2 mt-auto">
                        <button
                            class="flex-1 bg-gray-200 px-3 py-2 rounded"
                            onclick="showChiTietSP(${phone.id})"
                        >Xem chi tiết</button>
                        <button class="flex-1 bg-blue-500 text-white px-3 py-2 rounded">Thêm vào giỏ</button>
                    </div>
                </div>    `;
  });
  // gộp tất cả các thẻ html lại thành một chuỗi và hiển thị lên trang
  // join: dùng để gộp tất cả các phần tử trong mảng thành một chuỗi
  // VD: ["a", "b", "c"].join("-") -> "a-b-c"
  // VD: ["a", "b", "c"].join("") -> "abc"
  id.danhSachSP.innerHTML = content.join("");
};
// hàm hiển thị chi tiết sản phẩm
const showChiTietSP = (phoneId) => {
  // tìm sản phẩm trong danh sách sản phẩm dựa trên id
  const phone = danhSachSP.find((sp) => sp.id === phoneId);
  // nếu không tìm thấy sản phẩm thì hiển thị thông báo lỗi
  if (!phone) {
    alert(`không tìm thấy sản phẩm`);
    return;
  }
  // hiển thị popup chi tiết sản phẩm
  id.popupContent.innerHTML = `
         <img
            src=${phone.img}
            alt=${phone.name}
            class="w-full h-64 object-contain mb-5"
        >
        <h2 class="text-2xl font-bold mb-2">${phone.name}</h2>
        <p class="text-blue-600 font-bold text-2xl mb-4">${phone.price.toLocaleString()} VND</p>
        <div class="bg-gray-50 rounded-xl p-4 mb-6">
            <table class="w-full text-sm">
                <tbody class="divide-y divide-gray-200">
                    <tr>
                        <td class="py-3 text-gray-500 font-medium w-1/3">Loại</td>
                        <td class="py-3 text-gray-800 font-semibold text-right">${phone.type}</td>
                    </tr>
                    <tr>
                        <td class="py-3 text-gray-500 font-medium">Màn hình</td>
                        <td class="py-3 text-gray-800 font-semibold text-right">${phone.screen}</td>
                    </tr>
                    <tr>
                        <td class="py-3 text-gray-500 font-medium">Camera trước</td>
                        <td class="py-3 text-gray-800 font-semibold text-right">${phone.frontCamera}</td>
                    </tr>
                    <tr>
                        <td class="py-3 text-gray-500 font-medium">Camera sau</td>
                        <td class="py-3 text-gray-800 font-semibold text-right">${phone.backCamera}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p class="mb-4">${phone.desc}</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded">Thêm vào giỏ</button>
        `;
  id.popupChiTiet.classList.remove("hidden");
};
// ------------------------------------------------------------
// LOGIC CODE CLOSE POPUP CHI TIẾT SẢN PHẨM
// cách mới: define function closePopupChiTiet() được gọi ở html, khi click vào nút đóng popup
const closePopupChiTiet = () => {
  id.popupChiTiet.classList.add("hidden");
};
// cách cũ: addEventListener cho nút đóng popup
// el.btnClosePopup.addEventListener("click", () => {
//     el.popup.classList.add("hidden")
// })

// close popup khi click ra ngoài nội dung popup - overlay
// khi thêm event click cho overlay -> nơi nào có id overlay sẽ có thể đóng popup khi click vào đó
id.overlay.addEventListener("click", closePopupChiTiet);
// LOGIC CODE POPUP GIỎ HÀNG
const closePopupGioHang = () => {
  id.popupGioHang.classList.add("hidden");
};
id.overlayGioHang.addEventListener("click", closePopupGioHang);
// --------------------------------------------------------------

// viết hàm hiển thị giỏ hàng sau khi click vào nút giỏ hàng ở header
id.btnGioHang.addEventListener("click", () => {
  id.popupGioHang.classList.remove("hidden");
  // kiểm tra nếu giỏ hàng rỗng thì hiển thị thông báo
  //   if (gioHang.length === 0) {
  //     el.popupGioHang.innerHTML = `
  //             <h2>Giỏ hàng</h2>
  //             <p class="text-gray-500 text-center">Giỏ hàng của bạn đang trống</p>
  //         `;
  //     return;
  //   }
  //  continue: hiển thị danh sách sản phẩm trong giỏ hàng
});
// ================== SEARCH ==================
// id.searchSP.addEventListener("input", () => {
//   const keyword = id.searchSP.value.toLowerCase();

//   const filtered = danhSachSP.filter(
//     (sp) =>
//       sp.name.toLowerCase().includes(keyword) ||
//       sp.desc.toLowerCase().includes(keyword) ||
//       sp.type.toLowerCase().includes(keyword),
//   );

//   renderDanhSachSP(filtered);
// });
// ================== API ==================
const layDanhSachSP = async () => {
  id.loading.classList.remove("hidden");

  try {
    const res = await axios.get(API_URL);
    danhSachSP = res.data;
    id.loading.classList.add("hidden");

    renderDanhSachSP(danhSachSP);
  } catch (error) {
    id.danhSachSP.innerHTML = `
      <p class="text-red-500 text-center">Lỗi tải dữ liệu</p>
    `;

    id.loading.classList.add("hidden");
  }
};

// chạy
layDanhSachSP();
// window.addEventListener("DOMContentLoaded", layDanhSachSP);
