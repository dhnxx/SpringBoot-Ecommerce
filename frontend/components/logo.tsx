"use client";

import Link from "next/link";
import { useAuthGuard } from "@/lib/auth/use-auth";

export default function Logo() {
    const { user } = useAuthGuard({ middleware: "guest" });
  return (
    <div className="flex items-center">
      <Link
        href={!user ? "/" : "/products"}
        className="text-2xl font-bold text-primary"
      >
        EcoShop
      </Link>
    </div>
  );
}
