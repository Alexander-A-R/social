import MyPosts from "./MyPosts";
import {addPost, changePostImage} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import React from "react";


const MyPostsContainer = (props) => {

    const onSubmitAddPost = (formData) => {
        props.addPost(formData.postText);
    };

    return <MyPosts changePostImage={props.changePostImage} onSubmitAddPost={onSubmitAddPost} posts={props.posts} />
};

const mapStateToProps = state => {
    return {
        posts: state.profilePage.posts
    };
};

export default connect(mapStateToProps, {addPost, changePostImage})(MyPostsContainer);