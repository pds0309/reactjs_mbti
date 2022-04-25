import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/QuestionData";

const Question = () => {

    const [questionNo, setQuestionNo] = useState(0);
    const [totalScore, setTotalScore] = useState([
            {id: "EI", score: 0},
            {id: "SN", score: 0},
            {id: "TF", score: 0},
            {id: "JP", score: 0},
    ]);
    const navigate = useNavigate();
    console.log("Current Progression :", questionNo);

    const handleClickButton = (no, type) => {

        const newScore = totalScore.map(s => s.id === type ? {id: s.id, score: s.score + no} : s);
        
        setTotalScore(newScore);
        
        if(QuestionData.length === questionNo + 1) {
            navigate("/result");
            // return;
        }
        setQuestionNo(questionNo + 1);
    }

    const handleClickButtonB = (no) => {
        setQuestionNo(questionNo + 1);
    }

    return (
        <Wrapper>
            <ProgressBar striped variant="danger" now={(questionNo / QuestionData.length) * 100} />
            <Title>{QuestionData[questionNo].title}</Title>
            <ButtonGroup>
                <Button onClick={() => handleClickButton(1, QuestionData.type)} style={{ width: "40%", minHeight: "200px", fontSize: "15pt" }}>{QuestionData[questionNo].answera}</Button>
                <Button onClick={() => handleClickButton(0, QuestionData.type)} style={{ width: "40%", minHeight: "200px", fontSize: "15pt", marginLeft: "20px" }}>{QuestionData[questionNo].answerb}</Button>
            </ButtonGroup>
        </Wrapper>
    )
}

export default Question;

const Wrapper = styled.div
    `
    height: 100vh;
    width: 100%;
`

const Title = styled.div
    `
    font-size: 30pt;
    margin-top: 40px;
    display: flex;
    justify-content: center;
`

const ButtonGroup = styled.div
    `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: "SBAggroM";
`