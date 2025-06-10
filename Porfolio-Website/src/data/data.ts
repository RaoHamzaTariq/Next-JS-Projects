export const faqs = [
  {
    id:1,
    question: "What services do you offer?",
    answer:
      "We provide AI Agents, Data Analysis, Data Science, Machine Learning, and Web Development services tailored to your needs.",
  },
  {
    id:2,
    question: "How can I benefit from your services?",
    answer:
      "Our services help you gain insights from data, automate processes, and establish a strong online presence.",
  },
  {
    id:3,
    question: "What industries do you work with?",
    answer:
      "We work with various industries, including healthcare, finance, e-commerce, education, marketing, and technology and multiple sectors.",
  },
  {
    id:4,
    question: "How do you approach a new project?",
    answer:
      "We start with a consultation, followed by analysis, solution development, testing, and ongoing support.",
  },
  {
    id:5,
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer ongoing support and maintenance to ensure your projects run smoothly with their charges.",
  },
  {
    id:6,
    question: "How long does it typically take to complete a project?",
    answer:
      "Project timelines vary; we provide a detailed timeline after our initial consultation.",
  },
  {
    id:7,
    question: "What tools and technologies do you use?",
    answer:
      "We use tools like Python, SQL, OpenAI Agents SDK, Power BI,  and various web development technologies. You can check it in the Technology and Stacks section.",
  },
  {
    id:8,
    question: "How can I get in touch with you?",
    answer:
      "You can contact us through the email directly at bistructure9211@gmail.com.",
  },
  {
    id:9,
    question: "Can you provide references or case studies?",
    answer:
      "Yes, we can provide references and case studies upon request to showcase our past work. You can check our portfolio in the portfolio tab in our website",
  },
  {
    id:10,
    question: "What are your payment terms?",
    answer:
      "Payment terms vary by project; we discuss and agree on milestones during the initial consultation.",
  },
]; 



export type ProjectType = {
    id: number;
    title: string;
    desc: string;
    image: string;
    longDesc: string;
    githubUrl: string;
    liveDemo: string;
    stacks: string[];
  };
  
export  type PortfolioDataType = {
    DataAnalyst: ProjectType[];
    DataScience: ProjectType[];
    WebDevelopment: ProjectType[];
  };

export type PortfolioKeys = keyof PortfolioDataType;