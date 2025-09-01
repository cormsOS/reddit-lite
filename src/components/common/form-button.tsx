"use client";
import { Button } from "@nextui-org/react";

interface FormButtonProps {
  children: React.ReactNode;
  isLoading: boolean;
  className?: string;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function FormButton({
  children,
  isLoading,
  className = "",
  color = "primary",
  variant = "solid",
  size = "md"
}: FormButtonProps) {
  return (
    <Button
      type="submit"
      isLoading={isLoading}
      className={`${className}`}
      color={color}
      variant={variant}
      size={size}
    >
      {children}
    </Button>
  );
}
