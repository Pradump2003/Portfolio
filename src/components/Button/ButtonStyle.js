export default function ButtonStyle(styleType) {
  const primaryButtonStyle =
    "text-black font-semibold font-castoro py-4 px-16 bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-800 hover:to-red-800 duration-300 hover:text-white";
  const secondaryButtonStyle =
    "bg-white hover:bg-black text-black hover:text-white border-2 border-red-500 font-medium py-4 px-16 ";

  if (styleType === "primary") {
    return primaryButtonStyle;
  } else if (styleType === "secondary") {
    return secondaryButtonStyle;
  } else {
    return primaryButtonStyle;
  }
}
