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
import React from "react";



export default function Home() {
  return (
  <>
<main>
<section className="grid grid-cols-1 md:grid-cols-2 lg:gap-80 overflow-hidden items-center justify-between lg:pt-16 sm:pt-24 pt-40 pb-20  overflow-x-hidden">
  <div className=" max-w-lg mx-5 sm:ml-20 flex flex-col gap-5">
    <h3>{`I'm Rao Hamza Tariq`}</h3>
    <h1 className="text-6xl">Data Analyst & Web Developer</h1>
    <p className="w-fit">{`I am a skilled Data Analyst, Web Developer, and Power BI Developer, specializing in transforming data into insights and building user-friendly web solutions to help you achieve your goals.`}</p>
    <div>
      <Link href={"/Portfolio/All"}><Button>View my Projects</Button></Link>  
    </div>
  </div>
  <Image className="object-contain sm:mr-20 pb-10 lg:w-[400px]" src={"/images/2.png"} height={300} width={300} alt={""}/>
</section>
<section className="my-16">
  <FeatureProjectsCarousal/>
</section>
        <section className="w-full py-20 md:py-32 bg-[#1a1b1e] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
                Why Choose Me for Your Projects
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {`I offer a wide range of services, including data science, data analysis, web development, and Power BI dashboard creation. No matter what your project needs, I have the skills to help you succeed.`}
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <MdInsights className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Insightful Data Analysis</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {`With my data analysis expertise, I can uncover valuable insights from your data, helping you understand trends, customer behavior, and operational efficiency for informed decision-making.`}
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <FaCode className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Machine Learning Expertise</h3>
                  </div>
                  <p className="text-muted-foreground">
                  {`I specialize in developing machine learning models that predict outcomes and optimize processes, creating tailored solutions for forecasting sales or improving customer experiences.`}
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <FaRobot className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Engaging Data Visualization</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {`I create clear and interactive visualizations that make complex data easy to understand, using tools like Power BI to help you track key metrics and tell a compelling data story.`}
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <FaCheckSquare className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Custom Web Development</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {`I build websites that are visually appealing, functional, and user-friendly, whether you need a simple site or a complex web application tailored to your needs.`}
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <FaComments className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Strong Commnunication</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {`I prioritize open communication throughout our collaboration, ensuring you are always updated on project progress and available to answer any questions.`}
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <RiDashboard2Line className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Commitment to Quality</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {`I am dedicated to delivering high-quality results, putting in the effort needed to ensure your project meets the highest standards.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
<StackCarousal/>
</section>

<section className=" my-20 mx-5 sm:my-32 space-y-28">
  <div className="flex flex-col gap-5 justify-center text-center items-center">
    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl ">Choose Your Services Plan</h1>
    <p className="max-w-[900px] text-gray-700 dark:text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{`Select the perfect plan tailored to your needs, whether you're looking for expert data analysis, cutting-edge data science solutions, or innovative web development services.`}</p>
  </div>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-10 items-center container mx-auto">
    <div>
      <Card className="p-5  ">
        
        <CardHeader>
          <CardTitle className="text-4xl text-center md:text-left">
            Data Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center md:text-left">Transforming your data into useful insights using Python, Power BI and SQL.</p>
          <div className="space-y-2 mt-5 text-center md:text-left">
            <h4>Starts from </h4>
            <span className="mt-5 text-5xl font-bold">$14.99</span>
          </div>
          <Button className="w-full mt-6 py-6 text-lg">Get Started</Button>
          <div className="mt-7">
            <h4>Services includes</h4>
            <ul className="list-inside list-none mt-4 space-y-2">
              <li>✔ Data Cleaning</li>
              <li>✔ Data Featuring</li>
              <li>✔ Exploratory Data Analysis</li>
              <li>✔ Data Modeling</li>
              <li>✔ Data Visualization</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
    <div className="bg-purple-700 rounded-xl p-[3px]">
      <div className="flex justify-center">
        <span className="py-4 text-white tracking-[3px]">MOST POPULAR 🔥</span>
      </div>
      <Card className="p-5">
        <CardHeader>
          <CardTitle className="text-4xl text-center md:text-left">
            Data Science
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center md:text-left">Make your own predictive model using Machine Learning.</p>
          <div className="space-y-2 mt-5 text-center md:text-left">
            <h4>Starts from </h4>
            <span className="mt-5 text-5xl font-bold">$19.99</span>
          </div>
          <Button className="w-full mt-6 py-6 text-lg">Get Started</Button>
          <div className="mt-7">
            <h4>Services includes</h4>
            <ul className="list-inside list-none mt-4 space-y-2">
              <li>✔ Data Cleaning</li>
              <li>✔ Data Modelling</li>
              <li>✔ Machine Learning Model</li>
              <li>✔ Database Integration</li>
              <li>✔ Model Deployment</li>
            </ul>
          </div>
          </CardContent>
      </Card>
    </div>
    <div>
      <Card className="p-5  ">
        <CardHeader>
          <CardTitle className="text-4xl text-center md:text-left">
            Web Development
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center md:text-left"> Build your modern website using Next JS, Tailwind CSS and Shadcn UI.</p>
          <div className="space-y-2 mt-5 text-center md:text-left">
            <h4>Starts from </h4>
            <span className="mt-5 text-5xl font-bold">$24.99</span>
          </div>
          <Button className="w-full mt-6 py-6 text-lg">Get Started</Button>
          <div className="mt-7">
            <h4>Services includes</h4>
            <ul className="list-inside list-none mt-4 space-y-2">
              <li>✔ Responsive Design</li>
              <li>✔ Fully Functional</li>
              <li>✔ SEO Optimization</li>
              <li>✔ Database Integration</li>
              <li>✔ Multiple Rendering Techniques</li>
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
