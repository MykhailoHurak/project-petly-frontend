import { useState, useEffect } from 'react';
import { NoticesCategoriesItem } from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem';
import {
  CategoriesList,
  StackStyled,
  Pagi,
} from './NoticesCategoriesList.styled';
import NoResult from 'components/Generic/NoResult/NoResult';

import { useDeleteNoticeMutation } from 'redux/notices/noticesSlice';

export const NoticesCategoriesList = ({
  token,
  error,
  isSuccess,
  findedNotices,
  allItem,
  favoriteArr,
  page,
  setPage,
}) => {
  const [currentNotices, setCurrentNotices] = useState([]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const favoriteIdArr = favoriteArr?.data?.favorite;
  useEffect(() => {
    if (token) {
      if (findedNotices && favoriteIdArr) {
        const newListWhitFav = findedNotices?.map(item => {
          if (favoriteIdArr?.includes(item._id)) {
            return { ...item, like: true };
          }
          return item;
        });
        setCurrentNotices(newListWhitFav);
        return;
      }
    } else {
      if (findedNotices) {
        setCurrentNotices(findedNotices);
      }
    }
  }, [token, favoriteIdArr, findedNotices]);

  const [deleteNotice] = useDeleteNoticeMutation();

  const noticeDeleteHandler = async id => {
    deleteNotice(id);
    const newList = currentNotices.filter(notice => notice._id !== id);
    setCurrentNotices(newList);
  };

  return (
    <div>
      <CategoriesList>
        {isSuccess &&
          currentNotices &&
          currentNotices.map(notice => (
            <NoticesCategoriesItem
              notice={notice}
              key={notice._id}
              noticeDeleteHandler={noticeDeleteHandler}
            />
          ))}
        {error?.data && <NoResult />}
      </CategoriesList>
      {isSuccess && allItem && allItem > 8 && (
        <StackStyled spacing={2}>
          <Pagi
            count={Math.ceil(allItem / 8)}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </StackStyled>
      )}
    </div>
  );
};
