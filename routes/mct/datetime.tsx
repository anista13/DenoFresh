import * as mod from "https://deno.land/std@0.170.0/datetime/mod.ts";
import { Handlers } from "$fresh/server.ts";
import { Input } from "../../components/Button.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

// console.log(mod.parse("20-01-2019", "dd-mm-yyyy"));
// console.log(mod.dayOfYear(new Date("2019-03-11T03:24:00"))); //print 70
// console.log(mod.dayOfYear(new Date())); //print today's day of the year

export default function AboutPage() {
  // deno-lint-ignore no-var
  var message = mod.dayOfYear(new Date());
  const now = new Date();
  const now2 = now.toLocaleString();
  // console.log(now);

  return (
    <main>
      {
        /* <h1>About</h1>
      <p>This is the about page.</p> */
      }
      <p>Today's day of the year is {message}</p>
      <p>Today's data: {now2}</p>
      <a>마체테</a>
    </main>
  );
}
