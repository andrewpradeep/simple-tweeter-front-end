export interface TweetHeaderProps {
    displayName: string;
    userName: Record<userNameValues, string>;
    date: string | number;
}

type userNameValues = "id" | "name";
