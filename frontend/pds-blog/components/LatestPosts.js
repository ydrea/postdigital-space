import { useEffect, useState } from "react";

function LatestPosts({ posts }) {
  const [fivePosts, fivePostsSet] = useState([]);

  useEffect(() => {
    fivePostsSet(posts.slice(0, 5));
  }, [posts]);

  function renderPostPreview () {
return fivePosts.map((i)=>{
    return <PostPreview i={post} key={i.id} />
} )
  }

  return (
  <div>
<h2>Latest posts</h2>
{renderPostPreview()}
  </div>);
}

export default LatestPosts;
