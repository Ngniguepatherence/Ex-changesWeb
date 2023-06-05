import {React ,useState} from "react";
import { useFormik } from "formik";
import 'bootstrap'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { addDoc, collection } from "@firebase/firestore";
import { bd } from "../../firebase/firebase_config";
import { createUserWithEmailAndPassword,getAuth,fetchSignInMethodsForEmail, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase/firebase_config";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Form } from "react-bootstrap";
import {Button} from 'react-bootstrap';
import './signup.css';
import Image1 from '../../asset/images/draw2.PNG'


function Signup() {
  
  const initialValues={
    userName:"",
    email:"",
    pwd:"",
    gcu:false,
};

const navigate = useNavigate();
const userCollectionRef = collection( bd, "utilisateurs"); 
async function createUser(formValues, onSubmittingProps){
  const user = auth.currentUser;
  createUserWithEmailAndPassword(auth, formValues.email, formValues.pwd)
    .then((userCredential) => {
      onSubmittingProps.resetForm();
      alert("voulez recevoir un mail pour confirmer votre compte");
      // Send email verification.
      sendEmailVerification(userCredential.user)
        .then(() => {
          // Email sent.
          // if (user.emailVerified) {
          //     // User's email is verified.
          //     navigate("../signin");
          // } else {
          //   // User's email is not verified.
          // }
          navigate("../signin");
        })
        .catch((error) => {
          // An error occurred.
        });
    })
    .catch((error) => {
      if(error=="FirebaseError: Firebase: Error (auth/email-already-in-use)."){
        alert("Ce mail est déjà utiliser. utiliser un autre.");
        navigate("../signup");
       }
       if(error=="FirebaseError: Firebase: Error (auth/network-request-failed)."){
        alert("Erreur de connexion. Veillez verifier votre connexion.");
        navigate("../signup");
       }
    });
};
// const auth = getAuth();

// // Check if user exists
// fetchSignInMethodsForEmail(auth, formValues.email)
//   .then((signInMethods) => {
//     if (signInMethods.length > 0) {
//       // User exists
//       alert("Ce mail est déjà utiliser. utiliser un autre.");
//       // onSubmittingProps.resetForm();
//       navigate("../signup");
//     } else {
//       // User does not exist
//       // Send verification email
//       auth.currentUser.sendEmailVerification()
//         .then(() => {
//           // Email sent.
//           alert("Vous aller recevoir un message email pour confirmer la creation de votre compte.");
//           // Check if user's email is verified
//           const unsubscribe = auth.onAuthStateChanged((user) => {
//             if (user.emailVerified) {
//               // User's email is verified
//               // Create account with email verification
//               createUserWithEmailAndPassword(auth, formValues.email, formValues.pwd)
//                 .then((userCredential) => {
//                   // Signed in 
//                   const user = userCredential.user;
//                 })
//                 .catch((error) => {
                  // if(error=="FirebaseError: Firebase: Error (auth/email-already-in-use)."){
                  //   alert("Ce mail est déjà utiliser. utiliser un autre.");
                  //   navigate("./index.js");
                  //  }
                  //  if(error=="FirebaseError: Firebase: Error (auth/network-request-failed)."){
                  //   alert("Erreur de connexion. Veillez verifier votre connexion.");
                  //   navigate("./index.js");
                  //  }
//                 });
//               unsubscribe();
//             }
//           });
//         })
//         .catch((error) => {
//           // An error happened.
//         });
//         navigate("private/privateHome");
//     }
//   })
//   .catch((error) => {
//     // An error happened.
//     alert(error);
//     navigate("../signup");
//   });
// // ajout dans l'api firestore


function validate(formValues){
    const errors={};

    if (formValues.userName===""){
        errors.userName= "Le nom est obligatoire."
    }
    if (formValues.email===""){
        errors.email= "Le e-mail est obligatoire."
    }else if(! /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
   
    ){
        errors.email="l'adresse email est invalide"
    }else
    if (formValues.pwd===""){
        errors.pwd= "Le mot de passe est obligatoire."
    }else if(formValues.pwd.length<8){
        errors.pwd="le mot de passe n'est pas valide"
    }
    
    if (!formValues.gcu){
        errors.gcu= "Veillez accepter les conditions d'utilisation."
    }

    return errors;
}
const formik =useFormik({
    initialValues,
    onSubmit: createUser,
    validate
    
});


    const [passwordShown, setPasswordsShown] = useState(false);
   const togglePassword = () => {        
        setPasswordsShown(!passwordShown);
    };
  return (
    <MDBContainer fluid className="p-3 my-5">
    <Link to='/' className='lienhome'><i className='bi bi-arrow-left-square-fill'></i></Link>  
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src={Image1} className="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
        <Form onSubmit={formik.handleSubmit}>
          {
            formik.errors.email && formik.touched.email &&<span className="text-danger d-block">{formik.errors.email}</span>
          }
          <MDBInput wrapperClass='mb-4' label='Email address'  type='email' size="lg" name="email" {...formik.getFieldProps("email")}/>
          
          {
            formik.errors.userName && formik.touched.userName && <span className="text-danger d-block">{formik.errors.userName}</span>
          }
          <MDBInput wrapperClass='mb-4' label='Username'  type='username' size="lg" name="userName" {...formik.getFieldProps("userName")}/>
          
          {
            formik.errors.pwd && formik.touched.pwd && <span className="text-danger d-block">{formik.errors.pwd}</span>
          }
          <MDBInput wrapperClass='mb-4' label='Password'  type={passwordShown ? "text" : "password"} name="pwd" size="lg" {...formik.getFieldProps("pwd")}/>
          <div className="d-flex justify-content-between mx-4 mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' onChange={togglePassword} label="Afficher" />
          <label htmlFor="flexCheck">
          <input type="checkbox" name='gcu' style={{marginRight:'8px',borderBlockColor:'gray'}} id='flexCheck' {...formik.getFieldProps("gcu")}/>
          Accepter les conditions d'utilisation</label>
          {
            formik.errors.gcu && formik.touched.gcu && <span className="text-danger d-block">{formik.errors.gcu}</span>
          }
          </div>

          <Button className="mb-4 w-100 bg-primary text-white" type="submit" style={{fontSize: '22px'}}  disabled={!formik.isValid}>
            Sign up
          </Button>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <Link to={'../signin'} style={{textDecoration:'none', color:'#fff'}}>
            <Button className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998',fontSize: '22px'}} >
              Sign in
            </Button>
          </Link>
          </Form>
        </MDBCol>
        
      </MDBRow>

    </MDBContainer>
  );
}

export default Signup;
// import {React ,useState} from "react";
// import { useFormik } from "formik";
// import 'bootstrap'
// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import { addDoc, collection } from "@firebase/firestore";
// import { bd } from "../../firebase_config";
// import { createUserWithEmailAndPassword,onAuthStateChanged, sendEmailVerification } from "firebase/auth";
// import { auth } from "../../firebase_config";
// import { useNavigate } from "react-router-dom";
// import {
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBInput,
//   MDBCheckbox
// }
// from 'mdb-react-ui-kit';
// import {Button} from 'react-bootstrap';
// import './signup.css';
// import Image1 from '../../asset/images/draw2.PNG'



// const emailUnique= (valerror)=>{
    
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(valerror==="auth/email-already-in-use"){
//                 reject("Cet e-mail est déjà utiliser. veillez utiliser un autre.");
//             }
//             else if(valerror==="auth/invalid-email") {
//                 reject("Email invalide!")
//             }
//         },1000)
//     });
// }
// function Signup() {
//   const initialValues={
//     userName:"",
//     email:"",
//     pwd:"",
//     gcu:false,
// };
// const navigate = useNavigate();
// const userCollectionRef = collection( bd, "utilisateurs"); 
// async function createUser(formValues, onSubmittingProps){
//     let erreur="";
//    try{
//     //ajout d'un user dans l'api firebase 
//      await createUserWithEmailAndPassword(auth,formValues.email,formValues.pwd)
//     .then((userCredential)=>{
//         // send verification mail.
//         sendEmailVerification(userCredential.user)
//       auth.signOut();
//       alert("vous allez recevoir un mail de verification.")
//     })
//     .catch(alert);

//     //    const newLocal = "/private/privateHome";
//     // nettoyer le formulaire          
//     // navigate( newLocal);
//     onSubmittingProps.resetForm();

//     //ajout dans l'api firestore
//     await addDoc(userCollectionRef, {noms:formValues.userName,gestCondiUtil:formValues.gcu, email:formValues.email, password:formValues.pwd});
//     //afficher l'etat du resultat
//     // document.write(response);
//    }catch(error){
//    // const response= await emailUnique(error.code);
//     //erreur=response;
//     // console.error(error);
//    }
//    return erreur;

// }

// function validate(formValues){
//     const errors={};

//     if (formValues.userName===""){
//         errors.userName= "Le nom est obligatoire."
//     }
//     if (formValues.email===""){
//         errors.email= "Le e-mail est obligatoire."
//     }else if(! /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
   
//     ){
//         errors.email="l'adresse email est invalide"
//     }else
//     if (formValues.pwd===""){
//         errors.pwd= "Le mot de passe est obligatoire."
//     }else if(formValues.pwd.length<8){
//         errors.pwd="le mot de passe n'est pas valide"
//     }
    
//     if (!formValues.gcu){
//         errors.gcu= "Veillez accepter les conditions d'utilisation."
//     }

//     return errors;
// }
// const formik =useFormik({
//     initialValues,
//     onSubmit: createUser,
//     validate
    
// });


//     const [passwordShown, setPasswordsShown] = useState(false);
//    const togglePassword = () => {        
//         setPasswordsShown(!passwordShown);
//     };
//   return (
//     <MDBContainer fluid className="p-3 my-5">
//     <Link to='/' className='lienhome'><i className='bi bi-arrow-left-square-fill'></i></Link>  
//       <MDBRow>
//         <MDBCol col='10' md='6'>
//           <img src={Image1} className="img-fluid" alt="Phone image" />
//         </MDBCol>

//         <MDBCol col='4' md='6' onSubmit={formik.handleSubmit}>

//         <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
//           <li className="nav-item" role="presentation">
//             <a
//               className="nav-link active"
//               id="tab-login"
//               data-mdb-toggle="pill"
//               href="#pills-login"
//               role="tab"
//               aria-controls="pills-login"
//               aria-selected="true">
//               Login
//               </a>
//           </li>
//           <li className="nav-item" role="presentation">
//             <a
//               className="nav-link"
//               id="tab-register"
//               data-mdb-toggle="pill"
//               href="#pills-register"
//               role="tab"
//               aria-controls="pills-register"
//               aria-selected="false"
//               >Register</a>
//           </li>
//         </ul>
        
//         <div className="tab-content">
//           <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
//             <form>
//               <div className="text-center mb-3">
//                 <p>Sign in with:</p>
//                 <button type="button" className="btn btn-secondary btn-floating mx-1">
//                   <i className="bi bi-facebook"></i>
//                 </button>
        
//                 <button type="button" className="btn btn-secondary btn-floating mx-1">
//                   <i className="bi bi-google"></i>
//                 </button>
        
//                 <button type="button" className="btn btn-secondary btn-floating mx-1">
//                   <i className="bi bi-twitter"></i>
//                 </button>
        
//                 <button type="button" className="btn btn-secondary btn-floating mx-1">
//                   <i className="bi bi-github b"></i>
//                 </button>
//               </div>
        
//               <p className="text-center">or:</p>
        
//               <div className="form-outline mb-3">
//                 <input type="email" id="loginName" className="form-control" />
//                 <label className="form-label" htmlFor="loginName">Email or username</label>
//               </div>
        
//               <div className="form-outline mb-3">
//                 <input type="password" id="loginPassword" className="form-control" />
//                 <label className="form-label" htmlFor="loginPassword">Password</label>
//               </div>
        
//               <div className="row mb-3">
//                 <div className="col-md-6 d-flex justify-content-center">
//                   <div className="form-check mb-3 mb-md-0">
//                     <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
//                     <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
//                   </div>
//                 </div>
        
//                 <div className="col-md-6 d-flex justify-content-center">
//                   <a href="#!">Forgot password?</a>
//                 </div>
//               </div>
        
//               <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
        
//               <div className="text-center">
//                 <p>Not a member? <a href="#!">Register</a></p>
//               </div>
//             </form>
//           </div>
//           <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
//             <form>
//               <div className="text-center mb-3">
//                 <p>Sign up with:</p>
//                 <button type="button" className="btn btn-secondary btn-floating mx-1">
//                   <i className="bi bi-facebook"></i>
//                 </button>
        
//                 <button type="button" className="btn btn-secondary btn-floating mx-1">
//                   <i className="bi bi-google"></i>
//                 </button>
        
//                 <button type="button" className="btn btn-secondary btn-floating mx-1">
//                   <i className="bi bi-twitter"></i>
//                 </button>
        
//                 <button type="button" className="btn btn-secondary btn-floating mx-1">
//                   <i className="bi bi-github"></i>
//                 </button>
//               </div>
        
//               <p className="text-center">or:</p>
        
//               <div className="form-outline mb-4">
//                 <input type="text" id="registerName" className="form-control" />
//                 <label className="form-label" htmlFor="registerName">Name</label>
//               </div>
        
//               <div className="form-outline mb-4">
//                 <input type="text" id="registerUsername" className="form-control" />
//                 <label className="form-label" htmlFor="registerUsername">Username</label>
//               </div>
        
//               <div className="form-outline mb-4">
//                 <input type="email" id="registerEmail" className="form-control" />
//                 <label className="form-label" htmlFor="registerEmail">Email</label>
//               </div>
        
//               <div className="form-outline mb-4">
//                 <input type="password" id="registerPassword" className="form-control" />
//                 <label className="form-label" htmlFor="registerPassword">Password</label>
//               </div>
        
//               <div className="form-outline mb-4">
//                 <input type="password" id="registerRepeatPassword" className="form-control" />
//                 <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
//               </div>
        
//               <div className="form-check d-flex justify-content-center mb-4">
//                 <input
//                   className="form-check-input me-2"
//                   type="checkbox"
//                   value=""
//                   id="registerCheck"
//                   checked
//                   aria-describedby="registerCheckHelpText"
//                 />
//                 <label className="form-check-label" htmlFor="registerCheck">
//                   I have read and agree to the terms
//                 </label>
//               </div>
        
//               <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
//             </form>
//           </div>
//         </div>

          
//         </MDBCol>
        
//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default Signup;
