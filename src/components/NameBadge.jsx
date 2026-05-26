/* "Build a name badge that updates in real time as the user types their name and job title."
Requirements:

Track the name and job title in state — both starting as empty strings
Use useEffect to update document.title to show the name whenever it changes
Display both values on the screen as a live preview*/

import { useState, useEffect } from "react";

export default function NameBadge() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  useEffect(() => {
    document.title = name;
  }, [name, jobTitle]);
  return (
    <>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>Job Title: </label>
      <input
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      ></input>

      <div>
        <h1>{name}</h1>
        <h3>{jobTitle}</h3>
      </div>
    </>
  );
}
