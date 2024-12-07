<script>
import CardData from '../assets/Data/CardData.json'

export default {
  data() {
    return {
      products: CardData,
      props: {
        name: String,
        price: Number,
        des: String
      }
    }
  }
}
</script>

<template>
  <div class="">
    <!-- <p v-for="product in products" :key="product.id">{{ product.name }}</p> -->
    <div class="p-10" v-for="product in products" :key="product.id">
      <div class="relative max-w-7xl mx-auto">
        <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
          <div class="flex-1 px-6 py-8 lg:p-12 bg-gray-600">
            <h3 class="text-2xl font-extrabold text-white sm:text-3xl">{{ product.name }}</h3>
            <p class="mt-6 text-base text-gray-50 sm:text-lg">
              Take your Tailwind CSS development to the next level!
            </p>
            <div class="mt-8">
              <div class="flex items-center">
                <div class="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <ul
                role="list"
                class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
              >
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-white">Inspect Tailwind CSS websites</p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-white">Edit mode in real-time</p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-white">Copy utility classes right into your clipboard</p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-white">Free Chrome extension updates (Firefox coming soon)</p>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 bg-gray-700"
          >
            <p class="text-lg leading-6 font-medium text-white">Pay once, own it forever</p>
            <div class="mt-4 flex items-center justify-center text-5xl font-extrabold text-white">
              <span>£{{ product.price }}</span
              ><span class="ml-3 text-xl font-medium text-gray-50">GBP</span>
            </div>
            <div class="mt-6">
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
                  >Buy now</a
                >
              </div>
              <p class="text-gray-300 text-sm mt-3">100% money back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
