import { useState, useEffect } from "react";
import { marked } from "marked";

function App() {
    const [markdown, setMarkdown] = useState(``);

    const [html, setHtml] = useState("");

    useEffect(() => {
        setHtml(marked.parse(markdown));
    }, [markdown]);

    return (
        <section className=" flex flex-col items-center px-6  gap-6 max-h-fit translate-y-20">
            <h1 className="text-3xl font-bold italic md:text-4xl">
                Markdown Previewer
            </h1>

            <div className="flex flex-col  gap-6 w-full md:w-1/2 bg-yellow-700 rounded p-5">
                {/* Editor */}
                <p className="text-2xl font-bold">Editor</p>
                <textarea
                    value={markdown}
                    placeholder="Enter markdown here ..."
                    onChange={(e) => setMarkdown(e.target.value)}
                    className="w-full   p-4 rounded-lg resize-none focus:outline-none  bg-yellow-50 text-yellow-700 field-sizing-content max-h-100"
                />

                {/* Preview */}
            </div>
            <div
                className="w-full md:w-1/2 p-6 rounded-lg shadow overflow-auto
                               prose prose-slate max-w-none
                               prose-headings:font-bold
                               prose-h1:text-4xl
                               prose-h2:text-3xl
                               prose-h3:text-2xl
                               prose-h4:text-xl
                               prose-h5:text-lg
                               prose-h6:text-base
                               prose-code:px-1
                               prose-code:py-0.5
                               prose-code:rounded
                               prose-pre:bg-slate-700
                               prose-pre:text-green-200
                               prose-pre:p-4
                               prose-pre:rounded-lg bg-green-100 wrap-break-word"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </section>
    );
}

export default App;
