<script lang="ts">
  import {
    get_calendar_info,
    get_days_from_option,
    get_formatted_name,
    TypicalDayOption,
  } from '../typical_day';
  import CalendarContents from './CalendarContents.svelte';
  import CalendarFrame from './CalendarFrame.svelte';
  import TimeIndicator from './TimeIndicator.svelte';

  const current_minute = new Date().getMinutes();
  const half_hour_addition = current_minute >= 30 ? 0.5 : 0;
  const current_hour = new Date().getHours() + half_hour_addition; // Hours in 24-hour format (0-23)

  // Initialize hour_offset from local storage or default to current hour
  let hour_offset = parseInt(localStorage.getItem('hour_offset') ?? '0') || 0;

  let typical_day_option: TypicalDayOption =
    (localStorage.getItem('typical_day_option') as TypicalDayOption) ||
    TypicalDayOption._4_to_8_weeks;

  $: data = get_calendar_info(
    get_days_from_option(typical_day_option),
    hour_offset
  );

  let selected_typical_day_option: TypicalDayOption =
    TypicalDayOption._4_to_8_weeks;
  let selected_hour = 0;

  // Array of hours (0-23)
  const hours = Array.from({length: 24}, (_, i) => i);
  function formatHour(hour: number) {
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // Convert 0 to 12 and adjust others
    const suffix = hour < 12 ? 'AM' : 'PM';
    return `${formattedHour} ${suffix}`;
  }

  let showDialog = false;

  function toggleDialog() {
    showDialog = !showDialog;
    const dialog = document.querySelector('dialog');
    showDialog ? dialog?.showModal() : dialog?.close();
  }

  function handleConfirm() {
    toggleDialog();
    hour_offset = selected_hour;
    localStorage.setItem('hour_offset', `${hour_offset}`);

    typical_day_option = selected_typical_day_option;
    localStorage.setItem('typical_day_option', typical_day_option);
  }
</script>

<div class="max-w-2xl m-auto">
  <div class="flex content-center py-4">
    <button
      class="px-4 py-2 border rounded m-auto text-white bg-blue-500"
      on:click={toggleDialog}>Start the day</button
    >
  </div>
  <div class="not-prose">
    <div class="overflow-auto">
      <div
        class="mx-4 overflow-hidden bg-white shadow-xl dark:bg-slate-800 rounded-xl"
      >
        <div
          class="grid grid-cols-[6rem,auto] grid-rows-[auto,repeat(48,3rem)] overflow-scroll"
        >
          <CalendarFrame></CalendarFrame>
          <CalendarContents {data}></CalendarContents>
          <TimeIndicator row_start={(current_hour + 1) * 2}></TimeIndicator>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Modal Dialog -->
<dialog
  class="p-6 w-96 mx-auto bg-white dark:bg-slate-800 rounded-xl shadow space-y-4"
  open={showDialog}
>
  <div class="flex justify-between">
    <h2 class="text-lg font-bold dark:text-white">When did the day start?</h2>
  </div>

  <!-- Hour Selector -->
  <div class="mx-auto">
    <select
      id="hourSelector"
      bind:value={selected_hour}
      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      {#each hours as hour}
        <option value={hour}>{formatHour(hour)}</option>
      {/each}
    </select>
  </div>

  <div class="mx-auto">
    <label for="day_selector" class="dark:text-white">
      Select Typical Day
    </label>
    <select
      id="day_selector"
      bind:value={selected_typical_day_option}
      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      {#each Object.values(TypicalDayOption) as option}
        <option value={option}>{get_formatted_name(option)}</option>
      {/each}
    </select>
  </div>

  <div class="flex justify-center">
    <button
      class="text-white bg-blue-700 m-auto px-4 py-2 rounded-lg border"
      on:click={toggleDialog}
    >
      Cancel
    </button>
    <button
      class="text-white bg-blue-500 m-auto px-4 py-2 rounded-lg border"
      on:click={handleConfirm}
    >
      Confirm
    </button>
  </div>
</dialog>
