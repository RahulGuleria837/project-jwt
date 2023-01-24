import React from 'react'

function login() {
  return (
    <div>
        <div class="row col-lg-6 mx-auto m-2 p-2"><div class="card text-center">
  <div bgcolor="green" class="card-header">
    Login
  </div>
  <div class="card-body">
<div className="form-group row">
    <label className="col-lg-4" for="txtusername" >UserName</label>
    <div className="col-lg-8">
        <input type="text" id="txtusername" placeholder='Enter username' className='form-control' name="UserName"/>
    </div>
</div>
<div className="form-group row">
    <label className="col-lg-4" for="txtpassword" >Password </label>
    <div className="col-lg-8">
        <input type="password" id="txtpassword" placeholder='Enter password' className='form-control' name="Usepassword"/>
    </div>
</div>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Login</a>
  </div>
  <div class="card-footer text-muted">
  </div>
</div>
</div>

    </div>
  )
}

export default login