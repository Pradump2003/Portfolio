import ButtonStyle from "./ButtonStyle";

export default function Button({text, className ='', buttonType, styleType }){
    return (
        <button
            type={buttonType}
            className={`${ButtonStyle(styleType)} transition-all`}
        >
            {text}
        </button>
    );
}