export type Review = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}

export type Reviews = Array<Review>;

export type ReviewSend = {
  id: string;
  comment: string;
  rating: number;
}
