import { helpers } from 'vuelidate/lib/validators'

const validatePassword = helpers.regex('validatePassword', /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]$/)

export default validatePassword
