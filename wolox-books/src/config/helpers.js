import { helpers } from 'vuelidate/lib/validators'

const validatePassword = helpers.regex('validatePassword', /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)

export default validatePassword
