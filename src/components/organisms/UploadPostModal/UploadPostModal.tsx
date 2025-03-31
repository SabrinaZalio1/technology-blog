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
import { ICreatePost } from '../../../interfaces/Post';

interface IUploadPostModal{
  children:React.ReactElement;
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
    setUploadStatus,
  } = useUploadPostModal();
  
  const [image, setImage] = React.useState<string | null>(null);
  const { create } = useCreatePost();

  const isSuccess = uploadStatus === 'success';

  const formatPostData = (): ICreatePost => ({
    data: {
      title: name,
      subtitle: 'Subtitle',
      topic: 'Seguridad',
      author: 'Juan Pérez',
      readTime: 5,
      coverImg: Math.floor(Math.random() * 8) + 1,
      body: bodyTexts[Math.floor(Math.random() * bodyTexts.length)].body,
    },
  });

  const handleCreatePost = async () => {
    if (!name || !image) return;
    await create(formatPostData());
    setUploadStatus('success');
  };

  const renderContent = () => {
    if (isSuccess) {
      return (
        <>
          <Title>Your post was successfully uploaded!</Title>
        </>
      );
    }

    return (
      <>
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

          {uploadStatus !== 'initial' && (
            <UploadLoader
              status={uploadStatus}
              progress={progress}
              onRetry={handleRetry}
            />
          )}
        </Section>
      </>
    );
  };

  const renderButton = () => (
    <StyledButton
      variant="black"
      text={isSuccess ? 'Done' : 'Confirm'}
      onClick={isSuccess ? handleClose : handleCreatePost}
    />
  );

  return (
    <>
      <Btn onClick={handleOpen}>{children}</Btn>
      <Modal open={open} onClose={handleClose}>
        <StyledModalBox>
          <CrossContainer onClick={handleClose}>
            <Cross />
          </CrossContainer>
          <Container>
            {renderContent()}
            <ButtonContainer>{renderButton()}</ButtonContainer>
          </Container>
        </StyledModalBox>
      </Modal>
    </>
  );
}
