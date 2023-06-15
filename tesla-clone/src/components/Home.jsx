import React from 'react'
import styled from 'styled-components'
import Section from './Section'

export default function Home() {
    return (
        <>
            <Container>
                <Section
                    title="Model S"
                    description="Order Online For Touchless Delivery"
                    leftButtonText="Custom Order"
                    rightButtonText="Existing Inventory"
                    bgImg="model-s.jpg"
                />
                <Section
                    title="Model Y"
                    description="Order Online For Touchless Delivery"
                    leftButtonText="Custom Order"
                    rightButtonText="Existing Inventory"
                    bgImg="model-y.jpg"
                />
                <Section
                    title="Model 3"
                    description="Order Online For Touchless Delivery"
                    leftButtonText="Custom Order"
                    rightButtonText="Existing Inventory"
                    bgImg="model-3.jpg"
                />
                <Section
                    title="Model X"
                    description="Order Online For Touchless Delivery"
                    leftButtonText="Custom Order"
                    rightButtonText="Existing Inventory"
                    bgImg="model-x.jpg"
                />
                <Section
                    title="Lowest Cost Solar Panels in America"
                    description="Money-Back Guarantee"
                    bgImg="solar-panel.jpg"
                    leftButtonText="Order Now"
                    rightButtonText="Learn More"
                />

                <Section
                    title="Solar For New Roofs"
                    description="Solar Roof Costs Less Than a New Plus Solar Panels"
                    bgImg="solar-roof.jpg"
                    leftButtonText="Order Now"
                    rightButtonText="Learn More"
                />
                <Section
                    title="Accessories"
                    description=""
                    bgImg="accessories.jpg"
                    leftButtonText="Shop Now"
                />
            </Container>
        </>
    )
}

const Container = styled.div`
    height: 100vh;
`
