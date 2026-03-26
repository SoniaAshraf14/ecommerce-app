import * as Yup from "yup";

export const MovieSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  youtubeUrl: Yup.string()
    .url("Enter valid URL")
    .required("YouTube URL is required"),
});