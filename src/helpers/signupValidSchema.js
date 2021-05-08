
import { object, string } from "yup";

const loginFormSchema = object().shape({
    email: string().required().email(),
    loginemail: string().required().email(),
    password: string().required(),
    loginpassword: string().required(),
});
export default loginFormSchema