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
        <div className="">
            <div className="">
                <MdOutlineBlurOn className="" onClick={() => setExtended(prev => !prev)} />
                <div onClick={() => newChat()} className="">
                    <MdOutlineAdd />
                    {extended ? <p>New Chat</p> : null}
                </div>

                {extended ?
                    <div className="">
                        <p className="">History</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div key={index} onClick={() => loadPrompt(item)} className=""> 
                                    <MdOutlineMessage className="" />
                                    <p>{item.slice(0,18)} ...</p>
                                </div>
                            );
                        })}
                    </div>
                    : null }

                    <div className="">
                        <div className="">
                            <a 
                                href="https://www.linkedin.com/in/mehmet-imdat-1a15b0240/"
                                target="_blank"    
                            >
                                <MdQuestionMark />
                            </a>
                            {extended ? <p>Help</p> : null}
                        </div>

                        <div className="">
                            <a 
                                href="https://www.linkedin.com/in/mehmet-imdat-1a15b0240/"
                                target="_blank"    
                            >
                                <MdHive />
                            </a>
                            {extended ? <p>Activity</p> : null}
                        </div>

                        <div className="">
                            <a 
                                href="https://github.com/MehmetImd"
                                target="_blank"    
                            >
                                <MdSettings />
                            </a>
                            {extended ? <p>Settings</p> : null}
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Sidebar;