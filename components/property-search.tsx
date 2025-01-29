"use client";

import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function PropertySearch() {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission here
    console.log("Searching for:", searchValue);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <div className="absolute left-3 text-muted-foreground">
          <Search className="h-5 w-5" />
        </div>
        <Input
          type="text"
          placeholder="Enter property address or paste listing URL"
          className="w-full pl-10 pr-20 sm:pr-32 h-14 text-base sm:text-lg rounded-lg border-2 focus:border-primary"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button
          type="submit"
          size="lg"
          className="absolute right-2 px-3 sm:px-6"
        >
          <span className="hidden sm:inline">Analyze</span>
          <ArrowRight className="h-4 w-4 sm:ml-2" />
        </Button>
      </div>
      <p className="text-sm text-muted-foreground mt-2 text-center">
        <span className="sm:hidden">
          Enter address or paste Zillow/Redfin URL
        </span>
        <span className="hidden sm:inline">
          Example: &ldquo;123 Senter Rd, San Jose, CA&rdquo; or paste a
          Zillow/Redfin listing URL
        </span>
      </p>
    </form>
  );
}
