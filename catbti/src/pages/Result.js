import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Button } from 'react-bootstrap'
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/ResultData"

const Result = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');
    const [resultData, setResultData] = useState({});

    console.log(mbti);

    useEffect(() => {
        const result = ResultData.find((s) => s.best === mbti);
        setResultData(result);
    }, [mbti]);

    const handleClickButton = () => {
        navigate("/");
    }


    return (
        <Wrapper>
            <Header>집사판별기</Header>
            <Contents>
                <Title>
                    결과보기
                </Title>
                <LogoImage>
                    <img src={resultData.image} width={350} height={350} className="rounded-circle"></img>
                </LogoImage>
                <Desc>
                    당신의 고양이는 {resultData.name} 입니다
                </Desc>
                <Button style={{ fontFamily: "SBAggroM" }} onClick={handleClickButton}>
                    테스트로 돌아가기!
                </Button>
            </Contents>
        </Wrapper>
    )
}


export default Result;

const Wrapper = styled.div
    `
    background-color: yellow;
    height: 100vh;
    width: 100%;
`

const Header = styled.div
    `
    background-color: red;
    font-size: 40pt;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: SBAggroM;
`

const Contents = styled.div
    `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Title = styled.div
    `
    background-color: green;
    font-size: 30pt;
    margin-top: 40px;
`

const LogoImage = styled.div
    `
    margin-top: 10px;
`

const Desc = styled.div
    `
    font-size: 20pt;
    margin-top: 20px;
`
