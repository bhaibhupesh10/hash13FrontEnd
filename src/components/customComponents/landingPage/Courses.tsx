"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Clock, Star, BookOpen, ChartBar } from "lucide-react";
import curveLine from "../../../../public/assets/CurlLine.svg";


interface Course {
  category: string;
  learners: string;
  title: string;
  lessons: number;
  duration: string;
  rating: number;
  imageUrl: string;
}

interface CardPosition {
  isRightmost: boolean;
}


const courseInfo = [
  {
    title: "AWS-Certified-Solutions-Architect-(CSA)-Training",
    rating: 4.8,
    totalRatings: 2103,
    duration: "3 Months",
   
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    hours: "30+",
    backgroundImage: "/assets/cources/awsCourse.jpg"
  },
  {
    title: "Complete-Linux-v9-Training",
    rating: 4.7,
    totalRatings: 1856,
    duration: "2 Months",
    hours: "20+",
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    backgroundImage: "/assets/cources/Complete-Linux-v9-Training-by-Mr.jpg"
  },
  {
    title: "Data-Structure-&-Algorithms-(DSA)",
    rating: 4.9,
    totalRatings: 3201,
    duration: "4 Months",
    hours: "15+",
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    backgroundImage: "/assets/cources/Data-Structure-&-Algorithms-(DSA)-for-FAANG.jpg"
  },
  {
    title: "Complete-NLP-Training-Basic-to-Advance-level",
    rating: 4.6,
    totalRatings: 1502,
    duration: "6 Weeks",
    hours: "50+",
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    backgroundImage: "/assets/cources/Complete-NLP-Training-Basic-to-Advance-level.jpg"
  },
  {
    title: "Complete-System-Design-Training",
    rating: 4.8,
    totalRatings: 2405,
    duration: "3 Months",
    hours: "60+",
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    backgroundImage: "/assets/cources/Complete-System-Design-Training-by-Mr.jpg"
  },
  {
    title: "Specialization in devops",
    rating: 4.7,
    totalRatings: 1987,
    duration: "10 Weeks",
    hours: "298",
    module:"155",
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    backgroundImage: "/assets/cources/course1.jpg"
  }
]



// Utility function to render stars based on the rating
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const halfStar = rating % 1 !== 0; // Determine if a half star is needed
  const totalStars = 5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} className="h-4 w-4 text-yellow-400" />);
  }

  if (halfStar) {
    stars.push(<Star key="half" className="h-4 w-4 text-yellow-400 opacity-50" />);
  }

  const emptyStars = totalStars - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={i + fullStars + 1} className="h-4 w-4 text-gray-300" />);
  }

  return stars;
};

function CardComponents() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4 p-2 max-w-6xl mx-auto">
      {courseInfo.map((course, index) => (
        <Card
          key={index}
          className="group relative overflow-hidden w-full cursor-pointer transition-transform hover:scale-105 flex flex-col"
        >
          {/* Image Container */}
          <div className="h-56 sm:h-56 overflow-hidden">
            <img
              src={course.backgroundImage}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card Footer */}
          <CardFooter className="p-4 flex flex-col items-start bg-white">
            <h3 className="text-base sm:text-sm font-bold mb-2 text-gray-800">{course.title}</h3>

            <div className="flex items-center gap-4 mb-4 text-sm sm:text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400 mr-1" />
                <span className="text-sm sm:text-xs text-gray-600">{course.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="mr-2 sm:mr-1">{course.hours} hours</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
export default function CoursesComponent() {
  const gridRef = useRef<HTMLDivElement>(null);

  const getCardPosition = (index: number): CardPosition => {
    if (!gridRef.current) return { isRightmost: false };

    const gridColumns = window.getComputedStyle(gridRef.current).gridTemplateColumns.split(" ").length;

    // Check if card is in the last column
    const isRightmost = (index + 1) % gridColumns === 0;

    return { isRightmost };
  };

  return (
    <div className="container max-w-7xl mx-auto px-6 lg:px-14 py-8">
      <div className="text-center mb-10">
        <h2 className="text-sm text-muted-foreground mb-2 text-teal-500">Popular Courses</h2>
        <h1 className="text-3xl font-bold">
          Choose Our Top{" "}
          <span className="text-[#ff0000] relative">
            Courses
            <span className="absolute bottom-0 left-0 w-full h-1">
              <Image src={curveLine} alt="curve line" className="w-full mb-4" width={100} height={300} />
            </span>
          </span>
        </h1>
      </div>

    <CardComponents></CardComponents>
      {/* <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {coursesInfo.map((course, index) => (
          <div key={index} className="relative">
            <CardComponent course={course} index={index} position={getCardPosition(index)} />
          </div>
        ))}
      </div> */}

      <div className="text-center mt-10">
        <Button className="bg-[#ff0000]" variant="destructive" size="lg">
          View All Courses
        </Button>
      </div>
    </div>
  );
}
