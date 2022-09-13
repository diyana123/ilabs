import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import Section from "./Section";
import Heading from "./Heading";
// import Questions from './Questions';
import Table from "./Table";

// function Home() {
export default function Home(props) {
  const { data } = props;
  console.log(props);
  const [showAddQuestions, setShowAddQuestions] = useState(false);
  const [questions, setQuestions] = useState([]);

  const ques = [];

  console.log(this);

  useEffect(() => {
    /*Make the app fetch the items assynchronously*/
    fetch("http://localhost:3004/faq")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

  const addQuestion = async (question) => {
    const res = await fetch("http://localhost:3004/faq", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(question),
    });
    const data = await res.json();
    setQuestions([...questions, data]);
  };

  return (
    <>
      <Heading
        onAdd={() => setShowAddQuestions(!showAddQuestions)}
        showAdd={showAddQuestions}
        addQues={addQuestion}
      />
      <Section />
      <Table
        // onAdd={() => setShowAddQuestions(!showAddQuestions)}
        // showAdd={showAddQuestions}
        questions={questions}
      />
      {/* <Questions /> */}
    </>
  );
}
