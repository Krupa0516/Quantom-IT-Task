import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { login } from "../../actions/userActions";
import MainScreen from "../../components/MainScreen";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory(); // Initialize useHistory hook

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const success = await dispatch(login(email, password)); // Dispatch login action
      setLoading(false);

      if (success) {
        console.log("Successful login. Redirecting to /mynotes...");
        history.push("/mynotes"); // Redirect to /mynotes upon successful login
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError(error.response.data.message || "An error occurred");
      setLoading(false);
    }
  };

  return (
    <MainScreen>
      <div className="login-container">
        <div className="login-form">
          <h2 className="login-form-title">LOGIN</h2>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loading />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <div className="py-3">
            New Customer ? <Link to="/register">Register Here</Link>
          </div>
        </div>
      </div>
    </MainScreen>
  );
};

export default LoginScreen;
