import { useCallback, useState, useEffect } from "react";

export default function Wikipage({ href }) {
    let [article, setArticle] = useState(null);

    let domParser = new DOMParser();

    useEffect(async () => {
        let res = await fetch(href);
        let html = await res.text();
        let dom = domParser.parseFromString(html, "text/html");
        let fsection = dom.querySelector("section#mwAQ");

        if (fsection.querySelector("div#mwAg"))
            fsection.removeChild(fsection.querySelector("div#mwAg"));
        if (fsection.querySelector("div#mwAw"))
            fsection.removeChild(fsection.querySelector("div#mwAw"));
        if (fsection.querySelector("div#mwBa"))
            fsection.removeChild(fsection.querySelector("div#mwBa"));
        if (fsection.querySelector("table.infobox_v2"))
            fsection
                .querySelector("table.infobox_v2")
                .classList.add("wikipedia-table-v2");

        setArticle(fsection.cloneNode(true));
    }, []);

    let loadPage = useCallback(
        (div) => {
            if (!div) return;

            if (!article) {
                div.innerHTML = "Loading...";
                return;
            }

            div.innerHTML = "";
            div.appendChild(article);
        },
        [article]
    );

    return (
        <div
            className="mb-5 border-4 border-black p-5 rounded flex flex-col items-center"
            ref={loadPage}
        ></div>
    );
}
