import React from "react";
import { Button } from "reactstrap";

export const Intro = ({ onClick }) => (
  <div>
    <h1>Introduction</h1>
    <br />
    <br />
    <br />
    <br />
    <br />
    <Button size="lg" onClick={onClick} color="warning">
      commencer
    </Button>
  </div>
);
