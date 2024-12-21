import React, { useState } from "react";
import { login } from "../../services/login-service"; // Import hàm login
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import { toast } from "react-toastify";

function LoginPage() {
  const [error, setError] = useState({ open: false, message: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    userNameOrEmail: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize the navigate hook

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      rememberMe,
    };

    try {
      const result = await login(data);

      // Kiểm tra nếu thành công
      if (result && result.success) {
        console.log("Đăng nhập thành công");

        // Lưu accessToken vào localStorage
        if (result.token) {
          localStorage.setItem("token", result.token);
        }

        // Chuyển hướng đến trang chủ
        navigate("/");
      } else {
        // Cập nhật lỗi để mở modal
        setError({
          open: true,
          message: result?.message || "Đăng nhập thất bại, vui lòng thử lại.",
        });
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      alert("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex">
      {/* Phần bên trái với form và logo */}
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center position-relative">
        {/* Logo ở góc trên bên trái */}
        <div className="position-absolute top-0 start-0 p-3">
          <img
            src="/assets/logo/name.png"
            alt="Logo Thương Hiệu"
            className="img-fluid"
            style={{ maxHeight: "50px" }}
          />
        </div>

        <div className="w-75">
          <h1>Chào mừng đến với ECO Clothes</h1>
          <h2 className="text-center mb-4">Đăng nhập</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="userNameOrEmail" className="form-label">
                Tên đăng nhập hoặc Email
              </label>
              <input
                type="text"
                className="form-control"
                id="userNameOrEmail"
                placeholder="Nhập tên đăng nhập hoặc email"
                value={formData.userNameOrEmail}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Mật khẩu
              </label>
              <div className="input-group">
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Nhập mật khẩu"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? "Ẩn" : "Hiện"}
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <input
                type="checkbox"
                className="form-check-input me-2"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label className="form-check-label mb-0" htmlFor="rememberMe">
                Nhớ mật khẩu
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Đăng nhập
            </button>
          </form>

          {/* Error Modal */}
          <ErrorModal
            open={error.open}
            onClose={() => setError({ ...error, open: false })}
            title="Đăng nhập thất bại"
            message={error.message}
          />
          <div className="text-center mt-3">
            <p>
              Bạn chưa có tài khoản? <a href="/register">Tạo tài khoản</a>
            </p>
            <p>
              <a href="/reset-password">Quên mật khẩu?</a>
            </p>
          </div>
        </div>
      </div>

      {/* Phần bên phải với hình ảnh banner */}
      <div
        className="col-12 col-md-6"
        style={{
          backgroundImage: `url("/assets/login-cover/account-cover.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      ></div>
    </div>
  );
}

export default LoginPage;
