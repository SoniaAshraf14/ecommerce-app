export interface Movie {
  _id: string;
  title: string;
  description?: string;
  youtubeUrl: string;
  videoId?: string;
  thumbnailUrl?: string;
  createdBy?: string;
  avgRating?: number | null; // add this to type
}

export interface Props {
  show: boolean;
  trailerUrl?: string;
  onClose: () => void;
}

export interface AddMoviePayload {
  title: string;
  description?: string;
  youtubeUrl: string;
}