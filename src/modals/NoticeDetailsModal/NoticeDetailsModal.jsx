import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Box, Button, Checkbox, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Modal from 'modals/Modal/Modal';
import { useState } from 'react';
import { useGetNoticesByIdQuery } from 'redux/notices/noticesSlice';
import { CantBtn } from '../AddPetModal/FirstStep.styled';
import {
  B,
  Div,
  L,
  ModalBoxNotice,
  Text,
  TextT,
  Ul,
  ButtonBoxNotice,
  TitleNotice,
  DivBox,
  GGGG,
  CategoryText,
  TextLabel,
  NoticeImg,
} from './NoticeDetailsModal.styled';

export const NoticeDetailsModal = ({
  noPetPhoto,
  isOpen,
  onClose,
  currentPet,
  onFavButtonClick,
}) => {
  const [toggl, setToggle] = useState(false);

  const showHeart = () => {
    console.log(toggl);
    setToggle(!toggl);
  };

  const {
    breed,
    category,
    title,
    imgUrl,
    location,
    price,
    owner,
    createdAt,
    sex,
    comments,
    _id,
    name,
  } = currentPet;

  const { moreDetails = {} } = useGetNoticesByIdQuery(_id);
  console.log(moreDetails);
  return (
    <Modal sx={ModalBoxNotice} isOpen={isOpen} onClose={onClose}>
      <div>
        <DivBox>
          <Box sx={B}>
            <NoticeImg
              src={imgUrl === 'default/url' ? noPetPhoto : imgUrl}
              alt=""
            />
            <CategoryText>
              <Typography sx={TextLabel}>{category}</Typography>
            </CategoryText>
          </Box>
          <Div>
            <Typography sx={TitleNotice}>{title}</Typography>
            <Ul>
              <L>
                <Typography sx={Text}>Name:</Typography>
                <Typography sx={TextT}>{name}</Typography>
              </L>
              <L>
                <Typography sx={Text}>Birthday:</Typography>
                <Typography sx={TextT}>
                  {dayjs(createdAt).format('DD.MM.YYYY')}
                </Typography>
              </L>
              <L>
                <Typography sx={Text}>Breed:</Typography>
                <Typography sx={TextT}>{breed}</Typography>
              </L>
              <L>
                <Typography sx={Text}>The Sex:</Typography>
                <Typography sx={TextT}>{sex}</Typography>
              </L>
              <L>
                <Typography sx={Text}>Location:</Typography>
                <Typography sx={TextT}>{location}</Typography>
              </L>
              <L>
                <Typography sx={Text}>Email:</Typography>
                <Typography sx={TextT}>
                  {owner?.email ? owner?.email : '--/--/--'}
                </Typography>
              </L>
              <L>
                <Typography sx={Text}>Phone:</Typography>
                <Typography sx={TextT}>
                  {owner?.phone ? owner.phone : '--/--/--'}
                </Typography>
              </L>
              {price && (
                <L>
                  <Typography sx={Text}>Price:</Typography>
                  <Typography sx={TextT}>{price}</Typography>
                </L>
              )}
            </Ul>
          </Div>
        </DivBox>
        <GGGG>
          <Typography sx={Text}>Comments:</Typography>
          <Typography sx={TextT}>{comments}</Typography>
          <Box sx={ButtonBoxNotice}>
            <Button sx={CantBtn}>Contact</Button>
            <Button
              sx={CantBtn}
              type="submit"
              onClick={() => {
                onFavButtonClick(currentPet);
                showHeart();
              }}
            >
              Add to
              <Checkbox
                checked={toggl}
                icon={<FavoriteBorder />}
                checkedIcon={
                  <Favorite
                    sx={{
                      '&.Mui-check ': {
                        color: 'black',
                      },
                    }}
                  />
                }
              />
            </Button>
          </Box>
        </GGGG>
      </div>
    </Modal>
  );
};
