import { title } from "process"
import trafficDashboard from "../../public/images/Data Analysis/Traffic Dashboard.jpg"
import marketingDashboard from "../../public/images/Data Analysis/Marketing Dashboard.jpg"
import envirDashboard from "../../public/images/Data Analysis/Enivornmental Dashboard.jpg"
import healthcareDashboard from "../../public/images/Data Analysis/Healthcare Dashboard.jpg"
import chatbots from "../../public/images/Data Science/Chatbots.jpg"
import diabetesclf from "../../public/images/Data Science/Diabetes Classification Model.jpg"
import housePrice from "../../public/images/Data Science/House Prices Advanced Regression Model.png"
import steelDefect from "../../public/images/Data Science/Steel Plate Defect Prediction.png"
import heartDisease from "../../public/images/Data Science/Heart Disease Predictive Model.png"


export const PortfolioData = {
    DataAnalyst: [
        {
            "title": "  Traffic Accidents Dashboard",
            "desc": "A comprehensive dashboard providing insights into traffic accidents, including total accidents, casualties, contributing factors, accident trends, and more.",
            "id": 1,
            "image": trafficDashboard,
            "longDesc": "",
            "githubUrl": "https://github.com/RaoHamzaTariq/Power-BI-Projects/tree/main/Traffic%20Management%20Project",
            "liveDemo": "",
            "stacks": ["Power BI","Python","SQL","Excel"]
        },
        {
            "title": "Marketing Campaigns Dashboard",
            "desc": "An analytical dashboard presenting key metrics related to marketing campaigns, including customer demographics, revenue, web activity, and campaign performance.",
            "id": 2,
            "image": marketingDashboard,
            "longDesc": "",
            "githubUrl": "https://github.com/RaoHamzaTariq/Power-BI-Projects/tree/main/Marketing%20Campaigns%20Project",
            "liveDemo": "",
            "stacks": ["Power BI","Excel","SQL","Python"]
        },
        {
            "title": "Apple Environmental Emission Dashboard",
            "desc": "An environmental dashboard focused on Apple's carbon emissions, removal efforts, product footprint, employee initiatives, and recommendations for emission reduction.",
            "id": 3,
            "image": envirDashboard,
            "longDesc": "The Apple Environmental Emission Dashboard serves as a comprehensive tool that provides critical insights into Apple's environmental impact, highlighting various metrics such as total carbon emissions, carbon removal efforts, opportunities for emission reductions, and a detailed breakdown of emissions by category. It also tracks market capitalization, environmental initiatives, emissions categorized by scope and fiscal year, product footprint, employee engagement, and identifies the top sectors contributing to emissions. Complementing this, the Maven Environmental Challenge dashboard supports Apple's commitment to achieving carbon neutrality by offering actionable strategies that include emission reduction, investment in renewable energy, and stakeholder engagement. This initiative emphasizes transparency and collaboration, positioning Apple as a leader in global environmental efforts aimed at mitigating climate change and promoting sustainability. For further information or inquiries, interested parties are encouraged to contact the development team or designated support personnel.",
            "githubUrl": "https://github.com/RaoHamzaTariq/Power-BI-Projects/tree/main/Apple%20Environmental%20Emission%20Project",
            "liveDemo": "",
            "stacks": ["SQL","Excel","Python","Power BI"]
        },
        {
            "title": "HealthCare Patient Reviews Dashboard",
            "desc": "Healthcare dashboard focused on communication about medicine, untapped opportunities, declining HCAHPS scores, and response rate.",
            "id": 4,
            "image": healthcareDashboard,
            "longDesc": "",
            "githubUrl": "https://github.com/RaoHamzaTariq/Power-BI-Projects/tree/main/Healthcare%20Patient%20Reviews%20Project",
            "liveDemo": "",
            "stacks": ["Power BI","SQL","Python","Excel"]
        },
        {
            "title": "Sales Analysis Dashboard",
            "desc": "Sales dashboard focused on profit, sales, product growth, customers overview, and recommendations for increasing sales and profit of the company.",
            "id": 5,
            "image": "",
            "longDesc": "",
            "githubUrl": "https://github.com/RaoHamzaTariq/Power-BI-Projects/tree/main/Sales%20Analysis%20Project",
            "liveDemo": "",
            "stacks": ["Power BI","Excel","Python"]
        }
    ],
    DataScience: [
        {
            "title": "Steel Plate Defect Prediction",
            "desc": "Developed a machine learning model to predict steel plate defects using classification algorithms, enhancing quality control in manufacturing processes.",
            "id": 1,
            "image": steelDefect,
            "longDesc": "",
            "githubUrl": "https://www.kaggle.com/code/raohamzatariq/steel-plate-defect-prediction",
            "liveDemo": "",
            "stacks": ["Pandas","Excel","Scikit-Learn","Matplotlib","Python"]
        },
        {
            "title": "Heart Disease Predictive Model",
            "desc": "Streamlit app is designed for predicting heart disease based on user input and exploring insights from a heart disease dataset. It provides a user-friendly interface for predicting whether a patient has heart disease and visualizing data patterns.",
            "id": 2,
            "image": heartDisease,
            "longDesc": "",
            "githubUrl": "https://github.com/RaoHamzaTariq/Heart-Disease-Predictor-Explorer",
            "liveDemo": "",
            "stacks": ["Streamlit","Scikit-Learn","Numpy","Pandas","Python"]
        },
        {
            "title": "Chatbots",
            "desc": "Developed intelligent chatbots capable of automating customer support and providing real-time responses using natural language processing (NLP) techniques.",
            "id": 3,
            "image": chatbots,
            "longDesc": "",
            "githubUrl": "",
            "liveDemo": "",
            "stacks": ["Python","Numpy","OpenAI","Hugging Face","Scikit-Learn"]
        },
        {
            "title": "Diabetes Classification Model",
            "desc": "Built a diabetes classification model using machine learning techniques to predict the likelihood of diabetes based on patient data. The model improves early detection and supports healthcare decision-making.",
            "id": 4,
            "image": diabetesclf,
            "longDesc": "",
            "githubUrl": "https://www.kaggle.com/code/raohamzatariq/diabetes-classification-model",
            "liveDemo": "",
            "stacks": ["Python","Numpy","Pandas","Scikit-Learn"]
        },
        {
            "title": "House Prices Advanced Regression Model",
            "desc": "Built an advanced regression model to predict house prices based on various features such as location, size, and amenities. Leveraged feature engineering and ensemble techniques to improve prediction accuracy.",
            "id": 5,
            "image": housePrice,
            "longDesc": "",
            "githubUrl": "https://www.kaggle.com/code/raohamzatariq/house-prices-advanced-regression-techniques",
            "liveDemo": "",
            "stacks": ["Python","Numpy","Pandas","Scikit-Learn"]
        },
        {
            "title": "Binary Prediction of Smoker Status using Bio-Signal",
            "desc": "Implemented a binary classification model to predict smoker status using bio-signal data, focusing on key physiological indicators. The project aimed to enhance health diagnostics by identifying smokers through machine learning algorithms.",
            "id": 6,
            "image": "",
            "longDesc": "",
            "githubUrl": "",
            "liveDemo": "",
            "stacks": ["Python","Numpy","Pandas","Scikit-Learn"]
        },
        {
            "title": "Spaceship Classification Model",
            "desc": "A deep learning project that classifies images into different categories using Convolutional Neural Networks (CNN). The project involves training a CNN model to recognize patterns and objects in images for tasks like digit recognition or animal classification.",
            "id": 7,
            "image": "",
            "longDesc": "",
            "githubUrl": "https://www.kaggle.com/code/raohamzatariq/spaceship-titanic",
            "liveDemo": "",
            "stacks": ["Python","Numpy","Pandas","Scikit-Learn"]
        },
        {
            "title": "Titanic ML Project",
            "desc": "Implemented a machine learning model to predict passenger survival in the Titanic disaster using key features like age, gender, and class. The project involved data cleaning, feature engineering, and model evaluation to improve accuracy.",
            "id": 8,
            "image": "",
            "longDesc": "",
            "githubUrl": "https://www.kaggle.com/code/raohamzatariq/titanic-ml-project",
            "liveDemo": "",
            "stacks": ["Python","Numpy","Pandas","Scikit-Learn"]
        }
    ],

    WebDevelopment: [
        {
            "title": "E-Commerce Website",
            "desc": "A fully functional e-commerce website with features like product listings, shopping cart, payment integration, and user authentication. Built using technologies such as HTML, CSS, JavaScript, and a backend framework like Django or Node.js.",
            "id": 1,
            "image": "",
            "longDesc": "",
            "githubUrl": "",
            "liveDemo": "",
            "stacks": ["Fast API","PostgreSQL","React JS","Next JS","Tailwind CSS","Shadcn UI","TypeScript","Python","Aceternity UI"]
        },
        {
            "title": "Portfolio Website",
            "desc": "A personal portfolio website to showcase projects, skills, and experience. Includes responsive design, smooth navigation, and sections like About, Projects, and Contact. Technologies used include React.js, Bootstrap, and custom CSS.",
            "id": 2,
            "image": "",
            "longDesc": "",
            "githubUrl": "",
            "liveDemo": "",
            "stacks": ["Fast API","PostgreSQL","React JS","Next JS","Tailwind CSS","Shadcn UI","TypeScript","Python","Aceternity UI"]
        },
        {
            "title": "Recipe Website",
            "desc": "A blogging platform where users can create, read, update, and delete blog posts. Includes features like comments, categories, and user authentication. Developed using a full-stack framework like MERN (MongoDB, Express, React, Node.js).",
            "id": 3,
            "image": "",
            "longDesc": "",
            "githubUrl": "",
            "liveDemo": "https://recipe-website-indol.vercel.app/",
            "stacks": ["React JS","Next JS","Tailwind CSS","Shadcn UI","TypeScript"]
        },
        {
            "title": "Resume Builder Application",
            "desc": "A web application that allows users to search for restaurants based on location, cuisine, and ratings. Integrated with APIs like Google Maps and Yelp. Built with front-end technologies like Angular or Vue.js.",
            "id": 4,
            "image": "",
            "longDesc": "",
            "githubUrl": "https://github.com/RaoHamzaTariq/Hackathon---Resume-Builder-Website/tree/main/Milestone5",
            "liveDemo": "https://hackathon-dynamic-resume-builder-website.vercel.app/",
            "stacks": ["HTML","CSS","TypeScript"]
        },
        {
            "title": "Weather Application",
            "desc": "A social networking site with features like user profiles, friend connections, message boards, and news feeds. Developed with a full-stack approach using technologies like Flask, Django, or MEAN stack.",
            "id": 5,
            "image": "",
            "longDesc": "",
            "githubUrl": "",
            "liveDemo": "",
            "stacks": ["React JS","CSS","TypeScript"]
        },
        {
            "title": "Quiz Application",
            "desc": "A social networking site with features like user profiles, friend connections, message boards, and news feeds. Developed with a full-stack approach using technologies like Flask, Django, or MEAN stack.",
            "id": 6,
            "image": "",
            "longDesc": "",
            "githubUrl": "https://github.com/RaoHamzaTariq/React-JS-Projects/tree/main/Quiz%20Application",
            "liveDemo": "",
            "stacks": ["React JS","CSS","TypeScript"]
        }
    ],
}

export const faqs = [
  {
    id:1,
    question: "What services do you offer?",
    answer:
      "We provide Data Analysis, Data Science, Machine Learning, and Web Development services tailored to your needs.",
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
      "We work with various industries, including healthcare, finance, e-commerce, education, marketing, and technology.",
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
      "Yes, we offer ongoing support and maintenance to ensure your projects run smoothly.",
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
      "We use tools like Python, R, SQL, TensorFlow, and various web development technologies.",
  },
  {
    id:8,
    question: "How can I get in touch with you?",
    answer:
      "You can contact us through the form on our website or email us directly at [your email address].",
  },
  {
    id:9,
    question: "Can you provide references or case studies?",
    answer:
      "Yes, we can provide references and case studies upon request to showcase our past work.",
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