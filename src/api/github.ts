import type { StarredProject } from "./github.d";
import testData from "./testdata.json";

export async function getProjects() {
  const response = await fetch("https://api.github.com/users/im-viriv/starred");
  const data: StarredProject[] = await response.json();
  // const data = testData as unknown as StarredProject[];
  return data.filter(
    (project) => project.owner.id === 30769091
  ) as StarredProject[];
}
