import MostViewPosts from "../../components/sections/MostViewPosts/MostViewPosts"
import PostList from "../../components/sections/PostsList/PostsList"
import { BlogContainer } from "./styled"

function Blog() {
    return (
        <BlogContainer>
            <PostList />
            <MostViewPosts/>
        </BlogContainer>
    )
}

export default Blog