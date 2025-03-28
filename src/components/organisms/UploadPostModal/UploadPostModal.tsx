import * as React from 'react';
import Modal from '@mui/material/Modal';
import {
  Btn,
  ButtonContainer,
  Container,
  CrossContainer,
  Section,
  StyledModalBox,
  Subtitle,
  Title,
} from './styled';
import { Button as StyledButton } from '../../atoms/Button/Button';
import UploadImgButton from '../../molecules/UploadImgButton/UploadImgButton';
import Cross from '../../../assets/icons/Cross';
import { Input } from '../../atoms/Input/Input';
import UploadLoader from '../../molecules/UploadLoader/UploadLoader';
import { useUploadPostModal } from './hook/useUploadPostModal';
import { useCreatePost } from '../../../hooks/useCreatePost';
import { bodyTexts } from './bodyTexts';

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
  const [image, setImage] = React.useState<string | null>(null);
  const { create } = useCreatePost();

  const randomBody = bodyTexts[Math.floor(Math.random() * bodyTexts.length)].body;
  const randomCoverImg = Math.floor(Math.random() * 8) + 1;

  const handleCreatePost = async () => {
    if (!name || !image) return;
    const postData = {
      data: {
        title: name,
        subtitle: 'Subtitle',
        topic: 'Seguridad',
        author: 'Juan Pérez',
        readTime: 5,
        coverImg: randomCoverImg,
        body: randomBody,
      },
    };

    await create(postData);
    handleClose();
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
            <Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse commodo libero.
            </Subtitle>
            <Section>
              <Input
                label="Post Title"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Post Title"
              />

              {uploadStatus === 'initial' && (
                <UploadImgButton
                  onUploadStart={handleUploadStart}
                  setImage={setImage}
                />
              )}

              {(uploadStatus === 'loading' ||
                uploadStatus === 'error' ||
                uploadStatus === 'success') && (
                  <UploadLoader
                    status={uploadStatus}
                    progress={progress}
                    onRetry={handleRetry}
                  />
                )}
            </Section>
            <ButtonContainer>
              <StyledButton
                variant="black"
                text="Confirm"
                onClick={handleCreatePost}
              />
            </ButtonContainer>
          </Container>
        </StyledModalBox>
      </Modal>
    </>
  );
}
