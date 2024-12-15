import { LiaTrophySolid } from "react-icons/lia";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";


export default function Note() {
  return (
    <>
      {/* Note Section */}
      <section id="note">
        <div className="title">
          <div className="gridtitlenote">
            <p>Important things to note...</p>
          </div>
          <div className="gridforms">
            <LiaMoneyBillWaveSolid className="money-icon"/>
            <div>
              <h4 className="money-icon-title">
                <span>Forms</span>
              </h4>
              <span className="money-icon-description">
                Audition forms are available for ₦1,000 for single contestants,
                and ₦1,500 for a group of five.
              </span>
            </div>
          </div>
          <div className="gridprize">
            <LiaTrophySolid className="prize-icon" />
            <div>
              <h4 className="prize-icon-title">
                <span>Prizes</span>
              </h4>
              <div className="prize-icon-description">
                <strong>1st Prize:</strong> ₦2,000,000
              </div>
              <div className="prize-icon-description">
                <strong>2nd Prize:</strong> ₦1,000,000
              </div>
              <div className="prize-icon-description">
                <strong>3rd Prize:</strong> ₦500,000
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
