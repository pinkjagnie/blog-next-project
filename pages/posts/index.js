import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJS",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "NextJS is a React framework for production - it makes building React apps and sites  breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with NextJS",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "NextJS is a React framework for production - it makes building React apps and sites  breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with NextJS",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "NextJS is a React framework for production - it makes building React apps and sites  breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with NextJS",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "NextJS is a React framework for production - it makes building React apps and sites  breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
