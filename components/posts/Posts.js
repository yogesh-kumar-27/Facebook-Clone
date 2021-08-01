import { useCollection} from 'react-firebase-hooks/firestore'
import { db } from '../../firebse';
import Post from './Post'
const Posts = () => {
    const [realtimePost] = useCollection(
        db.collection('posts').orderBy('timestamp', 'desc')
    );
    
    console.log(realtimePost)
    return (
        <div>
            {
                realtimePost?.docs.map((post)=>{
                    return (
                        <Post 
                        key={post.id}
                        name={post.data().name}
                        message={post.data().message}
                        email={post.data().email}
                        timestamp={post.data().timestamp}
                        image={post.data().image}
                        postImage={post.data().postImage}
                        />
                    )
                })
            }
        </div>
    )
}

export default Posts
