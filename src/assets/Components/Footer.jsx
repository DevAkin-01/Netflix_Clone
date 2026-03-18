import React from 'react'
import './Footer.css';
const footerLinks = [
  {
    id: 1,
    links: ["FAQ", "Investor Relations", "Privacy", "Speed Test"]
  },
  {
    id: 2,
    links: ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"]
  },
  { 
    id: 3,
    links: ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"]
  },
  {
    id: 4,
    links: ["Media Center", "Terms of Use", "Contact Us"]
  }
];


const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_content">
        <p className="footer_contact">Questions? Contact us.</p>
        
        <div className="footer_cont">
          {footerLinks.map((i) => (
            <ul className="footer_column" key={i.id}>
              {i.links.map((link, index) => (
                <li className="footer_link" key={index}>
                  <a>{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="footer_language">
          <button className="lang_btn">
            <span>🌐</span> English ▾
          </button>
        </div>

        <p className="footer_country">Netflix Nigeria</p>
      </div>
    </footer>
  );
};

export default Footer;
