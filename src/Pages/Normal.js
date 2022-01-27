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

//Error Component
const Error = ({ children }) => <p style={{ color: "red" }}>{children}</p>;

const Normal = () => {
  const PROFESSIONS = [
    "Frontend Developer",
    "Backend Developer",
    "Devops Engineer",
  ];

  const defaultValues = {
    firstName: "",
    lastName: "",
    agree: false,
    profession: "",
    gender: "",
  };

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="wrapper">
      <h1>Normal Form Example</h1>
      <Link to="/dynamic">
        <ButtonComponent cssClass="e-warning">Go to Dynamic</ButtonComponent>
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label>First Name</label>
          {/* include validation with required or other standard HTML validation rules */}
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) => (
              <TextBoxComponent
                placeholder="Enter your First Name"
                // floatLabelType="Auto"
                change={({ value }) => field.onChange(value)}
                value={field.value}
              />
            )}
          />
          {errors.firstName && <Error>This field is required</Error>}
        </section>
        <section>
          <label>Last Name</label>
          {/* include validation with required or other standard HTML validation rules */}
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) => (
              <TextBoxComponent
                placeholder="Enter your Last Name"
                // floatLabelType="Auto"
                change={({ value }) => field.onChange(value)}
                value={field.value}
              />
            )}
          />
          {errors.lastName && <Error>This field is required</Error>}
        </section>
        <section>
          <label>Gender</label>
          {/* include validation with required or other standard HTML validation rules */}

          <Controller
            name="gender"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) => (
              <div>
                <br />
                <RadioButtonComponent
                  label="Male"
                  value="male"
                  onChange={(value) => field.onChange(value)}
                  checked={field.value === "male"}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <RadioButtonComponent
                  label="Female"
                  value="female"
                  onChange={({ value }) => field.onChange(value)}
                  checked={field.value === "female"}
                />
              </div>
            )}
          />

          {errors.gender && <Error>This field is required</Error>}
        </section>
        <section>
          <label>Profession</label>
          {/* include validation with required or other standard HTML validation rules */}
          <Controller
            name="profession"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) => (
              <DropDownListComponent
                dataSource={PROFESSIONS}
                select={({ itemData }) => {
                  field.onChange(itemData.value);
                }}
                value={field.value}
              />
            )}
          />
          {errors.profession && <Error>This field is required</Error>}
        </section>

        <section>
          {/* include validation with required or other standard HTML validation rules */}
          <Controller
            name="agree"
            control={control}
            rules={{ required: true }}
            defaultValue={false}
            render={({ field }) => (
              <CheckBoxComponent
                label="I hereby agree to the terms."
                onChange={(e) => field.onChange(e.target.checked)}
                checked={field.value}
              />
            )}
          />
          {errors.agree && <Error>This field is required</Error>}
        </section>
        <div style={{ textAlign: "center" }}>
          <ButtonComponent type="submit" cssClass="e-success">
            Success
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default Normal;
