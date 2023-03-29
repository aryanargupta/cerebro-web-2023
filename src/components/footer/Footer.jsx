import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_container_left">
        <div className="footer_container_left_top">
          <div className="footer_container_left_top_logo"> </div>
        </div>
        <div className="footer_container_left_bottom">
          <div className="footer_container_left_bottom_text_top">CEREBRO, The Tech Fest</div>
          <div className="footer_container_left_bottom_text_bottom">
            Indian Institute of Information Technology, Vadodara
          </div>
        </div>
      </div>
      <div className="footer_container_right">
        <div className="footer_container_right_left"> </div>
        <div className="footer_container_right_right">
          <div className="footer_container_right_right_details">
            <div className="footer_container_right_right_mail_icon"> </div>
            <div className="footer_container_right_right_text">cerebro@iiitvadodara.ac.in</div>
          </div>
          <div className="footer_container_right_right_details">
            <div className="footer_container_right_right_phone_icon"> </div>
            <div className="footer_container_right_right_text">
              <p>+91 99887 76554,</p>
              <p> +91 66778 88993</p>
            </div>
          </div>
          <div className="footer_container_right_right_details">
            <div className="footer_container_right_right_instagram_icon"> </div>
            <div className="footer_container_right_right_text">@cerebro_iiitv</div>
          </div>
          <div className="footer_container_right_right_details">
            <div className="footer_container_right_right_twitter_icon"> </div>
            <div className="footer_container_right_right_text">@cerebro_iiitv</div>
          </div>
        </div>
      </div>
      {/* <div className="footer_container_made_with_love">
        Made with 💖 love by Dhruv Dave,.. all devs, Parth Chandravadiya, Shruti Gupta, Sanjeevani
        Lakade
      </div> */}
    </div>
  );
}

export default Footer;
