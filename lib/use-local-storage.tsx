"use client";

import { useState } from "react";
import { SavedLink } from "@/types/types";
import { dateToIso } from "./formatters";

export const STORAGE_KEY = "saved_urls";

function readFromStorage(): SavedLink[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeToStorage(links: SavedLink[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}

export function useLocalStorage() {
  const [savedLinks, setSavedLinks] = useState<SavedLink[]>(function () {
    return readFromStorage();
  });

  function saveUrl(id: string, urlString: string): void {
    const url = new URL(urlString);

    const title = url.searchParams.get("title") ?? "";
    const designId = url.searchParams.get("design_id") ?? "";

    setSavedLinks((prev) => {
      const index = prev.findIndex((link) => link.id === id);

      const newEntry: SavedLink = {
        id,
        title,
        designId,
        url: urlString,
        modified: dateToIso(new Date()),
      };

      const updated =
        index >= 0
          ? prev.map((link, i) => (i === index ? newEntry : link))
          : [...prev, newEntry];

      writeToStorage(updated);
      return updated;
    });
  }

  function deleteUrl(id: string): void {
    if (!id) return;

    setSavedLinks(function (prev) {
      const updated = prev.filter(function (link) {
        return link.id !== id;
      });

      writeToStorage(updated);
      return updated;
    });
  }

  return {
    savedLinks,
    saveUrl,
    deleteUrl,
  };
}
