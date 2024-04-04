import { useState } from 'react';

const sendFormData = (formData) => {
    console.log(formData);
};

const App = () => {
 const [formData,setFormData] =useState({
  email:'',
  password:'',
  repeatpassword:'',
 });

 const [error, setError] = useState('');

 const validateFormData = () => {
  let isValid = true;

  if (formData.email.trim() === '' || formData.password.trim() === '' || formData.repeatpassword.trim() === '') {
      setError('Заполните все поля');
      isValid = false;
  } else if (formData.password.length < 3 || formData.repeatpassword.length<3) {
      setError('Неверный пароль. Должно быть не меньше 3 символов');
      isValid = false;
  } else {
      setError('');
  }

  return isValid;
};

 const onBlur =()=>{
  let isValide = null

    if(formData.email.trim() === '' || formData.password.trim() === '' || formData.repeatpassword.trim() === ''  ){
    setError('Заполните все поля')
  
  } else{
    setError('')
    isValide =true
  }

  return  isValide 

 }

 const onSubmit = (event) => {
  event.preventDefault();

  if (validateFormData()) {
    sendFormData(formData);
  }
};


 return(
  <div>
    <form onSubmit={onSubmit}>
      {error && <div>{error}</div>}
      <input name='email' value={formData.email} type='email' placeholder='email' onChange={({target})=>{
        setFormData({
          ...formData,
          email:target.value
        }
        )
      }} onBlur={onBlur} />
      <input name='password' value={formData.password}  type='password' placeholder='password' onChange={({target})=>{
        setFormData({
          ...formData,
          password:target.value
        }
        )
      }} onBlur={onBlur} />
      <input name='repeatpassword' value={formData.repeatpassword}  type='password' placeholder='repeat password' onChange={({target})=>{
        setFormData({
          ...formData,
          repeatpassword:target.value
        }
        )
      }} onBlur={onBlur} />
<button type='submit' disabled={!!error}>click</button>
    </form>
  </div>
 )
};

export default App;