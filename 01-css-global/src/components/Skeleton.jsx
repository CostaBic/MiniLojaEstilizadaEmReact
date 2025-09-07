import React from "react";

export default function Skeleton({ lines = 2 }) {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:12, height: "100%"}}>
      <div className="img-wrap">
        <div className="skeleton" aria-hidden="true"></div>
      </div>
      <div style={{height: 40}}>
        <div className="skeleton" style={{height:18, width:"80%", marginBottom:8}} aria-hidden="true"></div>
        {lines>1 && <div className="skeleton" style={{height:16, width:"60%"}} aria-hidden="true"></div>}
      </div>
      <div style={{display:"flex", gap:12, marginTop:"auto"}}>
        <div className="skeleton" style={{height:36, width:100}} aria-hidden="true"></div>
        <div className="skeleton" style={{height:36, width:60}} aria-hidden="true"></div>
      </div>
    </div>
  );
}
