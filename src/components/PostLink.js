import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
    <div>
        <Link to={post.frontmatter.path}>
            <div>
                {post.frontmatter.title}
            </div>
            <div>
                {post.frontmatter.date}
            </div>
        </Link>
    </div>
)
export default PostLink
