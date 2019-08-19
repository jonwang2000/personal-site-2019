import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import Section from "../components/Section"
import PostLink from "../components/PostLink"
import Category from "../components/Category"

// Styled Components
const Upper = styled.div`
    grid-column: 1/-1;
    line-height: 160%;
    text-align: justify;
`

const Logo = styled.h1`
    font-size: 4em;
    line-height: 0.5;
`

// Helper functions
const dataToBlockList = data => {
    return data.map((block, index) => (
        <Section
            key={index}
            link={block.link}
            title={block.title}
            subtitle={block.subtitle}
            main={block.main}
            italics={block.italics}
        />
    ))
}

export default ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Posts = edges
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
        .slice(0, 5)

    return (
        <Layout>
            <Helmet>
                <title>Jonathan Wang</title>
            </Helmet>
            <Upper>
                <Logo>JW</Logo>
                <h1>Jonathan Wang</h1>
                <h2>Mathematics, UW 2023</h2>

                <p>
                    I'm a mathematics student at the University of Waterloo,
                    working on my programming and math skills. I'm always
                    looking to learn new things, and I enjoy hands-on
                    experiences.
                </p>
                <p>
                    I'm a fan of video games, cooking, and the Toronto Raptors.
                </p>
            </Upper>

            <Category title="Experience">{dataToBlockList(expData)}</Category>

            <Category title="Projects">{dataToBlockList(projData)}</Category>

            <Category title="Blog">
                {Posts}
                <p>see more here wow</p>
            </Category>
        </Layout>
    )
}

const expData = [
    {
        title: "Software Tester",
        subtitle: "Palette Gear",
        main:
            "tested stuffas df;lkajd;fja ds;lk jfa;lsdkjfa ;ldskjfa ;ldksjfa;lskdj fa; lkjdfl;",
        italics: "May 2019 - Aug 2019",
        link: "#",
    },
]

const projData = [
    {
        title: "Project Title",
        subtitle: "project sasdf a",
        main:
            "prasdfasdfasdfasd asdf asdf asdf aasdfasdfasdfasdsdf asdfoject main",
        italics: "wow technologies",
        link: "#",
    },
    {
        title: "Project Title",
        subtitle: "project subtitle",
        main: "project main",
        italics: "wow technologies",
        link: "#",
    },
    {
        title: "Project Title",
        subtitle: "project subtitle",
        main: "project main",
        italics: "wow technologies",
        link: "#",
    },
]

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
