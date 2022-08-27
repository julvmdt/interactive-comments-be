export default interface Comment {
    id: string;
    avatar: string;
    user: string;
    createdAt: string;
    vote: string[];
    comment: string;
    replies: string[];
}