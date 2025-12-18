export default function ButtonStyle(styleType) {
  const primaryButtonStyle =
    "text-white font-semibold py-3 px-8 md:py-4 md:px-16 \
   bg-gradient-to-r from-blue-500 to-red-500 \
   hover:from-blue-700 hover:to-red-700 transition";

  const secondaryButtonStyle =
    "text-white font-semibold py-3 px-8 md:py-4 md:px-16 \
   bg-gradient-to-r from-green-500 to-violet-500 \
   hover:from-green-700 hover:to-violet-700 transition";

  if (styleType === "primary") {
    return primaryButtonStyle;
  } else if (styleType === "secondary") {
    return secondaryButtonStyle;
  } else {
    return primaryButtonStyle;
  }
}
