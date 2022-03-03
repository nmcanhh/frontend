import logo from "./logo.svg";
import "./App.css";
import teamsvg from "./assets/img/team.svg";

function App() {
  return (
    <div>
      <header className="container header">
        {" "}
        {/* ==== NAVBAR ==== */}{" "}
        <nav className="nav">
          <div className="logo">
            <h2> @denvaufc </h2>{" "}
          </div>{" "}
          <div className="nav_menu" id="nav_menu">
            <button className="close_btn" id="close_btn">
              <i className="ri-close-fill" />
            </button>{" "}
            <ul className="nav_menu_list">
              {" "}
              {/* <li class="nav_menu_item">
                                                                                <a href="https://facebook.com/groups/denvaufchanoi" class="nav_menu_link">Hà Nội</a>
                                                                              </li>
                                                                              <li class="nav_menu_item">
                                                                                <a href="https://facebook.com/groups/denvaufcsaigon" class="nav_menu_link">Sài Gòn</a>
                                                                              </li>
                                                                              <li class="nav_menu_item">
                                                                                <a href="https://facebook.com/groups/denvaufcdanang" class="nav_menu_link">Đà Nẵng</a>
                                                                              </li>
                                                                              <li class="nav_menu_item">
                                                                                <a href="https://facebook.com/groups/denvaufccantho" class="nav_menu_link">Cần Thơ</a>
                                                                              </li> */}{" "}
              <li className="nav_menu_item">
                <a href="mailto:denvaufc@gmail.com" className="nav_menu_link">
                  Liên hệ{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <button className="toggle_btn" id="toggle_btn">
            <i className="ri-menu-line" />
          </button>{" "}
        </nav>{" "}
      </header>{" "}
      <section className="wrapper">
        <div className="container">
          <div className="grid-cols-2">
            <div className="grid-item-1">
              <h1 className="main-heading">
                Chào mừng bạn đến với <span> Đen Vâu FC </span> <br />{" "}
                {/* Develop anything. */}{" "}
              </h1>{" "}
              <p className="info-text">
                Trang web đang trong quá trình phát triển.{" "}
              </p>{" "}
              <div className="btn_wrapper">
                <a href="https://www.facebook.com/denvaufc">
                  <button className="btn view_more_btn">Truy cập trang</button>{" "}
                </a>{" "}
                <a href="https://www.facebook.com/groups/denvaufc.official">
                  <button className="btn documentation_btn">
                    Facebook Group
                  </button>{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div className="grid-item-2">
              <div className="team_img_wrapper">
                <img src={teamsvg} alt="team-img" />
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
}

export default App;
