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
    margin-top: 0.25em;
    margin-bottom: 0.5em;
`

const Title = styled.h1`
    padding: 0;
    margin: 0;
    margin-bottom: 0.3em;
`

const Subtitle = styled.h2``

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
                <Title>Jonathan Wang</Title>
                <Subtitle>Mathematics, UW 2023</Subtitle>

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

            <Category title="Experience">
                {dataToBlockList(expData)}
                <a href="resume.pdf">Full résumé</a>
            </Category>

            <Category title="Projects">
            {dataToBlockList(projData)}
                <a href="https://www.github.com/jonwang2000">See more on Github</a>
            </Category>

            <Category title="Blog">
                {Posts}
                <a href="./blog">More posts</a>
            </Category>
        </Layout>
    )
}

const expData = [
    {
        title: "Software Developer Co-op",
        subtitle: "Palette Gear",
        main:
            "Implemented error/minidump service in Node.js backend, developed integrations for Qt front end and Adobe CC extension",
        italics: "May 2019 - Aug 2019",
        link: "https://www.palettegear.com",
    },
]

const projData = [
    {
        title: "Replacer",
        subtitle: "",
        main:
            "Webapp that transforms text live based on user-inputted rules, designed with Material UI",
        italics: "React, Javascript, CSS",
        link: "https://replacer.netlify.com",
    },
    {
        title: "Two Player Snake",
        subtitle: "",
        main: "Classic game of snake with additional head-to-head multiplayer mode",
        italics: "Pygame, Python",
        link: "https://github.com/jonwang2000/twoPlayerSnake",
    },
    {
        title: "Goosify",
        subtitle: "",
        main: "Chrome extension that turns any and all images on a page into an image of a goose",
        italics: "wow technologies",
        link: "https://github.com/jonwang2000/goosify",
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
