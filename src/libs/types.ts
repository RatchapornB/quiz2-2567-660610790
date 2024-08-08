// You can define interfaces for all React components here.
// Do not forget to export properly.

interface PostOwnnerProps {
    userImagePath : string;
    username : string;
    postText : string;
    likeNum : string;
}
export type { PostOwnnerProps };

interface CommentProps {
    userImagePath : string;
    username : string;
    commentText : string;
    likeNum : string;
    replies : string;
}
export type { CommentProps };

interface ReplyProps {
    userImagePath : string;
    username : string;
    likeNum : string;
}
export type { ReplyProps };
