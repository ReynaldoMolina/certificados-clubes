"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Certificado, Member } from "@/types/types";
import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string";
import { ensureId } from "./ensure-id";

export function useCertificate() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const info: Certificado = {
    title: searchParams.get("title") ?? "",
    place: searchParams.get("place") ?? "",
    date: searchParams.get("date") ?? "",
    logo: searchParams.get("logo") ?? "",
  };

  const members: Member[] = useMemo(() => {
    const raw = searchParams.get("members");
    if (!raw) return [];

    try {
      return JSON.parse(decompressFromEncodedURIComponent(raw));
    } catch {
      return [];
    }
  }, [searchParams]);

  function updateMembersInUrl(newList: Member[]) {
    const params = new URLSearchParams(searchParams.toString());
    const id = ensureId(params);

    if (newList.length === 0) {
      params.delete("members");
    } else {
      params.set(
        "members",
        compressToEncodedURIComponent(JSON.stringify(newList))
      );
    }

    const url = `?${params.toString()}`;

    router.replace(url, { scroll: false });

    return { id, url };
  }

  function addMember(member: Member) {
    return updateMembersInUrl([...members, member]);
  }

  function editMember(index: number, updated: Member) {
    return updateMembersInUrl(
      members.map((m, i) => (i === index ? updated : m))
    );
  }

  function deleteMember(indexes: number[]) {
    const toDelete = new Set(indexes);

    return updateMembersInUrl(members.filter((_, i) => !toDelete.has(i)));
  }

  function updateInfoInUrl(value: string, paramKey: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value.trim() === "") {
      params.delete(paramKey);
    } else {
      params.set(paramKey, value);
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  }

  return {
    info,
    updateInfoInUrl,
    members,
    addMember,
    editMember,
    deleteMember,
  };
}
