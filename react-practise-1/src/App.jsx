import { useContext } from "react";
import VideoList from "./components/VideoList";
import { VideosContext } from "./context/videos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoDetails from "./components/VideoDetails";

function App() {
  const { videos } = useContext(VideosContext);
  const count = videos.length;
  let heading;
  if (count > 0) {
    const noun = count > 1 ? "Videos" : "Video";
    heading = count + " " + noun;
  }
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <h2 className=" text-center m-4">{heading}</h2> <VideoList /></>} />
          <Route path="/:id" element={<VideoDetails />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
