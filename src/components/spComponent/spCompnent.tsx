import React, { useState, FormEvent } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Field } from "react-final-form";
import { ValidationErrors } from "final-form";

const SPComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (values: typeof formData) => {
    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSeJEGULivJt_8JElpzeFGiliM1a1cm2XbcyHUPt_Qmh8-9BWA/formResponse?usp=pp_url&entry.506792323=${values.firstName}&entry.553639267=${values.lastName}&entry.211784405=${values.email}&entry.2046104779=${values.phoneNumber}&entry.90924311=${values.message}`;

    try {
      await axios.post(googleFormUrl);
      toast.success("Cảm ơn bạn đã nhập!");

      console.log("Form submitted successfully");
      setTimeout(() => {
        window.location.reload();
      }, 3000); // Delay 3 seconds before reloading
    } catch (error) {
      toast.success("Form submitted successfully!");
      console.error("Error submitting form", error);
    }
  };

  const validate = (values: typeof formData): ValidationErrors => {
    const { firstName, lastName, email, phoneNumber, message } = values;
    const errors: ValidationErrors = {};

    if (!firstName) errors.firstName = "Vui lòng điền tên";
    if (!lastName) errors.lastName = "Vui lòng điền họ";
    if (!email) errors.email = "Vui lòng diền email";
    if (!phoneNumber) {
      errors.phoneNumber = "Vui lòng điền số điện thoại";
    } else if (!/^[0-9]+$/.test(phoneNumber)) {
      errors.phoneNumber = "Số điện thoại không đúng định dạng";
    } else if (!phoneNumber.startsWith("0")) {
      errors.phoneNumber = "Số điện thoại phải bắt đầu bằng số 0";
    } else if (phoneNumber.length !== 10) {
      errors.phoneNumber = "Số điện thoại phải có độ dài 10 số";
    }
    if (!message) errors.message = "Vui lòng nhập ý kiến";

    return errors;
  };

  return (
    <div className="pt-12 max-xl:mx-4">
      <ToastContainer />
      <div className="flex flex-col lg:flex-row max-lg:gap-2">
        <div className="flex flex-col items-center lg:items-center lg:justify-center">
          <p className="text-4xl text-white w-[461px] max-lg:w-full max-lg:text-2xl">
            Welcome to our support page!
          </p>
          <p className="text-[#999999] w-[412px] py-4 max-lg:w-full">
            We're here to help you with any problems you may be having with our product.
          </p>
          <img src="src/images/Sub Container.png" alt="" />
        </div>

        <Form
          onSubmit={handleSubmit}
          validate={validate}
          initialValues={formData}
          render={({ handleSubmit, submitting }) => (
            <form
              onSubmit={handleSubmit}
              className="text-white w-[850px] max-lg:w-full max-lg:mt-4 border-[#262626] border-2 rounded-lg p-3 bg-[#00000]"
            >
              <div className="mx-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mx-auto pt-4">
                  <Field name="firstName">
                    {({ input, meta }) => (
                      <div>
                        <label htmlFor="firstName" className="text-lg">
                          First name
                        </label>
                        <input
                          {...input}
                          type="text"
                          className="border-[#262626] border-2 rounded-lg p-3 mt-2 bg-[#1a1a1a] w-full text-sm"
                          placeholder="Enter First Name"
                        />
                        {meta.touched && meta.error && (
                          <span className="text-red-600">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="lastName">
                    {({ input, meta }) => (
                      <div>
                        <label htmlFor="lastName" className="">
                          Last name
                        </label>
                        <input
                          {...input}
                          type="text"
                          className="border-[#262626] border-2 rounded-lg p-3 mt-2 bg-[#1a1a1a] w-full text-sm"
                          placeholder="Enter Last Name"
                        />
                        {meta.touched && meta.error && (
                          <span className="text-red-600">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mx-auto pt-8">
                  <Field name="email">
                    {({ input, meta }) => (
                      <div>
                        <label htmlFor="email" className="text-lg">
                          Email
                        </label>
                        <input
                          {...input}
                          type="email"
                          className="border-[#262626] border-2 rounded-lg p-3 mt-2 bg-[#1a1a1a] w-full text-sm"
                          placeholder="Enter Email"
                        />
                        {meta.touched && meta.error && (
                          <span className="text-red-600">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="phoneNumber">
                    {({ input, meta }) => (
                      <div>
                        <label htmlFor="phoneNumber" className="text-lg">
                          Phone Number
                        </label>
                        <div className="flex">
                          <div className="w-22 border-[#262626] border-2 rounded-lg mt-2 flex items-center px-2 bg-[#1a1a1a] mr-2">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png?20170626140925"
                              alt=""
                              className="w-10 h-6"
                            />
                            <i className="fa-solid fa-angle-down p-1"></i>
                          </div>
                          <input
                            {...input}
                            type="number"
                            min={0}
                            className="border-[#262626] border-2 rounded-lg p-3 mt-2 bg-[#1a1a1a] w-full text-sm"
                            placeholder="Enter Phone number"
                          />
                        </div>
                        {meta.touched && meta.error && (
                          <span className="text-red-600">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="pt-8">
                  <Field name="message">
                    {({ input, meta }) => (
                      <div>
                        <label htmlFor="message" className="text-lg">
                          Message
                        </label>
                        <textarea
                          {...input}
                          className="border-[#262626] border-2 rounded-lg p-3 mt-2 bg-[#1a1a1a] w-full text-sm"
                          placeholder="Enter message"
                          rows={5}
                        />
                        {meta.touched && meta.error && (
                          <span className="text-red-600">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="pt-10 flex justify-between items-center">
                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="size-3 rounded border-gray-300"
                    />
                    <span className="text-[#999999] pl-2">
                      I agree with Terms of Use and Privacy Policy
                    </span>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-block rounded-lg border border-red-600 bg-red-600 px-6 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring"
                      disabled={submitting}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default SPComponent;
