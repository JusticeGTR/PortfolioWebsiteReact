import React from "react";
// import expenseTracker from "../../../public/images/expenseTrackerLarge.png";
// import rankMyWorkplace from "../../../public/images/RankMyWorkplace.png";
// import randomPassGen from "../../../public/images/RandomPassGen.png";
// import placeholder5 from "../../../public/images/download (5).jpg";
// import placeholder7 from "../../../public/images/download (7).jpg";
// import placeholder16 from "../../../public/images/download (16).jpg";

export function Work() {
    return (
            <section className="row work" id="work">
                <div className="col">
                    <h2 className=" rightBorder rotate">Work</h2>
                </div>
                <div className="col">
                    <div className="row">
                        <a href="https://levickane.github.io/expensetracker/"><img src="/images/expenseTrackerLarge.png" alt="" className=" firstWork" /></a>
                    </div>
                    <div className="row">
                        <a href="https://github.com/melanieuhrich/Rate-My-Workplace"><img src="/images/RankMyWorkplace.png" alt="" className="secondWork" /></a>

                        <a href="https://github.com/JusticeGTR/RandomPasswordGenerator"><img src="/images/RandomPassGen.png" alt="" className="secondWork" /></a>
                    </div>
                    <div className="row">
                        <img src="" alt="" className="thirdWork" />

                        <img src="" alt="" className="thirdWork" />

                        <img src="" alt="" className="thirdWork" />
                    </div>
                </div>
            </section>
    )
}

export default Work;