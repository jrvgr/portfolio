import type { StarredProject } from "./github.d";

export async function getProjects() {
  const response = await fetch("https://api.github.com/users/J-Groen/starred");
  const data: StarredProject[] = await response.json();
  return data.filter(
    (project) => project.owner.id === 30769091
  ) as StarredProject[];
}
