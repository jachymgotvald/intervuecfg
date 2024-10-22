<template>
  <div class="pb-20 pt-10">
    <div>
      <h1 class="text-2xl font-semibold text-center text-custom-black">Úspěch!</h1>
      <VisualStepDescription class="pt-6">Vaše registrace byla úspěšně odeslána a nyní už jen čekáme na Vaše potvrzení,
        které najdete ve své emailové schránce a SMS.</VisualStepDescription>
    </div>
    <div class="pt-10 lg:px-20 px-0">
      <h2 class="text-lg font-semibold text-center text-custom-black">Shrnutí Vašich odpovědí</h2>
      <div class="flex lg:flex-nowrap flex-wrap justify-center gap-6 lg:gap-10 pt-8">
        <div class="w-full">
          <p><strong>Pravidelná investovaná částka:</strong> {{ store.apiResponse?.investmentAmount }} Kč</p>
          <p><strong>Jméno a příjmení:</strong> {{ store.apiResponse?.firstName }} {{ store.apiResponse?.lastName }}</p>
          <p><strong>Email:</strong> {{ store.apiResponse?.email }}</p>
          <p><strong>Telefonní číslo:</strong> {{ store.apiResponse?.phoneNumber }}</p>
        </div>
        <div class="w-full">
          <p><strong>Ulice a č.p.:</strong> {{ store.apiResponse?.streetNameAndNumber }}</p>
          <p><strong>Město:</strong> {{ store.apiResponse?.city }}</p>
          <p><strong>PSČ:</strong> {{ store.apiResponse?.postalCode }}</p>
          <p><strong>Stát:</strong> {{ store.apiResponse?.country }}</p>
        </div>
        <div class="w-full">
          <p><strong>Rodné číslo:</strong> {{ store.apiResponse?.birthNumber }}</p>
          <p v-if="store.apiResponse?.dob"><strong>Datum narození:</strong> {{ format(store.apiResponse?.dob,
            'dd.MM.yyy', { locale: cs }) }}</p>
          <p><strong>Číslo občanského průkazu:</strong> {{ store.apiResponse?.idCardNumber }}</p>
          <p><strong>Číslo bankovního účtu:</strong> {{ store.apiResponse?.bankAccountNumber }}</p>
        </div>
      </div>
    </div>
    <div>
      <VisualStepDescription class="pt-6">V případě, že jste se někde omylem upsali, můžete nás později kontaktovat a
        chybu opravíme.</VisualStepDescription>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { format } from 'date-fns';
import { cs } from 'date-fns/locale';

const store = useMainStore();
</script>