import React from "react";

export function Work() {
    return (
            <section className="row work" id="work">
                <div className="col">
                    <h2 className=" rightBorder rotate">Work</h2>
                </div>
                <div className="col">
                    <div className="row">
                        <a href="https://levickane.github.io/expensetracker/"><img src="/assets/images/expenseTrackerLarge.png" alt="" className=" firstWork" /></a>
                    </div>
                    <div className="row">
                        <a href="https://github.com/melanieuhrich/Rate-My-Workplace"><img src="/assets/images/RankMyWorkplace.png" alt="" className="secondWork" /></a>

                        <a href="https://github.com/JusticeGTR/RandomPasswordGenerator"><img src="/assets/images/RandomPassGen.png" alt="" className="secondWork" /></a>
                    </div>
                    <div className="row">
                        <img src="/assets/images/download (5).jpg" alt="" className="thirdWork" />

                        <img src="/assets/images/download (7).jpg" alt="" className="thirdWork" />

                        <img src="/assets/images/download (16).jpg" alt="" className="thirdWork" />
                    </div>
                </div>
            </section>
    )
}

export default Work;