import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'redux/reducers';

const useFilteredMedia = () => {
  const favoriteList = useSelector((state: State) => state.movie.list);

  const movies = useMemo(() => {
    return favoriteList.filter(item => item.media_type === 'movie');
  }, [favoriteList]);

  const tvSeries = useMemo(() => {
    return favoriteList.filter(item => item.media_type === 'tv');
  }, [favoriteList]);

  return { movies, tvSeries };
};

export default useFilteredMedia;
