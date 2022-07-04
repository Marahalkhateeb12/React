import React, { useState } from 'react';
import CustomHook from './CustomHook';
function Login() {
const [email ,setEmail]=useState('');
const [password ,setPassword]=useState('');
const [  email1 ,pass ,Handlechange] = CustomHook(email , password);

  return (
<div class="container">
  <h2>Login</h2>
  <form action="/action_page.php" style={{width:'220px'}}>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={e =>setEmail(e.target.value)}  />
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={ps =>setPassword(ps.target.value)}/>
    </div>
    <button type="submit" class="btn btn-default" onClick={Handlechange}>Submit</button>
  </form>
</div>
  );
}
export default Login; 