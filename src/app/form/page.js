"use client";

import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputFiled from "../component/utility/form/InputFiled";
import SelectOption from "../component/utility/SelectOption";
import DatePickerFiled from "../component/utility/form/DatePickerFiled";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import RadioGroup from "../component/utility/form/RadioGroup";
import CheckGroup from "../component/utility/form/CheckGroup";
import {
  radioOptions,
  checkOptions,
  optionData,
} from "../component/form/optiondata/FormOptions";
import TextAreaFiled from "../component/utility/form/TextAreaFiled";

function MyForm() {
  let validateSchema = Yup.object({
    firstName: Yup.string().defined(),
    selectCourse: Yup.string().required("Please select an option"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    date: Yup.date().nullable().required("Date is required"),
    gender: Yup.string().required("Please pick gender"),
    textarea: Yup.string().required("Address required"),
    terms: Yup.array().required("Select required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      textarea: "",
      picked: "",
      gender: "Male",
      textarea: "",
      description: "",
      checkboxGroup: [],
      selectOption: "",
      selectCourse: "",
      category: "",
      terms: "",
      date: null,
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      console.log("Form values:", JSON.stringify(values, null, 2));
    },
  });

  const { errors, touched, handleSubmit, handleChange, values, setFieldValue } =
    formik;

  return (
    <Container className="!max-w-2xl p-8 bg-indigo-50 rounded-lg shadow-md mt-10">
      <h2 className=" font-semibold text-indigo-900 mb-4">
        Next.js & Formik with Bootstrap 
      </h2>
      <Row className="bg-indigo-100 p-6 rounded-lg mb-6 shadow-lg">
        <Col>
          <Form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <InputFiled
              type="text"
              name="firstName"
              label="Name"
              onChange={handleChange}
              value={values.firstName}
              placeholder="Enter your name"
              errors={errors}
              touched={touched}
              className="form-control border border-indigo-300 focus:ring-indigo-500"
            />
            {/* Email Field */}
            <InputFiled
              type="email"
              name="email"
              label="Email address"
              onChange={handleChange}
              value={values.email}
              placeholder="name@example.com"
              errors={errors}
              touched={touched}
              className="form-control border border-indigo-300 focus:ring-indigo-500"
            />
            {/* Select Dropdown */}
            <SelectOption
              label="Select a Course"
              name="selectCourse"
              onChange={handleChange}
              value={values.selectCourse}
              options={optionData}
              errors={errors}
              touched={touched}
              className="form-select form-control border border-indigo-300 focus:ring-indigo-500"
            />
            <div className="flex date-radio ">
              {/* Date Picker */}
              <div className="!w-1/2 ">
                <DatePickerFiled
                  label="Select a Date"
                  name="date"
                  selectedDate={values.date}
                  onChange={(date) => setFieldValue("date", date)}
                  errors={errors}
                  touched={touched}
                  className="form-control border border-indigo-300 focus:ring-indigo-500"
                />
              </div>
              {/* Radio Buttons */}
              <div className="!w-1/2 ">
                <RadioGroup
                  label="Pick an Option"
                  name="gender"
                  options={radioOptions}
                  onChange={handleChange}
                  value={values.gender}
                  errors={errors}
                  touched={touched}
                  className="form-check form-control border border-indigo-300 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Textarea Field */}
            <TextAreaFiled
              label="Address"
              rows={3}
              name="textarea"
              onChange={handleChange}
              value={values.textarea}
              errors={errors}
              touched={touched}
              className="form-control border border-yellow-300 focus:ring-yellow-500"
            />
            {/* Checkbox Group */}
            <CheckGroup
              label="Select terms and conditions"
              name="terms"
              options={checkOptions}
              onChange={handleChange}
              value={values.terms}
              errors={errors}
              touched={touched}
              className="form-check border border-blue-300"
            />
            {/* Submit Button */}
            <Form.Group className="text-center">
              <Button
                type="submit"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white"
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default MyForm;
