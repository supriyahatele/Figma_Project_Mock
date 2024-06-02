import { useEffect, useState } from "react";
import "../styles/events.css";

export const Events = () => {
  const [time, setTime] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <div className="event-container">
        <h1>Participate in our IDO Event!</h1>
        <div className="event-mainContainer">
          <div className="event-leftContainer">
            <p>
              During our IDO event, you will gain early access to our
              revolutionary ecosystem, designed to empower everyone to share
              wealth and achieve success.
            </p>
            <button className="event-btn1">TOKEN INFO</button>
            <div className="small-container">
                <div className="innerSmall-container">
             <div className="left-smallContainer">
            <div>Total Token Supply</div>
            <div>Soft Cap</div>
            <div>Initial exchange
rate</div>
            <div>1st Generation</div>
            <div>2nd Generation</div>
             </div>
             <div className="left-rightContainer">
             <div>20%</div>
            <div>200 BNB</div>
            <div>1 BNB</div>
            <div>5%</div>
            <div>2%</div>

             </div>
             </div>

            </div>
            <button className="event-btn2">Connect Wallet</button>
            <h2>Become an affiliate & Earn 7% as Commission!</h2>

            <div className="search-container">
              <input
                type="search"
                name=""
                id=""
                placeholder="Generate a unique referral link"
              />
              <button className="generate-btn">Generate</button>
            </div>
          </div>
          <div className="event-rightContainer">
            <div className="container">
              <div className="countdown">
                <span>{formatTime(time)}</span>
              </div>
              <div className="presale-info">
                <h1>PRESALE 1</h1>
                <div>

                <p>1 Saviour = 0.657 USDT</p>
                <p>Next Stage Price = 0.723 USDT</p>
                <p>Sold = $34,56,56,764/$50,00,00,000</p>
                <p>Raised = $34,56,56,764/$40,00,00,000</p>
                </div>

                

                <form>
                  <input type="text" placeholder="Enter the amount (BNB)" />
                  <input type="text" placeholder="Minimum Quantity to Buy" />
                  <input type="text" placeholder="Maximum Quantity of Tokens" />
                  <div className="buttons">
                    <button type="button" className="buy">
                      Buy
                    </button>
                    <button type="button" className="claim-drop">
                      Claim Drop
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
