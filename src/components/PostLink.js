import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
    padding-bottom: 1em;
`

const PostLink = props => {
    const { post, flat } = props

    if (flat) {
        return (
            <Wrapper>
                <Link to={post.frontmatter.path}>
                    <div>
                        {post.frontmatter.title} - {post.frontmatter.date}
                    </div>
                </Link>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                <Link to={post.frontmatter.path}>
                    <div>{post.frontmatter.title}</div>
                    <div>{post.frontmatter.date}</div>
                </Link>
            </Wrapper>
        )
    }
}

export default PostLink
