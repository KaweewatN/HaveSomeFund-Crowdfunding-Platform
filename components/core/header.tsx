"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";
import { Badge } from "../ui/badge";

export default function Header() {
  const isMobile = useMobile();
  const [showSearch, setShowSearch] = useState(false);

  const { data: session } = useSession();
  const user = session?.user;
  const id = user?.id;
  const name = user?.name;
  const role = user?.role;

  return (
    <header className="sticky top-0 z-10 px-5 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
      <div className="flex h-16 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl text-teal-600">
            HaveSomeFund
          </Link>
        </div>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  {id && (
                    <>
                      <div className="flex items-center gap-2">
                        <p className="text-base font-medium">
                          <span className="font-normal">Hello,</span> {name}
                        </p>
                        <Badge
                          className={`font-medium py-1 ${
                            role === "admin"
                              ? "bg-yellow-500"
                              : role === "creator"
                              ? "bg-blue-500"
                              : "bg-green-500"
                          } w-fit`}
                        >
                          {(role ?? "").charAt(0).toUpperCase() +
                            (role ?? "").slice(1)}
                        </Badge>
                      </div>
                      <hr></hr>
                    </>
                  )}
                  <Link href="/campaigns" className="text-lg font-medium">
                    Browse Campaigns
                  </Link>
                  <Link href="/how-it-works" className="text-lg font-medium">
                    How It Works
                  </Link>
                  {role === "donor" && (
                    <Link
                      href="/donor/my-donations"
                      className="text-lg font-medium"
                    >
                      My Donations
                    </Link>
                  )}

                  {id ? (
                    <>
                      <Button
                        variant="outline"
                        className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white mt-3"
                        onClick={() => signOut()}
                        asChild
                      >
                        <Link href="/login">Logout</Link>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" asChild>
                        <Link href="/login">Login</Link>
                      </Button>
                      <Button asChild>
                        <Link href="/register">Sign Up</Link>
                      </Button>
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Browse Campaigns
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-teal-500 to-emerald-700 p-6 no-underline outline-none focus:shadow-md"
                            href="/campaigns"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Discover Campaigns
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Find and support meaningful projects and causes
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem
                        href="/campaigns?category=culture"
                        title="Culture"
                      >
                        Support cultural initiatives and heritage preservation
                      </ListItem>
                      <ListItem
                        href="/campaigns?category=education"
                        title="Education"
                      >
                        Help those in need of educational resources and
                        opportunities
                      </ListItem>
                      <ListItem
                        href="/campaigns?category=environment"
                        title="Environment"
                      >
                        Contribute to environmental conservation and awareness
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/how-it-works" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      How It Works
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {role === "creator" && (
                  <>
                    <NavigationMenuItem>
                      <Link href="/creator/dashboard" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Creator Dashboard
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link
                        href="/creator/my-campaigns/create"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Start a Campaign
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </>
                )}
                {role === "donor" && (
                  <NavigationMenuItem>
                    <Link href="/donor/my-donations" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        My Donations
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
              {showSearch ? (
                <div className="relative flex items-center">
                  <Input
                    type="search"
                    placeholder="Search campaigns..."
                    className="w-[200px] pr-8"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0"
                    onClick={() => setShowSearch(false)}
                    aria-label="Close search"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowSearch(true)}
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
              {id ? (
                <>
                  <p className="text-base font-medium">{name}</p>
                  <Badge
                    className={`font-medium py-1 ${
                      role === "admin"
                        ? "bg-yellow-500"
                        : role === "creator"
                        ? "bg-blue-500"
                        : "bg-green-500"
                    } cursor-pointer w-fit`}
                  >
                    {(role ?? "").charAt(0).toUpperCase() +
                      (role ?? "").slice(1)}
                  </Badge>
                  <Button
                    variant="outline"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                    onClick={() => signOut()}
                    asChild
                  >
                    <Link href="/login">Logout</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/register">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </>
        )}
      </div>
      {isMobile && showSearch && (
        <div className="container py-2 pb-3">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search campaigns..."
              className="w-full pr-8"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0"
              onClick={() => setShowSearch(false)}
              aria-label="Close search"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
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
