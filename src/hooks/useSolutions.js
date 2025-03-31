import { useState } from "react";

const useSolutions = () => {
    const [solutions] = useState([
        {
            img: "/solutions/s1.avif",
            title: "Cloud Security",
            description: "Utilizing leading tools (Terraform, CloudFormation, etc.) to build fully automated cloud security defense systems."
        },
        {
            img: "/solutions/s2.avif",
            title: "Blockchain Security",
            description: "Conducting penetration testing, risk assessments, and continuous monitoring to secure blockchain platforms and digital assets."
        },
        {
            img: "/solutions/s3.avif",
            title: "AI Security",
            description: "Innovatively developing AI Agent Sandboxing technology to isolate and manage AI agent behaviors in desktop and multi-agent systems, preventing potential risks."
        }
    ]);

    return solutions;
};

export default useSolutions;
