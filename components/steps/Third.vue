<template>
  <div class="pb-20 pt-10">
    <div>
      <VisualStepDescription>Následně potřebujeme pár informací abychom věděli, že to jste opravdu Vy
      </VisualStepDescription>
    </div>
    <div class="pt-10 max-w-[800px] mx-auto">
      <div class="flex flex-wrap lg:flex-nowrap justify-center gap-5 items-center">
        <div class="lg:w-1/2 w-full">
          <UFormGroup label="Rodné číslo včetně lomítka">
            <UInput v-model="store.userData.birthNumber" placeholder="1234567/1234" size="lg" type="text"
              :color="v$.birthNumber.$errors.length > 0 ? 'red' : undefined"
              :variant="v$.birthNumber.$errors.length > 0 ? 'outline' : undefined" />
            <p v-if="v$.birthNumber.$errors.length > 0" v-for="error in v$.birthNumber.$errors" class="text-red-500">{{
              error.$message }}</p>
          </UFormGroup>
        </div>
        <div class="lg:w-1/2 w-full">
          <UFormGroup label="Datum narození">
            <UPopover :popper="{ placement: 'bottom-start' }">
              <UButton icon="i-ph-calendar-fill" size="lg" block
                :label="format(store.userData.dob, 'd MMM, yyy', { locale: cs })" />
              <template #panel="{ close }">
                <FormDatePicker v-model="store.userData.dob" is-required @close="close" />
              </template>
            </UPopover>
            <p v-if="v$.dob.$errors.length > 0" v-for="error in v$.dob.$errors" class="text-red-500">{{
              error.$message }}</p>
          </UFormGroup>
        </div>
      </div>
      <div class="flex flex-wrap lg:flex-nowrap justify-center gap-5 items-center pt-6">
        <div class="lg:w-1/2 w-full">
          <UFormGroup label="Číslo občanského průkazu">
            <UInput v-model="store.userData.idCardNumber" placeholder="123456789" size="lg" type="text"
              :color="v$.idCardNumber.$errors.length > 0 ? 'red' : undefined"
              :variant="v$.idCardNumber.$errors.length > 0 ? 'outline' : undefined" />
            <p v-if="v$.idCardNumber.$errors.length > 0" v-for="error in v$.idCardNumber.$errors" class="text-red-500">
              {{ error.$message }}</p>
          </UFormGroup>
        </div>
        <div class="lg:w-1/2 w-full">
          <UTooltip class="w-full" text="Sem Vám případně zašleme výplaty výnosů z investic">
            <UFormGroup class="w-full" label="Číslo bankovního účtu (příp. s předčíslím)">
              <UInput v-model="store.userData.bankAccountNumber" placeholder="123456789/1234" size="lg" type="text"
                :color="v$.bankAccountNumber.$errors.length > 0 ? 'red' : undefined"
                :variant="v$.bankAccountNumber.$errors.length > 0 ? 'outline' : undefined" />
              <p v-if="v$.bankAccountNumber.$errors.length > 0" v-for="error in v$.bankAccountNumber.$errors"
                class="text-red-500">{{
                  error.$message }}</p>
            </UFormGroup>
          </UTooltip>
        </div>
      </div>
      <div class="w-full pt-6">
        <UCheckbox v-model="store.userData.gdprConsent">
          <template #label>
            <p>Souhlasím se <a class="text-custom-blue-400" href="https://example.com/gdpr" target="_blank">zpracováním
                osobních údajů</a> (GDPR)</p>
          </template>
        </UCheckbox>
        <p v-if="v$.gdprConsent.$errors.length > 0" v-for="error in v$.gdprConsent.$errors" class="text-red-500">{{
          error.$message }}</p>
      </div>
      <div class="flex justify-between items-center pt-10">
        <UButton color="white" size="lg" @click="previousStep()">Zpět</UButton>
        <UButton size="lg" @click="nextStep()">Závazně odeslat registraci</UButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { format } from 'date-fns';
import { cs } from 'date-fns/locale';
import type { ApiResponse } from '~/stores/main';

const store = useMainStore();
const config = useRuntimeConfig();

const v$ = useVuelidate(finalRules, store.userData);

const previousStep = () => {
  store.switchStatus(2, false);
  store.decreaseStep();
};

const nextStep = async () => {
  const val = await v$.value.$validate();

  if (val) {
    try {
      const data = await $fetch<ApiResponse>(config.public.apiBase + '/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          investmentAmount: store.userData.investmentAmount,
          firstName: store.userData.firstName,
          lastName: store.userData.lastName,
          email: store.userData.email,
          phoneNumber: store.userData.phoneNumber,
          streetNameAndNumber: store.userData.streetNameAndNumber,
          city: store.userData.city,
          postalCode: store.userData.postalCode,
          country: store.userData.country,
          birthNumber: store.userData.birthNumber,
          dob: store.userData.dob,
          idCardNumber: store.userData.idCardNumber,
          bankAccountNumber: store.userData.bankAccountNumber,
          gdprConsent: store.userData.gdprConsent
        }
      });

      store.apiResponse = data;
      store.switchStatus(3, true);
      store.increaseStep();
    } catch (error) {

    }
  }
};
</script>