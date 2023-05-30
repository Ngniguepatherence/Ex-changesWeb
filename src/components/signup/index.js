import {React ,useState} from "react";
import { useFormik } from "formik";
import 'bootstrap'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { addDoc, collection } from "@firebase/firestore";
import { bd } from "../../firebase_config";
import { createUserWithEmailAndPassword,onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase_config";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import {Button} from 'react-bootstrap';
import './signup.css';
import Image1 from '../../asset/images/draw2.PNG'



const emailUnique= (valerror)=>{
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(valerror==="auth/email-already-in-use"){
                reject("Cet e-mail est déjà utiliser. veillez utiliser un autre.");
            }
            else if(valerror==="auth/invalid-email") {
                reject("Email invalide!")
            }
        },1000)
    });
}
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
    let erreur="";
   try{
    //ajout d'un user dans l'api firebase 
     await createUserWithEmailAndPassword(auth,formValues.email,formValues.pwd)
    .then((userCredential)=>{
        // send verification mail.
        sendEmailVerification(userCredential.user)
      auth.signOut();
      alert("vous allez recevoir un mail de verification.")
    })
    .catch(alert);

    //    const newLocal = "/private/privateHome";
    //nettoyer le formulaire          navigate( "/private/verification");
    // navigate( newLocal);
    onSubmittingProps.resetForm();

    //ajout dans l'api firestore
    await addDoc(userCollectionRef, {noms:formValues.FirstName, prenoms:formValues.lastName, gestCondiUtil:formValues.gcu, email:formValues.email, password:formValues.pwd});
    //afficher l'etat du resultat
    // document.write(response);
   }catch(error){
   // const response= await emailUnique(error.code);
    //erreur=response;
    // console.error(error);
   }
   return erreur;

}

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
      <MDBRow onSubmit={formik.handleSubmit}>
        <MDBCol col='10' md='6'>
          <img src={Image1} class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          {
            formik.errors.email && formik.touched.email &&<span className="text-danger d-block">{formik.errors.email}</span>
          }
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" name="email" {...formik.getFieldProps("email")}/>
          
          {
            formik.errors.userName && formik.touched.userName && <span className="text-danger d-block">{formik.errors.userName}</span>
          }
          <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='username' size="lg" name="userName" {...formik.getFieldProps("userName")}/>
          
          {
            formik.errors.pwd && formik.touched.pwd && <span className="text-danger d-block">{formik.errors.pwd}</span>
          }
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type={passwordShown ? "text" : "password"} name="pwd" size="lg" {...formik.getFieldProps("pwd")}/>
          <div className="d-flex justify-content-between mx-4 mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault'onChange={togglePassword} label="Afficher" />
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
        </MDBCol>
        
      </MDBRow>

    </MDBContainer>
  );
}

export default Signup;