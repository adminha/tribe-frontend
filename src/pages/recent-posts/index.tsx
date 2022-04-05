import { useAppSelector } from "../../app/hooks";
import { selectLoginStatus } from "../auth/login/login-redux";
import { usePosts, useFeed } from '@tribeplatform/react-sdk/hooks'
import { simplifyPaginatedResult } from '@tribeplatform/react-sdk/utils'
import Login from "../auth/login";
import { LikeButton } from "../templates/posts/like-button";
import Master from "../templates/master/master";
import Head from "../templates/master/head";
import Post from "../templates/posts/post";

function RecentPosts() {
    const isLoggedIn = useAppSelector(selectLoginStatus)
    const {
        data: posts,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
      } = useFeed({
        fields: {
          owner: { member: 'all' },
          reactions: { variables: { limit: 5 }, fields: 'basic' },
        },
        variables: { limit: 10 },
      })
      const { nodes: latestPosts } = simplifyPaginatedResult(posts)
    if (isLoggedIn == true) {      
          return (
            <>
              <Head title="Recent Posts" />
              {isLoading && <div>Loading...</div>} 
              <div className="row row-cols-1 row-cols-md-2 g-4">
                {latestPosts?.map(post => {
                  return (
                      <div className="col">
                        <Post post={post} />
                      </div>
                  )
                })}                
                </div>
              {hasNextPage && (
                <button className="btn btn-success"
                  onClick={() => fetchNextPage()}
                >
                  {isFetchingNextPage ? `Loading more...` : `Load more`}
                </button>
              )}      
            </>
          )
    }
    else {
        return (
            <Login />
        )
    }
}

export default RecentPosts;