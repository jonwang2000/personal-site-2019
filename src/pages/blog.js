import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import PostLink from "../components/PostLink"

const Wrapper = styled.div`
    grid-column: 2/-2;
`

export default ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Posts = edges
        .map(edge => <PostLink key={edge.node.id} post={edge.node} flat={false}/>)
        .slice(0, 5)

    return <Layout>
        <Helmet>
            <title>Blog Posts</title>
        </Helmet>
        <Wrapper>
            <h1>Blog</h1>
            <p>Just some writing of mine. Who knows if it's worth reading?</p>
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