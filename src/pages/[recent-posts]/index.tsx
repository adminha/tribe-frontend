import { useAppSelector } from "../../app/hooks";
import { selectLoginStatus } from "../auth/login/login-redux";
import { usePosts, useFeed } from '@tribeplatform/react-sdk/hooks'
import { simplifyPaginatedResult } from '@tribeplatform/react-sdk/utils'
import Login from "../auth/[login]";
import { LikeButton } from "./like-button";

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
            <main>
              {isLoading && <div>Loading...</div>}
              <ul>
                {latestPosts?.map(post => {
                  return (
                      <>
                        <li>{post.title}</li>
                        <LikeButton post={post} />
                    </>
                  )
                })}
              </ul>
              {hasNextPage && (
                <button
                  onClick={() => fetchNextPage()}
                >
                  {isFetchingNextPage ? `Loading more...` : `Load more`}
                </button>
              )}      
            </main>
          )
    }
    else {
        return (
            <Login />
        )
    }
}

export default RecentPosts;