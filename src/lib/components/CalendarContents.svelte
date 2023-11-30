<script lang="ts">
  import type {ICalendarComponentInput} from '../typical_day';
  import CalendarContentsItem from './CalendarContentsItem.svelte';

  export let data: ICalendarComponentInput[];
</script>

{#each data as item}
  <CalendarContentsItem
    name={item.name}
    row_start={item.row_start + 2}
    span={item.span}
  />
{/each}
