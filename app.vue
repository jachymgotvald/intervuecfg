<template>
  <div class="flex flex-wrap h-screen">
    <div class="lg:w-2/3 w-full px-10">
      <div>
        <h1 class="text-3xl font-semibold text-center text-custom-black pt-10">Fiktivní investiční firma</h1>
        <Stepper />
      </div>
    </div>
    <div class="lg:w-1/3 w-full bg-custom-blue-200 md:pb-0 pb-20">
      <h1 class="lg:pt-10 pt-16 px-8 text-center text-2xl font-medium">Jak celý proces registrace probíhá?</h1>
      <img class="lg:max-w-[400px] max-w-[250px] w-full mx-auto pt-10 px-8" src="/imgs/undraw_investment.svg"
        alt="Lorem ipsum">
      <div class="px-8 pt-20 flex flex-wrap gap-5 justify-center">
        <VisualExplainStep v-for="(step, index) in explainSteps" :order="index + 1" :text="step" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const explainSteps = [
  "Nejdříve vyplníte tento formulář",
  "Poté Vám pošleme potvrzovací email a SMS",
  "Nakonec se s Vámi spojíme a vyjasníme si Vaše cíle"
];

useSeoMeta({
  title: "Onboarding | Fiktivní investiční firma",
  ogTitle: "Onboarding | Fiktivní investiční firma"
});
</script>