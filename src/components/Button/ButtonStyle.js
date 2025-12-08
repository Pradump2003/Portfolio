export default function ButtonStyle(styleType) {
  const primaryButtonStyle =
    "text-white font-semibold font-castoro py-4 px-16 bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-800 hover:to-red-800 duration-300";
  const secondaryButtonStyle =
    "text-white font-semibold font-castoro py-4 px-16 bg-gradient-to-r from-green-500 to-violet-500 hover:from-green-800 hover:to-violet-800 duration-300";

  if (styleType === "primary") {
    return primaryButtonStyle;
  } else if (styleType === "secondary") {
    return secondaryButtonStyle;
  } else {
    return primaryButtonStyle;
  }
}
