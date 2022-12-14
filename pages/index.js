import Head from "next/head";
import { useState } from "react";
import ConvertionComponent from "../components/convertionComponent";
import CurrencyExchangeComponent from "../components/currencyExchangeComponent";

export default function Home() {
  const [exchangeRate, setExchangeRate] = useState(3);
  const updateExchangeRate = (newExchangeRate) => {
    setExchangeRate(newExchangeRate);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Let's create a currency exchange house app!</h1>
        <ConvertionComponent exchangeRate={exchangeRate} />
        <CurrencyExchangeComponent
          exchangeRate={exchangeRate}
          updateExchangeRate={updateExchangeRate}
        />
      </main>
    </div>
  );
}
