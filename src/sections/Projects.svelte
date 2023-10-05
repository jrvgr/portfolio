<script lang="ts">
  import ProjectItem from "./../components/ProjectItem.svelte";
  import { getProjects, type StarredProject } from "../api/github";
  import Spinner from "~icons/line-md/downloading-loop";
  import SadFace from "~icons/line-md/emoji-frown";
  import { slide } from "svelte/transition";
  import IntersectionObserver from "svelte-intersection-observer";
  let element!: HTMLElement;
  let intersecting: boolean = false;

  let projects: Promise<StarredProject[]> = getProjects();

  function animationDelay(i: number) {
    return 100 * (i - 0.3);
  }
</script>

<IntersectionObserver once {element} bind:intersecting threshold={0.4}>
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
    {#await projects}
      <div class="spinner">
        <p>Hold tight! I'm fetching the projects as fast as I can!</p>
        <Spinner style="font-size: 3em" />
      </div>
    {:then projects}
      {#if intersecting}
        <div in:slide class="projectItems">
          {#each projects as project, i}
            {#key project}
              <ProjectItem {project} delay={animationDelay(i)} />
            {/key}
          {/each}
        </div>
      {/if}
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
    padding: 0px 0px 50px;
    text-transform: capitalize;
    color: var(--projects-primary);
    z-index: 2;;
  }

  .projectItems {
    width: 100%;
    max-width: none;
    display: flex;
    flex-direction: column;
  }
</style>
