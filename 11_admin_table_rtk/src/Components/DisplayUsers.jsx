import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { MdDeleteForever } from 'react-icons/md';
import { removeUser } from '../Store/Slices/UserSlice';

const DisplayUsers = () => {
    
    
    const data = useSelector((state) => {
        return state.users;
    });

    const dispatch = useDispatch();


    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }
    return (
        <Wrapper>
            {
                data.map((user, id) => {
                    return (
                        <li key={id}>
                            <h3>{user}</h3>
                            <button onClick={() => deleteUser(id)} className="delete-btn"><MdDeleteForever className='delete-icon'
                            /></button>
                        </li>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
   li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem ;
    border-bottom: 1px solid #eee;

    &:first-child{
        border-top: 1px solid #eee;
    }
    
   }
    `;
export default DisplayUsers