<template>
  <div class="pb-20 pt-10">
    <div>
      <VisualStepDescription>Nedříve od Vás potřebujeme základní infomace</VisualStepDescription>
    </div>
    <div class="pt-10 max-w-[800px] mx-auto">
      <div class="flex flex-wrap lg:flex-nowrap justify-center gap-5 items-center">
        <div class="lg:w-1/2 w-full">
          <UFormGroup label="Křestní jméno">
            <UInput v-model="store.userData.firstName" placeholder="Jan" size="lg" type="text"
              :color="v$.firstName.$errors.length > 0 ? 'red' : undefined"
              :variant="v$.firstName.$errors.length > 0 ? 'outline' : undefined" />
            <p v-if="v$.firstName.$errors.length > 0" v-for="error in v$.firstName.$errors" class="text-red-500">{{
              error.$message }}</p>
          </UFormGroup>
        </div>
        <div class="lg:w-1/2 w-full">
          <UFormGroup label="Příjmení">
            <UInput v-model="store.userData.lastName" placeholder="Novák" size="lg" type="text"
              :color="v$.lastName.$errors.length > 0 ? 'red' : undefined"
              :variant="v$.lastName.$errors.length > 0 ? 'outline' : undefined" />
            <p v-if="v$.lastName.$errors.length > 0" v-for="error in v$.lastName.$errors" class="text-red-500">{{
              error.$message }}</p>
          </UFormGroup>
        </div>
      </div>
      <div class="flex flex-wrap lg:flex-nowrap justify-center gap-5 items-center pt-6">
        <div class="lg:w-1/2 w-full">
          <UFormGroup label="Email">
            <UInput v-model="store.userData.email" placeholder="jan@novak.cz" size="lg" type="email"
              :color="v$.email.$errors.length > 0 ? 'red' : undefined"
              :variant="v$.email.$errors.length > 0 ? 'outline' : undefined" />
            <p v-if="v$.email.$errors.length > 0" v-for="error in v$.email.$errors" class="text-red-500">{{
              error.$message }}</p>
          </UFormGroup>
        </div>
        <div class="lg:w-1/2 w-full">
          <UFormGroup label="Telefonní číslo">
            <UInput v-model="store.userData.phoneNumber" placeholder="777888999" size="lg" type="tel"
              :color="v$.phoneNumber.$errors.length > 0 ? 'red' : undefined"
              :variant="v$.phoneNumber.$errors.length > 0 ? 'outline' : undefined" />
            <p v-if="v$.phoneNumber.$errors.length > 0" v-for="error in v$.phoneNumber.$errors" class="text-red-500">{{
              error.$message }}</p>
          </UFormGroup>
        </div>
      </div>
      <div class="flex flex-wrap lg:flex-nowrap justify-center gap-5 items-center pt-8">
        <div class="lg:w-1/2 w-full">
          <UFormGroup label="Ulice a č.p.">
            <UInput v-model="store.userData.streetNameAndNumber" placeholder="Růžová 123" size="lg" type="text"
              :color="v$.streetNameAndNumber.$errors.length > 0 ? 'red' : undefined"
              :variant="v$.streetNameAndNumber.$errors.length > 0 ? 'outline' : undefined" />
            <p v-if="v$.streetNameAndNumber.$errors.length > 0" v-for="error in v$.streetNameAndNumber.$errors"
              class="text-red-500">{{
                error.$message }}</p>
          </UFormGroup>
        </div>
        <div class="lg:w-1/2 w-full">
          <UFormGroup label="Město">
            <UInput v-model="store.userData.city" placeholder="Praha" size="lg" type="text"
              :color="v$.city.$errors.length > 0 ? 'red' : undefined"
              :variant="v$.city.$errors.length > 0 ? 'outline' : undefined" />
            <p v-if="v$.city.$errors.length > 0" v-for="error in v$.city.$errors" class="text-red-500">{{
              error.$message }}</p>
          </UFormGroup>
        </div>
      </div>
      <div class="flex flex-wrap lg:flex-nowrap justify-center gap-5 items-center pt-6">
        <div class="lg:w-1/2 w-full">
          <UFormGroup label="PSČ">
            <UInput v-model="store.userData.postalCode" placeholder="12345" size="lg" type="text"
              :color="v$.postalCode.$errors.length > 0 ? 'red' : undefined"
              :variant="v$.postalCode.$errors.length > 0 ? 'outline' : undefined" />
            <p v-if="v$.postalCode.$errors.length > 0" v-for="error in v$.postalCode.$errors" class="text-red-500">{{
              error.$message }}</p>
          </UFormGroup>
        </div>
        <div class="lg:w-1/2 w-full">
          <UFormGroup label="Stát">
            <USelectMenu v-model="store.userData.country" :options="store.countries" size="lg"
              :color="v$.country.$errors.length > 0 ? 'red' : undefined"
              :variant="v$.country.$errors.length > 0 ? 'outline' : undefined" />
            <p v-if="v$.country.$errors.length > 0" v-for="error in v$.country.$errors" class="text-red-500">{{
              error.$message }}</p>
          </UFormGroup>
        </div>
      </div>
      <div class="flex justify-between items-center pt-10">
        <UButton color="white" size="lg" @click="previousStep()">Zpět</UButton>
        <UButton size="lg" @click="nextStep()">Pokračovat</UButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';

const store = useMainStore();

const v$ = useVuelidate(baseRules, store.userData);

const previousStep = () => {
  store.switchStatus(1, false);
  store.decreaseStep();
};

const nextStep = async () => {
  const val = await v$.value.$validate();

  if (val) {
    store.switchStatus(2, true);
    store.increaseStep();
  }
};
</script>