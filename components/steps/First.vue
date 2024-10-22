<template>
  <div>
    <VisualMainInfo />
    <div class="pt-10 max-w-[800px] mx-auto">
      <div class="flex flex-col gap-8 max-w-[400px] mx-auto">
        <p class="text-sm text-center">Kolik si budete přát pravidelně investovat?</p>
        <UInput class="basis-1/2" v-model="store.userData.investmentAmount" size="lg"
          :color="v$.investmentAmount.$errors.length > 0 ? 'red' : undefined"
          :variant="v$.investmentAmount.$errors.length > 0 ? 'outline' : undefined">
          <template #trailing>
            <span class="text-gray-500 dark:text-gray-400 text-xs">Kč</span>
          </template>
        </UInput>
        <p v-if="v$.investmentAmount.$errors.length > 0" v-for="error in v$.investmentAmount.$errors"
          class="text-red-500">{{
            error.$message }}</p>

        <URange class="basis-1/2" v-model="store.userData.investmentAmount" :min="500" :max="50000" :step="500"
          size="lg" />
      </div>
    </div>
    <div class="flex justify-center pt-16 pb-32">
      <UButton color="custom-blue" size="lg" @click="nextStep()">Začít registraci</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required, helpers, numeric, } from "@vuelidate/validators";

const store = useMainStore();

const investmentRule = {
  investmentAmount: {
    required: helpers.withMessage("Toto pole je povinné", required),
    numeric: helpers.withMessage(
      "Výše pravidelné investice může obsahovat pouze čísla",
      numeric
    ),
  },
};

const v$ = useVuelidate(investmentRule, store.userData);

const nextStep = async () => {
  const val = await v$.value.$validate();

  if (val) {
    store.switchStatus(1, true);
    store.increaseStep();
  }
};
</script>