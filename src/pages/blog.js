import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import PostLink from "../components/PostLink"

const Wrapper = styled.div`
    grid-column: 2/-2;
`

const Title = styled.h1 `
    color: #5fefa8;
    font-weight: normal;
    font-family: "monaco", "Lucida Console", monospace;
`

export default ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const [underline, setUnderline] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            if (underline === "") {
                setUnderline("_")
            } else {
                setUnderline("")
            }
        }, 500)

        return () => {
            clearInterval(interval)
        }
    })
    const Posts = edges
        .map(edge => <PostLink key={edge.node.id} post={edge.node} flat={false}/>)
        .slice(0, 5)

    return <Layout>
        <Helmet>
            <title>Blog Posts</title>
        </Helmet>
        <Wrapper>
            <Title>> Blog{underline}</Title>
            <h3>Just some writing of mine. Who knows if it's worth reading?</h3>
            {Posts}
        </Wrapper>
    </Layout>
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                    }
                }
            }
        }
    }
`