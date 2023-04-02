<script lang="ts">
  import { getProjects } from "../api/github";
  import Spinner from "~icons/line-md/downloading-loop";
  import StarIcon from "~icons/line-md/heart-filled";
  import GithubIcon from "~icons/line-md/github-twotone";
  import SadFace from "~icons/line-md/emoji-frown";
  import { fly, slide } from "svelte/transition";
  import IntersectionObserver from "svelte-intersection-observer";
  let element;
  let intersecting;

  let projects: any = Object.freeze([]);
</script>

<IntersectionObserver
  once
  {element}
  on:intersect={() => (projects = getProjects())}
  bind:intersecting
  threshold={0.8}
>
  <section
    transition:slide={{
      axis: "y",
      duration: 1000,
    }}
    bind:this={element}
    id="projects"
    class="projects"
  >
    <h1 class="projectsHeading">Projects:</h1>
    {#key projects}
      {#await projects}
        <div class="spinner">
          <p>Hold tight! I'm fetching the projects as fast as I can!</p>
          <Spinner style="font-size: 3em" />
        </div>
      {:then projects}
        <div in:slide class="projectItems">
          {#each projects as project, i}
            {@const delay = 200 * i + 4}
            <a
              in:fly={{ delay, y: 50 }}
              href={project.svn_url}
              target="_blank"
              rel="noopener noreferrer"
              class="project"
            >
              <div class="content">
                <div class="name">
                  <GithubIcon />
                  {project.name}
                </div>
                <div class="details">
                  <span>{project.stargazers_count}<StarIcon /></span>
                </div>
              </div>
            </a>
          {/each}
        </div>
      {:catch error}
        <div class="error">
          <p>
            Couldn't fetch projects. Maybe next time? <SadFace
              style="font-size: 3em"
            />
          </p>
          <p>{error.message}</p>
        </div>
      {/await}
    {/key}
  </section>
</IntersectionObserver>

<style lang="scss">
  .spinner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .error {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .error p {
    display: flex;
    font-size: 1.3em;
    align-items: center;
  }

  .projectsHeading {
    font-size: clamp(40px, 5vw, 5em);
    padding-left: 10px;
    margin: 0;
    margin-bottom: 5px;
    font-family: "unbounded", sans-serif;
    color: var(--projects-secondary);
    font-stretch: expanded;
    text-align: left;
    width: 100%;
    max-width: 1920px;
  }

  .projects {
    background-color: var(--projects-background);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px 0px;
    text-transform: capitalize;
    color: var(--projects-primary);
    z-index: 2;
    height: 400px;
  }

  .projectItems {
    width: 100%;
    max-width: none;
    display: flex;
    flex-direction: column;
  }

  .project:hover,
  .project:focus-within {
    @media (any-pointer: fine) {
      background-color: var(--projects-tertiary);
    }
  }

  .project:hover .content,
  .project:focus-within .content {
    @media (any-pointer: fine) {
      padding-bottom: clamp(45px, 7vw, 75px);
      padding-top: 15px;
      padding-left: 20px;
    }
  }

  .project .content {
    display: flex;
    flex-direction: row;
    gap: 5px;
    width: 100%;
    max-width: 1920px;
    align-items: baseline;
    justify-content: space-between;
    align-items: flex-start;
    text-decoration: none;
    border-bottom: 1px solid var(--projects-primary);
    overflow: hidden;
    padding: 10px 20px 5px;
    font-family: "inter", sans-serif;
    font-weight: 700;
    transition: all 0.2s ease;

    @media (any-pointer: fine) {
      height: clamp(32.5px, 7.5vw, 52.5px);
    }
  }

  .project .content * {
    transition: font-size 0.05s linear;
    -moz-transition: font-size 0.2s ease;
  }

  .project .details span {
    display: flex;
    flex-direction: row;
    gap: 10px;
    color: var(--projects-primary);
    text-decoration: none;
    @media (any-pointer: fine) {
      opacity: 0.2;
    }
  }

  .project:hover .details span {
    @media (any-pointer: fine) {
      opacity: 1;
    }
  }

  .project .name {
    font-style: normal;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    color: var(--projects-primary);
    text-decoration: none;
  }

  .project {
    font-size: clamp(20px, 6vw, 2.8em);
    text-decoration: none;
    width: 100%;
    max-width: none;
    display: flex;
    justify-content: center;
  }

  .project:hover {
    font-size: clamp(20px, 6.5vw, 3.3em);
  }
</style>
