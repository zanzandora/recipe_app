<script setup lang="ts">
import type { Recipe } from '~/types/recipe'

const { id } = useRoute().params

const { data, error } = await useFetch<Recipe>(
  `https://dummyjson.com/recipes/${id}`,
)

if (error.value) {
  throw createError({
    statusCode: error.value?.statusCode,
    statusMessage: error.value?.statusMessage,
  })
}

useSeoMeta({
  title: data.value?.name,
  description: 'Recipes for you to cook!',
  ogTitle: data.value?.name,
  ogDescription: 'Recipes for you to cook!',
  ogImage: data.value?.image,
  ogUrl: `http:localhost:3000/recipes/${data.value?.id}`,
  twitterTitle: data.value?.name,
  twitterDescription: 'Recipes for you to cook!',
  twitterImage: data.value?.image,
  twitterCard: 'summary',
})
</script>

<template>
  <div class="mx-auto flex max-w-5xl flex-col py-20">
    <!-- Header -->
    <div class="mb-6 flex flex-col">
      <h2 class="mb-4 text-5xl font-semibold">{{ data?.name }}</h2>
      <div class="mb-6 flex gap-4 text-xl">
        <div class="flex items-center gap-1">
          <UIcon
            name="i-mdi-clock-time-eight-outline"
            class="text-dodgeroll-gold-500"
          />
          <span>{{ data?.cookTimeMinutes }}</span>
        </div>
        <div class="flex items-center gap-1">
          <UIcon name="i-mdi-fire" class="text-dodgeroll-gold-500" />
          <span>{{ data?.caloriesPerServing }}</span>
        </div>
        <div class="flex items-center gap-1">
          <UIcon name="i-mdi-star" class="text-dodgeroll-gold-500" />
          <span>{{ data?.rating }} ({{ data?.reviewCount }})</span>
        </div>
      </div>
    </div>

    <!-- Image -->
    <NuxtImg
      loading="lazy"
      placeholder
      :src="data?.image"
      densities="x1"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw"
      class="mb-12 max-h-[500px] w-full rounded-md object-cover shadow-sm"
      alt=""
    />

    <!-- Ingredients -->
    <div class="mb-8">
      <h2 class="mb-4 text-3xl font-semibold">Ingredients</h2>
      <ul class="grid grid-cols-1 gap-2 text-lg md:grid-cols-2">
        <li v-for="(ingredient, index) in data?.ingredients" :key="index">
          <label class="flex items-center gap-2">
            <input class="peer hidden" type="checkbox" />
            <div
              class="border-dodgeroll-gold-500 peer-checked:after:bg-dodgeroll-gold-500 relative flex h-6 w-6 items-center justify-center rounded-full border-2 peer-checked:after:absolute peer-checked:after:h-4 peer-checked:after:w-4 peer-checked:after:rounded-full"
            />
            <span class="peer-checked:line-through">
              {{ ingredient }}
            </span>
          </label>
        </li>
      </ul>
    </div>

    <!-- Instructions -->
    <div>
      <h2 class="mb-4 text-3xl font-medium">Instructions</h2>
      <ul class="flex flex-col gap-4 text-lg">
        <li
          v-for="(instruction, index) in data?.instructions"
          :key="index"
          class="flex gap-2"
        >
          <span
            class="bg-dodgeroll-gold-500 flex h-7 w-7 items-center justify-center rounded-full text-sm text-white"
          >
            {{ index + 1 }}
          </span>
          <span class="flex-1">{{ instruction }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
