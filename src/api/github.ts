import type { StarredProject } from "./github.d";

export async function getProjects() {
  const response = await fetch("https://api.github.com/users/J-Groen/starred");
  const data: StarredProject[] = await response.json();
  console.log(data);
  return data
    .filter((project) => project.owner.id === 30769091)
    .sort((a, b) => {
      return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
    }) as StarredProject[];
}
