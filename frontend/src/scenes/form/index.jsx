import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useState } from "react";
import axios from "axios"
import { baseURL } from "../util/constants";


const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [access, setAccess] = useState('');
  const [date, setDate] = useState('');
  const [zipCode, setZipcode] = useState('');
  const [registrarId, setRegistrarid] = useState('');
  const [cost, setCost] = useState('');

  // const handleFormSubmit = (values) => {
  //   console.log(values);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, age, phone, city, address, access, date, zipCode, registrarId, cost };

    try {
      const response = await axios.post(`${baseURL}/post`, formData);

      if (response.ok) {
        console.log('User data saved');
      } else {
        console.error('Error saving user data');
      }
    } catch (error) {
      console.error('Error saving user data:', error.response);
    }
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />



      <form onSubmit={handleSubmit}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Name"

            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            name="address"
            sx={{ gridColumn: "span 3" }}
          />

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            name="phone"
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            name="age"
            sx={{ gridColumn: "span 0" }}
          />

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="City"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            name="city"
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="ZipCode"
            onChange={(e) => setZipcode(e.target.value)}
            value={zipCode}
            name="zipCode"
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Registrar Id"
            onChange={(e) => setRegistrarid(e.target.value)}
            value={registrarId}
            name="registrarId"
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Cost"
            onChange={(e) => setCost(e.target.value)}
            value={cost}
            name="cost"
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            name="date"
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Access"
            onChange={(e) => setAccess(e.target.value)}
            value={access}
            name="access"
            sx={{ gridColumn: "span 1" }}
          />
        </Box>
        <Box display="flex" justifyContent="center" mt="20px">
          <Button type="submit" color="secondary" variant="contained" startIcon={<DoneOutlinedIcon />}>
            Create New User
          </Button>
        </Box>
      </form>


    </Box>
  );
};

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const checkoutSchema = yup.object().shape({
//   name: yup.string().required("required"),
//   age: yup.string().required("required"),
//   email: yup.string().email("invalid email").required("required"),
//   phone: yup
//     .string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .required("required"),
//   address: yup.string().required("required"),
//   city: yup.string().required("required"),
//   date: yup.string().required("required"),
//   access: yup.string().required("required"),
//   cost: yup.string().required("required"),
//   zipCode: yup.string().required("required"),
//   registrarId: yup.string().required("required"),
// });
// const initialValues = {
//   name: "",
//   email: "",
//   age: "",
//   phone: "",
//   address: "",
//   city: "",
//   zipCode: "",
//   access: "",
//   registrarId: "",
//   date: "",
//   cost: "",
// };

export default Form;
