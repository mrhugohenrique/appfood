"use client";

import { HomeIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Header = () => {

  return (
    <div className="border-b border-solid border-gray-100 bg-white shadow-sm">
      <div className="flex items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-primary">FoodHub</h1>
        </Link>

        <Link href="/">
          <Button variant="ghost" size="icon" className="rounded-full">
            <HomeIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;