<script lang="ts">
  import { fly } from "svelte/transition";
  import GithubIcon from "~icons/line-md/github-twotone";
  import StarIcon from "~icons/line-md/heart-filled";
  import type { StarredProject } from "../api/github";

  export let project: StarredProject = {} as any;
  export let delay: number = 200;
</script>

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
      <span
        class="language"
        style="mask-image: url(https://api.iconify.design/simple-icons/{project.language.toLowerCase()}.svg); -webkit-mask-image: url(https://api.iconify.design/simple-icons/{project.language.toLowerCase()}.svg);"
      />
      <span class="stars">{project.stargazers_count}<StarIcon /></span>
    </div>
  </div>
</a>

<style lang="scss">
  .project:hover,
  .project:focus-visible {
    @media (any-pointer: fine) {
      background-color: var(--projects-tertiary);
    }
  }

  .project:hover .content,
  .project:focus-visible .content {
    @media (any-pointer: fine) {
      padding-bottom: clamp(45px, 10vw, 75px);
      padding-top: 15px;
      padding-left: 30px;
      color: var(--projects-primary-hover);
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
    font-weight: 500;
    transition: all 0.2s ease;
    color: var(--projects-primary);

    @media (any-pointer: fine) {
      height: clamp(32.5px, 7.5vw, 52.5px);
    }
  }

  .project .content * {
    transition: font-size 0.05s linear;
    transition: color 0.1s ease;
    -moz-transition: font-size 0.2s ease;
  }

  .project .details {
    display: flex;
    flex-direction: row;
    gap: 20px;
    text-decoration: none;
    align-items: center;
  }

  .project .content .details .language {
    height: clamp(20px, 6vw, 1em);
    width: clamp(20px, 6vw, 1em);
    background-color: var(--projects-primary);
    transition: background-color 0.2s ease;
    mask-size: contain;
    -webkit-mask-size: contain;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-position: center;
  }

    .project:hover .content .details .language, {
      background-color: var(--projects-primary-hover);
    }


  .project .details span {
    display: inline-flex;
    flex-direction: row;
    gap: 10px;
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
