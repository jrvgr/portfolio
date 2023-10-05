<script lang="ts">
  const getAmountOfElements = (wrapperWidth: number, elementWidth: number) => {
    const amountOfPosibleElements = Math.ceil(wrapperWidth / elementWidth);
    return amountOfPosibleElements * 2 - 1;
  };

  export let forwards = false;
  export let duration = 10;
  export let text: string;
  let elementWidth = 0;
  let wrapperWidth = 0;
  $: arrayOfAmountOfElements = Array.from(
    { length: getAmountOfElements(wrapperWidth, elementWidth) },
    (_, i) => i
  );
</script>

<div bind:clientWidth={wrapperWidth} class="wrapper">
  <ul
    class:forwards
    class="element-instances"
    style="animation-duration: {duration}s"
  >
    {#if text}
      <p bind:clientWidth={elementWidth}>{text}</p>
      {#each arrayOfAmountOfElements as i}
        <p>{text}</p>
      {/each}
    {/if}
  </ul>
</div>

<style>
  div.wrapper {
    overflow: hidden;
    width: 100%;
  }

  ul.element-instances {
    width: max-content;
    flex-wrap: nowrap;
    animation-name: slide;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0;
   }

  ul.element-instances.forwards {
    animation-direction: reverse;
  }

  ul.element-instances p {
    text-wrap: none;
    width: max-content;
    font-size: 30px;
    margin: 0;
    font-size: var(--font-size, 30px);
  }

  @keyframes slide {
    100% {
      transform: translate(calc(-50% - 0.5rem));
    }
  }
</style>
