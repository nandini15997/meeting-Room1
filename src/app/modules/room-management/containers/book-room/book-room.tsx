import React, {useEffect, useMemo} from "react";
import {useParams} from "react-router-dom";
import * as S from "./book-room.styles";
import {useRoomStore} from "../../../../store/rooms/store";
import {shallow} from "zustand/shallow";

type UrlParams = {
    roomName: string;
};

const BookRoom: React.FC = () => {
    const {roomName} = useParams<UrlParams>();

    const { rooms } = useRoomStore(
        (state) => ({
            rooms: state.rooms,
        }),
        shallow
    );

    const selectedRoom = useMemo(() => {
        if(rooms.value && roomName) {
            return rooms.value.find(room => room.name === roomName);
        }
    }, [roomName, rooms.value]);

    useEffect(() => {
        rooms.getRoomsList();

        return () => void rooms.reset();
    }, []);

    useEffect(() => {
        if(rooms.error) {
            // TODO: Should be replaced with a popup but using alert to save time
            alert(`Error fetching rooms list. ${rooms.error}`);
        }
    }, [rooms.error]);

    if(rooms.loading) {
        return <>Loading...</>;
    }

    if(!selectedRoom) {
       if(rooms.value) {
           return <>Room {roomName} does not exist</>;
       } else {
           return null;
       }
    }

    return (
        <S.RoomDetailsWrapper>
            <S.PageTitle>{selectedRoom.name}</S.PageTitle>
            <S.RoomImage src={selectedRoom.thumbnail} alt="room img"/>
            <S.RoomDescription>Some description of the room here</S.RoomDescription>
            <S.RemainingSpots>{selectedRoom.spots} spots left</S.RemainingSpots>
            <S.BookButton>Book!</S.BookButton>
        </S.RoomDetailsWrapper>
    );
};

export {BookRoom};