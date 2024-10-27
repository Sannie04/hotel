import React from 'react';
import './Home.css'; // Nhập CSS của bạn để tạo kiểu

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Chào mừng đến với Ứng Dụng Đặt Phòng Khách Sạn</h1>
        <p>Cuộc phiêu lưu của bạn bắt đầu từ đây!</p>
      </header>

      <section className="search-section">
        <h2>Tìm Khách Sạn Phù Hợp Của Bạn</h2>
        <input type="text" placeholder="Địa điểm" />
        <input type="date" placeholder="Ngày nhận phòng" />
        <input type="date" placeholder="Ngày trả phòng" />
        <button>Tìm kiếm</button>
      </section>

      <section className="featured-hotels">
        <h2>Khách Sạn Nổi Bật</h2>
        <div className="hotel-list">
          <div className="hotel-card">
            <h3>Khách Sạn Sunshine</h3>
            <p>Trải nghiệm sang trọng với tầm nhìn ra biển</p>
          </div>
          <div className="hotel-card">
            <h3>Rừng Núi Retreat</h3>
            <p>Cabin ấm cúng giữa lòng thiên nhiên</p>
          </div>
          <div className="hotel-card">
            <h3>City Center Inn</h3>
            <p>Vị trí thuận tiện với đầy đủ tiện nghi</p>
          </div>
        </div>
      </section>

      <section className="offers">
        <h2>Ưu Đãi Đặc Biệt</h2>
        <p>Xem các chương trình khuyến mãi và giảm giá mới nhất của chúng tôi!</p>
      </section>

      <section className="testimonials">
        <h2>Khách Hàng Nói Gì Về Chúng Tôi</h2>
        <blockquote>
          "Trải nghiệm tuyệt vời nhất từ trước đến nay! Rất khuyến khích Khách Sạn Sunshine." - Jane D.
        </blockquote>
        <blockquote>
          "Rừng Núi Retreat là một nơi nghỉ ngơi hoàn hảo!" - John S.
        </blockquote>
      </section>

      <footer className="home-footer">
        <p>© 2024 Ứng Dụng Đặt Phòng Khách Sạn. Tất cả quyền được bảo lưu.</p>
      </footer>
    </div>
  );
};

export default Home;
