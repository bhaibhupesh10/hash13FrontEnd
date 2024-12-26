"use client"
import react from "react";
import { useParams  } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share } from "lucide-react";
import CourseDetailHero from "@/components/customComponents/coursesComponents/courseDetails/CourseDetailsHero";
import Tools from "../../../components/customComponents/coursesComponents/Tools"
import Analyst from "@/components/customComponents/coursesComponents/Analyst";
import Faq from "@/components/customComponents/coursesComponents/Faq";
import ExampleCard from "@/components/customComponents/coursesComponents/courseDetails/ExampleCard";
import CardStack from "@/components/customComponents/coursesComponents/CardStack";
import Projects from "@/components/customComponents/coursesComponents/courseDetails/Projects";
import ExampleCard2 from "@/components/customComponents/coursesComponents/courseDetails/ExampleCard2";
import ProgramHighlights from "@/components/customComponents/coursesComponents/courseDetails/ProgramHighlights";
import MentorProfile from "@/components/customComponents/coursesComponents/courseDetails/Mentor";
import WhoisthisProgramFor from "@/components/customComponents/coursesComponents/courseDetails/WhoisthisProgramFor";
import KeyOutcomes from "@/components/customComponents/coursesComponents/courseDetails/KeyOutcomes";
import CourseTestimonials from "@/components/customComponents/coursesComponents/courseDetails/CourseTestimonials"
import CoursePricingSection from "@/components/customComponents/coursesComponents/courseDetails/CoursePricingSection";
import ChartComponent from "@/components/customComponents/coursesComponents/courseDetails/ChartComponent";
import CoursesOffer from "@/components/customComponents/coursesComponents/courseDetails/CoursesOffer";
import CertificateDisplay from "@/components/customComponents/coursesComponents/courseDetails/CertificateDetails";
import ErrorBoundary from '@/components/errorHandling/ErrorBoundary';
import { courseInfo } from "../../../../data/ExampleCard2/ExampleCard2";
export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params?.courseId as string;

  const course = courseInfo.find(c => c.slug === courseId);

  if (!courseId) {
    return <div>No course provided</div>;
  }

  return (
    <ErrorBoundary>
      <main>
        <CourseDetailHero courseId={courseId} />
        
  {/* <ExampleCard></ExampleCard> */}
      {/* <ExampleCard2></ExampleCard2> */}
        <ProgramHighlights course={course} />
     <Tools></Tools> 
     <Projects></Projects>
     <MentorProfile></MentorProfile>
     <WhoisthisProgramFor></WhoisthisProgramFor>
     <Analyst></Analyst>
     <Faq></Faq>
     <CardStack></CardStack>
     <KeyOutcomes></KeyOutcomes>

     <CoursePricingSection courseId={courseId}></CoursePricingSection>

     <CourseTestimonials></CourseTestimonials>
        {/* <CoursesOffer></CoursesOffer>  */}


        <CertificateDisplay></CertificateDisplay>
     
      </main>
    </ErrorBoundary>
  );
}