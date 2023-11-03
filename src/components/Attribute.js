import React, { useState } from "react";

const Attribute = ({ title, desc }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="w-full border-b border-black p-1">
        <div className="w-full flex justify-between items-center">
          <span className="text-md font-semibold">{title}</span>
          <span
            className="text-2xl font-semibold cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? "-" : "+"}
          </span>
        </div>
        {show && <div>{desc}</div>}
      </div>
    </>
  );
};

export default Attribute;
