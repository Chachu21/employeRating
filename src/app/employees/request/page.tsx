"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Clock,
  CheckCircle,
  Send,
  FileText,
  Award,
  Download,
} from "lucide-react";

// Demo data for pending requests
const PENDING_REQUESTS = [
  {
    id: 1,
    employerName: "Tech Innovations Inc.",
    requestType: "Experience & Rating",
    requestDate: "2023-12-15",
    status: "pending",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    employerName: "Digital Solutions Ltd.",
    requestType: "Recommendation",
    requestDate: "2023-11-28",
    status: "pending",
    avatar: "/placeholder.svg",
  },
];

// Demo data for completed requests
const COMPLETED_REQUESTS = [
  {
    id: 3,
    employerName: "WebTech Systems",
    requestType: "Experience & Rating",
    requestDate: "2023-10-05",
    completedDate: "2023-10-12",
    status: "completed",
    rating: 4.2,
    avatar: "/placeholder.svg",
  },
  {
    id: 4,
    employerName: "Global Software Inc.",
    requestType: "Recommendation",
    requestDate: "2023-09-18",
    completedDate: "2023-09-25",
    status: "completed",
    avatar: "/placeholder.svg",
  },
];

export default function EmployeeRequestsPage() {
  const [activeTab, setActiveTab] = useState("new");
  const [selectedRequestType, setSelectedRequestType] =
    useState("experience-rating");

  const handleSubmitRequest = () => {
    // In a real app, this would submit the request to the backend
    alert("Request submitted successfully!");
    setActiveTab("pending");
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-2">
        Request Ratings & Recommendations
      </h1>
      <p className="text-muted-foreground mb-6">
        Request experience records, ratings, and recommendations from your
        employers
      </p>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="new">New Request</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="new" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Request</CardTitle>
              <CardDescription>
                Send a request to your employer for ratings, experience records,
                or recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="request-type">Request Type</Label>
                  <Select
                    value={selectedRequestType}
                    onValueChange={setSelectedRequestType}
                  >
                    <SelectTrigger id="request-type">
                      <SelectValue placeholder="Select request type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="experience-rating">
                        Experience & Rating
                      </SelectItem>
                      <SelectItem value="recommendation">
                        Recommendation
                      </SelectItem>
                      <SelectItem value="complete">
                        Complete Package (All)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="employer-name">Employer Name</Label>
                  <Input id="employer-name" placeholder="Enter company name" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="employer-email">Employer Email</Label>
                  <Input
                    id="employer-email"
                    type="email"
                    placeholder="hr@company.com"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="position">Your Position</Label>
                  <Input id="position" placeholder="e.g. Software Developer" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="employment-period">Employment Period</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      id="start-date"
                      type="date"
                      placeholder="Start Date"
                    />
                    <Input id="end-date" type="date" placeholder="End Date" />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Add a personal message to your request"
                    rows={4}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSubmitRequest} className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Request
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="mt-6">
          <div className="space-y-4">
            {PENDING_REQUESTS.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-10">
                  <p className="text-muted-foreground mb-4">
                    You don&#39;t have any pending requests
                  </p>
                  <Button variant="outline" onClick={() => setActiveTab("new")}>
                    Create New Request
                  </Button>
                </CardContent>
              </Card>
            ) : (
              PENDING_REQUESTS.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={request.avatar}
                            alt={request.employerName}
                          />
                          <AvatarFallback>
                            {request.employerName.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">
                            {request.employerName}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>Requested on {request.requestDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1"
                        >
                          <Clock className="h-3 w-3" />
                          <span>Pending</span>
                        </Badge>
                        <Badge>{request.requestType}</Badge>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        Send Reminder
                      </Button>
                      <Button variant="destructive" size="sm">
                        Cancel Request
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="space-y-4">
            {COMPLETED_REQUESTS.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-10">
                  <p className="text-muted-foreground mb-4">
                    You don&#39;t have any completed requests
                  </p>
                  <Button variant="outline" onClick={() => setActiveTab("new")}>
                    Create New Request
                  </Button>
                </CardContent>
              </Card>
            ) : (
              COMPLETED_REQUESTS.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={request.avatar}
                            alt={request.employerName}
                          />
                          <AvatarFallback>
                            {request.employerName.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">
                            {request.employerName}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>Completed on {request.completedDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1 bg-green-50 text-green-700 border-green-200"
                        >
                          <CheckCircle className="h-3 w-3" />
                          <span>Completed</span>
                        </Badge>
                        <Badge>{request.requestType}</Badge>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end gap-2">
                      {request.requestType.includes("Experience") ? (
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          View Experience
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm">
                          <Award className="h-4 w-4 mr-2" />
                          View Recommendation
                        </Button>
                      )}
                      <Button size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download Certificate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
