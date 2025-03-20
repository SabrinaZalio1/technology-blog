import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { CrossContainer, Section, StyledModalBox, Subtitle, Title } from './styled';
import { Button as StyledButton } from '../../atoms/Button/Button';
import UploadImgButton from '../../molecules/UploadImgButton/UploadImgButton';
import Cross from '../../../assets/icons/Cross';
import { Input } from '../../atoms/Input/Input';

interface IUploadPostModal {
  children: any;
}
export default function UploadPostModal({ children }: IUploadPostModal) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = React.useState("");

  return (
    <>
      <Button onClick={handleOpen}>{children}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <StyledModalBox>
            <CrossContainer onClick={handleClose}>
              <Cross />
            </CrossContainer>
            <Title>Upload your post</Title>
            <Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo libero.
            </Subtitle>
            <Section>
              <Input
                label="Post Title"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Post Title"
              />
              <UploadImgButton />
            </Section>
            <StyledButton variant='black' text='Confirm' />
          </StyledModalBox>
        </>
      </Modal>
    </>
  );
}
