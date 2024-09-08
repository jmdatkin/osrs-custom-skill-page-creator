<script lang="ts">
  import Canvas from "./Canvas.svelte";
  import SkillControlGrid from "./SkillControlGrid.svelte";
</script>

<main>
  <header>
    <h1>OSRS Custom Skill Page Creator</h1>
  </header>
  <section class="grid xl:grid-cols-2 gap-8 z-[100]">
    <SkillControlGrid />
    <div class="md:order-1">
      <Canvas />
    </div>
  </section>
  <footer>
    <a target="_blank" href="https://jatkin.dev">Created by Julian Atkin</a>
  </footer>
</main>

<style scoped>
  @font-face {
    font-family: "RS";
    src: url("./assets/runescape.ttf");
  }
  header {
    z-index: 100;
    font-family: "RS";
    font-size: 36pt;
    color: #ffff00;
    text-shadow: 2px 2px 0 0 #000;
    @apply py-12;
  }
  footer {
    z-index: 100;
    font-family: "RS";
    font-size: 30px;
    color: #ffff00;
    text-shadow: 2px 2px 0 0 #000;
    @apply py-12;
  }
  a:hover {
    text-decoration: underline;
  }
  main {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    background: url("./assets/bg.webp");
    background-size: cover;
  }

  main::before {
    z-index: 0;
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    min-height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
</style>
