<script lang="ts">
  export let row_start: number;
</script>

<div
  class="col-start-1 col-span-2 row-span-1 flex flex-col rounded-lg border border-slate-800 dark:border-slate-300 z-10"
  style={`grid-row-start: ${row_start};`}
></div>
