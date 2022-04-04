import Moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Post(props) {
    const router = useRouter()
    const pid = props.post.id
    return (
        <div className="card">
            <div className="card-header py-10">
                <div className="row align-items-center">
                    <div className="col-2">
                        <img className="img w-100 rounded-circle" src={props.post.owner.member.profilePicture.url} />
                    </div>
                    <div className="col-10">
                    <Link href={'[recent-posts]/[slug]'} as={`recent-posts/${props.post.slug}`}>
                        <a><h1 className="fs-2x text-dark">{props.post.title}</h1></a>
                    </Link>
                        <div className="fs-5 text-muted fw-bold">{props.post.owner.member.name}, {props.post.owner.member.tagline}</div>
                    </div>
                </div>
            </div>
            <div className="card-body p-5 px-lg-10 py-lg-10">
                <div className="row g-10" dangerouslySetInnerHTML={{ __html: props.post.shortContent }}></div>
            </div>
            <div className="card-footer align-items-center">
                <div className='float-start'>{Moment(props.post.createdAt).format('ddd MM yyyy, HH:mm')}</div>
                <Link href={{ pathname: '[recent-posts]/[slug]', query: {...router.query, pid}}} as={`recent-posts/${props.post.slug}?id=${pid}`}>
                    <a className="btn btn-primary float-end">Read More</a>
                </Link>
                
            </div>
        </div>
    );
}

export default Post;