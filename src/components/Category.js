import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    grid-column: 1/-1;
    padding-top: 1em;
    @media (min-width: 900px) {
        grid-column: span 4;
    }
`

const CatTitle = styled.h2`
    color: #5fefa8;
    font-weight: normal;
    font-family: "monaco", "Lucida Console", monospace;
`

const Category = props => {
    const { title } = props

    return (
        <Wrapper>
            <CatTitle>{`> ${title}`}</CatTitle>
            {props.children}
        </Wrapper>
    )
}

export default Category
