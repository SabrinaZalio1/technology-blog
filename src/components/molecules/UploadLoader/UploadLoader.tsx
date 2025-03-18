import React, { useState } from "react";
import { BarWrapper, Button, Container, ProgressBar, Text } from "./styled";


const UploadLoader: React.FC = () => {
  const [status, setStatus] = useState<"loading" | "error" | "success">("loading");
  const [progress, setProgress] = useState(60);

  return (
    <Container>
      {status === "loading" && (
        <>
          <Text>Loading image {progress}%</Text>
          <BarWrapper>
            <ProgressBar progress={progress} color="black" />
          </BarWrapper>
          <Button onClick={() => setStatus("error")}>Cancel</Button>
        </>
      )}

      {status === "error" && (
        <>
          <Text>Failed to upload your file</Text>
          <BarWrapper>
            <ProgressBar progress={100} color="red" />
          </BarWrapper>
          <Button onClick={() => setStatus("loading")}>Retry</Button>
        </>
      )}

      {status === "success" && (
        <>
          <Text>Upload successful ✔</Text>
          <BarWrapper>
            <ProgressBar progress={100} color="black" />
          </BarWrapper>
        </>
      )}
    </Container>
  );
};

export default UploadLoader;