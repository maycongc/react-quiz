import toast from 'react-hot-toast';

export const toastError = (text: string): string =>
  toast.error(text, {
    duration: 3000,
    style: {
      border: '1px solid #eb3636',
      color: '#c92a2a',
      background: '#ffcece',
      font: "500 15px 'Roboto', sans-serif",
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.35)',
    },
  });
