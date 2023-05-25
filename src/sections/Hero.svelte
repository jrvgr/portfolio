<script lang="ts">
  import Marquee from "svelte-marquee";

  function handleBlobMovement({ clientX, clientY }: MouseEvent) {
    const blob = document.querySelector(".blob");

    blob.animate(
      {
        left: `${clientX - 50}px`,
        top: `${clientY - 50 + window.scrollY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  }

  const functiondescription = "Creative Developer";
  const name = "Jacco Groen";
</script>

<div class="remove-insert" style="display:none" />

<section id="hero" on:pointermove={handleBlobMovement} class="hero">
  <span class="blob" />
  <span class="blob-blur" />
  <div class="text">
    <div class="name">
      <Marquee content={name} hoverable={false} autoplay speed="medium" />
    </div>
    <div class="role">
      <Marquee
        content={functiondescription}
        hoverable={false}
        reverse
        autoplay
        speed="medium"
      />
    </div>
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
    font-weight: 450;
    font-family: "corben", sans-serif;
    :global(span) {
      margin: 0 clamp(10px, 1vw, 30px);
    }
  }

  .name {
    color: var(--hero-secondary);
    font-size: clamp(35px, 6vw, 70px);
    font-weight: 800;
    font-family: "unbounded", sans-serif;
    position: relative;
    :global(span) {
      margin: 0 clamp(10px, 1vw, 30px);
    }
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
