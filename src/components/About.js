import React from "react";
import Links from "./Links";

function About(props) {
  return (
      <>
      <div id="about">
        <h2>About Me</h2></div>
      <div id="about">
      {props.bio && props.bio.length >= 1 ? <p>{props.bio}</p> : null}
      <div><img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github={props.links.github} linkedin={props.links.linkedin} /></div>
      </div>
      </>
  );
}

export default About;
