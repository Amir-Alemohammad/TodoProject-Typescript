import * as Yup from "yup";
const userValidation = Yup.object().shape({
     fullname: Yup.string().required("نام و نام خانوادگی الزامی می باشد").min(3,"نام و نام خانوادگی نمیتواند کمتر از 3 کاراکتر باشد"),
     email: Yup.string().email().required("ایمیل الزامی می باشد"),
     password: Yup.string().required("کلمه عبور الزامی می باشد").min(4,"کلمه عبور نمیتواند کمتر از 4 کاراکتر باشد")
});
export default userValidation;