import { defineStore } from "pinia";

interface UserData {
  investmentAmount: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  birthNumber: string;
  dob: Date;
  idCardNumber: string;
  streetNameAndNumber: string;
  city: string;
  postalCode: string;
  country: string;
  bankAccountNumber: string;
  gdprConsent: boolean;
}

export interface ApiResponse {
  id: number;
  investmentAmount: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  birthNumber: string;
  dob: Date;
  idCardNumber: string;
  streetNameAndNumber: string;
  city: string;
  postalCode: string;
  country: string;
  bankAccountNumber: string;
  gdprConsent: boolean;
}

export const useMainStore = defineStore("mainStore", () => {
  const currentStep = ref(0);

  const countries = ["Česká republika", "Slovensko"];

  const stepsStatus = ref([true, false, false, false]);

  const apiResponse = ref<ApiResponse | null>(null);

  function setApiResponse(payload: ApiResponse) {
    apiResponse.value = payload;
  }

  function switchStatus(index: number, status: boolean) {
    stepsStatus.value[index] = status;
  }

  function checkStatus(index: number) {
    return stepsStatus.value[index];
  }

  function increaseStep() {
    if (currentStep.value < 4) currentStep.value++;
  }

  function decreaseStep() {
    if (currentStep.value > 0) currentStep.value--;
  }

  const userData = reactive<UserData>({
    investmentAmount: 1000,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthNumber: "",
    dob: new Date("01.01.2000"),
    idCardNumber: "",
    streetNameAndNumber: "",
    city: "",
    postalCode: "",
    country: countries[0],
    bankAccountNumber: "",
    gdprConsent: false,
  });

  return {
    currentStep,
    countries,
    stepsStatus,
    apiResponse,
    setApiResponse,
    switchStatus,
    checkStatus,
    increaseStep,
    decreaseStep,
    userData,
  };
});
