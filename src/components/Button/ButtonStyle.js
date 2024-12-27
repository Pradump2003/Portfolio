export default function ButtonStyle(styleType){
    const primaryButtonStyle = "bg-black hover:bg-red-400 text-white font-medium py-4 px-16";
    const secondaryButtonStyle = "bg-white hover:bg-black text-black hover:text-white border-2 border-red-500 font-medium py-4 px-16 ";
    
    if(styleType === "primary"){
        return primaryButtonStyle;
    }
    else if(styleType === "secondary"){
        return secondaryButtonStyle;
    }
    else{
        return primaryButtonStyle;
    }
}