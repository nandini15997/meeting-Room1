import React, {useEffect} from "react";
import {shallow} from "zustand/shallow";
import {useNavigate} from "react-router-dom";
import {useRoomStore} from "../../../../store/rooms/store";
import * as S from "./room-list.styles";

const RoomsList: React.FC = () => {
    const navigate = useNavigate();
    const { rooms } = useRoomStore(
        (state) => ({
            rooms: state.rooms,
        }),
        shallow
    );

    useEffect(() => {
        rooms.getRoomsList();

        return () => void rooms.reset();
    }, []);

    useEffect(() => {
        if(rooms.error) {
            // TODO: Should be replaced with a popup but using alert to save time
            alert(`Error fetching rooms list. ${rooms.error}`);
        }
    }, [rooms.error])

    return (
        <>
            <S.PageTitle>Rooms</S.PageTitle>
            <S.PageDescription>
                Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum
                dolor ultricies donec risus sodales. Tempus quis et.
            </S.PageDescription>
            <S.RoomsList>
                {rooms.value?.map(room => {
                    return (
                        <S.RoomDetails key={room.name}>
                            <S.RoomImage src={room.thumbnail} alt="room img"/>
                            <S.RoomDetailsItemsWrapper>
                                <S.RoomName>{room.name}</S.RoomName>
                                <S.BookButton
                                    onClick={() => navigate(`/rooms/${room.name}`)}
                                >
                                    Book!
                                </S.BookButton>
                                {/* <S.RemainingSpots>{room.spots} spots remaining</S.RemainingSpots> */}
                            </S.RoomDetailsItemsWrapper>
                        </S.RoomDetails>
                    );
                })}
            </S.RoomsList>
        </>
    );
};

export {RoomsList}