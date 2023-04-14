import {Container,TextField,InputAdornment,Paper,Grid,InputLabel,OutlinedInput,FormControl,Input,FormHelperText,} from "@mui/material";
import * as Yup from "yup";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useFormik } from "formik"; 


const validationSchema = Yup.object({
  LoanAmount: Yup.number()
    .typeError("*Only Numbers are allowed ")
    .min(2000.0, "*Loan Amount should be between $2000 and $20000")
    .max(20000.0, "*Loan Amount should be between $2000 and $20000")
    .required("*Field Should'nt be empty"),

  LoanPurpose: Yup.string()
    .min(5, "*Min length is 5 character")
    .matches(/^[aA-zZ\s]+$/, "*Special Character not allowed")
    .max(100, "*Purpose length should be less than 100 words")
    .required("*Field Shouldn't be empty"),

  FirstName: Yup.string()
    .min(2, "*Min length is 2 character")
    .matches(/^[aA-zZ\s]+$/, "*Special Character not allowed")
    .max(40, "*Name length should be less than 40 words")
    .required("*Field Shouldn't be empty"),

  MiddleName: Yup.string()
    .min(2, "*Min length is 2 character")
    .matches(/^[aA-zZ\s]+$/, "*Special Character not allowed")
    .max(40, "*Name length should be less than 40 words")
    .required("*Field Shouldn't be empty"),
  
  LastName: Yup.string()
    .min(2, "*Min length is 2 character")
    .matches(/^[aA-zZ\s]+$/, "*Special Character not allowed")
    .max(40, "*Name length should be less than 40 words")
    .required("*Field Shouldn't be empty"),

  Email: Yup.string().email()
    .required("*Field shouldn't be empty"),
    
  HPhone: Yup.string()
      .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
      .required("*Field shouldn't be empty"),

  MPhone:Yup.string()
  .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, '*Phone number is not valid')
  .required("*Field shouldn't be empty"),
  
  SSN:Yup.string()
  .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, '*SSN number is not valid')
  .required("*Field shouldn't be empty"),

  Address1:Yup.string()
  .matches(/^([a-zA-Z0-9 _-]+)$/, '*Special Character is not allowed')
  .required("*Field shouldn't be empty"),

  ZIP:Yup.string()
  .matches(/^[0-9]*$/, '*Special Character is not allowed')
  .required("*Field shouldn't be empty"),

  Rtype:Yup.string()
  .matches(/^[a-zA-Z ]*$/, '*Special Character is not allowed')
  .required("*Field shouldn't be empty"),

  Aincome: Yup.number()
    .typeError("*Only Numbers are allowed ")
    .min(2.0, "*Annual Amount should be between $2 and $200000")
    .max(200000.0, "*Loan Amount should be between $2000 and $20000")
    .required("*Field Should'nt be empty"),

    Emptype: Yup.string()
    .min(2, "*Min length is 2 character")
    .matches(/^[aA-zZ\s]+$/, "*Special Character not allowed")
    .max(40, "*Type length should be less than 40 words")
    .required("*Field Shouldn't be empty"),

    Empname: Yup.string()
    .min(2, "*Min length is 2 character")
    .matches(/^([a-zA-Z0-9 _-]+)$/, "*Special Character not allowed")
    .required("*Field Shouldn't be empty"),

    EmpPhone:Yup.string()
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
    .required("*Field shouldn't be empty"),
});


