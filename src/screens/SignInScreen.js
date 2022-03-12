import {Container, Form, Button} from "react-bootstrap";
import { useForm } from "react-hook-form";

const SignInScreen = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <Container>
      <h1 className="text-center">Sign In</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-dark">Email address</Form.Label>
          <Form.Control {...register("email", {
              required: true,
              maxLength: 50,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
            })} type="email" placeholder="Enter email" />
          {errors?.email?.type === "required" && <p className="text-danger">This field is required</p>}
          {errors?.email?.type === "maxLength" && (
            <p className="text-danger">Email cannot exceed 50 characters</p>
          )}
          {errors?.email?.type === "pattern" && (
            <p className="text-danger">Invalid Email Format</p>
          )}
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-dark">Password</Form.Label>
          <Form.Control {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/
            })} type="password" placeholder="Password" />
            {errors?.password?.type === "required" && <p className="text-danger">This field is required</p>}
            {errors?.password?.type === "minLength" && (
              <p className="text-danger">Password must be minimum 6 characters</p>
            )}
            {errors?.password?.type === "pattern" && (
              <p className="text-danger">Password must contain at least one digit, one lower case, one upper case and must be at least 6 characters</p>
            )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Sign Me In Automatically" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignInScreen;
