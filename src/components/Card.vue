<script setup lang="ts"></script>
<template>
  <div class="max-w-md w-full p-4 py-6">
    <div class="bg-white shadow-xl rounded-lg overflow-hidden">
      <div
        class="bg-cover bg-center h-16 p-4 flex justify-end items-center"
        style="
          background-image: url(https://mosscm.com/wp-content/uploads/2017/11/news-dallas-skyline.jpg);
        "
      >
        <p
          class="
            uppercase
            tracking-widest
            text-sm text-white
            bg-black
            py-1
            px-2
            rounded
            opacity-75
            shadow-lg
          "
        >
          Dallas, TX
        </p>
      </div>
      <div class="p-4 text-gray-700 flex justify-between">
        <div>
          <p class="text-3xl text-gray-900">
            <i class="wi wi-day-sunny text-yellow-500"></i> 84°<span
              class="text-lg text-gray-500"
              >/ 67°</span
            >
          </p>
          <p class="text-sm w-56">
            Mostly sunny throughout the day.<br />
            4-8 MPH winds.
          </p>
        </div>
        <div class="leading-loose text-sm">
          <div class="flex items-center">
            <i class="mr-2 wi wi-horizon-alt text-yellow-500"></i>
            <p>
              <span class="font-bold">6:57</span>
              <span class="text-xs text-gray-600">AM</span>
            </p>
          </div>
          <div class="flex items-center">
            <i class="mr-2 wi wi-horizon text-purple-400"></i>
            <p>
              <span class="font-bold">5:42</span>
              <span class="text-xs text-gray-600">PM</span>
            </p>
          </div>
        </div>
      </div>
      <div
        class="
          flex
          justify-between
          items-center
          p-4
          border-t border-gray-300
          text-gray-600
        "
      >
        <div class="flex items-center">
          <i class="mr-2 wi wi-hot"></i>
          <p>
            <span class="text-gray-900 font-bold">7</span>
            <span class="text-sm">UV</span>
          </p>
        </div>
        <div class="flex items-center">
          <i class="mr-2 wi wi-rain"></i>
          <p>
            <span class="text-gray-900 font-bold">8%</span>
            <span class="text-sm">Precip</span>
          </p>
        </div>
        <div class="flex items-center">
          <i class="mr-2 wi wi-thermometer"></i>
          <p>
            <span class="text-gray-900 font-bold">59°</span>
            <span class="text-sm">Dew Point</span>
          </p>
        </div>
      </div>
    </div>

    <div class="text-gray-600 my-3 text-center">
      <i class="fas fa-ellipsis-v"></i>
    </div>
    <div
      class="
        text-xs
        uppercase
        text-gray-400
        tracking-wider
        text-center
        leading-none
      "
    ></div>
  </div>
</template>

<style scoped></style>
