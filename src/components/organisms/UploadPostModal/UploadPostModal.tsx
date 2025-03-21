import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Btn, ButtonContainer, Container, CrossContainer, Section, StyledModalBox, Subtitle, Title } from './styled';
import { Button as StyledButton } from '../../atoms/Button/Button';
import UploadImgButton from '../../molecules/UploadImgButton/UploadImgButton';
import Cross from '../../../assets/icons/Cross';
import { Input } from '../../atoms/Input/Input';
import UploadLoader from '../../molecules/UploadLoader/UploadLoader';

interface IUploadPostModal {
  children: any;
}
export default function UploadPostModal({ children }: IUploadPostModal) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [uploadStatus, setUploadStatus] = React.useState<"idle" | "loading" | "error" | "success">("idle");
  const [progress, setProgress] = React.useState(0);

  const handleUploadStart = () => {
    setUploadStatus("loading");
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadStatus("success");
          return 100;
        }
        return prev + 20;
      });
    }, 500);
  };

  const handleRetry = () => {
    setUploadStatus("idle");
  };
  return (
    <>
      <Btn onClick={handleOpen}>{children}</Btn>
      <Modal open={open} onClose={handleClose}>
        <StyledModalBox>
          <CrossContainer onClick={handleClose}>
            <Cross />
          </CrossContainer>
          <Container>
            <Title>Upload your post</Title>
            <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo libero.</Subtitle>
            <Section>
              <Input
                label="Post Title"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Post Title"
              />

              {uploadStatus === "idle" && <UploadImgButton onUploadStart={handleUploadStart} />}

              {(uploadStatus === "loading" || uploadStatus === "error" || uploadStatus === "success") && (
                <UploadLoader status={uploadStatus} progress={progress} onRetry={handleRetry} />
              )}
            </Section>
            <ButtonContainer>
              <StyledButton variant="black" text="Confirm" />
            </ButtonContainer>
          </Container>
        </StyledModalBox>
      </Modal>
    </>
  );
}
