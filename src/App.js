import {
  Container,
  TextField,
  Button,
  minWidth,
  MenuItem,
  InputAdornment,
  Grid,
  InputLabel,
  helperText,
  FormControl,
  Input,
  form,
  Select,
} from "@mui/material";
import * as Yup from "yup";
import InputMask from "react-input-mask";
// import { Route,Routes } from 'react-router-dom';

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useFormik } from "formik";
// import moment from "moment";
// import Successfull from "./Component/Successfull";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const validationSchema = Yup.object({
  LoanAmount: Yup.number()
    .typeError("*Only Numbers are allowed ")
    .min(2000.0, "*Loan Amount should be between $2000 and $20000")
    .max(20000.0, "*Loan Amount should be between $2000 and $20000")
    .required("*Field shouldn't be empty"),

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

  Email: Yup.string().email().required("*Field shouldn't be empty"),

  HPhone: Yup.string()
    .test("len", "*Field shouldn't be empty", (val = "") => {
      const val_length_without_dashes = val.replace(/-|_(|_)/g, "").length;
      return val_length_without_dashes === 12;
    }),

  MPhone: Yup.string()
    .test("len", "*Field shouldn't be empty", (val = "") => {
      const val_length_without_dashes = val.replace(/-|_(|_)/g, "").length;
      return val_length_without_dashes === 12;
    }),

  SSN: Yup.string()
  .test("len", "*Field shouldn't be empty", (val = "") => {
    const val_length_without_dashes = val.replace(/-|_(|_)/g, "").length;
    return val_length_without_dashes === 9;
  }),

  Address1: Yup.string()
    .matches(/^([a-zA-Z0-9 _-]+)$/, "*Special Character is not allowed")
    .required("*Field shouldn't be empty"),

  ZIP: Yup.string()
    .matches(/^[0-9]*$/, "*Special Character is not allowed")
    .required("*Field shouldn't be empty"),

  Rtype: Yup.string()
    .matches(/^[a-zA-Z ]*$/, "*Special Character is not allowed")
    .required("*Field shouldn't be empty"),

  Aincome: Yup.number()
    .typeError("*Only Numbers are allowed ")
    .min(2.0, "*Annual Amount should be between $2 and $200000")
    .max(200000.0, "*Loan Amount should be between $2000 and $20000")
    .required("*Field shouldn't be empty"),

  Emptype: Yup.string()
    .min(2, "*Min length is 2 character")
    .matches(/^[aA-zZ\s]+$/, "*Special Character not allowed")
    .max(40, "*Type length should be less than 40 words")
    .required("*Field Shouldn't be empty"),

  Empname: Yup.string()
    .min(2, "*Min length is 2 character")
    .matches(/^([a-zA-Z0-9 _-]+)$/, "*Special Character not allowed")
    .required("*Field Shouldn't be empty"),

  EmpPhone: Yup.string()
    .test("len", "*Field shouldn't be empty", (val = "") => {
      const val_length_without_dashes = val.replace(/-|_(|_)/g, "").length;
      return val_length_without_dashes === 12;
    }),

  State: Yup.string().required("*Field shouldn't be empty"),

  City: Yup.string()
    .matches(/^[a-zA-Z ]*$/, "*Special Character not allowed")
    .required("*Field shouldn't be empty"),

  DOB: Yup.string().required("*Field shouldn't be empty"),
});

