// import React from "react";
// import { render } from "react-dom";
// import { Formik, Field, useFormik } from "formik";
// import * as Yup from "yup";
// import MaskedInput from "react-text-mask";
// import InputMask from "react-input-mask";
// import { TextField, Container } from "@mui/material";

// const validationSchema =Yup.object().shape({
//   mphone: Yup
//     .string()
//     .test("len", "Invalid Phone Number", (val = "") => {
//       const val_length_without_dashes = val.replace(/-|_(|_)/g, "").length;
//       return val_length_without_dashes === 12;
//     })
// });
// const MobilePhone = () => {
//   const formik = useFormik({
//     initialValues: {
//       mphone:"",
//     },
//     validationSchema: validationSchema,
//   });
//         return (
//           <Container>
//           <form>
//               <InputMask
//                 mask="(999)999-9999"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.mphone}
//               >
//                 {() => (
//                   <TextField
//                     type="text"
//                     label="Mobile Phone"
//                     name="mphone"
//                     margin="normal"
//                     variant="outlined"
//                     helperText={formik.touched.mphone ? formik.errors.mphone : ""}
//                     error={formik.touched.mphone && Boolean(formik.errors.mphone)}
//                   />
//                 )}
//               </InputMask>
//             </form>
//             </Container>
//         );
// }
// export default MobilePhone;
