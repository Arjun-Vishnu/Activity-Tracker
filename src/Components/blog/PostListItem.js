import axios from "axios";
import { Link } from "react-router-dom";

function PostListItem(props) {
    function deletePost() {
        axios.delete('https://demo-blog.mashupstack.com/api/posts/'+props.post.id).then(response=>{
            alert(response.data.message)
            props.refresh()
        })
    }
    return <div className="card">
        <div className="card-body d-flex justify-content-between">
            <div>{props.post.title}</div>
            <div className="d-flex justify-content-end gap-2">
                <Link to={"/blog/posts/"+props.post.id+"/edit"} className="btn btn-primary">Edit</Link>
                <Link to={"/blog/posts/"+props.post.id} className="btn btn-info">View</Link>
                <button className="btn btn-primary" onClick={deletePost}>Delete</button>
            </div>
        </div>
    </div>
}
export default PostListItem;