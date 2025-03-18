import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { StyledModalBox, Subtitle, Title } from './styled';
import { Button as StyledButton } from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';

interface IUploadPostModal{
  children:any;
}
export default function UploadPostModal({children}:IUploadPostModal) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <Title>Upload your post</Title>
            <Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo libero.
            </Subtitle>
            <Input placeholder='Post title' value='' />
            <StyledButton variant='black' text='Confirm' />
          </StyledModalBox>
        </>
      </Modal>
    </>
  );
}
