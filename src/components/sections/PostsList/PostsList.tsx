import { usePosts } from "../../../hooks/usePosts";
import { IPost } from "../../../interfaces/Post";
import Post from "../../organisms/Post/Post";
import { StyledNewsGrid } from "./styled";

interface PostListProps {
    variant?: "default" | "reversed";
}

const PostList = ({ variant = "default" }: PostListProps) => {
    const { posts, error, isLoading } = usePosts();

    if (error) return <p>{error}</p>;
    if (isLoading) return <div>Cargando...</div>;


    const firstPosts = posts.slice(1, 4);
    const secondPosts = posts.slice(4, 7);
    
    const selectedPosts = variant === "default" ? firstPosts : secondPosts;

    return (
        <StyledNewsGrid variant={variant}>
            {selectedPosts.length > 0 ? (
                selectedPosts.map((post: IPost) => (
                    <Post key={post.id} post={post} variant="light" />
                ))
            ) : (
                <p>No hay suficientes posts para mostrar.</p>
            )}
        </StyledNewsGrid>
    );
};

export default PostList;
