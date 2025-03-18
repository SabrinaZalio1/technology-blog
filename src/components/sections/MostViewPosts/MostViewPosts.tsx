import { Title } from './styled'
import { usePosts } from '../../../hooks/usePosts';
import Card from '../../molecules/Card/Card';
import { IPost } from '../../../interfaces/Post';

function MostViewPosts() {
    const { posts, isLoading, error } = usePosts();

   
    return (
        <div>
            <Title>Most viewed</Title>
            {!isLoading && posts.length > 0 ? (
                posts.map((post: IPost) => (
                    <Card key={post.id} post={post} />
                ))
            ) : (
                <p>No hay most views</p>
            )}
        </div>
    )
}

export default MostViewPosts