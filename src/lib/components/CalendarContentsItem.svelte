<script lang="ts">
  export let row_start: number;
  export let span: number;
  export let name: string;
</script>

{#if row_start <= 48}
  <div
    class="col-start-[2] row-span-{span} m-1 flex flex-col rounded-lg border border-blue-700/10 bg-blue-400/20 p-1 dark:border-sky-500 dark:bg-sky-600/50"
    style={`grid-row-start: ${row_start};`}
  >
    <span class="pl-2 text-blue-600 dark:text-sky-100">{name}</span>
  </div>
{/if}
