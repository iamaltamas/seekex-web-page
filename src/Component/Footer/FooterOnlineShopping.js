import React from "react";

const FooterOnlineShopping = (props) => {
  return (
    <div className="footerOnlineShopping-body">
      <p className="shopping-tittle">{props?.heading}</p>
      {props?.tittle?.map((item, index) => {
        return (
          <div className="items">
            {item?.img ? (
              <img
                src={item?.img}
                height="24px"
                width="24px"
                className="shopping-img"
              />
            ) : (
              <></>
            )}
            <p className="shopping-paragraph">{item?.tittleName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FooterOnlineShopping;
