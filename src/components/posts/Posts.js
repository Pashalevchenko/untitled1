import {getPosts} from '../service/api/Post_API';
import {useEffect, useState} from "react";
import Post from "../post/Post";
import PostDetails from "../posts_details/PostDetails";
import {Route, Switch} from "react-router-dom";
import "./Posts.css"

export default function Posts (props){
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        getPosts().then(value => setPosts(value.data))
    },[])
    return(
        <div className='container'>
            <div>
                {
                    posts.map(post => <Post post={post} key={post.id}/>)
                }
            </div>
            <div className='postDetail'>
                <Switch>
                    <Route path={'/posts/:id'} component={PostDetails}/>
                </Switch>
            </div>
        </div>
    )
}