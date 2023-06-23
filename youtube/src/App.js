import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed, VideoDetail, ChannelDeails, SearchFeed, Navbar } from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route exact path="/video/:id" element={<VideoDetail />} />
        <Route exact path="/channel/:id" element={<ChannelDeails />} />
        <Route exact path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
