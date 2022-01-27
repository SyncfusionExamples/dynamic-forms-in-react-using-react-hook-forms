import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import {
  CheckBoxComponent,
  RadioButtonComponent,
  ButtonComponent,
} from "@syncfusion/ej2-react-buttons";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-react-dropdowns/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "../App.css";
import { Link } from "react-router-dom";

const dynamicForm = {
  firstName: {
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
    defaultValue: "",
    rules: {
      required: true,
    },
  },
  lastName: {
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
    defaultValue: "",
    rules: {
      required: true,
    },
  },
  gender: {
    label: "Gender",
    type: "radio",
    options: ["male", "female"],
    defaultValue: "",
    rules: {
      required: true,
    },
  },
  profession: {
    label: "Profession",
    type: "dropdown",
    options: ["Frontend Developer", "Backend Developer", "Devops Engineer"],
    defaultValue: "",
    rules: {
      required: true,
    },
  },
  agree: {
    type: "checkbox",
    label: "",
    checkboxLabel: "I hereby agree to the terms.",
    defaultValue: false,
    rules: {
      required: true,
    },
  },
};

//Error Component
const Error = ({ children }) => <p style={{ color: "red" }}>{children}</p>;

const Input = ({ value, onChange, type, ...rest }) => {
  switch (type) {
    case "text":
      return (
        <TextBoxComponent
          placeholder={rest?.placeholder}
          change={({ value }) => onChange(value)}
          value={value}
        />
      );
    case "radio":
      return rest?.options.map((e) => (
        <RadioButtonComponent
          key={e}
          label={e}
          value={e}
          onChange={(value) => onChange(value)}
          checked={value === e}
        />
      ));
    case "dropdown":
      return (
        <DropDownListComponent
          dataSource={rest?.options}
          select={({ itemData }) => {
            onChange(itemData.value);
          }}
          value={value}
        />
      );

    case "checkbox":
      return (
        <CheckBoxComponent
          label={rest?.checkboxLabel}
          onChange={(e) => onChange(e.target.checked)}
          checked={value}
        />
      );

    default:
      return null;
  }
};

const Dynamic = () => {
  const {
    handleSubmit,
    control,
    // watch,
    formState: { errors },
  } = useForm();

  const formInputs = Object.keys(dynamicForm).map((e) => {
    const { rules, defaultValue, label } = dynamicForm[e];

    return (
      <section key={e}>
        <label>{label}</label>
        <Controller
          name={e}
          control={control}
          rules={rules}
          defaultValue={defaultValue}
          render={({ field }) => (
            <div>
              <Input
                value={field.value}
                onChange={field.onChange}
                {...dynamicForm[e]}
              />
            </div>
          )}
        />
        {errors[e] && <Error>This field is required</Error>}
      </section>
    );
  });

  const onSubmit = (data) => console.log(data);

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="wrapper">
      <h1>Dynamic Form Example</h1>
      <Link to="/normal">
        <ButtonComponent cssClass="e-success">Go to Normal</ButtonComponent>
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formInputs}
        <div style={{ textAlign: "center" }}>
          <ButtonComponent type="submit" cssClass="e-success">
            Success
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default Dynamic;
