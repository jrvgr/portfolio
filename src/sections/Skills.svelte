<script lang="ts">
  import Marquee from "svelte-fast-marquee/";
  import TsIcon from "~icons/simple-icons/typescript";
  import SvelteIcon from "~icons/simple-icons/svelte";
  import HtmlIcon from "~icons/simple-icons/html5";
  import CssIcon from "~icons/simple-icons/css3";
  import JsIcon from "~icons/simple-icons/javascript";
  import AdobeAiIcon from "~icons/simple-icons/adobeillustrator";
  import AdobePsIcon from "~icons/simple-icons/adobephotoshop";
  import FigmaIcon from "~icons/simple-icons/figma";
  import BashIcon from "~icons/simple-icons/gnubash";
  import GitIcon from "~icons/simple-icons/git";
  import GithubIcon from "~icons/simple-icons/github";
  import LinuxIcon from "~icons/simple-icons/linux";
  import PhpIcon from "~icons/simple-icons/php";
  import SassIcon from "~icons/simple-icons/sass";
  import MySQlIcon from "~icons/simple-icons/mysql";
  import CodeIcon from "~icons/lucide/code-2";
  import ServerIcon from "~icons/lucide/server";
  import BrushIcon from "~icons/lucide/brush";
  import ViteIcon from "~icons/simple-icons/vite";

  import { fade, slide } from "svelte/transition";

  let activeTab: "frontend" | "backend" | "design" = "frontend";

  function returnActiveTabArray(): {name: string, icon:any}[] {
    if (activeTab === "design") return designSkills;
    if (activeTab === "backend") return backendSkills;
    return frontendSkills;
  }

  const frontendSkills = [
    {
      name: "Svelte",
      icon: SvelteIcon,
    },
    {
      name: "TypeScript",
      icon: TsIcon,
    },

    {
      name: "JavaScript",
      icon: JsIcon,
    },
    {
      name: "HTML",
      icon: HtmlIcon,
    },
    {
      name: "CSS",
      icon: CssIcon,
    },

    {
      name: "Sass",
      icon: SassIcon,
    },
    {
      name: "Vite",
      icon: ViteIcon,
    },
  ];

  const backendSkills = [
    {
      name: "PHP",
      icon: PhpIcon,
    },
    {
      name: "MySQL",
      icon: MySQlIcon,
    },
    {
      name: "Bash",
      icon: BashIcon,
    },
    {
      name: "Git",
      icon: GitIcon,
    },
    {
      name: "GitHub",
      icon: GithubIcon,
    },
    {
      name: "Linux",
      icon: LinuxIcon,
    },
  ];

  const designSkills = [
    {
      name: "Adobe Illustrator",
      icon: AdobeAiIcon,
    },
    {
      name: "Adobe Photoshop",
      icon: AdobePsIcon,
    },
    {
      name: "Figma",
      icon: FigmaIcon,
    },
  ];
</script>

<section class="skills">
  <h1 class="skillsHeading">Skills:</h1>
  <div class="wrapper">
    <aside class="tabSelector">
      <button
        data-text="Frontend"
        class:active={activeTab === "frontend"}
        on:click={() => (activeTab = "frontend")}
      >
        <CodeIcon />
        Frontend
      </button>
      <button
        data-text="Backend"
        class:active={activeTab === "backend"}
        on:click={() => (activeTab = "backend")}
      >
        <ServerIcon />
        Backend
      </button>
      <button
        data-text="Design"
        class:active={activeTab === "design"}
        on:click={() => (activeTab = "design")}
      >
        <BrushIcon />
        Design
      </button>
    </aside>
    <div class="skillsList">
      {#key activeTab}
        {#each returnActiveTabArray() as skill}
          <div in:slide class="skill">
            <svelte:component this={skill.icon} />
            <span>{skill.name}</span>
          </div>
        {/each}
      {/key}
    </div>
  </div>
</section>

<style lang="scss">
  .skills {
    display: flex;
    flex-direction: column;
    min-height: 850px;
    color: var(--projects-primary);
    font-size: clamp(40px, 3vw, 1.3em);
    font-family: "corben", sans-serif;
    padding: 30px 0;
    gap: 20px;
    @media (max-width: 768px) {
      min-height: 450px;
    }
  }

  .skillsHeading {
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

  .wrapper {
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .tabSelector {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 20px;
    gap: 10px;
    @media (max-width: 768px) {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-left: 0;
    }
  }

  .tabSelector button {
    position: relative;
    color: var(--projects-primary);
    width: max-content;
    font-size: clamp(20px, 5vw, 1.3em);
    background: none;
    border: none;
    font-family: "unbounded", sans-serif;
    transition: all 0.1s ease-in-out;
    text-decoration: none;
    position: relative;
    padding-bottom: 1em;
    overflow: hidden;
    cursor: pointer;
    &.active {
      color: var(--projects-primary-hover);
    }
    @media (min-width: 768px) {
      &.active:after {
        position: absolute;
        z-index: 3;
        top: -0.25em;
        left: 0;
        right: 0;
        bottom: 0;
        white-space: nowrap;
        content: attr(data-text) attr(data-text);
        color: transparent;
        line-height: 1.8;
        text-underline-offset: 0.3em;
        text-decoration: underline;
        text-decoration-style: wavy;
        text-decoration-color: #af3838;
        animation: wavy-slide 10s linear infinite;
      }
    }
    &:hover {
      color: var(--projects-primary-hover);
    }
  }

  @keyframes wavy-slide {
    to {
      margin-left: -51%;
    }
  }

  .active {
    text-decoration: wavy underline #af3838;
  }

  .skillsList {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    align-items: flex-start;
    text-align: left;
    font-size: clamp(20px, 4vw, 1.2em);
    @media (max-width: 768px) {
      display: flex;
      margin: 0 auto;
      max-width: 1000px;
      width: 100%;
      padding: 0 40px;
    }
  }

  .skillsList .skill {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    transition: all 0.1s ease-in-out;
  }

  @-webkit-keyframes move {
    from {
      background-position: 2px 19px;
    }
    to {
      background-position: 500px 19px;
    }
  }

  @keyframes move {
    from {
      background-position: 2px 19px;
    }
    to {
      background-position: 500px 19px;
    }
  }
</style>
