import { type ClassValue, clsx } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateToast({
  type,
  value,
  description,
}: {
  type?: "success" | "warning" | "error" | "info" | "description";
  value?: string;
  description?: string;
}) {
  switch (type) {
    case "success":
      return toast.success(value);
    case "warning":
      return toast.warning(value);
    case "info":
      return toast.info(value);
    case "error":
      return toast.error("There was an error while processing your request.");
    case "description":
      return toast.message(value, { description });
    default:
      return typeof type === "undefined" ? toast(value) : null;
  }
}