const App = () => {
  const formik = useFormik({
    initialValues: {
      LoanAmount: "",
      LoanPurpose: "",
      FirstName: "",
      MiddleName: "",
      LastName: "",
      Email: "",
      HPhone: "",
      MPhone: "",
      SSN: "",
      Address1: "",
      Address2: "",
      ZIP: "",
      RDate: "",
      Rtype: "",
      Aincome: "",
      EmpPhone: "",
      Emptype: "",
      Empname: "",
      State: "",
      City: "",
      DOB: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  // console.log(formik);

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <Container>
        {
          <center>
            <h2>How much do you need?</h2>
          </center>
        }
        <br />
        <Grid container direction="column" alignItems="left">
          <Grid item xs={4}>
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
              error={
                formik.touched.LoanAmount && Boolean(formik.errors.LoanAmount)
              }
              helperText={formik.touched.LoanAmount && formik.errors.LoanAmount}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              required
            />
            {/* <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          /> */}
          </Grid>
          <br />
          <Grid item xs={4}>
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
              error={
                formik.touched.LoanPurpose && Boolean(formik.errors.LoanPurpose)
              }
              required
              helperText={
                formik.touched.LoanPurpose && formik.errors.LoanPurpose
              }
            />
          </Grid>
        </Grid>
        <br />
        {
          <center>
            <h2>Tell us about yourself</h2>
          </center>
        }

        <Grid container direction="row" alignItems="center">
          <Grid item xs={4}>
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
              error={
                formik.touched.FirstName && Boolean(formik.errors.FirstName)
              }
              required
              helperText={formik.touched.FirstName && formik.errors.FirstName}
            />
          </Grid>
          <Grid item xs={4}>
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
              error={
                formik.touched.MiddleName && Boolean(formik.errors.MiddleName)
              }
              helperText={formik.touched.MiddleName && formik.errors.MiddleName}
            />
          </Grid>
          <Grid item xs={4}>
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
          </Grid>
        </Grid>
        <br />
        <Grid container direction="row" alignItems="center">
          <Grid item xs={4}>
            {/* <InputLabel>Loan Purpose</InputLabel> */}

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                variant="outlined"
                placeholder=""
                id="DOB"
                name="DOB"
                required
                //  value={formik.values.DOB}
                //  onChange={formik.handleChange}
                //  onBlur={formik.handleBlur}
                // inputProps={{ maxLength: 5 }}
                // value={formik.values.DOB}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // error={formik.touched.DOB && Boolean(formik.errors.DOB)}
                // required
                // helperText={formik.touched.DOB && formik.errors.DOB}
              />
            </LocalizationProvider>

            {/* // label="Date of Birth" 
      // variant="outlined"
      // // placeholder=""
      // id="DOB"
      // name="DOB"
      // // style={{width:100}}
      // // inputProps={{ maxLength: 5 }}
      // value={formik.values.DOB}
      // onChange={formik.handleChange}
      // onBlur={formik.handleBlur}
      // error={formik.touched.DOB && Boolean(formik.errors.DOB)}
      // required
      // helperText={formik.touched.DOB && formik.errors.DOB} */}
          </Grid>

          <Grid item xs={4}>
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
            />
          </Grid>
        </Grid>

        <br />
        <Grid container direction="row" alignItems="center">
          <Grid item xs={4}>
            {/* <InputLabel>Loan Purpose</InputLabel> */}
            <InputMask
              mask="(999)999-9999"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.HPhone}
            >
              {() => (
                <TextField
                  label="Home Phone"
                  variant="outlined"
                  placeholder="e.g., (123) 456 – 7890"
                  id="HPhone"
                  name="HPhone"
                  // style={{width:100}}
                  // inputProps={{ maxLength: 10 }}
                  // value={formik.values.HPhone}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  error={formik.touched.HPhone && Boolean(formik.errors.HPhone)}
                  required
                  helperText={formik.touched.HPhone && formik.errors.HPhone}
                />
              )}
            </InputMask>
          </Grid>
          <Grid item xs={4}>
            {/* <InputLabel>Loan Purpose</InputLabel> */}
            <InputMask
              mask="(999)999-9999"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.MPhone}
            >
              {() => (
                <TextField
                  label="Mobile Phone"
                  variant="outlined"
                  placeholder="e.g., (123) 456 – 7890"
                  id="MPhone"
                  name="MPhone"
                  // style={{width:100}}
                  // inputProps={{ maxLength: 10 }}
                  // value={formik.values.MPhone}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  error={formik.touched.MPhone && Boolean(formik.errors.MPhone)}
                  required
                  helperText={formik.touched.MPhone && formik.errors.MPhone}
                />
              )}
            </InputMask>
          </Grid>
          <Grid item xs={4}>
            <InputMask
              mask="999-99-9999"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.SSN}
            >
              
              {() => (
                <TextField
                  label="SSN"
                  variant="outlined"
                  placeholder="e.g., 123-45-6789"
                  id="SSN"
                  name="SSN"
                  // style={{width:100}}
                  // inputProps={{ maxLength: 9 }}
                  // value={formik.values.SSN}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  error={formik.touched.SSN && Boolean(formik.errors.SSN)}
                  required
                  helperText={formik.touched.SSN && formik.errors.SSN}
                />
              )}
            </InputMask>
          </Grid>
        </Grid>
        <br />
        {
          <center>
            <h2>What is your home address?</h2>
          </center>
        }
        <br />

        <Grid container direction="column" alignItems="left">
          <Grid item xs={4}>
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
          </Grid>
          <br />
          <Grid item xs={4}>
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
              helperText={formik.touched.Address2 && formik.errors.Address2}
            />
          </Grid>
        </Grid>

        <br />
        <br />

        <Grid container direction="row" alignItems="left">
          <Grid item xs={4}>
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
          </Grid>
          <br />
          <Grid item xs={4}>
            <FormControl sx={{ minWidth: 234 }} size="normal">
              <InputLabel>State</InputLabel>
              <Select
                label="State"
                variant="outlined"
                placeholder="USA states"
                id="State"
                name="State"
                //  inputProps={{ maxLength: 200 }}
                value={formik.values.State}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.State && Boolean(formik.errors.State)}
                required
                helperText={formik.touched.State && formik.errors.State}
              >
                <MenuItem value="AL">AL - Alabama</MenuItem>
                <MenuItem value="AK">AK - Alaska</MenuItem>
                <MenuItem value="AS">AS - American Samoa</MenuItem>
                <MenuItem value="AZ">AZ - Arizona</MenuItem>
                <MenuItem value="AR">AR - Arkansas</MenuItem>
                <MenuItem value="CA">CA - California</MenuItem>
                <MenuItem value="CO">CO - Colorado</MenuItem>
                <MenuItem value="CT">CT - Connecticut</MenuItem>
                <MenuItem value="DE">DE - Delaware</MenuItem>
                <MenuItem value="DC">DC - District of Columbia</MenuItem>
                <MenuItem value="FM">
                  FM - Federated States of Micronesia
                </MenuItem>
                <MenuItem value="FL">FL - Florida</MenuItem>
                <MenuItem value="GA">GA - Georgia</MenuItem>
                <MenuItem value="GU">GU - Guam</MenuItem>
                <MenuItem value="HI">HI - Hawaii</MenuItem>
                <MenuItem value="ID">ID - Idaho</MenuItem>
                <MenuItem value="IL">IL - Illinois</MenuItem>
                <MenuItem value="IN">IN - Indiana</MenuItem>
                <MenuItem value="IA">IA - Iowa</MenuItem>
                <MenuItem value="KS">KS - Kansas</MenuItem>
                <MenuItem value="KY">KY - Kentucky</MenuItem>
                <MenuItem value="LA">LA - Louisiana</MenuItem>
                <MenuItem value="ME">ME - Maine</MenuItem>
                <MenuItem value="MH">MH - Marshall Islands</MenuItem>
                <MenuItem value="MD">MD - Maryland</MenuItem>
                <MenuItem value="MA">MA - Massachusetts</MenuItem>
                <MenuItem value="MI">MI - Michigan</MenuItem>
                <MenuItem value="MN">MN - Minnesota</MenuItem>
                <MenuItem value="MS">MS - Mississippi</MenuItem>
                <MenuItem value="MO">MO - Missouri</MenuItem>
                <MenuItem value="MT">MT - Montana</MenuItem>
                <MenuItem value="NE">NE - Nebraska</MenuItem>
                <MenuItem value="NV">NV - Nevada</MenuItem>
                <MenuItem value="NH">NH - New Hampshire</MenuItem>
                <MenuItem value="NJ">NJ - New Jersey</MenuItem>
                <MenuItem value="NM">NM - New Mexico</MenuItem>
                <MenuItem value="NY">NY - New York</MenuItem>
                <MenuItem value="NC">NC - North Carolina</MenuItem>
                <MenuItem value="ND">ND - North Dakota</MenuItem>
                <MenuItem value="MP">MP - Northern Mariana Islands</MenuItem>
                <MenuItem value="OH">OH - Ohio</MenuItem>
                <MenuItem value="OK">OK - Oklahoma</MenuItem>
                <MenuItem value="OR">OR - Oregon</MenuItem>
                <MenuItem value="PW">PW - Palau</MenuItem>
                <MenuItem value="PA">PA - Pennsylvania</MenuItem>
                <MenuItem value="PR">PR - Puerto Rico</MenuItem>
                <MenuItem value="RI">RI - Rhode Island</MenuItem>
                <MenuItem value="SC">SC - South Carolina</MenuItem>
                <MenuItem value="SD">SD - South Dakota</MenuItem>
                <MenuItem value="TN">TN - Tennessee</MenuItem>
                <MenuItem value="TX">TX - Texas</MenuItem>
                <MenuItem value="UT">UT - Utah</MenuItem>
                <MenuItem value="VT">VT - Vermont</MenuItem>
                <MenuItem value="VI">VI - Virgin Islands</MenuItem>
                <MenuItem value="VA">VA - Virginia</MenuItem>
                <MenuItem value="WA">WA - Washington</MenuItem>
                <MenuItem value="WV">WV - West Virginia</MenuItem>
                <MenuItem value="WI">WI - Wisconsin</MenuItem>
                <MenuItem value="WY">WY - Wyoming</MenuItem>
              </Select>
            </FormControl>

            {/* <FormHelperText
        id="LoanPurpose"
        error={formik.touched.LoanPurpose && Boolean(formik.errors.LoanPurpose)}>        
        {formik.errors.LoanPurpose}
         </FormHelperText> */}
          </Grid>

          <Grid item xs={4}>
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
              helperText={formik.touched.ZIP && formik.errors.ZIP}
            />
            {/* <FormHelperText
        id="LoanPurpose"
        error={formik.touched.LoanPurpose && Boolean(formik.errors.LoanPurpose)}>        
        {formik.errors.LoanPurpose}
         </FormHelperText> */}
          </Grid>
        </Grid>
        <br />

        <Grid container direction="row" alignItems="center">
          <Grid item xs={4}>
            {/* <InputLabel>Loan Purpose</InputLabel> */}

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Residence Date"
                variant="outlined"
                // placeholder=""
                id="RDate"
                name="RDate"
                // style={{width:100}}
                // inputProps={{ maxLength: 5 }}
                // value={formik.values.RDate}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // error={formik.touched.RDate && Boolean(formik.errors.RDate)}
                // required
                // helperText={formik.touched.RDate && formik.errors.RDate}
              />
            </LocalizationProvider>
            {/* <DatePicker
        renderInput={(props) => (
          <TextField
            style={{width:"67%"}}
            size="normal"
            margin="normal"
            variant="outlined"
            required
            {...props}
            error={formik.touched.dob && Boolean(formik.errors.dob)}
    helperText={formik.touched.dob && formik.errors.dob}
          />
        )}
        name="dob"
        label="DOB"
        value={formik.values.dob}
        maxDate={moment(new Date())}
        minDate={moment(new Date("08.15.1947"))}
        onChange={(newValue) => {
          formik.setFieldTouched("dob");
          formik.setFieldValue(
            "dob",moment(newValue)
          );
        }}
        onKeyPress={() => formik.setFieldTouched("dob")}
      /> */}
          </Grid>

          <Grid item xs={4}>
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
        <br />

        {
          <center>
            <h2>How much do you make?</h2>
          </center>
        }

        <br />
        <Grid container direction="row" alignItems="center">
          <Grid item xs={4}>
            {/* <InputLabel>Loan Purpose</InputLabel> */}
            <TextField
              label="Annual Income"
              variant="outlined"
              placeholder="Annual Amount should be between $2 and $200000"
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={4}>
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

        <br />
        <Grid container direction="row" alignItems="center">
          <Grid item xs={4}>
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
          </Grid>

          <Grid item xs={4}>
            {/* <InputLabel>Loan Purpose</InputLabel> */}
            <InputMask
              mask="(999)999-9999"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.EmpPhone}
            >
              {() => (
                <TextField
                  label="Employer Phone"
                  variant="outlined"
                  placeholder="phone"
                  id="EmpPhone"
                  name="EmpPhone"
                  // inputProps={{ maxLength: 10 }}
                  // value={formik.values.EmpPhone}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  error={
                    formik.touched.EmpPhone && Boolean(formik.errors.EmpPhone)
                  }
                  required
                  helperText={formik.touched.EmpPhone && formik.errors.EmpPhone}
                />
              )}
            </InputMask>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <Grid item xs={12}>
          <>
            <Button type="submit" variant="contained" size="large">
              SUBMIT
            </Button>
          </>
        </Grid>
        {/* <Grid item xs = {12} >
      <FormControl fullWidth={true} alignItems="center" >
        {/* <ButtonSubmit/> */}
        {/*
         
     </Grid>
     */}
        {/* <>
     <Routes>
          <Route path="Successfull" element={<Successfull/>}/>
        </Routes>
     </> */}
        <br />
        <br />
        <br />
      </Container>
    </form>
  );
};

export default App;
