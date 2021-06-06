import React from "react";
import expenseTracker from "../../../public/images/expenseTrackerLarge.png";
import rankMyWorkplace from "../../../public/images/RankMyWorkplace.png";
import randomPassGen from "../../../public/images/RandomPassGen.png";
import placeholder5 from "../../../public/images/download (5).jpg";
import placeholder7 from "../../../public/images/download (7).jpg";
import placeholder16 from "../../../public/images/download (16).jpg";

export function Work() {
    return (
            <section className="row work" id="work">
                <div className="col">
                    <h2 className=" rightBorder rotate">Work</h2>
                </div>
                <div className="col">
                    <div className="row">
                        <a href="https://levickane.github.io/expensetracker/"><img src={expenseTracker} alt="" className=" firstWork" /></a>
                    </div>
                    <div className="row">
                        <a href="https://github.com/melanieuhrich/Rate-My-Workplace"><img src={rankMyWorkplace} alt="" className="secondWork" /></a>

                        <a href="https://github.com/JusticeGTR/RandomPasswordGenerator"><img src={randomPassGen} alt="" className="secondWork" /></a>
                    </div>
                    <div className="row">
                        <img src={placeholder5} alt="" className="thirdWork" />

                        <img src={placeholder7} alt="" className="thirdWork" />

                        <img src={placeholder16} alt="" className="thirdWork" />
                    </div>
                </div>
            </section>
    )
}

export default Work;