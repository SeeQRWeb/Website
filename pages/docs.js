import NavBar from "../components/NavBar";

const DocsPage = () => {
  return (
    <>
      <NavBar showFadeEffect={false} />
      <iframe
        src="https://master--zippy-naiad-6561d5.netlify.app/docs/intro"
        className="mt-5 w-screen h-screen"
      ></iframe>
    </>
  );
};

export default DocsPage;
