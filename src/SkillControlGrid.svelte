<script lang="ts">
  import { LOCAL_STORAGE_KEY } from "./constants";
  import SkillControl from "./SkillControl.svelte";
  import { skillsStore } from "./stores/skills-store";

  function update2DArray(grid, x, y, newValue) {
    return grid.map((row, rowIndex) =>
      rowIndex === y
        ? row.map((cell, colIndex) => (colIndex === x ? newValue : cell))
        : row
    );
  }

  function handleChange(payload: any) {
    const details = payload.detail;
    skillsStore.update((state) => {
      const newState = update2DArray(state, details.x, details.y, details.data);
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState));
      return newState;
    });
  }
</script>

<div class="wrapper">
  <SkillControl x={0} y={0} on:update={handleChange}></SkillControl>
  <SkillControl x={1} y={0} on:update={handleChange}></SkillControl>
  <SkillControl x={2} y={0} on:update={handleChange}></SkillControl>
  <SkillControl x={0} y={1} on:update={handleChange}></SkillControl>
  <SkillControl x={1} y={1} on:update={handleChange}></SkillControl>
  <SkillControl x={2} y={1} on:update={handleChange}></SkillControl>
  <SkillControl x={0} y={2} on:update={handleChange}></SkillControl>
  <SkillControl x={1} y={2} on:update={handleChange}></SkillControl>
  <SkillControl x={2} y={2} on:update={handleChange}></SkillControl>
  <SkillControl x={0} y={3} on:update={handleChange}></SkillControl>
  <SkillControl x={1} y={3} on:update={handleChange}></SkillControl>
  <SkillControl x={2} y={3} on:update={handleChange}></SkillControl>
  <SkillControl x={0} y={4} on:update={handleChange}></SkillControl>
  <SkillControl x={1} y={4} on:update={handleChange}></SkillControl>
  <SkillControl x={2} y={4} on:update={handleChange}></SkillControl>
  <SkillControl x={0} y={5} on:update={handleChange}></SkillControl>
  <SkillControl x={1} y={5} on:update={handleChange}></SkillControl>
  <SkillControl x={2} y={5} on:update={handleChange}></SkillControl>
  <SkillControl x={0} y={6} on:update={handleChange}></SkillControl>
  <SkillControl x={1} y={6} on:update={handleChange}></SkillControl>
  <SkillControl x={2} y={6} on:update={handleChange}></SkillControl>
  <SkillControl x={0} y={7} on:update={handleChange}></SkillControl>
  <SkillControl x={1} y={7} on:update={handleChange}></SkillControl>
</div>

<style scoped>
  div.wrapper {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(1fr, 8);
    gap: 0.25rem;
  }
</style>
