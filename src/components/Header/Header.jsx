import React from "react";
import "./Header.scss";
import img from "../../assets/images/Vector-84.png";
const Header = (props) => {
  const { title, data } = props;
  return (
    <div className="header">
      <h1 className="header-title">{title}</h1>
      <div className="header-img">
        <img src={img} alt="" />
      </div>

      <div className="header-content">
        {data.map((data) => (
          <a href="#" key={data.id}>
            {data.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
