/*
<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
   */

const FormInput = (props) => {
    return React.createElement('div', {className: "form-group"},
                React.createElement('label', 
                                {for: "exampleInputEmail1"}, 
                                "Email address"
                ),
                React.createElement('input', 
                                {className: "form-control", 
                                type: "email", 
                                id: "exampleInputEmail1", 
                                placeholder: "Enter email"},
                ),
            React.createElement('div', {className: "form-group"}, 
                React.createElement('label', 
                                {for: "exampleInputPassword1"}, 
                                "Password"
                ),
                React.createElement('input',
                                {
                                    className: "form-control",
                                    type: "password",
                                    id: "exampleInputPassword1",
                                    placeholder: "Password"
                                },
                ),
            React.createElement('div', {className: "btn btn-primary"},
                React.createElement('button', {className: "btn", type: "submit" }, "Login")),
            React.createElement('div', {className: "btn btn-primary"},
                React.createElement('button', {className: "btn", type: "submit" }, "Submit"))
        )   
    )
}
