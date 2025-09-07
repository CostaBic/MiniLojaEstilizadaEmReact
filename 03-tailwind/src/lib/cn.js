// src/lib/cn.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes de forma segura.
 * - clsx trata condições (ex: cn("a", cond && "b"))
 * - twMerge resolve conflitos do Tailwind (ex: cn("p-2", "p-4") => "p-4")
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
