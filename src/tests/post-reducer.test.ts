import postsReducer, {addPostActionCreator, deletePostAC} from "../redux/posts-reducer";
import {PostPropsType} from "../components/Profile/MyPosts/Post/Post";

let state: any;
beforeEach(()=>{
    state = {
        posts: [
            {
                id: 1,
                message: 'Hi, how are you?',
                likeQuantity: 12,
                avatar: 'data:image/jpeg;base64,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'
            },
            {
                id: 2,
                message: 'It is my first post',
                likeQuantity: 20,
                avatar: 'data:image/jpeg;base64,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'
            },
            {
                id: 3,
                message: 'It is my second post',
                likeQuantity: 14,
                avatar: 'data:image/jpeg;base64,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'
            },
        ]
    }
})



test('new post should be added',()=>{
    const action = addPostActionCreator('Test Reducer Post')
    const newState=postsReducer(state,action)
    expect(newState.posts.length).toBe(4)
    expect(newState.posts[3].message).toBe('Test Reducer Post')
})

test('post should be deleted',()=>{
    const action = deletePostAC(1)
    let newState=postsReducer(state,action)
    expect(newState.posts.length).toBe(2)
})

test('posts length should not change if post id incorrect',()=>{
    const action = deletePostAC(5)
    let newState=postsReducer(state,action)
    expect(newState.posts.length).toBe(3)
})


