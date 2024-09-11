import React from "react";
import { Form } from "react-bootstrap";

export default function RadioGroup({
  label,
  name,
  options,
  onChange,
  value,
  errors,
  touched,
}) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <div
        className="radio-button-list"
        role="group"
        aria-labelledby="my-radio-group"
      >
        {options.map((option, index) => (
          <Form.Check
            key={index}
            type="radio"
            label={option.label}
            name={name}
            value={option.value}
            onChange={onChange}
            checked={value === option.value}
          />
        ))}
      </div>
      {touched[name] && errors[name] ? (
        <div className="text-red-600">{errors[name]}</div>
      ) : null}
    </Form.Group>
  );
}
