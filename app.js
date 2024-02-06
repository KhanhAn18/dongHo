// Lấy tham chiếu đến các phần tử DOM
const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch");

// kiểm tra nếu chế độ đã được thiết lập là "Tắt đèn" trong localStorage
if (localStorage.getItem("mode") === "Tắt đèn") {
  // thêm lớp "dark" vào body và thiết lập văn bản cho modeSwitch là "Bật đèn"
  body.classList.add("dark");
  modeSwitch.textContent = "Bật đèn";
}

// thêm một sự kiện click listener cho modeSwitch
modeSwitch.addEventListener("click", () => {
  // chuyển đổi lớp "dark" trên phần tử body
  body.classList.toggle("dark");
  // kiểm tra nếu lớp "dark" hiện đang có trên phần tử body
  const isDarkMode = body.classList.contains("dark");
  // thiết lập văn bản cho modeSwitch dựa trên sự có mặt của lớp "dark"
  modeSwitch.textContent = isDarkMode ? "Bật đèn" : "Tắt đèn";
  // thiết lập localStorage "mode" dựa trên sự có mặt của lớp "dark"
  localStorage.setItem("mode", isDarkMode ? "Tắt đèn" : "Bật đèn");
});

const updateTime = () => {
  // Lấy thời gian hiện tại và tính độ cho các kim đồng hồ
  let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    hrToDeg = (date.getHours() / 12) * 360;

  // Xoay các kim đồng hồ đến độ phù hợp dựa trên thời gian hiện tại
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

// gọi updateTime để đặt kim đồng hồ mỗi giây
setInterval(updateTime, 1000);

// gọi hàm updateTime khi trang được tải
updateTime();