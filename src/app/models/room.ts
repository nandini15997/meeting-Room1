import {z} from "zod";

const RoomDetailsSchema = z
    .object({
        name: z.string().min(1),
        spots: z.number(),
        thumbnail: z.string().url()
    })
    .strict();

type RoomDetails = z.infer<typeof RoomDetailsSchema>;

export type {RoomDetails};
export {RoomDetailsSchema};