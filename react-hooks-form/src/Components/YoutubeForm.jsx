import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

const YoutubeForm = () => {
  //=========================
  // FORM CREATION
  //==========================
  // VARIATION 1: WITHOUT DEFAULT VALUES
  //   const form = useForm();

  // VARIATION 2: WITH DEFAULT VALUES
  const form = useForm({
    defaultValues: {
      username: "rahulGupta899",
      email: "rgupta.jan@outlook.com",
      channel: "seeken",
      social: {
        // NESTED OBJECTS (GROUPING)
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""], // GROUPING IN ARRAY

      pinCodes: [
        // [DYNAMIC FIELDS]
        { pin: "" }, // BY DEFAULT THERE IS ONE PIN
      ],

      skills: [
        { skill: "" }
      ],
      age: 0,
      dob: new Date()
    },
    mode: 'all'
  });

  // VARIATION 3: DEFAULT VALUES FROM API ENDPOINT
  //   const form = useForm({
  //     defaultValues: async()=>{
  //         const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  //         const data = await res.json();
  //                 return {
  //             username: 'RahulGupta899',
  //             email: data.email,
  //             channel: data?.company?.name
  //         }
  //     }
  //   });

  //==========================
  // FORM ACTIONS
  //===========================
  const { 
    register, 
    control, 
    handleSubmit, 
    formState, 
    watch, 
    getValues, 
    setValue ,
    reset,
    trigger
  } = form;
  //   const { name, ref, onChange, onBlur } = register("username");    // INTUITIVE WAY WITHOUT DESTRUCTURING
  const { 
    errors, touchedFields, dirtyFields, isDirty, isValid, isSubmitting, 
    isSubmitted, isSubmitSuccessful, submitCount
  } = formState;

  //======================================
  // DYNAMIC FIELD (PINCODES)
  //=======================================
  const { fields, append, remove } = useFieldArray({
    name: "pinCodes",
    control: control,
  });

  //======================================
  // DYNAMIC FIELD (SKILLS)
  //=======================================
  const { fields: skillsField, append: appendSkill, remove: removeSkill } = useFieldArray({
    name: "skills",
    control: control,
  });

  //=======================================
  // FUNCTION SUMBIT FORM
  //=======================================
  const onYTFormSubmit = (data) => {
    setTimeout(()=>{
      console.log("Executed...")
    },3000)
    console.log("FORM SUCCESSFULLY SUBMITTED: ", data);
  };

  /*=========================================
  =             WATCH VALUE                 =
  ===========================================*/
  const watchUsername = watch("username")
  const watchCombination = watch(["username", "email"])
  useEffect(() => {
    const subscription = watch((value) => {
      console.log("Watch: ", value)
    })
    return () => {
      subscription.unsubscribe();
    }
  }, [watch])


  /*=========================================
  =             GET VALUES                  =
  ===========================================*/
  const handleGetValues = () => {
    console.log("All Fields: ", getValues())
    console.log("Specific Field: ", getValues('social.facebook'))
    console.log("Multiple Fields: ", getValues(['username', 'email', 'random', "phoneNumbers"]))
  }


  /*=========================================
  =             SET VALUE                  =
  ===========================================*/
  const handleSetValue = () => {
    setValue("username", "")
    setValue("username", "Gupta", {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })   // WITH INTERACTIONS
    setValue("pinCodes", null)
  }


  /*=========================================
  =             FORM STATES                 =
  ===========================================*/
  // console.log("Touched Fields: ", touchedFields)
  // console.log("Dirty Fields: ", dirtyFields)
  // console.log("Is Dirty: ", isDirty)
  // console.log("Is Valid: ", isValid)
  console.log({
    isSubmitting, isSubmitted, isSubmitSuccessful, submitCount
  })

  /*==========================================
  =             FORM SUBMISSION ERROR        =
  ===========================================*/
  const handleErrorsOnSubmit = (errors) => {
    console.log("Form Errors: ", errors)
  }


  /*==========================================
  =             RESET FORM FIELDS            =
  ===========================================*/
  const handleResetFieldValues = ()=>{
    reset();
  }

  useEffect(()=>{
    // RESETTING VALUES ONCE FORM IS SUCCESSFULLY SUBMITTED
    if(isSubmitSuccessful) reset();
  },[isSubmitSuccessful])






  return (
    <div>
      <div>
        <div>Watched Username: {watchUsername}</div>
        <div>Watched Combinations: {watchCombination}</div>
      </div>
      <form noValidate onSubmit={handleSubmit(onYTFormSubmit, handleErrorsOnSubmit)}>
        {/* USERNAME */}
        <div className="form-control">
          <label htmlFor="username">Username</label>
          {/* <input type="text" id="username" name={name} ref={ref} onChange={onChange} onBlur={onBlur} /> */}
          {/* SHORT HAND */}
          {/* BY DESTRUCTURING */}
          <input
            type="text"
            id="username"
            {...register("username", {
              required: "Username is required",
            })}
          />
          {/* {<p>{JSON.stringify(errors.username)}</p>}   CIRCULAR ERROR */}
          <p className="error">{errors.username?.message}</p>
        </div>

        {/* EMAIL */}
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
              required: {
                value: true,
                message: "Email is required",
              },

              // CUSTOM VALIDATION
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" ||
                    "Enter a different email"
                  );
                },

                notBlackListedDomain: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("gmail.com") ||
                    "This domain is not supported"
                  );
                },

                notSlang: (fieldValue) => {
                  const SLANG_REGEX = /(bastard|junkie)/i;
                  return (
                    !SLANG_REGEX.test(fieldValue) ||
                    "Enter an appropriate email"
                  );
                },

                emailAllowed: async(fieldValue)=>{
                  const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
                  const data = await response.json();
                  return data?.email !== fieldValue || 'Email already exists'
                }
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        {/* CHANNEL */}
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="channel"
            id="channel"
            {...register("channel", {
              required: "Channel is required",
            })}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>

        {/* TWITTER */}
        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <input
            type="text"
            id="twitter"
            {...register("social.twitter", {
              required: {
                value: true,
                message: "Twitter account is required",
              },
              maxLength: {
                value: 15,
                message: "Maximum 10 characters",
              },
              minLength: {
                value: 5,
                message: "Minimum 5 characters",
              },
            })}
          />
          <p className="error">{errors.social?.twitter?.message}</p>
        </div>

        {/* FACEBOOK */}
        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebok" {...register("social.facebook")} />
          <p className="error">{errors.channel?.message}</p>
        </div>

        {/* PRIMARY PHONE */}
        <div className="form-control">
          <label htmlFor="primary-phone">Primary Number</label>
          <input
            type="text"
            id="primary-phone"
            {...register("phoneNumbers.0")}
          />
        </div>

        {/* SECONDARY PHONE */}
        <div className="form-control">
          <label htmlFor="secondary-phone">Secondary Number</label>
          <input
            type="text"
            id="secondary-phone"
            {...register("phoneNumbers.1", {
              disabled: true,
              // disabled: watch("username") === "",  // CONDITIONAL DISABLED
              required: {
                value: true,
                message: "Secondary Number is Required"
              }
            })}
          />
        </div>

        {/* DYNAMIC PINCODES */}
        <hr />
        <div>
          <label>Pincodes</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div
                  className="form-control"
                  key={field.id}
                  style={{ display: "flex" }}
                >
                  <input type="number" {...register(`pinCodes.${index}.pin`)} />
                  {index > 0 ? (
                    <button
                      type="button"
                      style={{ marginLeft: "10px" }}
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      -
                    </button>
                  ) : (
                    <>
                      {/* ADD NEW PINCODE */}
                      <button
                        type="button"
                        style={{ marginLeft: "10px" }}
                        onClick={() => {
                          append({ pin: "" });
                        }}
                      >
                        +
                      </button>
                    </>
                  )
                  }
                </div>
              );
            })}
          </div>
        </div>
        <hr />


        {/* DYNAMIC SKILLS */}
        <div>
          <label>Skills</label>
          <div>
            {skillsField.map((field, index) => {
              return (
                <div
                  className="form-control"
                  key={field.id}
                  style={{ display: "flex" }}
                >
                  <input type="text" {...register(`skills.${index}.skill`)} />
                  {index > 0 ? (
                    <button
                      type="button"
                      style={{ marginLeft: "10px" }}
                      onClick={() => {
                        removeSkill(index);
                      }}
                    >
                      -
                    </button>
                  ) :
                    (
                      <>
                        {/* ADD NEW SKILL */}
                        <button
                          type="button"
                          style={{ marginLeft: "10px" }}
                          onClick={() => {
                            appendSkill({ skill: "" });
                          }}
                        >
                          +
                        </button>
                      </>
                    )

                  }
                </div>
              );
            })}

          </div>
        </div>
        <hr />

        {/* AGE */}
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input id='age' type="number" {...register('age', {
            valueAsNumber: true,
            required: 'Age is required'
          })} />
          <p className="error">{errors?.age?.message}</p>
        </div>


        {/* DOB */}
        <div className="form-control">
          <label htmlFor="dob">DOB</label>
          <input id='dob' type="date" {...register('dob', {
            valueAsDate: true,
            required: 'DOB is required'
          })} />
          <p className="error">{errors?.dob?.message}</p>
        </div>

        {/* <button disabled={!isDirty || !isValid || isSubmitting}>Submit</button> */}
        <button>Submit</button>
        <button type="button" onClick={handleResetFieldValues}>Reset</button>
        <button type="button" onClick={handleGetValues}>Get Values</button>
        <button type="button" onClick={handleSetValue}>Set Value</button>
        <div style={{display:'flex'}}>
          <button type="button" onClick={()=>trigger()}>Trigger Validations</button>
          <button type="button" onClick={()=>trigger('social')}> Twitter Validation</button>
        </div>
      </form>
      <DevTool control={control} /> {/*TIE YOUTUBE FORM WITH FORM DEVTOOLS */}
    </div>
  );
};

export default YoutubeForm;
