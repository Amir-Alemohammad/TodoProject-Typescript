import * as Yup from "yup";

const todoValidation = Yup.object().shape({
    text: Yup.string().required("متن الزامی میباشد").min(3,"طول متن کمتر از 3 کاراکتر نباید باشد").max(122,"طول متن بیشتر از 122 کاراکتر نمی تواند باشد"),
});
export default todoValidation;