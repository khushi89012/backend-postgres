import React from "react";

export default function Footer({handleSend}) {
  return (
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", cursor : "pointer" }}
      onClick={()=>{handleSend()}}
    >
      SEND DATA
    </div>
  );
}
