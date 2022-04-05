import {
    useAddReaction,
    useRemoveReaction,
  } from '@tribeplatform/react-sdk/hooks'
  
  export function LikeButton({ post }) {
    const { mutate: likePost } = useAddReaction()
    const { mutate: unlikePost } = useRemoveReaction()
    
    const reacted = !!post?.reactions?.find(reaction => {
      return reaction.reaction === '+1' && reaction.reacted
    })

    const handleLikeWithRewards = (post) => {
      console.log(post)
        if (reacted) unlikePost({ postId: post?.id, reaction: '+1' })
        else
          likePost({
            postId: post?.id,
            input: { reaction: '+1' },
          })
    }
  
    return (
      <button className='btn btn-success float-end'
        onClick={() => handleLikeWithRewards(post)}>
        {reacted ? "Unlike" : "Like"}
      </button>
    )
}