import { usePosts } from "../../../hooks/usePosts";
import { IPost } from "../../../interfaces/Post";
import Post from "../../organisms/Post/Post";
import { NewsGrid } from "./styled";


const PostList = () => {
    const { posts, error, isLoading } = usePosts();
    console.log('posts', posts)

    if (error) return <p>{error}</p>;

    if (isLoading) return <div>Cargando...</div>

    return (
        <NewsGrid>
            {!isLoading && posts.length > 0 && (
                posts.slice(0, 3).map((post: IPost) => (
                    <Post key={post.id} post={post} variant='light'/>
                ))
            )}

        </NewsGrid>
    );
};

export default PostList;
