import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Jumbotron } from "reactstrap";
import yaml from "js-yaml";

import "bootswatch/dist/solar/bootstrap.min.css";

import { Question } from "./components/Question";
import { Intro } from "./components/Intro";
import { normalize } from "./utils";

// load and parse questions from yml
import questionsYml from "./questions.yml";
import { Chrono } from "./components/Chrono";
const questions = yaml.safeLoad(questionsYml);

//60 * 10 * 1000;
const GAME_DURATION = 60 * 10 * 1000; // in ms

// handle game state
const QuestionState = props => {
  const [index, setIndex] = useState(-1);
  const [dateStarted, setDateStarted] = useState(new Date());
  const [chronoDelay, setChronoDelay] = useState(null);
  const reset = () => setIndex(-1);
  const startChrono = () => {
    setDateStarted(new Date());
    setChronoDelay(1000);
  };
  const onChronoFinish = () => {
    setChronoDelay(null);
    setIndex(-2);
  };
  if (index === -2) {
    return <Defaite onClick={() => setIndex(-1)} />;
  } else if (index === -1) {
    return (
      <Intro
        onClick={() => {
          setIndex(0);
          startChrono();
        }}
      />
    );
  } else if (index === questions.length) {
    return <Victoire onClick={reset} />;
  }
  /*const question = {
    ...questions[index],
    normalizedAnswers: questions[index].answers.map(normalize)
  };*/

  const ObjQuestions = questions.map(function(data, index) {
    return [<Question key={index} title={data.title} />];
  });

  //const onQuestionWin = () => setIndex(index + 1);

  return <React.Fragment>{ObjQuestions}</React.Fragment>;
};

function App() {
  return (
    <div className="container">
      <Jumbotron className="text-center">
        <h1>Les tricheurs</h1>
      </Jumbotron>
      <QuestionState />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
