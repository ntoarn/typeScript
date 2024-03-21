import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-column">
            <h3>Thông tin</h3>
            <ul>
              <li><a href="#">Về chúng tôi</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Điều khoản sử dụng</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Hỗ trợ</h3>
            <ul>
              <li><a href="#">Liên hệ</a></li>
              <li><a href="#">Hỏi đáp</a></li>
              <li><a href="#">Hướng dẫn mua hàng</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Đăng ký nhận tin</h3>
            <p>Nhận thông tin mới nhất về sản phẩm và khuyến mãi.</p>
            <form>
              <input type="email" placeholder="Nhập email của bạn" />
              <button type="submit">Đăng ký</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Ngô Quốc Toản .</p>
      </div>
    </footer>
  )
}

export default Footer
