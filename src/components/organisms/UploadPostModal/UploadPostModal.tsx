import * as React from 'react';
import Box from '@mui/material/Box';
import   Button  from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Subtitle, Title } from './styled';
import { Button as StyledButton } from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#D8F34E',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  maxWidth: '600px',
  height: '80vh',
  width: '70%',
};

export default function UploadPostModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <> 
        <Box sx={style}>
          <Title>
          Upload your post
          </Title>
          <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo libero.
          </Subtitle>
<Input value='Post title'/>
          <StyledButton variant='black' text='Confirm'/>
        </Box>

        
        </>
      </Modal>
    </div>
  );
}