import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

const HookForm = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
      phNumbers: [{ number: "" }],
    },

    // defaultValues: async () => {
    //   const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    //   console.log(response.data,"adsfgfsd");
    //   return {
    //     username: "batman",
    //     email: response.data.email,
    //     channel: "sdsdf"
    //   }
    // }
  });
  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValues,
  } = form;
  const { errors } = formState;

  // invoke isFieldArray, pass an object as an argument, returns a function called append
  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  const handleGetValues = () => {
    console.log("Get Values", getValues("social"));
  };

  useEffect(() => {
    const subscription = watch((value) => {
      console.log(value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // const watchUsername = watch(["username", "email"]);

  renderCount++;

  return (
    <div>
      <h1>Hook Form Example ({renderCount / 2})</h1>
      {/* <h2>Welcome: {watchUsername}</h2> */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            {...register("username", { required: "Username is required!" })}
          />
          <p className="error">{errors.username?.message}</p>
          <br />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Email is in Invalid Format",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" ||
                    "Enter a different email Address"
                  );
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("baddomain.com") ||
                    "This domain is not supported."
                  );
                },
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
          <br />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel:</label>
          <input
            type="text"
            id="channel"
            {...register("channel", { required: "Channel field is required!" })}
          />
          <p className="error">{errors.channel?.message}</p>
          <br />
        </div>

        <div className="form-control">
          <label htmlFor="twitter">twitter:</label>
          <input type="text" id="twitter" {...register("social.twitter")} />
          <br />
          <br />
        </div>

        <div className="form-control">
          <label htmlFor="facebook">facebook:</label>
          <input type="text" id="facebook" {...register("social.facebook")} />
          <br />
          <br />
        </div>

        <div className="form-control">
          <label htmlFor="primary-phone">Primary Phone Number:</label>
          <input
            type="text"
            id="primary-phone"
            {...register("phoneNumbers[0]")}
          />
          <br />
          <br />
        </div>

        <div className="form-control">
          <label htmlFor="secondary-phone">Secondary Phone Number:</label>
          <input
            type="text"
            id="secondary-phone"
            {...register("phoneNumbers[1]")}
          />
          <br />
        </div>

        <div>
          <label htmlFor="">List of phone numbers</label>

          <div>
            {/** field refers to each object in the values array, it will render each object as a form control*/}
            {fields.map((field, index) => {
              return (
                <div className="form-control" key={field.id}>
                  <input
                    type="text"
                    {...register(`phNumbers.${index}.number`)}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      Remove Phone Number
                    </button>
                  )}
                </div>
              );
            })}

            <button type="button" onClick={() => append({ number: "" })}>
              Add Phone Number
            </button>
          </div>
        </div>
        <button>Submit</button>
        <button type="button" onClick={handleGetValues}>
          {" "}
          Get Values{" "}
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default HookForm;
