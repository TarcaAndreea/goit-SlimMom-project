import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import css from './Modal.module.css';

export const ModalComponent = ({ isOpen, onClose }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    borderRadius: '10px',
    width: { xs: 672, sm: 564 },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <AiOutlineClose className={css.close_button} onClick={onClose} />
        <Typography
          variant="h2"
          fontWeight="700"
          fontFamily="Verdana"
          color="rgba(33, 33, 33, 1)"
          maxWidth="508px"
          maxHeight="70px"
          marginLeft="3%"
          marginRight="auto"
          marginTop="45px"
          textAlign="center"
        >
          Your recommended daily calorie intake is
        </Typography>
        <Typography>{} kcal</Typography>
        <Button
          variant="contained"
          type="submit"
          color="ochre"
          sx={{
            fontFamily: 'Verdana',
            fontSize: '14px',
            textTransform: 'unset',
            borderRadius: '30px',
            boxShadow: '0px 4px 10px 0px rgba(252, 132, 45, 0.5)',
            fontWeight: '700',
            width: '210px',
            height: '43px',
            marginTop: '35px',
          }}
        >
          <NavLink className={css.button_link} to="/register">
            Start losing weight
          </NavLink>
        </Button>
      </Box>
    </Modal>
  );
};
