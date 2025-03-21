import React from "react";
import { BarWrapper, Button, Container, ProgressBar, Text } from "./styled";

interface UploadLoaderProps {
  status: "loading" | "error" | "success";
  progress: number;
  onRetry: () => void;
}

const UploadLoader: React.FC<UploadLoaderProps> = ({ status, progress, onRetry }) => {
  return (
    <Container>
      {status === "loading" && (
        <>
          <Text>Loading image {progress}%</Text>
          <BarWrapper>
            <ProgressBar progress={progress} color="black" />
          </BarWrapper>
          <Button onClick={onRetry}>Cancel</Button>
        </>
      )}

      {status === "error" && (
        <>
          <Text>Failed to upload your file</Text>
          <BarWrapper>
            <ProgressBar progress={100} color="red" />
          </BarWrapper>
          <Button onClick={onRetry}>Retry</Button>
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
