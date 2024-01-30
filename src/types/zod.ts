import { z } from "zod";

export const deleteBioSchema = z.object({
  id: z.number().int({
    message: "ID must be an integer.",
  }),
  userId: z.string().min(2, {
    message: "userId must be at least 2 characters.",
  }),
});

export const bioSchema = z.object({
  bio: z.string().min(2, {
    message: "Bio must be at least 2 characters.",
  }),
});

export const deleteSongSchema = z.object({
  id: z.number().int({
    message: "ID must be an integer.",
  }),
  userId: z.string().min(2, {
    message: "userId must be at least 2 characters.",
  }),
});

export const songSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  artist: z.string().min(2, {
    message: "artist must be at least 2 characters.",
  }),
  album: z.string().min(2, {
    message: "album must be at least 2 characters.",
  }),
  duration: z.string().min(2, {
    message: "duration must be at least 2 characters.",
  }),
});
