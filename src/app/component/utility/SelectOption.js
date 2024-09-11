import React from "react";
import { Form } from "react-bootstrap";

export default function SelectOption({
  label,
  name,
  onChange,
  value,
  options,
  touched,
  errors,
}) {
  console.log("ERROR", errors);
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control as="select" name={name} onChange={onChange} value={value}>
          <option value="">Choose...</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Control>
        {touched[name] && errors[name] ? (
          <div className="text-red-600">{errors[name]}</div>
        ) : null}
      </Form.Group>
    </>
  );
}
