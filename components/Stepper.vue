<template>
  <div>
    <div>
      <div class="flex pt-16 justify-center lg:gap-0 gap-5">
        <div v-for="(step, index) in steps">
          <div class="flex items-center">
            <hr v-if="index !== 0" class="h-[2px] my-8 bg-gray-500 border-0 w-20 lg:block hidden mx-4">
            <div class="rounded-full w-16 h-16 flex justify-center items-center"
              :class="{ 'bg-custom-blue-400': store.checkStatus(index) === true, 'bg-gray-400': store.checkStatus(index) === false }">
              <Icon class="text-white"
                :name="store.checkStatus(index) ? 'ph:' + step.icon + '-fill' : 'ph:' + step.icon" :size="32" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <StepsFirst v-if="store.currentStep === 0" />
      <StepsSecond v-if="store.currentStep === 1" />
      <StepsThird v-if="store.currentStep === 2" />
      <StepsFourth v-if="store.currentStep === 3" />
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useMainStore();

const steps = [{
  step: 0,
  icon: 'hand-waving',
}, {
  step: 1,
  icon: 'user',
}, {
  step: 2,
  icon: 'file-text',
}, {
  step: 3,
  icon: 'confetti',
}];
</script>