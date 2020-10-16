import React from 'react'

import styled from '@emotion/styled'
import PostPreview from './PostPreview'
import { Posts } from './Posts'

const StyledMorePosts = styled.section`
    h2 {
        text-align: center;
    }
`

const MorePosts = ({posts}: { posts: any[] }) => (
    <StyledMorePosts>
        <div className="pattern">
        <div className="row">
            <h2>Discover More <strong>About Gitpod</strong></h2>
            <Posts>
                {posts.map((p: any) => 
                    <PostPreview
                        key={p.node.fields.slug}
                        post={p}
                    />
                )}
            </Posts>
        </div>
        </div>
    </StyledMorePosts>
)

export default MorePosts
