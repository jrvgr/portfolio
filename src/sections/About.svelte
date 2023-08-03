<script lang="ts">
  import day from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import LinkedIn from "~icons/line-md/linkedin";
  import GitHub from "~icons/line-md/github";
  import Mail from "~icons/line-md/email";
  import IntersectionObserver from "svelte-intersection-observer";

  day.extend(relativeTime);

  let meIsHovered = false;

  let element;
  let intersecting;

  let yearsSince = (year) => new Date().getFullYear() - year;
</script>

<IntersectionObserver {element} bind:intersecting threshold={0}>
  <section class="about">
    <h1 class="aboutHeading">
      About <span
        class:hovered={meIsHovered}
        on:mouseenter={() => (meIsHovered = true)}
        on:mouseleave={() => (meIsHovered = false)}
        class="me">me</span
      >
    </h1>
    <img
      on:mouseenter={() => (meIsHovered = true)}
      on:mouseleave={() => (meIsHovered = false)}
      class:hovered={meIsHovered}
      src="/me.jpg"
      alt="Jacco"
    />
    <p class="aboutText">
      I'm a {day("2006-02-09").toNow().match(/\d+/)[0]}-year-old creative
      developer who's been passionate about computers since the age of 7. {day(
        "2021-08-07"
      ).toNow(true)} ago I started programming and quickly fell in love with it.
      In my free time, i enjoy skateboarding and listening to music, which helps
      me find inspiration for my work. I'm always eager to learn and take on new
      projects, whether it's developing software or creating visually stunning designs.
    </p>
    <div bind:this={element} class="socials">
      <a
        aria-labelledby="linkedintext"
        href="https://www.linkedin.com/in/jacco-groen-09514b253/"
        target="_blank"
      >
        {#if intersecting}
          <LinkedIn />
        {/if}
        <span id="linkedintext">jacco-groen</span>
      </a>
      <a
        aria-labelledby="githubtext"
        href="https://github.com/jrvgr"
        target="_blank"
      >
        {#if intersecting}
          <GitHub />
        {/if}
        <span id="githubtext">jrvgr</span>
      </a>
      <a
        aria-labelledby="mailtext"
        href="mailto:jacco@groen.fyi"
        target="_blank"
      >
        {#if intersecting}
          <Mail />
        {/if}
        <span id="mailtext">jacco@groen.fyi</span>
      </a>
    </div>
    <a
      href="https://github.com/jrvgr.gpg"
      referrerpolicy="no-referrer"
      target="_blank"
      class="fingerprint"
    >
      pgp fingerprint: 0960 F91A 3A09 905D D19A 59E1 0A5C A16E EF97 D1F9
    </a>
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
    position: relative;
    font-family: "inter", sans-serif;
    font-weight: 500;
    transition: all 0.2s ease;
    color: var(--projects-primary);
  }

  .about:is(p, h1) {
    transition: font-size 0.05s linear, color 0, 2s;
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
    width: clamp(300px, 55vw, 1200px);
    @media screen and (max-width: 768px) {
      width: 100%;
    }
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

  .me {
    transition: all 0.2s ease;
    &:hover,
    &.hovered {
      filter: brightness(0.2);
      @media screen and (prefers-color-scheme: dark) {
        filter: brightness(1.8);
      }
    }
  }

  img {
    transition: all 0.3s ease, top 0.2s ease;
    width: clamp(150px, 30vw, 375px);
    border-image: url(/stamp-border.png) 8 round;
    border-width: 12px;
    border-style: solid;
    position: absolute;
    right: clamp(40px, calc(20vw - 200px), 70px);
    rotate: 5deg;
    top: 5px;
    &:hover,
    &.hovered {
      rotate: 10deg;
      transform: scale(1.1);
    }
    @media (max-width: 768px) {
      top: calc(-110px - 20vw);
      right: 50px;
    }
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
    float: right;
  }

  :global(.socials .icon) {
    aspect-ratio: 1/1;
  }

  .socials a:hover,
  .socials a:focus-visible {
    background-color: var(--projects-secondary);
    color: var(--projects-primary-hover);
    aspect-ratio: initial;
  }
</style>
