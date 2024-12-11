import React, { useState } from "react";
import { register } from "../../services/register-service"; // Import the registration service function
import { useNavigate } from "react-router-dom"; // Import useNavigate

function RegisterPage() {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Đảm bảo mật khẩu và xác nhận mật khẩu khớp
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }

    const data = { ...formData };

    try {
      const result = await register(data); // Gọi API đăng ký
      console.log("Đăng ký thành công", result);

      // Chuyển sang trang đăng nhập
      navigate("/login");
    } catch (error) {
      console.error("Lỗi đăng ký", error);
      alert("Đăng ký thất bại, vui lòng thử lại.");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex">
      {/* Left side with form and logo */}
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center position-relative">
        {/* Logo at the top left corner */}
        <div className="position-absolute top-0 start-0 p-3">
          <img
            src="/assets/logo/name.png"
            alt="Logo Thương Hiệu"
            className="img-fluid"
            style={{ maxHeight: "50px" }}
          />
        </div>

        <div className="w-75">
          <h2 className="text-center mb-4">Đăng ký tài khoản</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                Tên đăng nhập
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                placeholder="Nhập tên đăng nhập"
                value={formData.userName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Họ và tên
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Nhập họ và tên"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Số điện thoại
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Nhập số điện thoại"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Nhập email"
                value={formData.email}
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
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Xác nhận mật khẩu
              </label>
              <div className="input-group">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Xác nhận mật khẩu"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {confirmPasswordVisible ? "Ẩn" : "Hiện"}
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Đăng ký
            </button>
          </form>
          <div className="text-center mt-3">
            <p>
              Bạn đã có tài khoản? <a href="/login">Đăng nhập</a>
            </p>
          </div>
        </div>
      </div>

      {/* Right side with banner image */}
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

export default RegisterPage;
