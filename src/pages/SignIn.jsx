import React from "react";
import { Link } from "react-router-dom";
import { SIGNUP_ROUTE } from "../constants/AppRoutes";

export const SignIn = () => {
  return (
    <>
      <section className="signIn">
        <div className="container mt-5">
          <div className="signIn-content">
            <div className="signIn-form">
              <h1 className="form-title">Sign In</h1>
              <form className="register-form" id="register-form">

                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Email"/>
                </div>
                
                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password" placeholder="Your Password" id="password" autoComplete="off"/>
                </div>
                
                <div className="form-group form-button">
                  <input type="submit" name="signin" id="signin" className="form-submit" value="Sign In"/>
                </div>
              </form>

              <div className="already-registered">
                <Link to={SIGNUP_ROUTE}> Create Account </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


















// import { React, Toast, ToastContainer, useState } from "react";
// import { Icon } from "react-icons-kit";
// import { eyeOff } from "react-icons-kit/feather/eyeOff";
// import { eye } from "react-icons-kit/feather/eye";
// import "../assets/css/SignIn.css";
// import { Link } from "react-router-dom";
// import { SIGNIN_ROUTE } from "../constants/AppRoutes";

// export const SignIn = () => {
//   const [signInData, setSignInData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     cpassword: "",
//   });

//   const [showToast, setShowToast] = useState(false);
//   const [errors, setErrors] = useState({});
//   //const [phoneError, setPhoneError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   // const [allEntry, setAllEntry] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSignInData({
//       ...signInData,
//       [name]: value,
//     });
//   };

//   const handleCloseToast = () => {
//     setShowToast(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = {};

//     if (!signInData.name.trim()) {
//       validationErrors.name = "Username is required";
//     }

//     if (!signInData.email.trim()) {
//       validationErrors.email = "Email is required";
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(signInData.email)
//     ) {
//       validationErrors.email = "Email is not valid";
//     }

//     if (!signInData.password.trim()) {
//       validationErrors.password = "Password is required";
//     } else if (signInData.password.length < 6) {
//       validationErrors.password = "Password should be at least 6 characters";
//     }

//     if (signInData.confirmPassword !== signInData.password) {
//       console.log(signInData.confirmPassword, signInData.password);
//       validationErrors.confirmPassword = "Passwords do not match";
//     }

//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       <ToastContainer position="top-middle">
//         <Toast
//           bg="danger"
//           onClose={handleCloseToast}
//           show={showToast}
//           delay={3000}
//           autohide
//         >
//           <Toast.Header>
//             <strong className="me-auto">Error</strong>
//           </Toast.Header>
//           <Toast.Body className="text-white">
//             Form submitted successfully
//           </Toast.Body>
//         </Toast>
//       </ToastContainer>;
//     } else {
//       <ToastContainer position="top-middle">
//         <Toast
//           bg="danger"
//           onClose={handleCloseToast}
//           show={showToast}
//           delay={3000}
//           autohide
//         >
//           <Toast.Header>
//             <strong className="me-auto">Error</strong>
//           </Toast.Header>
//           <Toast.Body className="text-white">
//             Please corrrect the validation errors before submitting
//           </Toast.Body>
//         </Toast>
//       </ToastContainer>;
//     }
//   };

//   const handleTogglePassword = () => {
//     setShowPassword((prev) => !prev);
//   };
//   const handleToggleConfirmPassword = () => {
//     setShowConfirmPassword((prev) => !prev);
//   };

//   return (
//     <div className="SignIn-box">
//       <h1>SIGN UP</h1>
//       <form action="" onSubmit={handleSubmit}>
//         <div className="input-box">
//           <label htmlFor="name">Username</label>
//           <input
//             type="text"
//             id="name"
//             autoComplete="off"
//             placeholder="Enter Username"
//             value={signInData.name}
//             onChange={handleChange}
//             name="name"
//           />
//           {errors.name && (
//             <p style={{ color: "red", fontSize: "13px" }}>{errors.name}</p>
//           )}
//         </div>
//         <div className="input-box">
//           <label htmlFor="email">Email Id</label>
//           <input
//             type="email"
//             id="email"
//             autoComplete="off"
//             placeholder="Enter Email Id"
//             value={signInData.email}
//             onChange={handleChange}
//             name="email"
//           />
//           {errors.email && (
//             <p style={{ color: "red", fontSize: "13px" }}>{errors.email}</p>
//           )}
//         </div>
//         <div className="input-box">
//           <label htmlFor="password">Password</label>
//           <input
//             type={showPassword ? "text" : "password"}
//             id="password"
//             autoComplete="off"
//             placeholder="Enter Password"
//             value={signInData.password}
//             onChange={handleChange}
//             name="password"
//           />
//           {errors.password && (
//             <p style={{ color: "red", fontSize: "13px" }}>{errors.password}</p>
//           )}
//           <button type="button" onClick={handleTogglePassword}>
//             <Icon icon={showPassword ? eye : eyeOff} size={24} />
//           </button>
//         </div>

//         <div className="input-box">
//           <label htmlFor="confirmpassword">Confirm Password</label>
//           <p>
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               id="confirmpassword"
//               autoComplete="off"
//               placeholder="Enter Confirm Password"
//               value={signInData.confirmPassword}
//               onChange={handleChange}
//               name="confirmPassword"
//             />
//             <button type="button" onClick={handleToggleConfirmPassword}>
//               <Icon icon={showConfirmPassword ? eye : eyeOff} size={24} />
//             </button>
//           </p>
//           {errors.confirmpassword && (
//             <p style={{ color: "red", fontSize: "13px" }}>
//               {errors.confirmpassword}
//             </p>
//           )}
//         </div>

//         <div>
//           <button type="Submit">Create Account</button>
//         </div>

//         <div className="SignIn">
//           <p>
//             Already have an account?
//             <Link to={SIGNIN_ROUTE}>Sign In</Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };













// import React, { useState, useEffect } from "react";
// import SignInValidation from "../utils/validations/SignInValidation";
// import { Icon } from "react-icons-kit";
// import { eyeOff } from "react-icons-kit/feather/eyeOff";
// import { eye } from "react-icons-kit/feather/eye";
// import "../assets/css/SignIn.css";
// import { SIGNIn_ROUTE } from "../constants/AppRoutes";
// import { Link } from "react-router-dom";

// export const SignIn = () => {
//   const [values, setValues] = useState({
//     username: "",
//     password: "",
//     rememberMe: false
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [allEntry, setAllEntry] = useState({});

//   useEffect(() => {
//     console.log(allEntry); 
//   }, [allEntry]); 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors(SignInValidation(values));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues(prevValues => ({
//       ...prevValues,
//       [name]: value
//     }));
//     setAllEntry(prevValues => ({
//       ...prevValues,
//       [name]: value
//     })); 
//   }
//   const handleTogglePassword = () => {
//     setShowPassword((prev) => !prev);
//   };

//   return (
//     <div className="SignIN-box">
//       <h1>SIGN IN</h1>

//       <form action="">
//         <div className="input-box">
//           <label htmlFor="username">Username</label>

//           <input
//             type="text"
//             name="username"
//             autoComplete="off"
//             placeholder="Enter Username"
//             value={values.username}
//             onChange={handleChange}
//           />

//           {errors.name && (
//             <p style={{ color: "red", fontSize: "13px" }}>{errors.name}</p>
//           )}
//         </div>

//         <p>
//           <div className="input-box">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               autoComplete="off"
//               placeholder="Enter Password"
//               value={values.password}
//               onChange={handleChange}
//             />

//             {errors.password && (
//               <p style={{ color: "red", fontSize: "13px" }}>
//                 {errors.password}
//               </p>
//             )}

//             <button type="button" onClick={handleTogglePassword}>
//               <Icon icon={showPassword ? eye : eyeOff} size={24} />
//             </button>
//           </div>
//         </p>
//         <div>
//           <button type="submit"  onSubmit={handleSubmit}>Sign In</button>
//         </div>

//         <div className="SignIn">
//           <p>
//             Don't have an account?
//             <Link to={SIGNIn_ROUTE}>Sign Up</Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };


// // import React from 'react'
// // import { Form, Formik } from 'formik'
// // import { SigninValidationSchema } from '../validationSchema/SigninSchema'


// // export const SignIn = () => {
// //   return (
// //     <Formik initialValues={SigninValidationSchema} onSubmit={handleSubmit}>
// //       {
// //         (formik)=>{
// //           // Formik argument is representing the object of the formik form
// //           // Formik object will be used to get the form data . to check if values are valid or not
// //           const { values, handlechange, isValid, touched, dirty } = formik;
          
// //           return (
// //             <>
// //               <Form>
// //                 <Row>

// //                 </Row>
// //               </Form>
// //             </>
// //           )
// //         }
// //       }
// //     </Formik>
// //   )
// // }

