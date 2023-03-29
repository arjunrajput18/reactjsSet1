export const ButtonComponent = ({
  backgroundColor,
  color,
  padding,
  borderRadius
}) => {
  const stylesObj = {
    backgroundColor,
    color,
    borderRadius,
    padding
  };

  return (
    <>
      <button style={stylesObj}>Start</button>
    </>
  );
};
