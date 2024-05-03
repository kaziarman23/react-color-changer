import { useState } from "react";

function App() {
    const [color, setColor] = useState("olive");
    return (
        <div
            style={{ backgroundColor: color }}
            className="w-full h-screen duration-300 flex fixed justify-center items-end"
        >
            <div className="mb-10 flex justify-evenly bg-white rounded-lg">
                <div className="p-2 flex justify-evenly gap-5 box-border text-white">
                    <button
                        onClick={() => setColor("black")}
                        className="bg-black hover:bg-slate-800 rounded-lg outline-none px-2 py-1"
                    >
                        Black
                    </button>
                    <button
                        onClick={() => setColor("red")}
                        className="bg-red-700 hover:bg-red-800 rounded-lg outline-none px-2 py-1"
                    >
                        Red
                    </button>
                    <button
                        onClick={() => setColor("grey")}
                        className="bg-slate-700 hover:bg-slate-800 rounded-lg outline-none px-2 py-1"
                    >
                        Grey
                    </button>
                    <button
                        onClick={() => setColor("purple")}
                        className="bg-purple-900 hover:bg-purple-800 rounded-lg outline-none px-2 py-1"
                    >
                        Purple
                    </button>
                    <button
                        onClick={() => setColor("orange")}
                        className="bg-orange-500 hover:bg-orange-800 rounded-lg outline-none px-2 py-1"
                    >
                        Orange
                    </button>
                    <button
                        onClick={() => setColor("pink")}
                        className="bg-pink-400 hover:bg-pink-800 rounded-lg outline-none px-2 py-1"
                    >
                        Pink
                    </button>
                    <button
                        onClick={() => setColor("lime")}
                        className="bg-lime-500 hover:bg-lime-800 rounded-lg outline-none px-2 py-1"
                    >
                        Lime
                    </button>
                    <button
                        onClick={() => setColor("green")}
                        className="bg-green-500 hover:bg-green-800 rounded-lg outline-none px-2 py-1"
                    >
                        Green
                    </button>
                    <button
                        onClick={() => setColor("royalblue")}
                        className="bg-blue-500 hover:bg-blue-800 rounded-lg outline-none px-2 py-1"
                    >
                        Royal-Blue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
