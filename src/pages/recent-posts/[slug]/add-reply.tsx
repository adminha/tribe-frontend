import { PostMappingTypeEnum } from "@tribeplatform/gql-client/types"
import { useAddReply } from "@tribeplatform/react-sdk/hooks"
import { useState } from "react"
import { useAppSelector } from "../../../app/hooks"
import { SendRewards } from "../../../app/api/rewards"
import { selectUserObject } from "../../../app/login-redux"

function AddReply(props) {
    const {mutateAsync: addReply} = useAddReply()
    const userObject = useAppSelector(selectUserObject)
    const [Comment, setComment] = useState(null)
    const submitForm = (e) => {
        e.preventDefault();
        addReply({postId: props.postId, input: replyObject}).then(() => {
            setComment('')
            SendRewards({
                username: userObject.user.username,
                tribeReactionId: props.postId
            }).then(() => {
                alert('You have received 100 TRT Tokens in your wallet. Please check the rewards page for transaction ID')
            })
        })
    }
    const handleInputChange = (e) => {
        setComment(e.target.value)
    }
    const replyObject = {
        postTypeId: "wc8HcOiYMBItHbq",
        mappingFields: [
        {
            key: "content",
            type: PostMappingTypeEnum.HTML,
            value: JSON.stringify(Comment)
        }
        ],
        publish: true,
    }
    return (
        <form onSubmit={(e) => submitForm(e)}>
            <div className="mb-0">
                <textarea className="form-control form-control-solid placeholder-gray-600 fw-bolder fs-4 ps-9 pt-7" rows={6} name="message" placeholder="Share Your Knowledge" onChange={(e) => handleInputChange(e)}></textarea>
                <button type="submit" className="btn btn-primary mt-n20 mb-20 position-relative float-end me-7">Send</button>
            </div>
        </form>
    )
}
export default AddReply