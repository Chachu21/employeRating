"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/user-nav";
import { SearchIcon, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function MainNav() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl">EmpRating</span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden ml-auto mr-2"
          aria-label="Menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>For Employers</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-100 to-slate-200 p-6 no-underline outline-none focus:shadow-md dark:from-slate-800 dark:to-slate-900"
                        href="/employers/dashboard"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Employer Dashboard
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Manage your employee ratings and recommendations
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/employers/register" title="Register">
                    Get verified as an employer
                  </ListItem>
                  <ListItem href="/employers/verify" title="Verification">
                    Complete your verification process
                  </ListItem>
                  <ListItem href="/employers/ratings" title="Manage Ratings">
                    Update or add new employee ratings
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>For Employees</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <ListItem href="/employees/register" title="Register">
                    Create your employee profile
                  </ListItem>
                  <ListItem href="/employees/profile" title="My Profile">
                    View and manage your profile
                  </ListItem>
                  <ListItem href="/employees/requests" title="Requests">
                    Request ratings and recommendations
                  </ListItem>
                  <ListItem href="/employees/certificates" title="Certificates">
                    View your experience certificates
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <form
            onSubmit={handleSearch}
            className="relative w-full max-w-sm hidden md:flex"
          >
            <Input
              type="search"
              placeholder="Search employees..."
              className="pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
            >
              <SearchIcon className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
