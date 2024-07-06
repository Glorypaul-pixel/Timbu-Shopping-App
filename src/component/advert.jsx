import Amazon from "./image/bluetooth.png";
const advert = () => {
  return (
    <div>
      <div className="deals">
        <h3>Todays Deal</h3>
        <p>Amazon Fire TV Cube</p>
        <p>₦288,550</p>
        <h6>
          was ₦300,000 <span>50% off</span>
        </h6>
        <button type="submit">Shop Now</button>
      </div>
      <div className="amazon">
        <img src={Amazon} alt="" />
      </div>
    </div>
  );
};

export default advert;
