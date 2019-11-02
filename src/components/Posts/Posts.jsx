import React from 'react';
import css from './Posts.module.css';
import Preloader from "../Preloader/Preloader";

const Posts = props => {
    let posts = props.posts.map(item => {
        return <div className={css.Post} key={item.id + Math.random().toString()}>
            <div>{item.userId}</div>
            <div>{item.id}</div>
            <div className={css.postTitle}>{`Title: ${item.title}`}</div>
            <div className={css.postBody}>{`Body: ${item.body}`}</div>
        </div>
    });
    return (
        <div className={css.Posts}>
            {posts}
            {props.requestReturn ? null : <div className={css.Post}><Preloader/></div>}
        </div>
    );
};

export default Posts;