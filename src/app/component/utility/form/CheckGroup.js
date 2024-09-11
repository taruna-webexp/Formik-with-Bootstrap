import React from "react";
import { Form } from "react-bootstrap";

export default function checkGroup({
  label,
  name,
  options,
  onChange,
  value,
  errors,
  touched,
}) {
  console.log("option2", value);
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <div role="group" aria-labelledby="my-check-group">
        {options.map((option, index) => {
          return (
            <Form.Check
              key={index}
              type="checkbox"
              label={option.label}
              name={name}
              value={option.value}
              onChange={onChange}
              checked={value.includes(option.value)}
            />
          );
        })}
      </div>
      {touched[name] && errors[name] ? (
        <div className="text-red-600">{errors[name]}</div>
      ) : null}
    </Form.Group>
  );
}
