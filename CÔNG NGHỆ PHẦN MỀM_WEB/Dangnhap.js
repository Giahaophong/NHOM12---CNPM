document.addEventListener("DOMContentLoaded", function () {

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const loginButton = document.getElementById("loginButton");

    const message = document.getElementById("message");

    const showPassword = document.getElementById("showPassword");

    const remember = document.getElementById("remember");


    // ============================
    // TÀI KHOẢN MẶC ĐỊNH
    // ============================

    const taiKhoan = "admin";
    const matKhau = "123456";


    // ============================
    // KIỂM TRA ĐĂNG NHẬP ĐÃ LƯU
    // ============================

    const savedUsername =
        localStorage.getItem("username");

    if (savedUsername) {

        username.value = savedUsername;

        remember.checked = true;
    }


    // ============================
    // HIỆN / ẨN MẬT KHẨU
    // ============================

    showPassword.addEventListener("click", function () {

        if (password.type === "password") {

            password.type = "text";

            showPassword.textContent = "🙈";

        } else {

            password.type = "password";

            showPassword.textContent = "👁";
        }

    });


    // ============================
    // ĐĂNG NHẬP
    // ============================

    loginButton.addEventListener("click", function () {

        const tk = username.value.trim();

        const mk = password.value.trim();


        // Xóa thông báo cũ
        message.textContent = "";

        message.style.color = "red";


        // ============================
        // KIỂM TRA TRỐNG
        // ============================

        if (tk === "" && mk === "") {

            message.textContent =
                "Vui lòng nhập tài khoản và mật khẩu!";

            return;
        }


        if (tk === "") {

            message.textContent =
                "Vui lòng nhập tài khoản!";

            username.focus();

            return;
        }


        if (mk === "") {

            message.textContent =
                "Vui lòng nhập mật khẩu!";

            password.focus();

            return;
        }


        // ============================
        // KIỂM TRA TÀI KHOẢN
        // ============================

        if (tk !== taiKhoan || mk !== matKhau) {

            message.textContent =
                "Sai tài khoản hoặc mật khẩu!";

            password.value = "";

            password.focus();

            return;
        }


        // ============================
        // GHI NHỚ TÀI KHOẢN
        // ============================

        if (remember.checked) {

            localStorage.setItem(
                "username",
                tk
            );

        } else {

            localStorage.removeItem(
                "username"
            );
        }


        // ============================
        // ĐĂNG NHẬP THÀNH CÔNG
        // ============================

        message.style.color = "#198754";

        message.textContent =
            "Đăng nhập thành công!";


        // Chuyển sang giao diện chính
       sessionStorage.setItem("daDangNhap", "true");

setTimeout(function () {
    window.location.href = "Giaodien.html";
}, 100);

    });


    // ============================
    // NHẤN ENTER ĐỂ ĐĂNG NHẬP
    // ============================

    password.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            loginButton.click();

        }

    });


    username.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            loginButton.click();

        }

    });

});