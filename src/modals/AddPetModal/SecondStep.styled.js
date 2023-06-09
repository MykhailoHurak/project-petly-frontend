import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const FontButton = theme => ({
  fontFamily: theme.customFontFamily.primary,
  fontStyle: 'normal',
  fontWeight: theme.customFontWeight.normalM,
  fontSize: '16px',
  textTransform: 'none',
  color: theme.customColors.primaryFont,
  textAlign: 'center',
  width: '100%',
  lineHeight: '22px',
  letterSpacing: '-0.01em',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '20px',
    lineHeight: '27px',
  },
});

export const AddBtn = styled(Button)`
  && {
    overflow: 'hidden';
    display: flex;
    color: #111111;
    box-shadow: none;
    background: #fdf7f2;
    margin-top: 20px;
    border: 1px solid rgba(245, 146, 86, 0.5);
    :focus,
    :focus,
    :active,
    :hover {
      border: 2px solid #f59256;
      background: #fdf7f2;
      box-shadow: none;
      color: #ffffff;
    }
  }
`;
export const AddBtnTheme = theme => ({
  borderRadius: '20px',
  width: '208px',
  height: '208px',
  mb: '20px',
  '&.Mui-active ': {
    borderColor: '#F59256',
    minHeight: '112px',
  },
  [theme.breakpoints.up('tablet')]: {
    width: '182px',
    height: '182px',
    borderRadius: '40px',
    mb: '40px',
  },
});
export const AddBtnThemeNotice = theme => ({
  borderRadius: '20px',
  overflow: 'hidden',
  width: '116px',
  height: '116px',
  mb: '20px',
  '&.Mui-active ': {
    borderColor: '#F59256',
    minHeight: '112px',
  },
  [theme.breakpoints.up('tablet')]: {
    width: '140px',
    height: '140px',
    mb: '40px',
  },
});

export const AddIcone = styled(AddIcon)`
  && {
    width: 48px;
    height: 48px;
    color: rgba(17, 17, 17, 0.6);
  }
`;
export const ModalBox = styled.div`
  && {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

export const CssTextField = styled(TextField)({
  marginTop: '36px',
  border: '1px solid rgba(245, 146, 86, 0.5)',
  borderRadius: '20px',
  background: '#fdf7f2',
  padding: '15px',
  '& label.Mui-focused': {
    color: '#F59256',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#F59256',
  },
  '& .MuiTextField': {
    marginTop: '8px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      minHeight: '112px',
      borderColor: '#F59256',
      borderRadius: '20px',
    },
    '&:hover fieldset': {
      borderColor: '#F59256',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F59256',
      minHeight: '112px',
    },
  },
});
export const CssTextFieldTheme = theme => ({
  width: '100%',
  height: '100%',
  mt: '8px',
  minHeight: '40px',
  [theme.breakpoints.up('tablet')]: {
    minHeight: '107px',
    mt: '12px',
  },
});

export const Img = styled.img`
  width: inherit;
`;

export const Malee = styled.svg`
 width: 100px,
  height: 100px,
`;
