<script lang="ts">
  import type { Writable } from "svelte/store";

  type Tabs = "frontend" | "backend" | "design";

  export let activeTab: Writable<Tabs>;
  export let tab: Tabs;
</script>

<button
  data-text={tab}
  class:active={$activeTab === tab}
  on:click={() => ($activeTab = tab)}
>
  <slot />
  {tab}
</button>

<style lang="scss">
  button {
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
    text-transform: capitalize;
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
</style>
