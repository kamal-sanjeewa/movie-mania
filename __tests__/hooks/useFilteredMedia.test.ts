import { renderHook } from '@testing-library/react-hooks';
import useFilteredMedia from 'hooks/useFilteredMedia.hook';
import { useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('useFilteredMedia', () => {
  it('should return movies when favoriteList contains movies', () => {
    const mockFavoriteList = [
      { id: 1, media_type: 'movie', title: 'Movie 1' },
      { id: 2, media_type: 'tv', title: 'TV Series 1' },
      { id: 3, media_type: 'movie', title: 'Movie 2' },
    ];
    (useSelector as jest.Mock).mockReturnValue(mockFavoriteList);

    const { result } = renderHook(() => useFilteredMedia());

    expect(result.current.movies).toEqual([
      { id: 1, media_type: 'movie', title: 'Movie 1' },
      { id: 3, media_type: 'movie', title: 'Movie 2' },
    ]);
    expect(result.current.tvSeries).toEqual([{ id: 2, media_type: 'tv', title: 'TV Series 1' }]);
  });

  it('should return an empty array when favoriteList is empty', () => {
    (useSelector as jest.Mock).mockReturnValue([]);

    const { result } = renderHook(() => useFilteredMedia());

    expect(result.current.movies).toEqual([]);
    expect(result.current.tvSeries).toEqual([]);
  });

  it('should return only movies or TV series when favoriteList contains only one type', () => {
    const mockMoviesList = [
      { id: 1, media_type: 'movie', title: 'Movie 1' },
      { id: 2, media_type: 'movie', title: 'Movie 2' },
    ];
    (useSelector as jest.Mock).mockReturnValue(mockMoviesList);

    let { result } = renderHook(() => useFilteredMedia());

    expect(result.current.movies).toEqual(mockMoviesList);
    expect(result.current.tvSeries).toEqual([]);

    const mockTvSeriesList = [
      { id: 1, media_type: 'tv', title: 'TV Series 1' },
      { id: 2, media_type: 'tv', title: 'TV Series 2' },
    ];
    (useSelector as jest.Mock).mockReturnValue(mockTvSeriesList);

    ({ result } = renderHook(() => useFilteredMedia()));

    expect(result.current.movies).toEqual([]);
    expect(result.current.tvSeries).toEqual(mockTvSeriesList);
  });

  it('should return empty arrays when favoriteList is empty array', () => {
    (useSelector as jest.Mock).mockReturnValue([]);

    const { result } = renderHook(() => useFilteredMedia());

    expect(result.current.movies).toEqual([]);
    expect(result.current.tvSeries).toEqual([]);
  });
});
