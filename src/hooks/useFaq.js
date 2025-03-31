// useFaqToggle.js
import { useState } from "react";

function useFaqToggle() {
    const questions = [
        { question: "What is Changxing Initiative, and what do you offer?", answer: "Changxing Initiative is a cutting-edge security company specializing in cloud security architecture, blockchain infrastructure protection, and AI agent safety. We build trusted solutions that help businesses secure their digital operations with automation, compliance, and innovation at the core." },
        { question: "Are your security solutions compliant with industry standards", answer: "Yes. Our solutions are designed to align with industry best practices like Zero Trust Architecture, ISO 27001, NIST, and CSA Cloud Controls Matrix. We also support compliance enforcement through formal policy verification and automated reporting." },
        { question: "Can I integrate Changxing services with my existing cloud infrastructure?", answer: "Absolutely. We support seamless integration with AWS, Azure, and GCP, using tools like Terraform, CloudFormation, and Bicep. Whether you're using Kubernetes, serverless, or hybrid cloud—our systems adapt to your architecture." },
        { question: "Do you provide consulting or managed services?", answer: "Yes. In addition to our technical platforms, we offer hands-on consulting, architecture design, security assessments, and ongoing managed support to ensure long-term protection for your systems." },
        { question: "What kind of support do you provide?", answer: "We offer 24/7 technical support via email and live chat, along with dedicated onboarding, architecture review, and an extensive knowledge base. We’re committed to helping you stay secure every step of the way." },
    ];

    const [openFaqs, setOpenFaqs] = useState({});

    const toggleFaq = (index) => {
        setOpenFaqs((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return { questions, openFaqs, toggleFaq };
}

export default useFaqToggle;
