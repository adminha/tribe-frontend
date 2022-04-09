import {
    useAddReaction,
    useRemoveReaction,
  } from '@tribeplatform/react-sdk/hooks'
import { useState } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { SendRewards } from '../../api/rewards'
import { selectUserObject } from '../../auth/login/login-redux'
  
  export function LikeButton({ post }) {
    const { mutate: likePost } = useAddReaction()
    const { mutate: unlikePost } = useRemoveReaction()
    const userObject = useAppSelector(selectUserObject)
    const [ButtonText, setButtonText] = useState('Like')
    
    const reacted = !!post?.reactions?.find(reaction => {
      return reaction.reaction === '+1' && reaction.reacted
    })

    const handleLikeWithRewards = async (post) => {
      if (!reacted) {
        setButtonText('Sending your rewards...')
        await SendRewards({
          username: userObject.user.username,
          tribeReactionId: post?.id
        }).then(() => {
          setButtonText(reacted ? 'Like' : 'Unlike')
          alert('You have received 100 TRT Tokens in your wallet. Please check the rewards page for transaction ID')
        })
      }
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
        {reacted ? "Unlike" : ButtonText}
      </button>
    )
}