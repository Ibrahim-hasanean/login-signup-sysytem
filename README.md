# login-signup-sysytem

implement login/signup system  
##Api links
Root link “get request” https://authentcation.herokuapp.com

Local login api : “post request” https://authentcation.herokuapp.com/login >> body must have email , password ,name

Sign up api : “post request” https://authentcation.herokuapp.com/signup >>>> body must have email , password ,name

Facebook login api :

“send data to link as userData” https://authentcation.herokuapp.com/facebooklogin

Google login api :

“ send data to link as userData ” https://authentcation.herokuapp.com/googlelogin

verificaion route : 'post request' https://authentcation.herokuapp.com/verify >> must contain code in body and token in header as 'x-access-token' property

Private route : “get request” https://authentcation.herokuapp.com/users/private >> must contain token in header with name “x-access-token” and email must be veified

forget password

- send user email: https://authentcation.herokuapp.com/forgetpassword >> will send code for user email

- send user code: https://authentcation.herokuapp.com/confirmcode return if code is true or not

- send user email and new password : https://authentcation.herokuapp.com/newpassword return message is reset
