import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Award, BookOpen } from "lucide-react";

export default function TrainingSection() {
  const educationData = [
    {
      institution: "Programming Hero",
      degree: "Professional Web Development Course",
      location: "Level-4, 34, Awal Centre, Banani, Dhaka",
      duration: "12 Months",
      gpa: "Complete",

      coursework: [
        "Html",
        "Css",
        "JavaScript",
        "TypeScript",
        "Redux",
        "React.Js",
        "Next.js",
        "Node.Js",
        "Express.Js",
        "MongoDB",
      ],
    },
    {
      institution: "Community College of San Francisco",
      degree: "Associate of Science in Mathematics",
      location: "San Francisco, CA",
      duration: "2014 - 2016",
      gpa: "Complete",
      description:
        "Foundation in mathematics and science. Completed prerequisite courses for computer science transfer program.",
      achievements: [
        "Phi Theta Kappa Honor Society",
        "Mathematics Tutor",
        "Student Government Representative",
      ],
      coursework: [
        "Php", "Laravel" ,"MySql"
      ],
    },
  ];

  return (
    <section className="w-full">
      <div className="container px-2 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 ">
          <div className="space-y-2">
            <h2 className="text-3xl text-start text-cyan-400 font-bold tracking-tighter sm:text-5xl">
              Training Background
            </h2>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-2 py-8 lg:gap-4">
          {educationData.map((education, index) => (
            <Card
              key={index}
              className=" bg-white/1 backdrop-blur-lg border-cyan-400 text-white"
            >
              <CardHeader>
                <div className="flex flex-col space-y-2 lg:flex-row lg:items-start lg:justify-between lg:space-y-0">
                  <div className="space-y-1">
                    <CardTitle className="text-xl lg:text-2xl">
                      {education.degree}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-lg font-medium text-cyan-400">
                      <BookOpen className="h-4 w-4" />
                      {education.institution}
                    </CardDescription>
                    {/*  */}
                    <div>
                      <div className="flex items-center gap-1 text-sm text-red mb-2">
                        <MapPin className="h-3 w-3" />
                        {education.location}
                      </div>
                      <Badge variant="secondary" className="w-fit bg-cyan-400">
                        <CalendarDays className="mr-1 h-3 w-3" />
                        {education.duration}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200"
                  >
                    <Award className="mr-1 h-3 w-3" />
                    Course : {education.gpa}
                  </Badge>
                </div>

                <div className="grid gap-4 md:grid-cols-1">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-wihte">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-1 ">
                      {education.coursework.map((course, courseIndex) => (
                        <Badge
                          key={courseIndex}
                          variant="outline"
                          className="text-xs text-wihte border-cyan-400"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
