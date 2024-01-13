import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { RoomDetails } from '../../models/room';
import * as roomService from './service';

interface RoomStore {
    rooms: {
        loading: boolean;
        error?: unknown; // TODO: handle
        value?: RoomDetails[];

        getRoomsList: () => Promise<void>;
        reset: () => void;
    };
}

const useRoomStore = create<RoomStore>()(
    immer((set, get) => ({
        rooms: {
            loading: false,

            getRoomsList: async () => {
                if (get().rooms.value?.length) {
                    return;
                }

                try {
                    set((state) => void (state.rooms.loading = true));

                    const rooms = await roomService.getRoomsList();

                    set((state) => void (state.rooms.value = rooms));
                } catch (error) {
                    set((state) => void (state.rooms.error = error));
                } finally {
                    set((state) => void (state.rooms.loading = false));
                }
            },

            reset: () => {
                set((state) => {
                    state.rooms.loading = false;
                    state.rooms.error = undefined;
                });
            },
        },
    }))
);

export { useRoomStore };
