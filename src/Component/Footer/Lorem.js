import React from "react";
import Group230 from "../../Img/Group 230.png";
import Group231 from "../../Img/Group 231.png";
import Group232 from "../../Img/Group 232.png";
import Group233 from "../../Img/Group 233.png";
import Group234 from "../../Img/Group 234.png";
const Lorem = () => {
  const img = [
    { imgName: Group230, link: "https://www.facebook.com/login/" },
    {
      imgName: Group231,
      link: "https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D",
    },
    { imgName: Group232, link: "https://www.instagram.com/accounts/login/" },
    { imgName: Group233, link: "https://www.linkedin.com/" },
    {
      imgName: Group234,
      link: "https://www.merriam-webster.com/dictionary/print",
    },
  ];
  return (
    <div className="Lorem-body">
      <p className="lorem-paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries....
      </p>
      <div className="footer-img">
        {img?.map((item, index) => {
          return (
            <a href={item?.link}>
              <img
                className="social-img"
                src={item?.imgName}
                height="46px"
                width="46px"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Lorem;