const App = () => {
  const formik = useFormik({
    initialValues: {
      LoanAmount: "",
      LoanPurpose:"",
      FirstName:"",
      MiddleName:"",
      LastName:"",
      Email:"",
      HPhone:"",
      MPhone:"",
      SSN:"",
      Address1:"",
      Address2:"",
      ZIP:"",
      RDate:"",
      Rtype:"",
      Aincome:"",
      EmpPhone:"",
      Emptype:"",
      Empname:"",
    },
    validationSchema: validationSchema,
  });

  return (

    <Container>
    
      {<center><h2>How much do you need?</h2></center>}
       <br/>
 <Grid container direction="column" alignItems="left">
        <Grid item xs = {4}>
      <FormControl fullWidth={true} >
      {/* <InputLabel>Loan Amount</InputLabel> */}
      <TextField 
        label="Loan Amount"
        variant="outlined"
        id="LoanAmount"
        placeholder="Loan Amount should be between $2000 and $20000"
        name="LoanAmount"
        inputProps={{ maxLength: 7 }}
        value={formik.values.LoanAmount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.LoanAmount && Boolean(formik.errors.LoanAmount)}
        helperText={formik.touched.LoanAmount && formik.errors.LoanAmount}
        // startAdornment={<InputAdornment position="start">$</InputAdornment>}
        // size="small"
        required
      />

      {/* <FormHelperText
        id="LoanAmount"
        error={formik.touched.LoanAmount && Boolean(formik.errors.LoanAmount)}
      >
        {formik.touched.LoanAmount && Boolean(formik.errors.LoanAmount)}
      </FormHelperText> */}
    </FormControl>
        </Grid>
        <br/>
   <Grid item xs = {4}>
        <FormControl fullWidth={true}>
      {/* <InputLabel>Loan Purpose</InputLabel> */}
     <TextField
        label="Loan Purpose" 
        variant="outlined"
        placeholder="Purpose"
        id="LoanPurpose"
        name="LoanPurpose"
        inputProps={{ maxLength: 200 }}
        value={formik.values.LoanPurpose}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.LoanPurpose && Boolean(formik.errors.LoanPurpose)}
        required
        helperText={formik.touched.LoanPurpose && formik.errors.LoanPurpose}/>
        {/* <FormHelperText
        id="LoanPurpose"
        error={formik.touched.LoanPurpose && Boolean(formik.errors.LoanPurpose)}>        
        {formik.errors.LoanPurpose}
         </FormHelperText> */}
         </FormControl>       
      </Grid>
  </Grid>
   <br/>
   {<center><h2>Tell us about yourself</h2></center>}
   
   <Grid container direction="row" alignItems="center">

    <Grid item xs = {4}>
    <FormControl >
      {/* <InputLabel>Loan Purpose</InputLabel> */}
     <TextField
        label="First Name" 
        variant="outlined"
        placeholder="e.g, Kito"
        id="FirstName"
        name="FirstName"
        // style={{width:100}}
        inputProps={{ maxLength: 5 }}
        value={formik.values.FirstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.FirstName && Boolean(formik.errors.FirstName)}
        required
        helperText={formik.touched.FirstName && formik.errors.FirstName}
       
      />
        {/* <FormHelperText
        id="LoanPurpose"
        error={formik.touched.LoanPurpose && Boolean(formik.errors.LoanPurpose)}>        
        {formik.errors.LoanPurpose}
         </FormHelperText> */}
         </FormControl>       
    </Grid>
    <Grid item xs = {4}>
    <FormControl >
      {/* <InputLabel>Loan Purpose</InputLabel> */}
     <TextField
        label="Middle Name" 
        variant="outlined"
        placeholder="e.g, Jame"
        id="MiddleName"
        name="MiddleName"
        // style={{width:100}}
        inputProps={{ maxLength: 5 }}
        value={formik.values.MiddleName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.MiddleName && Boolean(formik.errors.MiddleName)}
        
        helperText={formik.touched.MiddleName && formik.errors.MiddleName}
       
      />
      </FormControl>     
    </Grid>
    <Grid item xs = {4}>
    <FormControl >
      {/* <InputLabel>Loan Purpose</InputLabel> */}
     <TextField
        label="Last Name" 
        variant="outlined"
        placeholder="e.g, Malkova"
        id="LastName"
        name="LastName"
        // style={{width:100}}
        inputProps={{ maxLength: 5 }}
        value={formik.values.LastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.LastName && Boolean(formik.errors.LastName)}
        required
        helperText={formik.touched.LastName && formik.errors.LastName}
       
      />
      </FormControl>     
      </Grid>
    </Grid>
<br/>
  <Grid container direction="row" alignItems="center">
    
    <Grid item xs = {4}>
     <FormControl >
      {/* <InputLabel>Loan Purpose</InputLabel> */}
     <TextField
        label="Last Name" 
        variant="outlined"
        placeholder="e.g, Malkova"
        id="LastName"
        name="LastName"
        // style={{width:100}}
        inputProps={{ maxLength: 5 }}
        value={formik.values.LastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.LastName && Boolean(formik.errors.LastName)}
        required
        helperText={formik.touched.LastName && formik.errors.LastName}
       
      />
      </FormControl>    
      </Grid>

      <Grid item xs = {4}>
      {/* <InputLabel>Loan Purpose</InputLabel> */}
     <TextField
        label="Email" 
        variant="outlined"
        placeholder="e.g, minukori@gmail.com"
        id="Email"
        name="Email"
        inputProps={{ maxLength: 30 }}
        value={formik.values.Email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.Email && Boolean(formik.errors.Email)}
        required
        helperText={formik.touched.Email && formik.errors.Email}
       fullWidth
      />
     </Grid>
  </Grid>
         
      <br/>
    <Grid container direction="row" alignItems="center">

      <Grid item xs = {4}>
      <FormControl >
      {/* <InputLabel>Loan Purpose</InputLabel> */}
     <TextField
        label="Home Phone" 
        variant="outlined"
        placeholder="e.g., (123) 456 – 7890"
        id="HPhone"
        name="HPhone"
        // style={{width:100}}
        inputProps={{ maxLength: 10 }}
        value={formik.values.HPhone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.HPhone && Boolean(formik.errors.HPhone)}
        required
        helperText={formik.touched.HPhone && formik.errors.HPhone}
       
      />
      </FormControl> 
            </Grid>
     <Grid item xs = {4}>
     <FormControl >
      {/* <InputLabel>Loan Purpose</InputLabel> */}
     <TextField
        label="Mobile Phone" 
        variant="outlined"
        placeholder="e.g., (123) 456 – 7890"
        id="MPhone"
        name="MPhone"
        // style={{width:100}}
        inputProps={{ maxLength: 10 }}
        value={formik.values.MPhone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.MPhone && Boolean(formik.errors.MPhone)}
        required
        helperText={formik.touched.MPhone && formik.errors.MPhone}
       
      />
      </FormControl> 
      </Grid>
      <Grid item xs = {4}>
      <FormControl >
      {/* <InputLabel>Loan Purpose</InputLabel> */}
     <TextField
        label="SSN" 
        variant="outlined"
        placeholder="e.g., 123-45-6789"
        id="SSN"
        name="SSN"
        // style={{width:100}}
        inputProps={{ maxLength: 9 }}
        value={formik.values.SSN}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.SSN && Boolean(formik.errors.SSN)}
        required
        helperText={formik.touched.SSN && formik.errors.SSN}
       
      />
      </FormControl>
      </Grid>
    </Grid>
