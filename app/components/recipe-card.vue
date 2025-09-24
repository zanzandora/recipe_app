<script lang="ts" setup>
import type { Recipe } from '~/types/recipe'

defineProps<{
  recipe: Recipe
}>()
</script>

<template>
  <UCard variant="solid">
    <template #header>
      <NuxtImg
        :src="recipe.image"
        sizes="xs:100vw sm:50vw lg:400px"
        format="webp"
        densities="x1"
        alt=""
        class="rounded-md"
      />
    </template>

    <p class="mb-2 text-xl font-semibold lg:text-2xl">{{ recipe.name }}</p>
    <div class="mt-auto flex w-full gap-8 text-lg font-normal lg:text-xl">
      <div class="flex items-center gap-1">
        <UIcon
          name="i-mdi-clock-time-eight-outline"
          class="text-dodgeroll-gold-500"
        />
        <span>{{ recipe.cookTimeMinutes }}</span>
      </div>
      <div class="flex items-center gap-1">
        <UIcon name="i-mdi-fire" class="text-dodgeroll-gold-500" />
        <span>{{ recipe.caloriesPerServing }}</span>
      </div>
      <div class="flex items-center gap-1">
        <UIcon name="i-mdi-star" class="text-dodgeroll-gold-500" />
        <span>{{ recipe.rating }} ({{ recipe.reviewCount }})</span>
      </div>
    </div>

    <template #footer>
      <UButton :to="`/recipes/${recipe.id}`" label="View" class="px-6 py-4" />
    </template>
  </UCard>
</template>

<style></style>
