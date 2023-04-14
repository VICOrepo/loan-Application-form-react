// import {Container,TextField,InputAdornment,InputLabel,OutlinedInput,FormControl,Input,FormHelperText,} from "@mui/material";
// import * as Yup from "yup";
// import { useFormik } from "formik";

// const validationSchema = Yup.object({
//     LoanPurpose: Yup.string()
//       .min(5, "*Min length is 5 character")
//       .matches(/^[aA-zZ\s]+$/, "*Special Character not allowed")
//       .max(100, "*Purpose length should be less than 100 words")
//       .required("*Field Should'nt be empty"),
//   });

//   const LoanPurpose = () => {
//     const formik = useFormik({
//       initialValues: {
//         LoanPurpose:""
//       },
//       validationSchema: validationSchema,
      
//     });

//     return(
//         <FormControl fullWidth={true}>
//   {/* <InputLabel>Loan Purpose</InputLabel> */}
//       <TextField
//         label="Loan Purpose" 
//         variant="outlined"
//         placeholder="Purpose"
//         id="LoanPurpose"
//         name="LoanPurpose"
//         inputProps={{ maxLength: 200 }}
//         value={formik.values.LoanPurpose}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         error={formik.touched.LoanPurpose && Boolean(formik.errors.LoanPurpose)}
//         // helperText={formik.touched.LoanPurpose && formik.errors.LoanPurpose}
       
//       />
//       <FormHelperText
//         id="LoanPurpose"
//         error={formik.touched.LoanPurpose && Boolean(formik.errors.LoanPurpose)}
//       >
//         {formik.errors.LoanPurpose}
//       </FormHelperText>
//         </FormControl>
//     );
//   };


// export default LoanPurpose;