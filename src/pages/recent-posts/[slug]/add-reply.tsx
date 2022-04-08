import { PostMappingTypeEnum } from "@tribeplatform/gql-client/types"
import { useAddReply } from "@tribeplatform/react-sdk/hooks"
import { useState } from "react"

function AddReply(props) {
    const {mutate: AddReply} = useAddReply()
    
    const [Comment, setComment] = useState(null)
    const submitForm = (e) => {
        e.preventDefault();
        AddReply({postId: props.postId, input: replyObject})
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
            value: Comment
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