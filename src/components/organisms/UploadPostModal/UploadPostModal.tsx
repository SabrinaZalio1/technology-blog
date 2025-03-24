import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Btn, ButtonContainer, Container, CrossContainer, Section, StyledModalBox, Subtitle, Title } from './styled';
import { Button as StyledButton } from '../../atoms/Button/Button';
import UploadImgButton from '../../molecules/UploadImgButton/UploadImgButton';
import Cross from '../../../assets/icons/Cross';
import { Input } from '../../atoms/Input/Input';
import UploadLoader from '../../molecules/UploadLoader/UploadLoader';
import { useUploadPostModal } from './hook/useUploadPostModal';

interface IUploadPostModal {
  children: React.ReactElement;
}
export default function UploadPostModal({ children }: IUploadPostModal) {
  const {
    open,
    name,
    setName,
    uploadStatus,
    progress,
    handleOpen,
    handleClose,
    handleUploadStart,
    handleRetry,
  } = useUploadPostModal();

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

              {uploadStatus === "initial" && <UploadImgButton onUploadStart={handleUploadStart} />}

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
