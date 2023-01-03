import { Handlers, PageProps } from "$fresh/server.ts";

interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const handler: Handlers<PostProps | null> = {
  async GET(_, ctx) {
    const { id } = ctx.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (res.status === 404) {
      return ctx.render(null);
    }
    const post: PostProps = await res.json();
    return ctx.render(post);
  },
};

export default function Page({ data }: PageProps<PostProps | null>) {
  if (!data) {
    return <h1>Post not Found</h1>;
  }
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <div class="my-4">
        <h1 class="text=2xl font-bold">{data.title}</h1>
        <hr />
        <p>{data.body}</p>
      </div>
    </div>
  );
}
