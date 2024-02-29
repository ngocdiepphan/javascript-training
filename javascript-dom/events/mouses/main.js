// thay doi mau khi double click
const changeColor = () => {
  const p = document.querySelector("p");
  p.textContent = "Text color changed!";
  p.style.color = "blue";
};

// chọn phan tu cu the (div 2)
const specificDiv = document.querySelectorAll(".specific-div")[1];

// them su kien mouseenter
specificDiv.addEventListener("mouseenter", function (event) {
  // Khi con chuot vao
  document.getElementById("message").textContent =
    "Mouse entered specific div 2!";
});

// them su kien mouseleave
specificDiv.addEventListener("mouseleave", function (event) {
  // Khi con chuot roi di
  document.getElementById("message").textContent = "Mouse left specific div 2!";
});
