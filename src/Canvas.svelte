<script lang="ts">
  import { onMount } from "svelte";
  import template from "./assets/template.png";
  import { skillsStore } from "./stores/skills-store";
  import type { ItemState } from "./types";

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let img: HTMLImageElement;
  const imageUrl = template; // Replace with your image URL

  const skillWidth = 183;
  const skillHeight = 93;

  //   const iconOffset = {
  //     x: 29,
  //     y: 29,
  //   };
  const iconOffset = {
    x: 35,
    y: 35,
  };

  const numOffset = {
    x: 134,
    y: 70,
  };
  const denomOffset = {
    x: 172,
    y: 105,
  };

  const totalLevelOffset = {
    x: 480,
    y: 755,
  };

  const clear = () => {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const drawBg = () => {
    if (ctx) ctx.drawImage(img, 0, 0);
  };

  const drawText = (x, y, text) => {
    if (!ctx) return;
    // ctx.textAlign = "right";
    ctx.font = `48px 'RS_Small'`;

    const measure = ctx.measureText(text);
    let _x = x - measure.width / 2;

    ctx.fillStyle = "#000000";
    ctx.fillText(text, _x + 2, y + 3);

    ctx.fillStyle = "#ffff00";
    ctx.fillText(text, _x, y);
  };

  const drawTotalLevel = (x, y, text) => {
    if (!ctx) return;

    ctx.font = `36px 'RS_Small'`;
    const measure = ctx.measureText(text);

    let _x = x - measure.width / 2;

    ctx.fillStyle = "#000000";
    ctx.fillText(text, _x + 2, y + 3);

    ctx.fillStyle = "#ffff00";
    ctx.fillText(text, _x, y);
  };

  const draw = (state: ItemState) => {
    if (!ctx || !canvas) return;
    for (let y = 0; y < state.length; y++) {
      for (let x = 0; x < state[y].length; x++) {
        const item = state[y][x];
        const i = new Image();
        i.src = item.src;
        i.onload = () => {
          ctx.drawImage(
            i,
            0,
            0,
            i.naturalWidth,
            i.naturalHeight,
            iconOffset.x + skillWidth * x,
            iconOffset.y + skillHeight * y,
            70,
            70
          );
        };
        drawText(
          numOffset.x + skillWidth * x,
          numOffset.y + skillHeight * y,
          Number.isNaN(item.numerator) ? 0 : item.numerator
        );
        drawText(
          denomOffset.x + skillWidth * x,
          denomOffset.y + skillHeight * y,
          Number.isNaN(item.denominator) ? 0 : item.denominator
        );
      }
    }

    // Total level
    const totalLevel = state.reduce((prev: number, curr) => {
      return (
        prev +
        curr.reduce(
          (prev2, curr2) =>
            prev2 + (Number.isNaN(curr2.numerator) ? 0 : curr2.numerator),
          0
        )
      );
    }, 0);

    drawTotalLevel(totalLevelOffset.x, totalLevelOffset.y, totalLevel);
  };

  const saveCanvas = () => {
    const link = document.createElement("a");
    link.download = "osrs_skills.png";
    link.href = canvas.toDataURL();
    link.target = "_blank";
    link.click();
  };

  onMount(() => {
    img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      if (canvas) {
        ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        const dpi = window.devicePixelRatio;
        ctx.scale(dpi, dpi);
        ctx.translate(0.5, 0.5);
        ctx.imageSmoothingEnabled = false;
        canvas.width = img.width;
        canvas.height = img.height;
        clear();
        drawBg();
      }
    };
  });

  skillsStore.subscribe((state) => {
    const inner = () => {
      clear();
      drawBg();
      draw(state);
    };
    if (!ctx) setTimeout(inner, 10);
    else inner();
  });
</script>

<div class="flex flex-col">
  <div
    style="font-family: RS_Small; font-size: 144pt; visibility: hidden; position: absolute; user-select: none;"
  >
    OSRS
  </div>
  <canvas bind:this={canvas}></canvas>
  <button on:click={saveCanvas} class="w-full my-8">Save</button>
</div>

<style>
  @font-face {
    font-family: "RS_Small";
    src: url("./assets/runescape_small.ttf");
  }
</style>
