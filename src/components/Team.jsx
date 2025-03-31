import React from "react";
import useTeam from "../hooks/useTeam";

// CSS
import "../styles/Team.css";

// Boxicons
import "boxicons";

function Team() {
    const teamMembers = useTeam(); 

    return (
        <div className="Block teamBlock" id="team">
            <center>
                <p className="subHead">Team</p>
            </center>
            <center>
                <p className="heading blockHeading">Meet our team</p>
            </center>
            <center>
                <p className="desc blockDesc">
                  Our strength lies in the depth of our team’s real-world experience and certified excellence. We are not only passionate about security but also proven in their fields.
                </p>
            </center>

            <div className="team">
                {teamMembers.map((member, index) => (
                    <div className="member" key={index}>
                        <img src={member.image} alt={member.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
