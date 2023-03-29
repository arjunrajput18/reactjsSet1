export const DisplayImage = ({ caption, url }) => {
  return (
    <>
      <h1>{caption}</h1>
      <img src={url} style={{ height: "200px" }} alt="ok" />
    </>
  );
};
