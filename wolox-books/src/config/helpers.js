import { helpers } from 'vuelidate/lib/validators'

export const validatePassword = helpers.regex('validatePassword', /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]$/)
