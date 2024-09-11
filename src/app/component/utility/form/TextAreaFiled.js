import React from "react";
import { Form } from "react-bootstrap";

export default function TextAreaFiled({
  label,
  name,
  onChange,
  value,
  errors,
  touched,
}) {
  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name={name}
          onChange={onChange}
          value={value}
        />
        {touched[name] && errors[name] ? (
          <div className="text-red-600">{errors[name]}</div>
        ) : null}
      </Form.Group>
    </div>
  );
}
