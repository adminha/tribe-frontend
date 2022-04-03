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
  
    return (
      <button
        onClick={e => {
          if (reacted) unlikePost({ postId: post?.id, reaction: '+1' })
          else
            likePost({
              postId: post?.id,
              input: { reaction: '+1' },
            })
        }}
      >
        {reacted ? "Unlike" : "Like"}
      </button>
    )
  }