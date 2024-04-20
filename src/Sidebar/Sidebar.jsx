import { useState, useContext } from "react"
import { Context } from "../context/Context";
import {
    MdOutlineBlurOn,
    MdOutlineAdd,
    MdOutlineMessage,
    MdQuestionMark,
    MdHive,
    MdSettings,
} from "react-icons/md";

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <div className="min-h-screen inline-flex flex-col justify-between bg-zinc-900 p-4">
            <div className="top">
                <MdOutlineBlurOn className="text-5xl block cursor-pointer text-stone-200" onClick={() => setExtended(prev => !prev)} />
                <div
                    onClick={() => newChat()}
                    className="mt-12 flex items-center gap-2 p-2 rounded-full text-sm cursor-pointer transition duration-300 ease-in-out hover:bg-zinc-800"
                >
                    <MdOutlineAdd className="text-3xl block cursor-pointer text-stone-400" />
                    {extended ? <p className="text-stone-400 pr-2 text-base">New Chat</p> : null}
                </div>

                {extended ?
                    <div className="flex flex-col">
                        <p className="mt-8 mb-5 text-stone-400 text-base">History</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div key={index} onClick={() => loadPrompt(item)} className="flex items-center gap-4 p-2 pr-10 rounded-full text-zinc-400 cursor-pointer transition duration-300 ease-in-out hover:bg-zinc-800">
                                    <MdOutlineMessage className="text-3xl text-zinc-500 ml-2" />
                                    <p>{item.slice(0, 18)} ...</p>
                                </div>
                            );
                        })}
                    </div>
                    : null}
            </div>

            <div className="flex flex-col">
                <div className="flex items-center p-3 gap-3 pr-2.5 rounded-full text-gray-700 cursor-pointer transition duration-300 ease-in-out hover:bg-zinc-800">
                        <MdQuestionMark className="text-2xl text-stone-400" />                   
                    {extended ? <p className="text-stone-400">Help</p> : null}
                </div>

                <div className="flex items-center p-3 gap-3 pr-2.5 rounded-full text-gray-700 cursor-pointer transition duration-300 ease-in-out hover:bg-zinc-800">
                        <MdHive className="text-2xl text-stone-400" />
                    {extended ? <p className="text-stone-400">Activity</p> : null}
                </div>

                <div className="flex items-center p-3 gap-3 pr-2.5 rounded-full text-gray-700 cursor-pointer transition duration-300 ease-in-out hover:bg-zinc-800">
                        <MdSettings className="text-2xl text-stone-400" />
                    {extended ? <p className="text-stone-400">Settings</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;