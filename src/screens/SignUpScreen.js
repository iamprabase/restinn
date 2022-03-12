import {Container, Form, Button} from "react-bootstrap";
import { useForm } from "react-hook-form";
import React, { useRef } from "react";

const SignUpScreen = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <Container>
      <h1 className="text-center">Sign Up</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicFName">
          <Form.Label className="text-dark">First Name</Form.Label>
          <Form.Control {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i
        })} type="text" placeholder="First Name" />
        {errors?.firstName?.type === "required" && <p className="text-danger">This field is required</p>}
        {errors?.firstName?.type === "maxLength" && (
          <p className="text-danger">First name cannot exceed 20 characters</p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p className="text-danger">Alphabetical characters only</p>
        )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMN">
          <Form.Label className="text-dark">Middle Name</Form.Label>
          <Form.Control {...register("middleName", {
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i
        })} type="text" placeholder="Middle Name" />
          {errors?.middleName?.type === "maxLength" && (
            <p className="text-danger">First name cannot exceed 20 characters</p>
          )}
          {errors?.middleName?.type === "pattern" && (
            <p className="text-danger">Alphabetical characters only</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLN">
          <Form.Label className="text-dark">Last Name</Form.Label>
          <Form.Control {...register("lastName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i
        })} type="text" placeholder="Last Name" />
          {errors?.lastName?.type === "required" && <p className="text-danger">This field is required</p>}
          {errors?.lastName?.type === "maxLength" && (
            <p className="text-danger">First name cannot exceed 20 characters</p>
          )}
          {errors?.lastName?.type === "pattern" && (
            <p className="text-danger">Alphabetical characters only</p>
          )}
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
          <Form.Label className="text-dark">Confirm Password</Form.Label>
          <Form.Control {...register("confirm_password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/,
              validate: value =>
              value === password.current || "The passwords do not match"
            })} type="password" placeholder="Confirm Password" />
            {errors?.confirm_password?.type === "required" && <p className="text-danger">This field is required</p>}
            {errors?.confirm_password?.type === "minLength" && (
              <p className="text-danger">Password must be minimum 6 characters</p>
            )}
            {errors?.confirm_password?.type === "pattern" && (
              <p className="text-danger">Password must contain at least one digit, one lower case, one upper case and must be at least 6 characters</p>
            )}
            {errors.confirm_password && <p className="text-danger">{errors.confirm_password.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Keep me signed In" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNotify">
          <Form.Check type="checkbox" label="Keep Me Posted" />
          <Form.Text className="text-muted">
              Send me notification of exclusive deals and offers of new property.
            </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text className="text-muted">
            By Signing in you confirm that you agree to our terms and conditions
        </Form.Text>
      </Form>
    </Container>
  );
}

export default SignUpScreen