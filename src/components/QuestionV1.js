import React, { Component } from "react";
import {
  Alert,
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";

import { normalize } from "../utils";
import { array } from "prop-types";

const inputStyle = {
  fontSize: 24
};

const FormInput = React.forwardRef((props, ref) => (
  <Form>
    <FormGroup>
      <Input
        autoComplete="off"
        style={inputStyle}
        ref={ref}
        placeholder="..."
        {...props}
      />
    </FormGroup>
  </Form>
));

export const Question = ({
  title,
  onSuccess,
  normalizedAnswers,
  onWin,
  isLastQuestion
}) => {
  const [value, setValue] = useState("");
  //const [error, setError] = useState(false);
  //const isValidAnswer = answer => normalizedAnswers.includes(normalize(answer));
  //console.log("onSucess", onSuccess);

  const onChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  };

  /*const onSuccessClick = () => {
    setValue("");
    onWin();
  };*/

  /*if (isValidAnswer(value)) {
    if (onSuccess && Array.isArray(onSuccess)) {
      onSuccess.forEach(cb => {
        if (cb.type === "fetch") {
          fetch(cb.url)
            .then(r => r.json())
            .then(console.log)
            .catch(console.log);
        }
      });
    }
    if (isLastQuestion) {
      // shortcut intermediate win screen for last question
      onWin();
    }
    //return <BonneReponse onClick={onSuccessClick} />;
  }*/

  return (
    <Card>
      <CardBody>
        <CardTitle>
          <h2>{title}</h2>
        </CardTitle>
        <FormInput
          value={value}
          onChange={onChange}
          onKeyDown={e => {
            /*if (e.keyCode === 13) {
              if (!isValidAnswer(value)) {
                setError(true);
                setTimeout(() => {
                  setError(false);
                }, 3000);
              }
              e.preventDefault();
            }*/
          }}
        />
        {error && <Alert color="warning">Mauvaise réponse</Alert>}
      </CardBody>
    </Card>
  );
};
