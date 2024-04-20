import { useContext } from "react";
import { Context } from "../context/Context";
import { 
    MdFingerprint, 
    MdAndroid, 
    MdLightbulbOutline, 
    MdOutlineMessage, 
    MdOutlineCode,
    MdOutlinePlayCircleFilled,
} from "react-icons/md";
import "../index.css";

const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input,
    } = useContext(Context);

    return(
        <div className="flex-1 min-h-screen pb-15vh relative bg-zinc-950">
            <div className="flex items-center justify-between text-base p-5 text-gray-700">
                <div className="flex flex-col">
                    <p className="text-xl text-gray-100">NeuraNET</p>
                    <p className="text-sm text-center tracking-widest text-gray-400">Gemini API</p>
                </div>
                <MdFingerprint className="text-5xl text-gray-50" />
            </div>

            <div className="max-w-4xl mx-auto">
                {!showResult
                    ? <>
                        <div className="my-8 text-7xl text-gray-400 p-5">
                            <p><span className="bg-gradient-to-r from-lime-400 to-blue-400 text-transparent bg-clip-text font-semibold">Hello, My friends</span></p>
                            <p className="font-semibold">How can I help you?</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
                            <div className="h-48 p-4 bg-zinc-900 rounded-lg relative cursor-pointer hover:bg-zinc-800 transition duration-300 ease-in-out">
                                <p className="text-zinc-400 text-base">The best chat to learn new things, discovered and have your questions.</p>
                                <MdAndroid className="text-3xl absolute p-1 text-gray-400 bg-zinc-950 rounded-xl bottom-2 right-2"/>
                            </div>

                            <div className="h-48 p-4 bg-zinc-900 rounded-lg relative cursor-pointer hover:bg-zinc-800 transition duration-300 ease-in-out">
                                <p className="text-zinc-400 text-base">Rise quickly in your business and school life with creative ideas.</p>
                                <MdLightbulbOutline className="text-3xl absolute p-1 text-gray-400 bg-zinc-950 rounded-xl bottom-2 right-2"/>
                            </div>

                            <div className="h-48 p-4 bg-zinc-900 rounded-lg relative cursor-pointer hover:bg-zinc-800 transition duration-300 ease-in-out">
                                <p className="text-zinc-400 text-base">Virtual friend to share your daily life and problems with.</p>
                                <MdOutlineMessage className="text-3xl absolute p-1 text-gray-400 bg-zinc-950 rounded-xl bottom-2 right-2"/>
                            </div>

                            <div className="h-48 p-4 bg-zinc-900 rounded-lg relative cursor-pointer hover:bg-zinc-800 transition duration-300 ease-in-out">
                                <p className="text-zinc-400 text-base">Developer friendly with advanced SEO, debugging and algorithms.</p>
                                <MdOutlineCode className="text-3xl absolute p-1 text-gray-400 bg-zinc-950 rounded-xl bottom-2 right-2"/>
                            </div>
                        </div>
                    </>
                    :
                    <div className="p-0 sm:p-2 max-h-[70vh] overflow-y-auto hide-scrollbar">
                        <div className="my-10 flex items-center gap-5">
                            <MdAndroid className="text-zinc-200 text-4xl"/>
                            <p className="tex-xl text-zinc-200">{recentPrompt}</p>
                        </div>

                        <div className="flex items-start gap-5">
                            <MdFingerprint className="text-zinc-100 text-4xl"/>
                            {loading
                            ? <div className="loader w-full flex flex-col gap-3">
                                <br className="rounded-md border-none bg-gray-100 bg-gradient-to-r from-blue-300 via-white to-blue-300 h-5 custom-bg-size loader animate-loader"/>
                                <br className="rounded-md border-none bg-gray-100 bg-gradient-to-r from-blue-300 via-white to-blue-300 h-5 custom-bg-size loader animate-loader"/>
                                <br className="rounded-md border-none bg-gray-100 bg-gradient-to-r from-blue-300 via-white to-blue-300 h-5 custom-bg-size loader animate-loader"/>
                            </div> : 
                            <p 
                                className="text-base font-light leading-relaxed text-zinc-200" 
                                dangerouslySetInnerHTML={{__html:resultData}}>
                            </p>}
                        </div>
                    </div>
                }

                <div className="absolute bottom-4 w-full max-w-4xl px-5 mx-auto">
                    <div className="flex items-center justify-between gap-5 bg-zinc-800 p-2 rounded-full">
                        <input 
                            type="text" 
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            placeholder="Tell me what you want"    
                            className="flex-1 bg-transparent border-none outline-none p-2 text-base text-zinc-300 placeholder-zinc-500"
                        />
                        <div className="flex items-center gap-4">
                            <MdOutlinePlayCircleFilled className="text-4xl text-zinc-400 cursor-pointer hover:text-zinc-200 transition duration-300 ease-in-out rounded-full" onClick={() => onSent()}/>
                        </div>
                    </div>

                    <p className="text-sm my-4 text-center font-light text-zinc-600">
                        It is just a private project and does not constitute any purpose. Contact for questions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;