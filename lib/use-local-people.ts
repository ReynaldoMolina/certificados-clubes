"use client";

import { useState } from "react";
import { Person } from "@/types/types";

export function useLocalPeople() {
  // 1. Initialize state lazily (runs only once on mount)
  const [people, setPeople] = useState<Person[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("people");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  // Helper to update localStorage whenever people change
  function updateStorage(newList: Person[]) {
    setPeople(newList);
    localStorage.setItem("people", JSON.stringify(newList));
  }

  function addPerson(person: Person) {
    updateStorage([...people, person]);
  }

  function editPerson(updated: Person) {
    const newList = people.map((p) => (p.id === updated.id ? updated : p));
    updateStorage(newList);
  }

  function deletePerson(person: Person) {
    const newList = people.filter((p) => p.id !== person.id);
    updateStorage(newList);
  }

  return {
    people,
    addPerson,
    editPerson,
    deletePerson,
  };
}
