import VideoModal from "./components/openModal";
import VideoUploader from "./components/VideoUploader";
import Container from "./provider/Container";

function App() {
  return (
    <Container>
      <VideoModal />
      <VideoUploader />
    </Container>
  );
}

export default App;
