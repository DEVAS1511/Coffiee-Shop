import React from 'react'

const Signup = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful");
  };

  return (
    <div>
  <h1>kk</h1>    
    </div>
  )
}

export default Signup
