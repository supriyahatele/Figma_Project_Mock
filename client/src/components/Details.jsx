
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import saviour from "../../images/main_saviour.png";
import "../styles/detailsPage.css";

export const Details = () => {
  return (
    <>
      <div className="detail-container">
        <div className="detailsPara">
          <h1>INTRODUCTION</h1>
          <div>
            <p>
              We have all been in the mud once, and now we have decided to fight
              it out.
            </p>
            <p>
              Pay tribute to those pioneers of WEB3 and the warriors who
              dedicated their love to the blockchain. Save the lucky ones alive,
              join us to save the future!{" "}
            </p>
            <p>
              Our mission is to empower everyone to share wealth and succeed.{" "}
            </p>
            <p style={{color:"grey"}}>read more...</p>
          </div>
          <button>Documents <FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: '5px' }}/></button>
        </div>
        <div className="details-img">
          <img src={saviour} alt="saviour details" />
        </div>
      </div>
    </>
  );
};
