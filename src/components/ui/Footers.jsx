import React from "react";
import footerContact from "../../api/footerApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

const Footers = () => {

  const footerIcons ={
    MdPlace:<MdPlace/>,
    IoCallSharp:<IoCallSharp/>,
    TbMailPlus:<TbMailPlus/>


  }



  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcons.MdPlace}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>

              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footers;
