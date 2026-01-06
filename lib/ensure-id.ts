import { v4 as uuidv4 } from "uuid";

export function ensureId(params: URLSearchParams) {
  let id = params.get("id");

  if (!id) {
    id = uuidv4();
    params.set("id", id);
  }

  return id;
}
