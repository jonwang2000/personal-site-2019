import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    grid-column: 1/-1;
    @media (min-width: 900px) {
        grid-column: span 4;
    }
`

const Category = (props) => {
    const { title } = props

    return (
        <Wrapper>
            <h2>{title}</h2>
            {props.children}
        </Wrapper>
    )
}

export default Category
