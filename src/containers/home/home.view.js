import React from 'react'

import { Container, Content, Button, Spinner } from '../../components/shared'
import { PostCard, PostComponent } from '../../components/post'
import { colors } from '../../utils'

const HomeView = ({ controller }) => {
  const {
    userId,
    loadingPosts,
    posts,
    loadingRemovePost,
    loadingNewComment,
    handleSendMessage,
    setShowPostModal, 
    showPostModal, 
    handleSendPost, 
    handleRemovepost } = controller
  return (
    <Container>
      <Content>
        <PostCard
          loadingRemove={loadingRemovePost}
          loadingComment={loadingNewComment}
          postlist={posts} 
          pressSenMessage={data => handleSendMessage(data)}
          pressRemovePost={id => handleRemovepost(id)}
          userId={userId}
        />
      </Content>
      <Button
        labelColor={colors.white}
        label='Publicar'
        labelWeight='bold'
        bgColor={colors.main}
        float
        pill
        onPress={() => setShowPostModal(!showPostModal)}
      />
      {showPostModal && 
        <PostComponent
          loading={loadingPosts}
          handleSend={data => handleSendPost(data)}
          pressCancel={() => setShowPostModal(!showPostModal)} 
          visible={showPostModal}  
        />
      }
      {loadingPosts && <Spinner message='Atualizando posts ...' />}
    </Container>
  )
}

export default HomeView