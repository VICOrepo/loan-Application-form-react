// import React from "react";
// import { render } from "react-dom";
// import { Formik, Field, useFormik } from "formik";
// import * as Yup from "yup";
// import MaskedInput from "react-text-mask";
// import InputMask from "react-input-mask";
// import { TextField, Container } from "@mui/material";

// const validationSchema =Yup.object().shape({
//   ssn: Yup
//     .string()
//     .test("len", "Invalid SSN", (val = "") => {
//       const val_length_without_dashes = val.replace(/-|_(|_)/g, "").length;
//       return val_length_without_dashes === 9;
//     })
// });
// const SSN = () => {
//   const formik = useFormik({
//     initialValues: {
//       ssn:"",
//     },
//     validationSchema: validationSchema,
//   });
//         return (
//           <Container>
//           <form>
//               <InputMask
//                 mask="999-99-9999"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.ssn}
//               >
//                 {() => (
//                   <TextField
//                     type="text"
//                     label="SSN"
//                     name="ssn"
//                     margin="normal"
//                     variant="outlined"
//                     helperText={formik.touched.ssn ? formik.errors.ssn : ""}
//                     error={formik.touched.ssn && Boolean(formik.errors.ssn)}
//                   />
//                 )}
//               </InputMask>
//             </form>
//             </Container>
//         );
// }
// export default SSN;