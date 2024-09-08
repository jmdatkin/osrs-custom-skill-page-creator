<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { skillsStore } from "./stores/skills-store";

  export let x;
  export let y;

  let item;

  let numerator = 99;
  let denominator = 99;
  let imgSrc = "";

  let fileInput: HTMLInputElement;

  const dispatch = createEventDispatcher();

  const handleDispatch = () => {
    dispatch("update", {
      x,
      y,
      data: {
        numerator,
        denominator,
        src: imgSrc,
      },
    });
  };

  const handleFileUpload = (event) => {
    const fr = new FileReader();
    fr.onload = () => {
      imgSrc = fr.result!.toString();
      handleDispatch();
    };
    fr.readAsDataURL(event.currentTarget.files[0]);
  };

  skillsStore.subscribe((state) => {
    item = state[y][x];
  });
</script>

<div
  class="grid grid-cols-2 gap-2 justify-center border border-zinc-800 bg-zinc-900/70 p-4"
>
  <div class="flex flex-col items-center justify-center h-full">
    <input bind:this={fileInput} type="file" on:input={handleFileUpload} />
    <!-- <button
      class="w-16 h-16 bg-zinc-900 border rounded-sm border-zinc-700 text-zinc-50 hover:bg-zinc-800 active:bg-zinc-900"
      on:click={() => fileInput.click()}
    > -->
    <button class="w-16 h-16" on:click={() => fileInput.click()}>
      {#if item.src === ""}
        Icon
      {:else}
        <img src={item.src} />
      {/if}
    </button>
    >
  </div>
  <div class="flex flex-col gap-2 items-center justify-center h-full">
    <input
      on:input={(event) => {
        numerator = parseInt(event.currentTarget.value);
        handleDispatch();
      }}
      type="number"
      value={item.numerator}
      maxlength="2"
    />
    <input
      on:input={(event) => {
        denominator = parseInt(event.currentTarget.value);
        handleDispatch();
      }}
      type="number"
      value={item.denominator}
    />
  </div>
</div>

<style scoped>
  input[type="file"] {
    display: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    @apply bg-zinc-900;
    @apply border border-zinc-700;
    @apply rounded-sm;
    @apply w-16;
    @apply text-zinc-50;
    @apply px-4 py-2;
    -moz-appearance: textfield;
  }
</style>
