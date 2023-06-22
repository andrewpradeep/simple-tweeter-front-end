export interface TweetHeaderProps {
    displayName: string;
    userName: Record<userNameValues, string>;
    date: string;
}

type userNameValues = "id" | "name";
