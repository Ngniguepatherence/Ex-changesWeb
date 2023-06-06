import {React ,useState} from "react";
import { useFormik } from "formik";
// import * as Yup from "yup";
import {Button, Form} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
// import { faL } from "@fortawesome/free-solid-svg-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase/firebase_config';
import "../signup/signup.css";
import Image1 from '../../asset/images/draw2.PNG';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';


//intervebtion de l'api
function formsubmition({ history}){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("l'utilisateur a été enregistrer")
        },1000)
    })
}

const Signin=()=>{
    const initialValues={
        email:"",
        pwd:"",
    };
    const navigate = useNavigate();
    const user = auth.currentUser;

    async function signinCompte(formValues, onSubmittingProps){
       try{
        await signInWithEmailAndPassword(auth, formValues.email,formValues.pwd);
        //nettoyer le formulaire
        onSubmittingProps.resetForm();
        if (user.emailVerified) {
          // User's email is verified.
          navigate( "/private/privateHome");
      } else {
        // User's email is not verified.
        alert("Le mail de ce compte n'a pas été verifier. Veillerz vous assurer que cela est fait ou bien creer un nouveau compte")
      }
        
       }catch(error){
        // alert(error);
        if(error == "FirebaseError: Firebase: Error (auth/network-request-failed)."){
          alert("Erreur de connexion. Veillez verifier votre connexion.");
        }
        if(error == "FirebaseError: Firebase: Error (auth/wrong-password)."){
          alert("Désolé vous avez entrez un mauvais mot de passe.");
        }
        if(error == "FirebaseError: Firebase: Error (auth/user-not-found)."){
          alert("Cette utilisateur n'existe pas.");
        }
       }
    }
   
    const formik =useFormik({
        initialValues,
        onSubmit: signinCompte,

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
            formik.errors.pwd && formik.touched.pwd && <span className="text-danger d-block">{formik.errors.pwd}</span>
          }
          <MDBInput wrapperClass='mb-4' label='Password' type={passwordShown ? "text" : "password"} name="pwd" size="lg" {...formik.getFieldProps("pwd")}/>
          <div className="d-flex justify-content-between mx-4 mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault'onChange={togglePassword} label="Afficher" />
            <Link to="/reset">Forgot password?</Link>
          </div>
          <Button className="mb-4 w-100 bg-primary text-white" type="submit" style={{fontSize: '22px'}}  disabled={!formik.isValid}>
            Sign in
          </Button>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <Link to={'../signup'} style={{textDecoration:'none', color:'#fff'}}>
            <Button className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998',fontSize: '22px'}} >
              Sign up
            </Button>
          </Link>
          </Form>
        </MDBCol>
        
      </MDBRow>

    </MDBContainer>
    )
}
export default Signin;