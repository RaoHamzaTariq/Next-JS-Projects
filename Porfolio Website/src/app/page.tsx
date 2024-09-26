"use client"
import { FeatureProjectsCarousal } from "@/components/FeatureProjectsCarousal";
import { StackCarousal } from "@/components/StackCarousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {FaRobot,FaCode,FaComments,FaCheckSquare } from "react-icons/fa";
import FAQS from "../../public/images/FAQS.svg"
import { RiDashboard2Line } from "react-icons/ri";
import { MdInsights } from "react-icons/md";
import FAQs from "@/components/FAQs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconType } from "react-icons/lib";

interface WhyChooseMe {
  icon:JSX.Element
  title:string
  desc:string
}

export const whyChooseMe : WhyChooseMe[] = [
      {
          icon: <MdInsights className="h-8 w-8 text-primary"/>,
          title: "Insightful Data Analysis",
          desc: "With my data analysis expertise, I can uncover valuable insights from your data, helping you understand trends, customer behavior, and operational efficiency for informed decision-making."
      },
      {
          icon: <FaRobot className="h-8 w-8 text-primary"/>,
          title: "Machine Learning Expertise",
          desc: "I specialize in developing machine learning models that predict outcomes and optimize processes, creating tailored solutions for forecasting sales or improving customer experiences."
      },
      {
          icon: <RiDashboard2Line className="h-8 w-8 text-primary"/>,
          title: "Engaging Data Visualization",
          desc: "I create clear and interactive visualizations that make complex data easy to understand, using tools like Power BI to help you track key metrics and tell a compelling data story."
      },
      {
          icon: <FaCode className="h-8 w-8 text-primary"/>,
          title: "Custom Web Development",
          desc: "I build websites that are visually appealing, functional, and user-friendly, whether you need a simple site or a complex web application tailored to your needs."
      },
      {
          icon: <FaComments className="h-8 w-8 text-primary"/>,
          title: "Strong Communication",
          desc: "I prioritize open communication throughout our collaboration, ensuring you are always updated on project progress and available to answer any questions."
      },
      {
          icon: <FaCheckSquare className="h-8 w-8 text-primary"/>,
          title: "Commitment to Quality",
          desc: "I am dedicated to delivering high-quality results, putting in the effort needed to ensure your project meets the highest standards."
      }
  ];


export default function Home() {
  return (
  <>
<main>
<section className="grid grid-cols-1 md:grid-cols-2 lg:gap-80 overflow-hidden    items-center justify-between lg:pt-16 sm:pt-40 pt-40  overflow-x-hidden h-screen">
  <div className=" max-w-lg ml-20 flex flex-col gap-5">
    <h3>I&apos;m Hamza</h3>
    <h1>Data Analyst and Web Developer</h1>
    <p>I am a skilled Data Analyst, Web Developer, and Power BI Developer, specializing in transforming data into insights and building user-friendly web solutions to help you achieve your goals.</p>
    <div>
      <Link href={"/Portfolio/All"}><Button>View my Projects</Button></Link>  
    </div>
  </div>
  <Image className="object-contain mr-20 pb-10" src={"/images/2.png"} height={400} width={400} alt={""}/>
</section>
<section className="my-16">
  <FeatureProjectsCarousal/>
</section>
<section className="w-full py-20 md:py-32 bg-[#1a1b1e] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Why Choose Me for Your Projects
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I offer a wide range of services, including data science, data analysis, web development, and Power BI dashboard creation. No matter what your project needs, I have the skills to help you succeed.

                </p>
              </div>
              <ul className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                
                {whyChooseMe.map((quality:WhyChooseMe)=>(

                <div key={quality.title} className="grid gap-4">
                  <div className="flex items-center gap-4">
                    {quality.icon}
                    <h3 className="text-xl font-bold">{quality.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{quality.desc}</p>
                </div>

                ))}
          </ul>
          </div>
          </div>
        </section>
        <section>
<StackCarousal/>
</section>

<section className="my-32 space-y-28">
  <div className="flex flex-col gap-5 justify-center text-center items-center">
    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl  ">Choose Your Services Plan</h1>
    <p className="max-w-[900px] text-gray-700 dark:text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Select the perfect plan tailored to your needs, whether you&apos;re looking for expert data analysis, cutting-edge data science solutions, or innovative web development services.</p>
  </div>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-10 items-center container mx-auto">
    <div>
      <Card className="p-5  ">
        <CardHeader>
          <CardTitle>
            Data Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <h4>Starts from <span className="text-4xl">$14.99</span></h4>
          </div>
          <div>
            <h4>Services includes</h4>
            <ul className="list-inside list-disc">
              <li>Data Cleaning</li>
              <li>Data Featuring</li>
              <li>Exploratory Data Analysis</li>
              <li>Data Modeling</li>
              <li>Data Visualization</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
    <div>
      <Card className="py-12 bg-primary text-white">
        <CardHeader>
          <CardTitle>
            Data Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <h4>Starts from <span className="text-4xl">$14.99</span></h4>
          </div>
          <div>
            <h4>Services includes</h4>
            <ul className="list-inside list-disc">
              <li>Data Cleaning</li>
              <li>Data Featuring</li>
              <li>Exploratory Data Analysis</li>
              <li>Data Modeling</li>
              <li>Data Visualization</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
    <div>
      <Card className="p-5  ">
        <CardHeader>
          <CardTitle>
            Data Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <h4>Starts from <span className="text-4xl">$14.99</span></h4>
          </div>
          <div>
            <h4>Services includes</h4>
            <ul className="list-inside list-disc">
              <li>Data Cleaning</li>
              <li>Data Featuring</li>
              <li>Exploratory Data Analysis</li>
              <li>Data Modeling</li>
              <li>Data Visualization</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


<section className="grid md:grid-cols-2 sm:grid-cols-1 my-10">
<FAQs/>
<div className="mt-24">
  <Image src={FAQS} alt={""} width={500} height={500}/>
</div>
</section>

</main>
  </>
  );
}
