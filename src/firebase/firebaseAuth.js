import onAuthUserListener from 'firebase/auth';


class Firebase {
    // *** Auth API *** 
    doSendEmailVerification = () =>
      this.auth.currentUser.sendEmailVerification({
        url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
      });
   // *** Merge Auth and DB User API *** //

   onAuthUserListener = (next, fallback) =>
   this.auth.onAuthStateChanged(authUser => {
     if (authUser) {
       this.user(authUser.uid)
         .once('value')
         .then(snapshot => {
           const dbUser = snapshot.val();

           // default empty roles
           if (!dbUser.roles) {
             dbUser.roles = {};
           }

           // merge auth and db user
           authUser = {
             uid: authUser.uid,
             email: authUser.email,
             emailVerified: authUser.emailVerified,
             providerData: authUser.providerData,
             ...dbUser,
           };

           next(authUser);
         });
     } else {
       fallback();
     }
   });

  }
  
  export default Firebase;