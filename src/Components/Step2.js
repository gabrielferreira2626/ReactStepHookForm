import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

export default () => {
  const { state, actions } = useStateMachine({ updateAction });
  const { handleSubmit, register } = useForm({
    defaultValues: state.yourDetails,
  });
  const { push } = useHistory();

  //Save Data
  const onSubmit = (data) => {
    actions.updateAction(data);
    push("/step3");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2</h2>
      <label>
        Last Name:
        <input name="lastName" ref={register} />
      </label>
      <button type="submit">Next</button>
    </form>
  );
};
