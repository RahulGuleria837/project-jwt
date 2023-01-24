import React from "react";

function register() {
  return (
    <div className="row" >
      <div class="   col-5 box" style={{left:"28%", padding:"10px"}} >
        <div class="card text-center">
          <div bgcolor="green" class="card-header">
            Register
          </div>
          <div class="card-body">
            <div className="form-group row">
              <label className="col-lg-4" for="txtusername">
                UserName
              </label>
              <div className="col-lg-8">
                <input
                  type="text"
                  id="txtusername"
                  placeholder="Enter username"
                  className="form-control"
                  name="UserName"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-4" for="txtpassword">
                Password{" "}
              </label>
              <div className="col-lg-8">
                <input
                  type="password"
                  id="txtpassword"
                  placeholder="Enter password"
                  className="form-control"
                  name="Usepassword"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-4" for="txtpassword">
                confirm password
              </label>
              <div className="col-lg-8">
                <input
                  type="password"
                  id="txtpassword"
                  placeholder="Enter password"
                  className="form-control"
                  name="Usepassword"
                />
              </div>
            </div>

            <p class="card-text"></p>
            <a href="#" class="btn btn-success">
              Register
            </a>
          </div>
          <div class="card-footer text-muted"></div>
        </div>
      </div>

      
      





    </div>
  );
}

export default register;
