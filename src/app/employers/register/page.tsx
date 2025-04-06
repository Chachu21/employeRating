"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function EmployerRegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [registrationComplete, setRegistrationComplete] = useState(false)

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      // Submit form and show success
      setRegistrationComplete(true)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (registrationComplete) {
    return (
      <div className="container py-10 max-w-md mx-auto">
        <Card>
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-center">Registration Submitted</CardTitle>
            <CardDescription className="text-center">
              Your employer registration has been submitted successfully.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">
              Our team will review your application and verify your business details. You will receive a confirmation
              email once your account is verified.
            </p>
            <p className="text-sm text-muted-foreground">Verification typically takes 1-2 business days.</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Employer Registration</h1>
        <p className="text-muted-foreground mb-6">
          Register as an employer to provide ratings and recommendations for employees.
        </p>

        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    step === currentStep
                      ? "border-primary bg-primary text-primary-foreground"
                      : step < currentStep
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted-foreground bg-background text-muted-foreground"
                  }`}
                >
                  {step}
                </div>
                <span className="text-sm mt-2">
                  {step === 1 ? "Business Details" : step === 2 ? "Contact Information" : "Verification"}
                </span>
              </div>
            ))}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted-foreground -z-10">
              <div className="h-full bg-primary transition-all" style={{ width: `${(currentStep - 1) * 50}%` }} />
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === 1
                ? "Business Details"
                : currentStep === 2
                  ? "Contact Information"
                  : "Verification Documents"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1
                ? "Provide information about your business"
                : currentStep === 2
                  ? "Provide contact details for verification"
                  : "Upload documents to verify your business"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" placeholder="Enter your company name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="business-type">Business Type</Label>
                  <Select>
                    <SelectTrigger id="business-type">
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporation">Corporation</SelectItem>
                      <SelectItem value="llc">Limited Liability Company (LLC)</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                      <SelectItem value="non-profit">Non-Profit Organization</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select>
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="business-registration">Business Registration Number</Label>
                  <Input id="business-registration" placeholder="Enter registration number" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company-address">Company Address</Label>
                  <Textarea id="company-address" placeholder="Enter your company address" />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="contact-name">Contact Person Name</Label>
                  <Input id="contact-name" placeholder="Enter full name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="position">Position in Company</Label>
                  <Input id="position" placeholder="e.g. HR Manager, CEO" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Business Email</Label>
                  <Input id="email" type="email" placeholder="company@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Business Phone</Label>
                  <Input id="phone" placeholder="Enter phone number" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="website">Company Website (Optional)</Label>
                  <Input id="website" placeholder="https://example.com" />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="verification-method">Verification Method</Label>
                  <Tabs defaultValue="document">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="document">Document Upload</TabsTrigger>
                      <TabsTrigger value="online">Online Verification</TabsTrigger>
                    </TabsList>
                    <TabsContent value="document" className="space-y-4 pt-4">
                      <div className="grid gap-2">
                        <Label htmlFor="business-license">Business License</Label>
                        <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50 transition-colors">
                          <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
                          <p className="text-xs text-muted-foreground">PDF, JPG or PNG (max. 5MB)</p>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="id-proof">ID Proof of Contact Person</Label>
                        <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50 transition-colors">
                          <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
                          <p className="text-xs text-muted-foreground">PDF, JPG or PNG (max. 5MB)</p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="online" className="space-y-4 pt-4">
                      <p className="text-sm text-muted-foreground mb-4">
                        We&#39;ll verify your business through online business registries and databases. Please ensure your
                        business details are accurate.
                      </p>
                      <div className="grid gap-2">
                        <Label htmlFor="additional-notes">Additional Notes (Optional)</Label>
                        <Textarea
                          id="additional-notes"
                          placeholder="Provide any additional information that might help with verification"
                        />
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handlePrevStep} disabled={currentStep === 1}>
              Previous
            </Button>
            <Button onClick={handleNextStep}>{currentStep < 3 ? "Next" : "Submit Registration"}</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

