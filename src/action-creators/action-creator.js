import types from './types';

export const follow = () => {
    return {
        type: types.FOLLOW
    };
}

export const like = () => {
    return {
        type: types.LIKE
    };
}

export const postComment = (author, content) => {
    return {
        type: types.POST_COMMENT,
        author,
        content
    }
}