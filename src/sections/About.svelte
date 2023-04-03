<script lang="ts">
  import LinkedIn from "~icons/line-md/linkedin";
  import GitHub from "~icons/line-md/github";
  import Mail from "~icons/line-md/email";

  import IntersectionObserver from "svelte-intersection-observer";

  let element;
  let intersecting;
</script>

<IntersectionObserver {element} bind:intersecting threshold={0}>
  <section class="about">
    <h1 class="aboutHeading">About me</h1>
    <p class="aboutText">
      I'm a 17-year-old creative developer who's been passionate about computers
      since the age of 7. Two years ago, I started programming and quickly fell
      in love with it. In my free time, I enjoy skateboarding and listening to
      music, which helps me find inspiration for my work. I'm always eager to
      learn and take on new projects, whether it's developing software or
      creating visually stunning designs.
    </p>
    <div bind:this={element} class="socials">
      <a
        href="https://www.linkedin.com/in/jacco-groen-09514b253/"
        target="_blank"
      >
        {#if intersecting}
        <LinkedIn />
        {/if}
        <span>jacco-groen</span>
      </a>
      <a href="https://github.com/J-Groen" target="_blank">
        {#if intersecting}
        <GitHub />
        {/if}
        <span>J-Groen</span>
      </a>
      <a href="mailto:jacco.groen@protonmail.com" target="_blank">
        {#if intersecting}
        <Mail />
        {/if}
        <span>jacco.groen@protonmail.com</span>
      </a>
    </div>
    <p class="fingerprint">
      pgp fingerprint: 0960 F91A 3A09 905D D19A 59E1 0A5C A16E EF97 D1F9
    </p>
  </section>
</IntersectionObserver>

<style lang="scss">
  .about {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    max-width: 1920px;
    margin: 0 auto;
    font-family: "inter", sans-serif;
    font-weight: 500;
    transition: all 0.2s ease;
    color: var(--projects-primary);
  }

  .about * {
    transition: font-size 0.05s linear;
    transition: color 0.1s ease;
    -moz-transition: font-size 0.2s ease;
  }

  .about h1 {
    font-size: clamp(40px, 5vw, 5em);
    margin: 0;
    margin-bottom: 5px;
    font-family: "unbounded", sans-serif;
    color: var(--projects-secondary);
    font-stretch: expanded;
    text-align: left;
    width: 100%;
    max-width: 1920px;
  }

  .about p {
    font-size: clamp(15px, 3.5vw, 25px);
    max-width: 1000px;
  }

  .fingerprint {
    font-size: clamp(15px, 3.5vw, 25px);
    max-width: 1000px;
    font-family: "unbounded", sans-serif;
    font-weight: 500;
    font-stretch: expanded;
    color: var(--projects-secondary);
    margin-top: 0;
  }

  .about .aboutText {
    margin-bottom: 0;
  }

  .socials {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .socials a {
    display: flex;
    transition: all 0.2s ease;
    color: var(--projects-primary);
    background-color: var(--projects-tertiary);
    font-size: clamp(30px, 6vw, 50px);
    padding: 10px;
    align-items: center;
    justify-content: center;
    width: max-content;
    height: clamp(55px, 10vw, 100px);
    aspect-ratio: 1/1;
    transition: all 0.2s ease;
  }

  .socials a span {
    display: none;
    width: max-content;
  }

  .socials a:hover span,
  .socials a:focus-visible span {
    display: block;
    font-size: clamp(15px, 3.5vw, 25px);
    margin-left: 10px;
    font-family: "unbounded", sans-serif;
    font-weight: 500;
    font-stretch: expanded;
    color: var(--projects-primary-hover);
  }

  :global(.socials .icon) {
    aspect-ratio: 1/1;
  }

  .socials a:hover,
  .socials a:focus-visible {
    background-color: var(--projects-secondary);
    color: var(--projects-primary-hover);
  }
</style>
