<script lang="ts">
  import TailwindCss from './lib/TailwindCSS.svelte';
  import Calendar from './lib/components/Calendar.svelte';
</script>

<TailwindCss />

<main class="h-screen bg-slate-200 dark:bg-slate-900 pb-8 overflow-scroll">
  <h1 class="dark:text-white text-xl p-4">Typical Baby day</h1>
  <div class="">
    <Calendar></Calendar>
  </div>
</main>

<style>
</style>
