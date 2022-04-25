import React from "react";
import styled from 'styled-components';
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const handleClickButton = () => {
        // useNavigate 를 이용해 페이지 이동!
        navigate("/question");
    }

    return (
        <Wrapper>
            <Header>헤더</Header>
            <Contents>
                <Title>
                    타이틀
                </Title>
                <LogoImage>
                    <img src="https://source.unsplash.com/featured/?cat" width={350} height={350} className="rounded-circle"></img>
                </LogoImage>
                <Desc>
                    MBTI 를 기반으로 하는 나랑 잘맞는 고양이 찾기
                </Desc>
                <Button style={ {fontFamily: "SBAggroM"} } onClick={handleClickButton}>
                    테스트 시작하기
                </Button>
            </Contents>
        </Wrapper>
    )
}

export default Home;

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
