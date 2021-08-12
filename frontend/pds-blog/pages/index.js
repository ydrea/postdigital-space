import axios from "axios";
import Head from "next/head";

function Home({ posts }) {
  return (
    <>
      <h3> {posts[0].title}</h3>

      <h3> {posts[1].title}</h3>
    </>
  );
}

export default Home;

export async function getStaticProps() {
  const aRes = await axios.get("http://localhost:1337/blogs");

  return {
    props: {
      posts: aRes.data,
    },
  };
}
