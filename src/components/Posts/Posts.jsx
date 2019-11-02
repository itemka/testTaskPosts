import React from 'react';
import css from './Posts.module.css';
import Preloader from "../Preloader/Preloader";

const Posts = props => {
    let posts = props.posts.map(item => {
        return (
            <div className={css.Post} key={item.id}>
                <div>{`userId: ${item.userId}`}</div>
                <div>{`id: ${item.id}`}</div>
                <div className={css.postTitle}>{`Title: ${item.title}`}</div>
                <div className={css.postBody}>{`Body: ${item.body}`}</div>
            </div>
        )
    });
    return (
        <div className={css.Posts}>
            {posts}
            {props.requestReturn ? null : <div><Preloader/></div>}
        </div>
    );
};

export default Posts;