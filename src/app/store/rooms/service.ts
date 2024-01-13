import axios from "axios";
import {z} from "zod";
import {RoomDetailsSchema} from "../../models/room";

const ROOMS_URL = "https://wetransfer.github.io/rooms.json";

const RoomsListSchema = z
    .object({
        rooms: RoomDetailsSchema.array()
    })
    .strict();
type RoomsListDetails = z.infer<typeof RoomsListSchema>;

const getRoomsList = async () => {
    const response = await axios.get<RoomsListDetails>(ROOMS_URL);

    await RoomsListSchema.parseAsync(response.data);

    return response.data.rooms;
};

export {getRoomsList};