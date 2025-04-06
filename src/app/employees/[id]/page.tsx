"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Phone,
  Mail,
  Calendar,
  Building,
  Download,
  MessageSquare,
} from "lucide-react";

// Demo employee data
const EMPLOYEE = {
  id: 1,
  name: "Jane Smith",
  phone: "+1 (555) 123-4567",
  email: "jane.smith@example.com",
  category: "Software Development",
  rating: 4.8,
  avatar: "/placeholder.svg",
  joinedDate: "January 2020",
};

// Demo experiences data
const EXPERIENCES = [
  {
    id: 1,
    companyName: "Tech Innovations Inc.",
    position: "Senior Software Engineer",
    duration: "Jan 2020 - Dec 2022",
    description:
      "Led the development of a cloud-based SaaS platform. Implemented microservices architecture and CI/CD pipelines. Mentored junior developers and conducted code reviews.",
    rating: 5,
  },
  {
    id: 2,
    companyName: "Digital Solutions Ltd.",
    position: "Software Developer",
    duration: "Mar 2017 - Dec 2019",
    description:
      "Developed and maintained web applications using React and Node.js. Collaborated with UX designers to implement responsive interfaces. Participated in agile development processes.",
    rating: 4.5,
  },
  {
    id: 3,
    companyName: "WebTech Systems",
    position: "Junior Developer",
    duration: "Jun 2015 - Feb 2017",
    description:
      "Assisted in the development of e-commerce websites. Implemented frontend features using HTML, CSS, and JavaScript. Participated in daily stand-up meetings and sprint planning.",
    rating: 4.2,
  },
];

// Demo recommendations data
const RECOMMENDATIONS = [
  {
    id: 1,
    employerName: "John Anderson",
    position: "CTO at Tech Innovations Inc.",
    date: "January 15, 2023",
    content:
      "Jane is an exceptional software engineer with a deep understanding of modern web technologies. Her problem-solving skills and attention to detail make her an invaluable asset to any development team. She consistently delivered high-quality code and was always willing to help others.",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    employerName: "Sarah Johnson",
    position: "Engineering Manager at Digital Solutions Ltd.",
    date: "December 20, 2019",
    content:
      "I had the pleasure of working with Jane for nearly three years. She is a dedicated professional who takes initiative and consistently exceeds expectations. Her technical skills are top-notch, and she has excellent communication abilities. Any company would be fortunate to have her on their team.",
    avatar: "/placeholder.svg",
  },
];

export default function EmployeeProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const [activeTab, setActiveTab] = useState("overview");

  // In a real app, you would fetch the employee data based on the ID
  const employeeId = params.id;

  console.log(employeeId);

  return (
    <div className="container mx-auto py-10">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={EMPLOYEE.avatar} alt={EMPLOYEE.name} />
                  <AvatarFallback>{EMPLOYEE.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold">{EMPLOYEE.name}</h2>
                <Badge className="mt-2 mb-4">{EMPLOYEE.category}</Badge>
                <div className="flex items-center gap-1 mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(EMPLOYEE.rating)
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted-foreground"
                        }`}
                      />
                    ))}
                  <span className="ml-2 font-medium">{EMPLOYEE.rating}/5</span>
                </div>
                <div className="w-full space-y-2 mt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{EMPLOYEE.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{EMPLOYEE.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Joined {EMPLOYEE.joinedDate}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-6 w-full">
                  <Button className="flex-1" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Resume
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Employee Overview</CardTitle>
                  <CardDescription>
                    Summary of {EMPLOYEE.name}&#39;s professional profile
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">
                        Professional Summary
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        Experienced software engineer with over 7 years of
                        experience in web development. Specializes in frontend
                        technologies including React, Angular, and Vue.js.
                        Strong background in building scalable and maintainable
                        applications.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Skills</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">JavaScript</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">Node.js</Badge>
                        <Badge variant="secondary">HTML/CSS</Badge>
                        <Badge variant="secondary">Git</Badge>
                        <Badge variant="secondary">CI/CD</Badge>
                        <Badge variant="secondary">Agile</Badge>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Recent Experience</h3>
                      <div className="mt-2 space-y-4">
                        {EXPERIENCES.slice(0, 2).map((exp) => (
                          <div
                            key={exp.id}
                            className="border-l-2 border-muted pl-4"
                          >
                            <div className="flex justify-between">
                              <h4 className="font-medium">{exp.position}</h4>
                              <div className="flex items-center">
                                {Array(5)
                                  .fill(0)
                                  .map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-3 w-3 ${
                                        i < Math.floor(exp.rating)
                                          ? "fill-primary text-primary"
                                          : "fill-muted text-muted-foreground"
                                      }`}
                                    />
                                  ))}
                              </div>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground gap-2 mt-1">
                              <Building className="h-3 w-3" />
                              <span>{exp.companyName}</span>
                              <span>•</span>
                              <span>{exp.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Work Experience</CardTitle>
                  <CardDescription>
                    Detailed work history and employer ratings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {EXPERIENCES.map((exp) => (
                      <div
                        key={exp.id}
                        className="border-b pb-6 last:border-0 last:pb-0"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-medium">
                              {exp.position}
                            </h3>
                            <div className="flex items-center text-sm text-muted-foreground gap-2 mt-1">
                              <Building className="h-4 w-4" />
                              <span>{exp.companyName}</span>
                              <span>•</span>
                              <span>{exp.duration}</span>
                            </div>
                          </div>
                          <div className="flex items-center">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(exp.rating)
                                      ? "fill-primary text-primary"
                                      : "fill-muted text-muted-foreground"
                                  }`}
                                />
                              ))}
                            <span className="ml-2 font-medium">
                              {exp.rating}/5
                            </span>
                          </div>
                        </div>
                        <p className="mt-4 text-muted-foreground">
                          {exp.description}
                        </p>
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download Certificate
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recommendations" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                  <CardDescription>
                    Professional recommendations from previous employers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {RECOMMENDATIONS.map((rec) => (
                      <div
                        key={rec.id}
                        className="border-b pb-6 last:border-0 last:pb-0"
                      >
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage
                              src={rec.avatar}
                              alt={rec.employerName}
                            />
                            <AvatarFallback>
                              {rec.employerName.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="font-medium">{rec.employerName}</h3>
                            <p className="text-sm text-muted-foreground">
                              {rec.position}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">
                              {rec.date}
                            </p>
                            <p className="mt-4">{rec.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
