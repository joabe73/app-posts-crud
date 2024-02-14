import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Text, Button } from '../shared'
import { CommentInput } from '../comment'
import { colors } from '../../utils'

const defaultImage = 'data:image/jpeg;base64,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'

const handleComments = (list=[], show, pressSenMessage, postId, loadingComment) => {
  return(
    <ViewWrapper>
      {<ViewWrapper>
        {show && <CommentInput postId={postId} handleSend={pressSenMessage} desc='Comentar no post' loading={loadingComment} />}
        {list[0].length ? list[0].map((item, ix) => (
          <BoxPost key={ix}>
            <Text color={colors.main2} weight='bold' helper> por: {item.email}</Text>
            <Text color={colors.gray50} weight='bold' helper> {item.body}</Text>
          </BoxPost>
        )) :
            <Text align='center' color={colors.gray50}>Post Sem comentários!</Text>
        } 
      </ViewWrapper>}
    </ViewWrapper>
  )
}

const PostCard = ({ postlist = [], pressSenMessage, pressRemovePost, userId, loadingRemove, loadingComment }) => {
  const [itemOpen, setItemOpen] = useState({index:'', cmt: [], boxComment: false })
  const [idRemove, setRemove] = useState('')

  const handleShowComments = (ix, commentList, isOpen, boxMessage) => {
    if (!isOpen && !boxMessage) return setItemOpen({ index: ix, cmt: commentList, boxComment: false })
    if ((!isOpen && boxMessage) || (isOpen && boxMessage)) return setItemOpen({ index: ix, cmt: commentList, boxComment: true })
    setItemOpen({ index: '', cmt: [], boxComment: false })
  }

  return postlist.map((post, ix) => {
    const isOpen = itemOpen.index === ix
    const isMe = userId === post.userId
    return (
      <ViewWrapper key={ix}>
        <Wrapper>
          <WrapperProfile>
            <Profile source={{ uri: post?.image || defaultImage }} />
            <ViewWrapper>
              <Text color={colors.black} weight='bold'>{'Autor:  '}
                <Text color={colors.gray50} weight='bold' helper>{isMe ? 'Você' : post.user.name}</Text>
              </Text>
            </ViewWrapper>
          </WrapperProfile>
          <BoxPost isPost>
            <Text color={colors.black} weight='bold' helper align='center'>{post.title}</Text>
            <Text color={colors.black}>{post.body}</Text>
          </BoxPost>
          <WrapperProfile>
            <ButtonBox see>
              <Button
                bgColor={colors.transparent}
                label={`${isOpen ? 'Ocutar' : 'Comentários'}`}
                labelSize={14}
                labelWeight='bold'
                labelColor={colors.main2}
                pill
                width={33}
                onPress={() => handleShowComments(ix, post.commentList, isOpen, false)}
              />
                <Button
                  bgColor={colors.transparent}
                  label={`${(itemOpen.boxComment && isOpen) ? 'Cancelar' : 'Comentar'}`}
                  labelSize={14}
                  labelWeight='bold'
                  labelColor={colors.black}
                  pill
                  width={33}
                  onPress={() => handleShowComments(ix, post.commentList, isOpen, !itemOpen.boxComment)} 
                />
                {isMe && 
                  <Button
                    label='Excluir post'
                    bgColor={colors.transparent}
                    labelSize={14}
                    labelWeight='bold'
                    labelColor={colors.red}
                    loading={loadingRemove && postlist[ix].id === idRemove}
                    disabled={loadingRemove && postlist[ix].id === idRemove}
                    spinnerColor={colors.red}
                    pill
                    width={33}
                    onPress={() => {
                      setRemove(post.id)
                      pressRemovePost(post.id)
                    }} 
                  />
                }
            </ButtonBox>
          </WrapperProfile>
          {isOpen && handleComments(itemOpen.cmt, itemOpen.boxComment, pressSenMessage, post.id, loadingComment)}
        </Wrapper>
      </ViewWrapper>
    )
  })
}

const Wrapper = styled.View`
  padding-horizontal: 6px;
  
  border-radius: 6px;
  background-color: ${colors.gray20};
  padding-bottom: 8px;
  margin-top: 30px;
`
const WrapperProfile = styled.View`
  flex-direction: row;
  align-items: center;
`
const ViewWrapper = styled.View``
const ButtonBox = styled.View`
  margin-top: 8px;
  ${props => props.remove && css`
    width: 100%;
    padding-left: 20%;
    padding-right: 20%;
    align-items: center;
  `}
  ${props => props.see && css`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  `}
`
const Profile = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 16px;
`
const BoxPost = styled.View`
  shadow-color: ${colors.main};
  shadow-offset: 3px 3px;
  shadow-opacity: 0.5;
  shadow-radius: 4px;
  elevation: 4;
  background-color: ${colors.white};
  border-radius: 6px;
  margin-top: 8px;
  padding: 4px;
  ${props => !props.isPost && css`
    border-radius: 6px;
    background-color: ${colors.black};
    borderBottomWidth: 1px;
    borderBottomColor: ${colors.gray40};
    padding: 24px;
  `}
`

export default PostCard
