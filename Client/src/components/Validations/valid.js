import * as yup from 'yup';
export const validationSchema = yup.object().shape({
  no_of_day_present: yup
    .number()
    .required("Please Enter this field")
    .min(0, "You must be at least 0 day")
    .max(100, "You must be at most 100 days"),

  no_of_working_day: yup
    .number()
    .required("Please Enter this field")
    .min(0, "You must be at least 0 day")
    .max(100, "You must be at most 100 days"),
});


export const validationPart1Schema = yup.object.shape({
  FA:yup.number()
  .required("Please Enter This field")
  .min(0,"Marks should be Greater Than zero")
  .max(40, "You must be at most 40"),

  Oral:yup.number()
  .required("Please Enter This field")
  .min(0,"Marks should be Greater Than zero")
  .max(10, "You must be at most 10"),

  SA:yup.number()
  .required("Please Enter This field")
  .min(0,"Marks should be Greater Than zero")
  .max(40, "You must be at most 40"),
})