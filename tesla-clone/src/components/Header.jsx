import { React, useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)

    return (
        <>
            <Container>
                <a>
                    <img src="/images/logo.svg" alt="" />
                </a>

                <Menu>
                    <p>
                        <a href="#model-s">Model S</a>
                        <a href="#model-3">Model 3</a>
                        <a href="#model-x">Model X</a>
                        <a href="#model-y">Model Y</a>
                    </p>
                </Menu>

                <RightMenu>
                    <a href="#">Shop</a>
                    <a href="#">Tesla Account</a>
                    <CustomMenu>
                        <FontAwesomeIcon icon={faBars} onClick={() => setBurgerStatus(true)} />
                    </CustomMenu>
                </RightMenu>

                <BurgerNav show={burgerStatus}>
                    <CloseWrapper>
                        <CustomClose>
                            <FontAwesomeIcon
                                icon={faXmark}
                                onClick={() => setBurgerStatus(false)}
                            />
                        </CustomClose>
                    </CloseWrapper>
                    <li>
                        <a href="#">Existing Inventory</a>
                    </li>
                    <li>
                        <a href="#">Used Inventory</a>
                    </li>
                    <li>
                        <a href="#">Trade-in</a>
                    </li>
                    <li>
                        <a href="#">Cybertruck</a>
                    </li>
                    <li>
                        <a href="#">Roadaster</a>
                    </li>
                    <li>
                        <a href="#">Charge Stations</a>
                    </li>
                    <li>
                        <a href="#">Accesibilities</a>
                    </li>
                    <li>
                        <a href="#">Settings</a>
                    </li>
                </BurgerNav>
            </Container>
        </>
    )
}

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    a {
        cursor: pointer;
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a {
        font-weight: 600;
        padding: 0 20px;
        flex-wrap: nowrap;
    }

    @media (max-width: 800px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled.div`
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    padding-left: 10px;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    width: 300px;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
    transition: all 0.3s ease-in-out;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    a {
        font-weight: 600;
    }
`

const CustomClose = styled.div`
    margin-right: 10px;
    font-size: 20px;
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
