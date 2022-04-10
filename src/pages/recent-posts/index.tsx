import { useAppSelector } from "../../app/hooks";
import { selectLoginStatus } from "../../app/login-redux";
import { useFeed } from '@tribeplatform/react-sdk/hooks'
import { simplifyPaginatedResult } from '@tribeplatform/react-sdk/utils'
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "../templates/master/head";
import Post from "./post-item-template/post";

function RecentPosts() {
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
      const isLoggedIn = useAppSelector(selectLoginStatus)
      const router = useRouter()
      useEffect(() => {
        isLoggedIn ? router.push('/recent-posts') : router.push('/auth/login')
      }, [])
      return (
        <>
          <Head title="Recent Posts" />
          {isLoading && <div>Loading...</div>} 
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {latestPosts?.map(post => {
              return (
                  <div key={post.id} className="col">
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

export default RecentPosts;