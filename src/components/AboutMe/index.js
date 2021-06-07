import React from "react";
import profile from "./79226454.jpg"
export function AboutMe() {
    return (
        <section className="row aboutMe" id="aboutMe">
        <h2 className=" col rightBorder rotate">About Me</h2>
        <div className="col">
        <p><span><img src={profile}
            alt="Artist and his dog resting her head on his shoulder" className=" col me" /></span><span>I am an artist turned web developer. After studying graphic design in college and dabbling in most other mediums, I decided to try something new. A friend suggested to try out coding, and I fell into the deep end immediately. I want to build things to help others and make them smile, and in at least that small way, help develop our society into something we can all be proud of.
                I love traveling, reading, creating and a wide variety of other things. </span>
        </p>
        </div>
    </section>
    )
}

export default AboutMe;