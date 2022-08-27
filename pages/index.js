import Head from "next/head";
import { Button } from "@mui/material";
import { CoolComponent } from "../components/coolComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Let's create a Redux app</h1>
        <CoolComponent initialNumber={500} />
      </main>
    </div>
  );
}
