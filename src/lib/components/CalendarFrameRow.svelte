<script lang="ts">
  export let name: string;
  export let row_start: number;
</script>

<div
  class="sticky left-0 col-start-[1] border-r border-slate-100 bg-white p-1.5 text-right text-xs font-medium uppercase text-slate-400 dark:border-slate-200/5 dark:bg-slate-800"
  style={`grid-row-start: ${row_start};`}
>
  {name}
</div>
<div
  class="col-start-[2] border-b border-r border-slate-100 dark:border-slate-200/5"
  style={`grid-row-start: ${row_start};`}
></div>
