// useFeatures.js
import { useState } from 'react';

const useFeatures = () => {
    const [features] = useState([
        {
            title: "Cloud Security Solutions",
            description: "Using automated DevSecOps strategies to construct, manage, and monitor security policies across multi-cloud environments (AWS, Azure, GCP), ensuring that enterprise data and applications remain protected from threats.",
            image: "/features/f1.avif"
        },
        {
            title: "Blockchain Security Assurance",
            description: "Providing comprehensive blockchain security assessments, penetration testing, and risk modeling to ensure that decentralized applications, APIs, and mobile platforms are secure.",
            image: "/features/f2.avif"
        },
        {
            title: "AI Security and Governance",
            description: "Leveraging award-winning AI security hackathon experience and AI Governance certification to develop Agent Sandboxing technology that isolates and monitors AI agent behaviors. This ensures safe operation of LLMs and multi-agent systems in real-world environments.",
            image: "/features/f3.avif"
        },
        {
            title: "Security Automation and Compliance",
            description: "Integrating advanced security automation tools with formal verification methods for continuous policy generation and validation, enabling real-time compliance and rapid incident response.",
            image: "/features/f4.avif"
        }
    ]);

    return features;
};

export default useFeatures;
