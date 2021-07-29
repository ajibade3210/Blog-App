import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router";
import { Context } from "../../context/Context"
import axios from "axios";
import "./about.css"
import { Link } from "react-router-dom";
import SinglePost from "../../components/singlePost/SinglePost"

export default function About() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const {user, dispatch}= useContext(Context);
    const PF = "http://localhost:5000/images/"


    useEffect(() => {
        const getPost = async () => {
          const res = await axios.get("/posts/" + path);
          setPost(res.data);
        };
        getPost();
      }, [path]);

    return (
        <div className="about">
            <div className="aboutWrapper">

            <div className="aboutCentre">
                 <label>Profile Picture</label> 
                 <div className="settingsPP">
                 <img
                src={ PF + user.profilePic}
                 alt=""
                  />
                  </div>
                  <h1>UserName: {user.username}</h1>
                  <h1>Email:{user.email}</h1>
                  <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username} hk</b>
            </Link>
          </span>
</div>
                  
            </div>
        
            <Sidebar />
        </div>
    )
}
