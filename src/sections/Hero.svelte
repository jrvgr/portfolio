<script lang="ts">
  import Marquee from "svelte-fast-marquee";
  import ArrowDown from "~icons/lucide/arrow-down";
  import { getProjects } from "../api/github";

  function handleBlobMovement({ clientX, clientY }: MouseEvent) {
    const blob = document.querySelector(".blob");

    blob.animate(
      {
        left: `${clientX - 50}px`,
        top: `${clientY - 50}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  }

  const functiondescription = "Creative Developer";
  const name = "Jacco Groen";

  const repeatWord: number = 5;
</script>

<div class="remove-insert" style="display:none" />

<section id="hero" on:pointermove={handleBlobMovement} class="hero">
  <span class="blob" />
  <span class="blob-blur" />
  <div class="text">
    <Marquee speed={20} direction="right">
      <h1 class="name">{name}</h1>
      <h1 class="name">{name}</h1>
      <h1 class="name">{name}</h1>
      <h1 class="name">{name}</h1>
      <h1 class="name">{name}</h1>
      <h1 class="name">{name}</h1>
    </Marquee>
    <Marquee speed={15} direction="left">
      <h1 class="role">
        {functiondescription}
      </h1>
      <h1 class="role">
        {functiondescription}
      </h1>
      <h1 class="role">
        {functiondescription}
      </h1>
      <h1 class="role">
        {functiondescription}
      </h1>
      <h1 class="role">
        {functiondescription}
      </h1>
      <h1 class="role">
        {functiondescription}
      </h1>
      <h1 class="role">
        {functiondescription}
      </h1>
    </Marquee>
  </div>
</section>

<style lang="scss">
  .text {
    margin-bottom: 20px;
    gap: 1vw;
    display: flex;
    flex-direction: column;
  }

  .role {
    color: var(--hero-secondary);
    font-size: clamp(25px, 3vw, 50px);
    margin: 0 20px;
    font-weight: 450;
    font-family: "corben", sans-serif;
  }

  .name {
    color: var(--hero-secondary);
    font-size: clamp(35px, 6vw, 70px);
    margin: 0 clamp(1px, 3vw, 30px);
    font-weight: 800;
    font-family: "unbounded", sans-serif;
    font-style: wide;
    position: relative;
  }

  .hero * {
    z-index: 4;
  }

  .blob {
    background-color: white;
    height: 260px;
    aspect-ratio: 1;
    position: absolute;
    inset: 0;
    translate: -50% -50%;
    border-radius: 50%;
    background: linear-gradient(to right, rgb(56, 66, 156), rgb(113, 41, 122));
    animation: rotateBlob 20s infinite;
    opacity: 0.6;
    z-index: 2;
    filter: blur(80px);
  }

  .blob-blur {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 3;
    backdrop-filter: blur(20px);
  }

  @keyframes rotateBlob {
    from {
      rotate: 0deg;
    }

    50% {
      scale: 1 1.5;
    }

    to {
      rotate: 360deg;
    }
  }

  @keyframes float {
    0% {
      transform: translatey(0);
    }
    50% {
      transform: translatey(10px);
    }
    100% {
      transform: translatey(0);
    }
  }

  @keyframes rotateGradient {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .hero::before {
    content: "";
    position: absolute;
    width: 100vw;
    height: calc(40vh + 20vw);
    background: radial-gradient(circle at 50% 0, #2e352480, #ff000000 70.71%),
      radial-gradient(circle at 6.7% 75%, #35584780, #0000ff00 70.71%),
      radial-gradient(circle at 93.3% 75%, #84469480, #00ff0000 70.71%)
        rgb(5, 5, 5);
    background-size: 200% 200%;
    z-index: 1;
    filter: blur(10px);
  }

  .hero {
    position: relative;
    background-color: black;
    color: var(--hero-white);
    height: calc(40vh + 20vw);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-family: "agrandir-grand", sans-serif;
    overflow: hidden;
  }
</style>
