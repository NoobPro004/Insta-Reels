import React,{useState,useEffect} from 'react'
import {database} from '../firebase' 
import CircularProgress from '@mui/material/CircularProgress';
import Video from './Video'
import './Posts.css'
// import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Like from './Like'

function Posts({userData}) {
    const[posts,setPosts]=useState(null);

    useEffect(()=>{
        let parr=[];
        const unsub=database.posts.orderBy('createdAt','desc').onSnapshot((querySnapshot)=>{
            parr=[];
            querySnapshot.forEach((doc)=>{
                let data={...doc.data(),postId:doc.id}

                parr.push(data);
            })

            setPosts(parr);
        })

        return unsub;
    },[])
    return (

        <div>
            {
            posts==null || userData==null ?  <CircularProgress /> :
            <div className="video-container">
                {
                    
                    posts.map((post,index)=>(
                      
                        <React.Fragment key={index}>
                            <div className="videos">
                                <Video src={post.pUrl}></Video>
                                <div className="fa" style={{display:"flex"}}>
                                <Avatar src={userData.profileUrl} />
                                <h4>{userData.fullname}</h4>
                                </div>
                                <Like userData={userData} postData={post}></Like>
                            </div>
                        </React.Fragment>
                        
                    ))
                }
            </div>
            }
        </div>
    )
}

export default Posts