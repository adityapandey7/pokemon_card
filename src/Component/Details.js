import React from "react";
import ReactDOM from "react-dom";
import "./Details.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={() => props.close()} />;
};

const Modal = (props) => {
  return (
    <div className="detail_container">
      <div className="profile">
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
      </div>
      <div className="Profile_detail">
        <h5>Stats</h5>
        <div className="description">
          <p>
            <b>Height : {props.heightpok * 10}cm </b>
          </p>
          <p>
            <b>Weight : {props.weightpok * 0.1} kg </b>
          </p>
          <p>
            <b>
              {props.pokstat1} : {props.posbs1}{" "}
            </b>
          </p>
          <p>
            <b>
              {props.pokstat2} : {props.posbs2}{" "}
            </b>
          </p>
          <p>
            <b>
              {props.pokstat3} : {props.posbs3}{" "}
            </b>
          </p>
          <p>
            <b>
              {props.pokstat4} : {props.posbs4}{" "}
            </b>
          </p>
          <p>
            <b>
              {props.pokstat5} : {props.posbs5}{" "}
            </b>
          </p>
          <p>
            <b>
              {props.pokstat6} : {props.posbs6}{" "}
            </b>
          </p>
        </div>
      </div>
      <button className="close" onClick={() => props.close()}>
        Close
      </button>
    </div>
  );
};

function Details(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop close={props.close} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Modal
          image={props.image}
          name={props.name}
          heightpok={props.heightpok}
          weightpok={props.weightpok}
          pokstat1={props.pokstat1}
          pokstat2={props.pokstat2}
          pokstat3={props.pokstat3}
          pokstat4={props.pokstat4}
          pokstat5={props.pokstat5}
          pokstat6={props.pokstat6}
          posbs1={props.posbs1}
          posbs2={props.posbs2}
          posbs3={props.posbs3}
          posbs4={props.posbs4}
          posbs5={props.posbs5}
          posbs6={props.posbs6}
          close={props.close}
        />,
        document.getElementById("modal")
      )}
    </>
  );
}

export default Details;
