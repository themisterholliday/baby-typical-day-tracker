<script lang="ts">
  import TailwindCss from './lib/TailwindCSS.svelte';
</script>

<TailwindCss />
<main class="h-screen bg-slate-600 flex flex-col">
  <!-- Main -->
  <div
    class="not-prose relative overflow-scroll rounded-xl bg-slate-50 dark:bg-slate-800/25"
  >
    <div
      class="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
      style="background-position: 10px 10px;"
    ></div>
    <div class="relative overflow-auto rounded-xl">
      <div class="mx-4 overflow-hidden bg-white shadow-xl dark:bg-slate-800">
        <div
          class="grid grid-cols-[70px,repeat(7,150px)] grid-rows-[auto,repeat(16,50px)] overflow-scroll"
        >
          <!-- Calendar frame -->
          <div
            class="sticky top-0 z-10 col-start-[1] row-start-[1] border-b border-slate-100 bg-white bg-clip-padding py-2 text-sm font-medium text-slate-900 dark:border-black/10 dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 dark:text-slate-200"
          ></div>
          <div
            class="sticky top-0 z-10 col-start-[2] row-start-[1] border-b border-slate-100 bg-white bg-clip-padding py-2 text-center text-sm font-medium text-slate-900 dark:border-black/10 dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 dark:text-slate-200"
          >
            Sun
          </div>
          <div
            class="sticky top-0 z-10 col-start-[3] row-start-[1] border-b border-slate-100 bg-white bg-clip-padding py-2 text-center text-sm font-medium text-slate-900 dark:border-black/10 dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 dark:text-slate-200"
          >
            Mon
          </div>
          <div
            class="sticky top-0 z-10 col-start-[4] row-start-[1] border-b border-slate-100 bg-white bg-clip-padding py-2 text-center text-sm font-medium text-slate-900 dark:border-black/10 dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 dark:text-slate-200"
          >
            Tue
          </div>
          <div
            class="sticky top-0 z-10 col-start-[5] row-start-[1] border-b border-slate-100 bg-white bg-clip-padding py-2 text-center text-sm font-medium text-slate-900 dark:border-black/10 dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 dark:text-slate-200"
          >
            Wed
          </div>
          <div
            class="sticky top-0 z-10 col-start-[6] row-start-[1] border-b border-slate-100 bg-white bg-clip-padding py-2 text-center text-sm font-medium text-slate-900 dark:border-black/10 dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 dark:text-slate-200"
          >
            Thu
          </div>
          <div
            class="sticky top-0 z-10 col-start-[7] row-start-[1] border-b border-slate-100 bg-white bg-clip-padding py-2 text-center text-sm font-medium text-slate-900 dark:border-black/10 dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 dark:text-slate-200"
          >
            Fri
          </div>
          <div
            class="sticky top-0 z-10 col-start-[8] row-start-[1] border-b border-slate-100 bg-white bg-clip-padding py-2 text-center text-sm font-medium text-slate-900 dark:border-black/10 dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 dark:text-slate-200"
          >
            Sat
          </div>
          <div
            class="sticky left-0 col-start-[1] row-start-[2] border-r border-slate-100 bg-white p-1.5 text-right text-xs font-medium uppercase text-slate-400 dark:border-slate-200/5 dark:bg-slate-800"
          >
            5 AM
          </div>
          <div
            class="col-start-[2] row-start-[2] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[3] row-start-[2] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[4] row-start-[2] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[5] row-start-[2] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[6] row-start-[2] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[7] row-start-[2] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[8] row-start-[2] border-b border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="sticky left-0 col-start-[1] row-start-[3] border-r border-slate-100 bg-white p-1.5 text-right text-xs font-medium uppercase text-slate-400 dark:border-slate-200/5 dark:bg-slate-800"
          >
            6 AM
          </div>
          <div
            class="col-start-[2] row-start-[3] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[3] row-start-[3] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[4] row-start-[3] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[5] row-start-[3] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[6] row-start-[3] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[7] row-start-[3] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[8] row-start-[3] border-b border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="sticky left-0 col-start-[1] row-start-[4] border-r border-slate-100 bg-white p-1.5 text-right text-xs font-medium uppercase text-slate-400 dark:border-slate-200/5 dark:bg-slate-800"
          >
            7 AM
          </div>
          <div
            class="col-start-[2] row-start-[4] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[3] row-start-[4] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[4] row-start-[4] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[5] row-start-[4] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[6] row-start-[4] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[7] row-start-[4] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[8] row-start-[4] border-b border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="sticky left-0 col-start-[1] row-start-[5] border-r border-slate-100 bg-white p-1.5 text-right text-xs font-medium uppercase text-slate-400 dark:border-slate-200/5 dark:bg-slate-800"
          >
            8 AM
          </div>
          <div
            class="col-start-[2] row-start-[5] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[3] row-start-[5] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[4] row-start-[5] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[5] row-start-[5] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[6] row-start-[5] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[7] row-start-[5] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[8] row-start-[5] border-b border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="sticky left-0 col-start-[1] row-start-[6] border-r border-slate-100 bg-white p-1.5 text-right text-xs font-medium uppercase text-slate-400 dark:border-slate-200/5 dark:bg-slate-800"
          >
            9 AM
          </div>
          <div
            class="col-start-[2] row-start-[6] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[3] row-start-[6] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[4] row-start-[6] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[5] row-start-[6] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[6] row-start-[6] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[7] row-start-[6] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[8] row-start-[6] border-b border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="sticky left-0 col-start-[1] row-start-[7] border-r border-slate-100 bg-white p-1.5 text-right text-xs font-medium uppercase text-slate-400 dark:border-slate-200/5 dark:bg-slate-800"
          >
            10 AM
          </div>
          <div
            class="col-start-[2] row-start-[7] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[3] row-start-[7] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[4] row-start-[7] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[5] row-start-[7] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[6] row-start-[7] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[7] row-start-[7] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[8] row-start-[7] border-b border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="sticky left-0 col-start-[1] row-start-[8] border-r border-slate-100 bg-white p-1.5 text-right text-xs font-medium uppercase text-slate-400 dark:border-slate-200/5 dark:bg-slate-800"
          >
            11 AM
          </div>
          <div
            class="col-start-[2] row-start-[8] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[3] row-start-[8] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[4] row-start-[8] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[5] row-start-[8] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[6] row-start-[8] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[7] row-start-[8] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[8] row-start-[8] border-b border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="sticky left-0 col-start-[1] row-start-[9] border-r border-slate-100 bg-white p-1.5 text-right text-xs font-medium uppercase text-slate-400 dark:border-slate-200/5 dark:bg-slate-800"
          >
            12 PM
          </div>
          <div
            class="col-start-[2] row-start-[9] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[3] row-start-[9] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[4] row-start-[9] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[5] row-start-[9] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[6] row-start-[9] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[7] row-start-[9] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[8] row-start-[9] border-b border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="sticky left-0 col-start-[1] row-start-[10] border-r border-slate-100 bg-white p-1.5 text-right text-xs font-medium uppercase text-slate-400 dark:border-slate-200/5 dark:bg-slate-800"
          >
            1 PM
          </div>
          <div
            class="col-start-[2] row-start-[10] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[3] row-start-[10] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[4] row-start-[10] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[5] row-start-[10] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[6] row-start-[10] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[7] row-start-[10] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[8] row-start-[10] border-b border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="sticky left-0 col-start-[1] row-start-[11] border-r border-slate-100 bg-white p-1.5 text-right text-xs font-medium uppercase text-slate-400 dark:border-slate-200/5 dark:bg-slate-800"
          >
            2 PM
          </div>
          <div
            class="col-start-[2] row-start-[11] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[3] row-start-[11] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[4] row-start-[11] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[5] row-start-[11] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[6] row-start-[11] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[7] row-start-[11] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[8] row-start-[11] border-b border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="sticky left-0 col-start-[1] row-start-[12] border-r border-slate-100 bg-white p-1.5 text-right text-xs font-medium uppercase text-slate-400 dark:border-slate-200/5 dark:bg-slate-800"
          >
            3 PM
          </div>
          <div
            class="col-start-[2] row-start-[12] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[3] row-start-[12] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[4] row-start-[12] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[5] row-start-[12] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[6] row-start-[12] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[7] row-start-[12] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[8] row-start-[12] border-b border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="sticky left-0 col-start-[1] row-start-[13] border-r border-slate-100 bg-white p-1.5 text-right text-xs font-medium uppercase text-slate-400 dark:border-slate-200/5 dark:bg-slate-800"
          >
            4 PM
          </div>
          <div
            class="col-start-[2] row-start-[13] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[3] row-start-[13] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[4] row-start-[13] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[5] row-start-[13] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[6] row-start-[13] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[7] row-start-[13] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[8] row-start-[13] border-b border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="sticky left-0 col-start-[1] row-start-[14] border-r border-slate-100 bg-white p-1.5 text-right text-xs font-medium uppercase text-slate-400 dark:border-slate-200/5 dark:bg-slate-800"
          >
            5 PM
          </div>
          <div
            class="col-start-[2] row-start-[14] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[3] row-start-[14] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[4] row-start-[14] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[5] row-start-[14] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[6] row-start-[14] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[7] row-start-[14] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[8] row-start-[14] border-b border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="sticky left-0 col-start-[1] row-start-[15] border-r border-slate-100 bg-white p-1.5 text-right text-xs font-medium uppercase text-slate-400 dark:border-slate-200/5 dark:bg-slate-800"
          >
            6 PM
          </div>
          <div
            class="col-start-[2] row-start-[15] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[3] row-start-[15] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[4] row-start-[15] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[5] row-start-[15] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[6] row-start-[15] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[7] row-start-[15] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[8] row-start-[15] border-b border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="sticky left-0 col-start-[1] row-start-[16] border-r border-slate-100 bg-white p-1.5 text-right text-xs font-medium uppercase text-slate-400 dark:border-slate-200/5 dark:bg-slate-800"
          >
            7 PM
          </div>
          <div
            class="col-start-[2] row-start-[16] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[3] row-start-[16] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[4] row-start-[16] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[5] row-start-[16] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[6] row-start-[16] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[7] row-start-[16] border-b border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[8] row-start-[16] border-b border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="sticky left-0 col-start-[1] row-start-[17] border-r border-slate-100 bg-white p-1.5 text-right text-xs font-medium uppercase text-slate-400 dark:border-slate-200/5 dark:bg-slate-800"
          >
            8 PM
          </div>
          <div
            class="col-start-[2] row-start-[17] border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[3] row-start-[17] border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[4] row-start-[17] border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[5] row-start-[17] border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[6] row-start-[17] border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div
            class="col-start-[7] row-start-[17] border-r border-slate-100 dark:border-slate-200/5"
          ></div>
          <div class="col-start-[8] row-start-[17]"></div>
          <!-- Calendar contents -->
          <div
            class="col-start-3 row-span-4 row-start-[2] m-1 flex flex-col rounded-lg border border-blue-700/10 bg-blue-400/20 p-1 dark:border-sky-500 dark:bg-sky-600/50"
          >
            <span class="text-xs text-blue-600 dark:text-sky-100">5 AM</span>
            <span class="text-xs font-medium text-blue-600 dark:text-sky-100">
              Flight to vancouver
            </span>
            <span class="text-xs text-blue-600 dark:text-sky-100">
              Toronto YYZ
            </span>
          </div>
          <div
            class="col-start-[4] row-span-4 row-start-[3] m-1 flex flex-col rounded-lg border border-purple-700/10 bg-purple-400/20 p-1 dark:border-fuchsia-500 dark:bg-fuchsia-600/50"
          >
            <span class="text-xs text-purple-600 dark:text-fuchsia-100">
              6 AM
            </span>
            <span
              class="text-xs font-medium text-purple-600 dark:text-fuchsia-100"
            >
              Breakfast
            </span>
            <span class="text-xs text-purple-600 dark:text-fuchsia-100">
              Mel's Diner
            </span>
          </div>
          <div
            class="col-start-[7] row-span-3 row-start-[14] m-1 flex flex-col rounded-lg border border-pink-700/10 bg-pink-400/20 p-1 dark:border-indigo-500 dark:bg-indigo-600/50"
          >
            <span class="text-xs text-pink-600 dark:text-indigo-100">5 PM</span>
            <span
              class="text-xs font-medium text-pink-600 dark:text-indigo-100"
            >
              🎉 Party party 🎉
            </span>
            <span class="text-xs text-pink-600 dark:text-indigo-100">
              We like to party!
            </span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"
    ></div>
  </div>
</main>

<style>
</style>
