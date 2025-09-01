"use client";

import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/dist/client/components/navigation";
import * as actions from "@/actions";

export default function SearchInput() {
  const searchParams = useSearchParams();

  return (
    <form action={actions.search} className="w-full">
      <Input
        name="term"
        placeholder="Search posts..."
        defaultValue={searchParams.get("term") || ""}
        classNames={{
          base: "w-full",
          inputWrapper: "bg-white/70 backdrop-blur-sm border border-custom-border hover:border-reddit-blue focus-within:border-reddit-blue shadow-sm",
          input: "text-gray-700 placeholder:text-gray-400"
        }}
        startContent={
          <div className="text-gray-400">
            🔍
          </div>
        }
        size="md"
      />
    </form>
  );
}
