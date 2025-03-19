import { MostViewPostsContainer, Title } from './styled'
import { usePosts } from '../../../hooks/usePosts';
import Card from '../../molecules/Card/Card';
import { IPost } from '../../../interfaces/Post';

function MostViewPosts() {
    const { posts, isLoading, error } = usePosts();
    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;
    if (!posts) return <p>No hay datos disponibles</p>;
   
    return (
        <>
            <Title>Most viewed</Title>
            <MostViewPostsContainer> 
            {!isLoading && posts.length > 0 ? (
                posts.slice(2, 6).map((post: IPost) => (
                    <Card key={post.id} post={post} />
                ))
            ) : (
                <p>No hay most views</p>
            )}
            </MostViewPostsContainer>
        </>
    )
}

export default MostViewPosts