import React, { useState, useEffect } from "react";
import "./Row.css";
import Details from "./Details";

function Row(props) {
  const [show, setShow] = useState(false);
  const style = `thumbnail ${props.type}`;

  function handleClick() {
    const set = !show;
    setShow(set);
  }
  useEffect(() => {
    show && (document.body.style.overflow = "hidden");
    !show && (document.body.style.overflow = "unset");
  }, [show]);
  return (
    <div>
      {show && (
        <Details
          name={props.name}
          image={props.image}
          weightpok={props.weight}
          heightpok={props.height}
          pokstat1={props.stat1}
          pokstat2={props.stat2}
          pokstat3={props.stat3}
          pokstat4={props.stat4}
          pokstat5={props.stat5}
          pokstat6={props.stat6}
          posbs1={props.bs1}
          posbs2={props.bs2}
          posbs3={props.bs3}
          posbs4={props.bs4}
          posbs5={props.bs5}
          posbs6={props.bs6}
          close={handleClick}
        />
      )}
      <div className={style} onClick={handleClick}>
        <div className="number">
          <small>#0{props.id}</small>
        </div>
        <img src={props.image} alt={props.name} />
        <div className="name">
          <h3>{props.name.toUpperCase()}</h3>
          <small>Type : {props.type}</small>
        </div>
      </div>
    </div>
  );
}

export default Row;
