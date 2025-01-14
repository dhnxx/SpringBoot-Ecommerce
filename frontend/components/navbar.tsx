"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import ModeToggle from "./mode-toggle";
import Container from "./container";
import { useAuthGuard } from "@/lib/auth/use-auth";
import { UserNav } from "./user-nav";
import AdminNav from "./admin-nav";


interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function Navbar({ className, ...props }: NavbarProps) {
  const { user } = useAuthGuard({ middleware: "guest" });

  return (
    <div className={cn(className)} {...props}>
      <Container
        size="full"
        className="relative overflow-hidden flex justify-between items-center py-2 px-10 z-50 bg-background"
      >
        <Logo />

        {!user && (
          <nav className="hidden space-x-4 md:flex">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium hover:text-primary"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        )}

        <div className="flex gap-x-2 items-center">
          <ModeToggle />
          <AdminNav />
          {user && <UserNav />}
          {user?.authorities.includes("ROLE_PREVIOUS_ADMINISTRATOR") && (
            <a href={"/api/auth/impersonate/exit"}>
              <Button>Exit switch</Button>
            </a>
          )}

          {!user && (
            <Link href={"/auth/login"}>
              <Button variant={"outline"}>Login</Button>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
}
