import React from 'react'

function employee() {
  return (
    <div>
<h2 class="text-primary text-center">Employee List</h2>

<button class="btn btn-info p-2 m-2 align-left " data-toggle="modal"data-target="#newModal">
<i class="fa fa-plus"> Create New Employee </i> </button>



<table class="table table-bordered table-striped table-active">

<thead>
<tr>
    <th>Name</th>
    <th>Address</th>
    <th>Salary</th>
    <th>Actions</th>
</tr>
</thead>
<tbody>
  <tr>
    <td>Rahul</td>
    <td>Mohali</td>
    <td>90000</td>
    <td>
      
    <button class="btn btn-info" data-toggle="modal" data-target="#editModal">
                      <i class='fa fa-edit'></i> 
                    </button>
                    <button  class="btn btn-danger p-1 m-1">
                        <i class="fa fa-trash"></i>
                    </button>
    </td>
  </tr>

</tbody>
</table>

<form>
    <div class="modal" id="newModal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="model-header">
                    <div class="modal-title">NewEmployee</div>
                    <button class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group row">
                        <label for="txtname" class="col-sm-4">Name</label>
                        <div class="col-8">
                            <input  name="name" placeholder="Enter Name" id="txtname" class="form-control"></input>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="form-group row">
                        <label for="txtaddress" class="col-sm-4">Address</label>
                        <div class="col-8">
                            <input type="text" name="address" id="txtaddress" placeholder="Enter address" class="form-control"></input>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="form-group row">
                        <label for="txtsalary" class="col-sm-4">Salary</label>
                        <div class="col-8">
                            <input type="number" name="salary"  id="txtsalary" placeholder="Enter salary" class="form-control"></input>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-success"data-dismiss="modal">
                        save
                    </button>
                    <button class="btn btn-danger"data-dismiss="modal">
                        cancel
                    </button>
                </div>

            </div>
        </div>
    </div>
</form>

<form>
    <div class="modal" id="editModal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="model-header">
                    <div class="modal-title">Edit Employee</div>
                    <button class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group row">
                        <label for="txtname" class="col-sm-4">Name</label>
                        <div class="col-8">
                            <input  id="txtname" name="name" placeholder="Enter Name" class="form-control"></input>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="form-group row">
                        <label for="txtaddress" class="col-sm-4">Address</label>
                        <div class="col-8">
                            <input id="txtaddress" name="address" class="form-control"></input>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="form-group row">
                        <label for="txtsalary" class="col-sm-4">Salary</label>
                        <div class="col-8">
                            <input  id="txtsalary" name="salary"  class="form-control"></input>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-success"data-dismiss="modal">
                        Update
                    </button>
                    <button class="btn btn-danger"data-dismiss="modal">
                        cancel
                    </button>
                </div>

            </div>
        </div>
    </div>
</form>

      
    </div>
  )
}

export default employee