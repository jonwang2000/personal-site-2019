import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import HomeButton from "../components/HomeButton"

const BlogPost = styled.div`
    grid-column: 2/-2;
    line-height: 1.8;
    width: 100%;
`

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout className="blog-post-container">
            <Helmet>
                <title>{frontmatter.title}</title>
            </Helmet>
            <BlogPost className="blog-post">
                <HomeButton/>
                <h1>{frontmatter.title}</h1>
                <h3>{frontmatter.date}</h3>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </BlogPost>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`
