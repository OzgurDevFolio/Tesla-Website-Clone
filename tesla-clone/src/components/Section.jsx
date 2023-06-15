import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

export default function Section({ title, description, leftButtonText, rightButtonText, bgImg }) {
    return (
        <>
            <Wrap bgImage={bgImg}>
                <Fade bottom>
                    <ItemText>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </ItemText>
                    <Buttons>
                        <ButtonGroup>
                            <LeftButton>{leftButtonText}</LeftButton>
                            {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
                        </ButtonGroup>
                        <DownArrow src="/images/down-arrow.svg" />
                    </Buttons>
                </Fade>
            </Wrap>
        </>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/images/model-s.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${(props) => `url("/images/${props.bgImage}")`};
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    font-size: 14px;
    font-weight: 500;
`

const RightButton = styled(LeftButton)`
    background-color: #fff;
    opacity: 0.65;
    color: #000;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    cursor: pointer;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``
