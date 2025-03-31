import { useState } from "react";

const useTeam = () => {
    const [members] = useState([
        {
            image: "/team/m1.svg",
        },
        {
            image: "/team/m2.svg",
        },
        {
            image: "/team/m3.svg",
        },
        {
            image: "/team/m4.svg",
        },
    ]);

    return members;
};

export default useTeam;
