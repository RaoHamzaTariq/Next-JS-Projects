import groceryPic from "../../public/Product Display/groceries.jpg"
import makeupPic from "../../public/Product Display/Makeup.png"
import mobileaccessoriesPic from "../../public/Product Display/mobileaccessories.jpg"
import skincarePic from "../../public/Product Display/skincare.png"



export interface FAQS_ARRAY {
    id:number
    ques:string
    ans:string
}

export interface Product {
  returnPolicy: string
  weight:number
  dimensions: {
    height: number
    width: number
    depth: number
  }
  shippingInformation: string
  warrantyInformation: string
  reviews: Reviews[];
  discountPercentage: number
  rating: number;
  thumbnail:string;
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  category:string;
  brand:string
};

interface Reviews {
  rating:number
  comment:string
  date:Date
  reviewerName:string
  reviewerEmail:string
}

export interface CartProducts {
  id: number;
  quantity: number;
  price: number;
  title: string;
  thumbnail: string;
  category: string;
  brand:string
}


export const faqsArray : FAQS_ARRAY[]= [
    { id: 1, ques: "How can I track my order?", ans: "You can track your order by logging into your account and checking the order status." },
    { id: 2, ques: "What payment methods are accepted?", ans: "We accept Visa, MasterCard, PayPal, and various online banking methods." },
    { id: 3, ques: "Can I return a product?", ans: "Yes, you can return products within 30 days of purchase. Please refer to our return policy for more details." },
    { id: 4, ques: "How do I contact customer service?", ans: "You can contact our customer service team via email at support@example.com or call us at 123-456-7890." },
    { id: 5, ques: "Do you ship internationally?", ans: "Yes, we offer international shipping. Shipping fees may apply depending on the destination." }
  ];
  
export const cards = [
  {
    title: "Skin Care",
    image: skincarePic
  },
  {
    title: "Groceries",
    image: groceryPic
  },
  {
    title: "Make Up",
    image: makeupPic
  },
  {
    title: "Mobile Accessories",
    image: mobileaccessoriesPic
  },
  
]