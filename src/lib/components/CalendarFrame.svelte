<script>
  import CalendarFrameRow from './CalendarFrameRow.svelte';

  const rows = [
    '12 am',
    '',
    '1am',
    '',
    '2 am',
    '',
    '3 am',
    '',
    '4 am',
    '',
    '5 am',
    '',
    '6 am',
    '',
    '7 am',
    '',
    '8 am',
    '',
    '9 am',
    '',
    '10 am',
    '',
    '11 am',
    '',
    '12 pm',
    '',
    '1 pm',
    '',
    '2 pm',
    '',
    '3 pm',
    '',
    '4 pm',
    '',
    '5 pm',
    '',
    '6 pm',
    '',
    '7 pm',
    '',
    '8 pm',
    '',
    '9 pm',
    '',
    '10 pm',
    '',
    '11 pm',
    '',
  ];
</script>

<div
  class="sticky top-0 z-10 col-start-[1] row-start-[1] border-r border-b border-slate-50 bg-white bg-clip-padding py-2 text-sm font-medium text-slate-700 dark:border-slate-200/5 dark:bg-slate-800 dark:text-slate-100"
></div>
<div
  class="sticky top-0 z-10 col-start-[2] row-start-[1] border-r border-b border-slate-50 bg-white bg-clip-padding py-2 text-center text-sm font-medium text-slate-700 dark:border-slate-200/5 dark:bg-slate-800 dark:text-slate-100"
>
  Today
</div>

{#each rows as name, index}
  <CalendarFrameRow {name} row_start={index + 1 + 1}></CalendarFrameRow>
{/each}
