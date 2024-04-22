import React from 'react'
import styled from 'styled-components'
import { clearAllUsers } from '../Store/Slices/UserSlice'
import { useDispatch } from 'react-redux'

const DeleteAllUser = () => {

  const dispatch = useDispatch()

  const deleteUsers = () => {
    dispatch(clearAllUsers())
  }

  return (
    <Wrapper>
      <button className='clear-btn' onClick={ deleteUsers }>DeleteAllUser</button>
    </Wrapper>
  )
}


const Wrapper = styled.section`
    .clear-btn{
      margin-top: 2rem ;
      border: none;
      opacity: 0.9;
      outline: none;
      color: #fff;
      cursor: pointer;
      font-size: 1.8rem;
      padding: 7px 13px;
      border-radius: 4px;
      letter-spacing: 0.3px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
      transition: transform 0.5s ease;
      background: linear-gradient(135deg, #ff1313 0%, #06ff00 100%);
    }`

export default DeleteAllUser