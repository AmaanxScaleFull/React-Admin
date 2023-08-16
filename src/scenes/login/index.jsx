import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const navigate = useNavigate()


    const handleFormSubmit = (values) => {
        // console.log(values);
        handleLogin(values);

    };
    const checkoutSchema = yup.object().shape({
        email: yup.string().email("invalid email").required("required"),
        password: yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),

    });
    const initialValues = {
        email: "admin@gmail.com",
        password: "Admin@123",

    };
    const handleLogin = (values) => {
        if (values.email === "admin@gmail.com" && values.password === "Admin@123") {
            navigate('/admin');
            console.log('Login Successful!');
        }
        else if (values.password !== "Admin@123") {
            console.log('Invalid password');
        }
        else if (values.email !== "admin@gmail.com") {
            console.log('Invalid Email');
        }
        else {
            console.log("Invalid Email and Password!!")
        }
    };


    return (
        <Box m="20px">
            <Header title="LOGIN USER" subtitle="Login into your User Profile" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,

                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(1, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >


                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="password"
                                label="Password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                                error={!!touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                                sx={{ gridColumn: "span 2" }}
                            />


                        </Box>
                        <Box display="flex" justifyContent="center" mt="20px">
                            <Button type="submit" color="secondary" variant="contained" onSubmit={handleLogin}>
                                Login
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};





export default Login;
