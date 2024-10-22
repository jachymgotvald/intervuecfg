import {
  required,
  email,
  helpers,
  minLength,
  numeric,
  alphaNum,
} from "@vuelidate/validators";

const checkAddress = helpers.regex(/^[\p{L}\p{N} ]+$/u);
const checkBirthNumber = helpers.regex(/^\d{6,7}\/\d{3,4}$/);
const checkBankAccountNumber = helpers.regex(/^(\d{1,7}-)?\d{1,10}\/\d{4,8}$/);
const checkIdCardNumber = helpers.regex(/^\d{9}$/);
const checkboxValidation = (value: boolean) => value === true;

export const baseRules = {
  firstName: {
    required: helpers.withMessage("Toto pole je povinné", required),
  },
  lastName: {
    required: helpers.withMessage("Toto pole je povinné", required),
  },
  email: {
    required: helpers.withMessage("Toto pole je povinné", required),
    email: helpers.withMessage("Email musí být validní", email),
  },
  phoneNumber: {
    required: helpers.withMessage("Toto pole je povinné", required),
    minLength: helpers.withMessage(
      "Telefonní číslo musí být validní",
      minLength(9)
    ),
    numeric: helpers.withMessage(
      "Telefonní číslo může obsahovat pouze čísla",
      numeric
    ),
  },
  streetNameAndNumber: {
    required: helpers.withMessage("Toto pole je povinné", required),
    checkAddress: helpers.withMessage("Pole adresa není validní", checkAddress),
  },
  city: {
    required: helpers.withMessage("Toto pole je povinné", required),
    alphaNum: helpers.withMessage("Pole město není validní", alphaNum),
  },
  postalCode: {
    required: helpers.withMessage("Toto pole je povinné", required),
    numeric: helpers.withMessage("Pole PSČ není validní", numeric),
  },
  country: {
    required: helpers.withMessage("Toto pole je povinné", required),
  },
};

export const finalRules = {
  birthNumber: {
    required: helpers.withMessage("Toto pole je povinné", required),
    checkBirthNumber: helpers.withMessage(
      "Pole rodné číslo není validní",
      checkBirthNumber
    ),
  },
  dob: {
    required: helpers.withMessage("Toto pole je povinné", required),
  },
  idCardNumber: {
    required: helpers.withMessage("Toto pole je povinné", required),
    checkIdCardNumber: helpers.withMessage(
      "Pole č. občanského průkazu není validní",
      checkIdCardNumber
    ),
  },
  bankAccountNumber: {
    required: helpers.withMessage("Toto pole je povinné", required),
    checkBankAccountNumber: helpers.withMessage(
      "Pole č. bankovního účtu není validní",
      checkBankAccountNumber
    ),
  },
  gdprConsent: {
    checkboxValidation: helpers.withMessage(
      "Toto pole je povinné",
      checkboxValidation
    ),
  },
};
