import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

// Styles cho Modal
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

const ErrorModal = ({ open, onClose, title, message }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          {title || "Thông báo lỗi"}
        </Typography>
        <Typography sx={{ mb: 3 }}>{message || "Đã xảy ra lỗi."}</Typography>
        <Button
          variant="contained"
          onClick={onClose}
          fullWidth
          sx={{
            backgroundColor: "#f55266", // Màu nút
            color: "white",
            "&:hover": {
              backgroundColor: "#f2223b", // Màu khi hover
            },
          }}
        >
          Đóng
        </Button>
      </Box>
    </Modal>
  );
};

export default ErrorModal;
