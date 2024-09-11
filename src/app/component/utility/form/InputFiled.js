import React from "react";
import Form from "react-bootstrap/Form";

export default function InputFiled({
  type,
  label,
  name,
  onChange,
  value,
  placeholder,
  errors,
  touched,
}) {
  return (
    <>
      <Form.Group className="mb-3" controlId={`input-${name}`}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
        {/* Dynamically handle errors for the specific field name */}
        {errors[name] && touched[name] ? (
          <div className="text-red-600">{errors[name]}</div>
        ) : null}
      </Form.Group>
    </>
  );
}
