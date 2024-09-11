import React from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

export default function DatePickerFiled({
  label,
  name,
  selectedDate,
  onChange,
  errors,
  touched,
}) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="yyyy/MM/dd"
        className="form-control"
        isClearable
      />
      {errors[name] && touched[name] && (
        <div className="!text-red-600">{errors[name]}</div>
      )}
    </Form.Group>
  );
}
