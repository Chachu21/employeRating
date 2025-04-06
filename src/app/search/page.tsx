"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Phone, Briefcase, Award, Search, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

// Demo data
const DEMO_EMPLOYEES = [
  {
    id: 1,
    name: "Jane Smith",
    phone: "+1 (555) 123-4567",
    category: "Software Development",
    rating: 4.8,
    recommendations: 12,
    experiences: 3,
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Michael Johnson",
    phone: "+1 (555) 987-6543",
    category: "Marketing",
    rating: 4.2,
    recommendations: 8,
    experiences: 5,
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Sarah Williams",
    phone: "+1 (555) 456-7890",
    category: "Customer Service",
    rating: 4.9,
    recommendations: 15,
    experiences: 4,
    avatar: "/placeholder.svg",
  },
  {
    id: 4,
    name: "David Brown",
    phone: "+1 (555) 234-5678",
    category: "Finance",
    rating: 4.5,
    recommendations: 7,
    experiences: 6,
    avatar: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Emily Davis",
    phone: "+1 (555) 876-5432",
    category: "Human Resources",
    rating: 4.7,
    recommendations: 9,
    experiences: 4,
    avatar: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Robert Wilson",
    phone: "+1 (555) 345-6789",
    category: "Sales",
    rating: 4.3,
    recommendations: 11,
    experiences: 7,
    avatar: "/placeholder.svg",
  },
  {
    id: 7,
    name: "Jennifer Lee",
    phone: "+1 (555) 567-8901",
    category: "Design",
    rating: 4.6,
    recommendations: 14,
    experiences: 5,
    avatar: "/placeholder.svg",
  },
  {
    id: 8,
    name: "Thomas Anderson",
    phone: "+1 (555) 789-0123",
    category: "Software Development",
    rating: 4.9,
    recommendations: 18,
    experiences: 8,
    avatar: "/placeholder.svg",
  },
];

const CATEGORIES = [
  "All Categories",
  "Software Development",
  "Marketing",
  "Customer Service",
  "Finance",
  "Human Resources",
  "Sales",
  "Design",
  "Operations",
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initialQuery = searchParams.get("query") || "";
  const initialCategory = searchParams.get("category") || "All Categories";
  const initialView = searchParams.get("view") || "grid";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [filteredEmployees, setFilteredEmployees] = useState(DEMO_EMPLOYEES);
  const [viewMode, setViewMode] = useState(initialView);

  // Update URL when search parameters change
  const updateSearchParams = (params) => {
    const newSearchParams = new URLSearchParams(searchParams);

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newSearchParams.set(key, value);
      } else {
        newSearchParams.delete(key);
      }
    });

    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  // Handle search
  const handleSearch = () => {
    updateSearchParams({
      query: searchQuery,
      category: selectedCategory,
      view: viewMode,
    });

    filterEmployees(searchQuery, selectedCategory);
  };

  // Filter employees based on search parameters
  const filterEmployees = (query, category) => {
    const filtered = DEMO_EMPLOYEES.filter((employee) => {
      const matchesSearch =
        !query ||
        employee.name.toLowerCase().includes(query.toLowerCase()) ||
        employee.phone.includes(query);

      const matchesCategory =
        category === "All Categories" || employee.category === category;

      return matchesSearch && matchesCategory;
    });

    setFilteredEmployees(filtered);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    updateSearchParams({
      query: "",
      category: "All Categories",
      view: viewMode,
    });
    setFilteredEmployees(DEMO_EMPLOYEES);
  };

  // Handle view mode change
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    updateSearchParams({
      query: searchQuery,
      category: selectedCategory,
      view: mode,
    });
  };

  // Initialize search on page load
  useEffect(() => {
    filterEmployees(initialQuery, initialCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Search Employees</h1>

      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <div className="md:col-span-2">
          <div className="relative">
            <Input
              placeholder="Search by name or phone number"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10"
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-8 top-0 h-full"
                onClick={clearSearch}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Clear search</span>
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
              onClick={handleSearch}
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
        <div>
          <Select
            value={selectedCategory}
            onValueChange={(value) => {
              setSelectedCategory(value);
              // Auto-search when category changes
              setTimeout(() => {
                updateSearchParams({
                  query: searchQuery,
                  category: value,
                  view: viewMode,
                });
                filterEmployees(searchQuery, value);
              }, 0);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button onClick={handleSearch} className="w-full">
            Search
          </Button>
        </div>
      </div>

      {(searchQuery || selectedCategory !== "All Categories") && (
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="text-sm text-muted-foreground py-1">
            Active filters:
          </div>
          {searchQuery && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Search: {searchQuery}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 p-0"
                onClick={() => {
                  setSearchQuery("");
                  filterEmployees("", selectedCategory);
                  updateSearchParams({
                    query: "",
                    category: selectedCategory,
                    view: viewMode,
                  });
                }}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove filter</span>
              </Button>
            </Badge>
          )}
          {selectedCategory !== "All Categories" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Category: {selectedCategory}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 p-0"
                onClick={() => {
                  setSelectedCategory("All Categories");
                  filterEmployees(searchQuery, "All Categories");
                  updateSearchParams({
                    query: searchQuery,
                    category: "All Categories",
                    view: viewMode,
                  });
                }}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove filter</span>
              </Button>
            </Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="text-xs"
            onClick={clearSearch}
          >
            Clear all filters
          </Button>
        </div>
      )}

      <Tabs
        value={viewMode}
        onValueChange={handleViewModeChange}
        className="w-full"
      >
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredEmployees.length} results
          </p>
          <TabsList>
            <TabsTrigger value="grid">Grid</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="grid" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEmployees.map((employee) => (
              <Card key={employee.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={employee.avatar}
                          alt={employee.name}
                        />
                        <AvatarFallback>
                          {employee.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{employee.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Phone className="h-3 w-3" /> {employee.phone}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-4">
                      {employee.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span>{employee.rating}/5</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        <span>{employee.recommendations} recommendations</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{employee.experiences} experiences</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted p-4 flex justify-end">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/employees/${employee.id}`}>View Profile</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list" className="mt-0">
          <div className="space-y-4">
            {filteredEmployees.map((employee) => (
              <Card key={employee.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={employee.avatar}
                          alt={employee.name}
                        />
                        <AvatarFallback>
                          {employee.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{employee.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {employee.phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="hidden md:block">
                        <Badge variant="outline">{employee.category}</Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span>{employee.rating}/5</span>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={`/employees/${employee.id}`}>View Profile</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {filteredEmployees.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
            <Search className="h-6 w-6 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">No results found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search or filter criteria
          </p>
          <Button onClick={clearSearch} variant="outline">
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
