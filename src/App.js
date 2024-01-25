import { useState } from "react";


function App() {
  const [view , setView] = useState(true)
  const [user , setUser] = useState("")
  const [pass , setPass] = useState("")
  const [invalid , setInvalid] = useState(false)
  function handleChange(e) {
    e.preventDefault();
    if(user !== "user" || pass !== "password") {
      setInvalid(true)
    }else{

      setView(false)
    }
    
  }
  
  return (
    <div>
      <h1>Login Page</h1>
      { invalid ? <p>Invalid username or password</p> : ""}
      {view?<div>

        <form onSubmit={handleChange}>
          <label>Username:</label><input type="text" value={user} onChange={(e)=>setUser(e.target.value)} required placeholder="username"/>
          <br />
          <label>Password:</label><input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} required placeholder="password"/>
          <br />
          <button>Submit</button>
        </form>
      </div> : <p>Welcome, user!</p>}
    </div>
  );
}

export default App;