<br/>
    {<center><h2>What is your home address?</h2></center>}
    <br/>

  <Grid container direction="column" alignItems="left">

    <Grid item xs = {4}>
      <FormControl fullWidth={true} >
      
      <TextField 
        label="Street Address 1"
        variant="outlined"
        id="Address1"
        placeholder="Address"
        name="Address1"
        inputProps={{ maxLength: 7 }}
        value={formik.values.Address1}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.Address1 && Boolean(formik.errors.Address1)}
        helperText={formik.touched.Address1 && formik.errors.Address1}
        
        required
      />

    
     </FormControl>
        </Grid>
        <br/>
     <Grid item xs = {4}>
        <FormControl fullWidth={true}>
      
     <TextField
        label="Street Address 2" 
        variant="outlined"
        placeholder="Address"
        id="Address2"
        name="Address2"
        inputProps={{ maxLength: 200 }}
        value={formik.values.Address2}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.Address2 && Boolean(formik.errors.Address2)}
        
        helperText={formik.touched.Address2 && formik.errors.Address2}/>
        
         </FormControl>       
      </Grid>
    </Grid>

    <br/>
    <br/>

    <Grid container direction="row" alignItems="left">

    <Grid item xs = {4}>
      <FormControl  >
     
      <TextField 
        label="City"
        variant="outlined"
        id="City"
        placeholder="e.g, New Jersey"
        name="City"
        inputProps={{ maxLength: 20 }}
        value={formik.values.City}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.City && Boolean(formik.errors.City)}
        helperText={formik.touched.City && formik.errors.City}
       
        required
      />

     </FormControl>
        </Grid>
        <br/>
     <Grid item xs = {4}>
        <FormControl >
      {/* <InputLabel>Loan Purpose</InputLabel> */}
     <TextField
        label="State" 
        variant="outlined"
        placeholder="USA states"
        id="State"
        name="State"
        inputProps={{ maxLength: 200 }}
        value={formik.values.State}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.State && Boolean(formik.errors.State)}
        required
        helperText={formik.touched.State && formik.errors.State}/>
        {/* <FormHelperText
        id="LoanPurpose"
        error={formik.touched.LoanPurpose && Boolean(formik.errors.LoanPurpose)}>        
        {formik.errors.LoanPurpose}
         </FormHelperText> */}
         </FormControl>       
      </Grid>

      <Grid item xs = {4}>
        <FormControl >
      {/* <InputLabel>Loan Purpose</InputLabel> */}
     <TextField
        label="ZIP" 
        variant="outlined"
        placeholder="Zip Code"
        id="ZIP"
        name="ZIP"
        inputProps={{ maxLength: 5 }}
        value={formik.values.ZIP}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.ZIP && Boolean(formik.errors.ZIP)}
        required
        helperText={formik.touched.ZIP && formik.errors.ZIP}/>
        {/* <FormHelperText
        id="LoanPurpose"
        error={formik.touched.LoanPurpose && Boolean(formik.errors.LoanPurpose)}>        
        {formik.errors.LoanPurpose}
         </FormHelperText> */}
         </FormControl>       
      </Grid>
    </Grid>
    <br/>

    <Grid container direction="row" alignItems="center">
    
    <Grid item xs = {4}>
     <FormControl >
      {/* <InputLabel>Loan Purpose</InputLabel> */}
     <TextField
        label="Residence Date" 
        variant="outlined"
        placeholder="Date"
        id="RDate"
        name="RDate"
        // style={{width:100}}
        inputProps={{ maxLength: 5 }}
        value={formik.values.RDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.RDate && Boolean(formik.errors.RDate)}
        required
        helperText={formik.touched.RDate && formik.errors.RDate}
       
      />
      </FormControl>    
      </Grid>

      <Grid item xs = {4}>
      {/* <InputLabel>Loan Purpose</InputLabel> */}
     <TextField
        label="Residence Type" 
        variant="outlined"
        placeholder="Type"
        id="Rtype"
        name="Rtype"
        inputProps={{ maxLength: 30 }}
        value={formik.values.Rtype}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.Rtype && Boolean(formik.errors.Rtype)}
        required
        helperText={formik.touched.Rtype && formik.errors.Rtype}
      />
     </Grid>
  </Grid>
  <br/>

  {<center><h2>How much do you make?</h2></center>}

  <br/>
  <Grid container direction="row" alignItems="center">
    
    <Grid item xs = {4}>
     <FormControl >
      {/* <InputLabel>Loan Purpose</InputLabel> */}
     <TextField
        label="Annual Income" 
        variant="outlined"
        placeholder="Income in $"
        id="Aincome"
        name="Aincome"
        // style={{width:100}}
        inputProps={{ maxLength: 6 }}
        value={formik.values.Aincome}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.Aincome && Boolean(formik.errors.Aincome)}
        required
        helperText={formik.touched.Aincome && formik.errors.Aincome}
       
      />
      </FormControl>    
      </Grid>

      <Grid item xs = {4}>
      {/* <InputLabel>Loan Purpose</InputLabel> */}
     <TextField
        label="Employment Type" 
        variant="outlined"
        placeholder="Full time or parttime"
        id="Emptype"
        name="Emptype"
        inputProps={{ maxLength: 30 }}
        value={formik.values.Emptype}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.Emptype && Boolean(formik.errors.Emptype)}
        required
        helperText={formik.touched.Emptype && formik.errors.Emptype}
      />
     </Grid>
  </Grid>

  <br/>
  <Grid container direction="row" alignItems="center">
    
    <Grid item xs = {4}>
     <FormControl >
      {/* <InputLabel>Loan Purpose</InputLabel> */}
     <TextField
        label="Employer Name" 
        variant="outlined"
        placeholder="Simga infosolution"
        id="Empname"
        name="Empname"
        // style={{width:100}}
        inputProps={{ maxLength: 20 }}
        value={formik.values.Empname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.Empname && Boolean(formik.errors.Empname)}
        required
        helperText={formik.touched.Empname && formik.errors.Empname}
       
      />
      </FormControl>    
      </Grid>

      <Grid item xs = {4}>
      {/* <InputLabel>Loan Purpose</InputLabel> */}
     <TextField
        label="Employer Phone" 
        variant="outlined"
        placeholder="phone"
        id="EmpPhone"
        name="EmpPhone"
        inputProps={{ maxLength: 10 }}
        value={formik.values.EmpPhone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.EmpPhone && Boolean(formik.errors.EmpPhone)}
        required
        helperText={formik.touched.EmpPhone && formik.errors.EmpPhone}
      />
     </Grid>
  </Grid>
  <br/>
  <br/>
  <br/>
 
  </Container>
    
  );
};

export default App;