import Head from "next/head";

import "../styles/master.css";
import "tailwindcss/tailwind.css";

function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <script
                    src="https://rawgit.com/WeiChiaChang/Easter-egg/master/easter-eggs-collection.js"
                    defer
                />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}

export default App;
