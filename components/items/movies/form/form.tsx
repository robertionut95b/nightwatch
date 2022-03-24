import {
  createStandaloneToast,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import { MinimalSpinner } from '@components/utils/layout/spinners/minimalSpinner';
import { Genre, Language, Movie, Prisma } from '@prisma/client';
import { toastDefaults } from 'assets/constants/config';
import { format, parseISO } from 'date-fns';
import { MovieCreateInput, MovieUpdateInput } from 'generated/graphql';
import isEqual from 'lodash.isequal';
import { useRouter } from 'next/router';
import { FormEvent, KeyboardEvent, useState } from 'react';
import useCreateMovie from '../../../../src/hooks/useCreateMovie';
import Image from 'next/image';
import ShowIf from '@components/utils/layout/showConditional/showIf';
import Divider from '../../../utils/layout/divider/divider';
import { removeEmpty2 } from '../../../utils/helpers/objects';
import Select from 'react-select';
import useUpdateMovie from 'src/hooks/useUpdateMovie';
import { OMDBMovie } from '../../../../src/utils/convertors/OMDBMovie';
import isEmptyObject from '../../../../src/utils/objects/isEmptyObject';

interface IMovieFormProps {
  title: { value: string };
  year: { value: string };
  rating: { value: string };
  release: { value: string };
  runtime: { value: string };
  genres: { value: string };
  languages: { value: string };
  director: { value: string };
  actors: { value: string };
  plot: { value: string };
  poster: { value: string };
  imdbRating: { value: string };
  imdbID: { value: string };
}

interface SelectOption {
  label: string;
  value: string;
}

const mapObjectToOption = (object: Language | Genre): SelectOption => {
  return {
    label: object.name,
    value: object.name,
  };
};

const MovieForm = ({
  movie,
  readOnly = false,
  showFields = [
    'imdbID',
    'plot',
    'imdbRating',
    'poster',
    'rating',
    'release',
    'runtime',
    'title',
    'year',
    'genres',
    'languages',
  ],
  genres,
  languages,
}: {
  movie?: Partial<
    Movie & {
      genres: Genre[];
      languages: Language[];
    }
  >;
  readOnly?: boolean;
  showFields?: (keyof (Movie & {
    genres: Genre[];
    languages: Language[];
  }))[];
  genres: Genre[];
  languages: Language[];
}): JSX.Element => {
  const toast = createStandaloneToast();
  const { reload } = useRouter();
  const [imgPrev, setImgPrev] = useState<string>(movie?.poster || '');

  const [selectedGenresEntries, setSelectedGenresEntries] = useState<
    SelectOption[]
  >(
    movie?.genres?.map((g) => {
      return {
        label: g.name,
        value: g.name,
      };
    }) || [],
  );
  const [selectedLanguageEntries, setSelectedLanguageEntries] = useState<
    SelectOption[]
  >(
    movie?.languages?.map((l) => {
      return {
        label: l.name,
        value: l.name,
      };
    }) || [],
  );

  const [movieEntry, setMovieEntry] = useState<
    Partial<typeof movie> | Prisma.MovieCreateInput | undefined
  >(movie);

  const { loading, createMovie } = useCreateMovie({
    onSuccess: () => {
      toast({
        title: 'Movie created',
        status: 'success',
        ...toastDefaults,
      });
      reload();
    },
    onError: (err) => {
      if (err?.message.toLowerCase().includes('unique constraint failed')) {
        toast({
          title: 'Movie already exists',
          status: 'error',
          ...toastDefaults,
        });
      } else
        toast({
          title: 'Could not create movie',
          status: 'error',
          ...toastDefaults,
        });
    },
  });

  const { loading: loadingUpdate, updateMovie } = useUpdateMovie({
    onSuccess: () => {
      toast({
        title: 'Movie updated',
        status: 'success',
        ...toastDefaults,
      });
      reload();
    },
    onError: (err) => {
      if (err?.message.toLowerCase().includes('unique constraint failed')) {
        toast({
          title: 'Movie already exists',
          status: 'error',
          ...toastDefaults,
        });
      } else
        toast({
          title: 'Could not update movie',
          status: 'error',
          ...toastDefaults,
        });
    },
  });

  const submitForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const {
      imdbID,
      plot,
      imdbRating,
      poster,
      rating,
      release,
      runtime,
      title,
      year,
    } = e.target as typeof e.target & IMovieFormProps;

    const movieCreate: MovieCreateInput = {
      imdbID: imdbID.value,
      plot: plot.value,
      imdbRating: parseInt(imdbRating.value) || 0,
      poster: poster.value,
      rating: rating.value,
      release: release.value,
      runtime: parseInt(runtime.value) || 0,
      title: title.value,
      year: parseInt(year.value) || 0,
      genres: {
        connectOrCreate: selectedGenresEntries.map((g) => {
          return {
            where: {
              name: g.value.trim(),
            },
            create: {
              name: g.value.trim(),
            },
          };
        }),
      },
      languages: {
        connectOrCreate: selectedLanguageEntries.map((l) => {
          return {
            where: {
              name: l.value.trim(),
            },
            create: {
              name: l.value.trim(),
            },
          };
        }),
      },
    };

    const sanitizedMovieData = removeEmpty2(movieCreate);

    if (!movie) {
      if (isEqual(sanitizedMovieData, movie)) {
        toast({
          title: 'Nothing has changed!',
          status: 'warning',
          ...toastDefaults,
        });
        return;
      }

      createMovie(sanitizedMovieData as MovieCreateInput);
    } else {
      if (isEqual(sanitizedMovieData, movie)) {
        toast({
          title: 'Nothing has changed!',
          status: 'warning',
          ...toastDefaults,
        });
        return;
      }

      updateMovie({
        imdbID: {
          set: sanitizedMovieData.imdbID,
        },
        plot: {
          set: sanitizedMovieData.plot,
        },
        imdbRating: {
          set: sanitizedMovieData.imdbRating,
        },
        poster: {
          set: sanitizedMovieData.poster,
        },
        rating: {
          set: sanitizedMovieData.rating,
        },
        release: {
          set: sanitizedMovieData.release,
        },
        runtime: {
          set: sanitizedMovieData.runtime,
        },
        title: {
          set: sanitizedMovieData.title,
        },
        year: {
          set: sanitizedMovieData.year,
        },
        genres: {
          set: selectedGenresEntries.map((g) => {
            return {
              name: g.value.trim(),
            };
          }),
        },
        languages: {
          set: selectedLanguageEntries.map((l) => {
            return {
              name: l.value.trim(),
            };
          }),
        },
      } as MovieUpdateInput);
    }
  };

  const fillFormByOMDBSearch = async (e: KeyboardEvent) => {
    e.preventDefault();

    const { value: imdbIDSearch } = e.target && {
      value: (e.target as HTMLInputElement).value,
    };

    const IMDBIdRegex = /ev\d{7}\/\d{4}(-\d)?|(ch|co|ev|nm|tt)\d{7}/;

    if (!IMDBIdRegex.test(imdbIDSearch)) {
      toast({
        title: 'Invalid IMDB ID format',
        status: 'error',
        ...toastDefaults,
      });
      return;
    }

    if (e.key === 'Enter') {
      const searchedMovie = await fetch(
        `/api/omdb/movies/search-by-id?i=${imdbIDSearch}`,
      );
      const searchedMovieJson = await searchedMovie.json();

      if (isEmptyObject(searchedMovieJson)) {
        toast({
          title: 'Nothing found on OMDB',
          status: 'error',
          ...toastDefaults,
        });
        return;
      }

      const mv = OMDBMovie.jsonToObject(searchedMovieJson);
      let prismaMovieInput = mv?.toPrismaMovieCreate();
      let release = new Date().toISOString();

      try {
        release = (prismaMovieInput?.release as Date)?.toISOString();
      } catch (ex) {
        if (ex instanceof RangeError) release = new Date().toISOString();
      }

      //@ts-expect-error("title is not undefined")
      prismaMovieInput = {
        ...prismaMovieInput,
        release,
      };

      setMovieEntry(prismaMovieInput);
      setImgPrev(prismaMovieInput?.poster || '');

      if (mv?.Genre) {
        setSelectedGenresEntries(
          mv?.Genre.split(',').map((g) => ({
            label: g.trim(),
            value: g.trim(),
          })),
        );
      }

      if (mv?.Language) {
        setSelectedLanguageEntries(
          mv?.Language.split(',').map((l) => ({
            label: l.trim(),
            value: l.trim(),
          })),
        );
      }
    }
  };

  return (
    <div>
      <FormControl>
        <FormLabel htmlFor="imdbIDSearch">IMDB identifier</FormLabel>
        <Input
          id="imdbIDSearch"
          name="imdbIDSearch"
          type="text"
          placeholder="tt2180339"
          onKeyPress={(e) => fillFormByOMDBSearch(e)}
        />
        <FormHelperText>
          Try to automatically fill the form by IMDB Url
        </FormHelperText>
      </FormControl>
      <Divider content="Manual form" />
      <form className="flex flex-col gap-y-2" onSubmit={(e) => submitForm(e)}>
        <FormControl display={showFields.includes('title') ? 'block' : 'none'}>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            id="title"
            name="title"
            type="text"
            isRequired
            defaultValue={movieEntry?.title}
            readOnly={readOnly}
          />
        </FormControl>
        <FormControl display={showFields.includes('plot') ? 'block' : 'none'}>
          <FormLabel htmlFor="plot">Plot</FormLabel>
          <Textarea
            id="plot"
            name="plot"
            type="text"
            isRequired
            rows={6}
            defaultValue={movieEntry?.plot}
            readOnly={readOnly}
          />
        </FormControl>
        <div className="flex flex-col items-center justify-center gap-x-4 md:flex-row">
          <FormControl
            className="relative"
            display={showFields.includes('poster') ? 'block' : 'none'}
          >
            <FormLabel htmlFor="poster">Poster</FormLabel>
            <Input
              className="mb-4"
              id="poster"
              name="poster"
              type="text"
              onChange={(e) => setImgPrev(e.target.value)}
              defaultValue={imgPrev}
              readOnly={readOnly}
            />
          </FormControl>
          <ShowIf if={imgPrev}>
            <div className="img-wrapper flex justify-center">
              <Image
                src={imgPrev}
                width={140}
                height={210}
                alt="poster"
                objectFit="cover"
              />
            </div>
          </ShowIf>
        </div>
        <FormControl display={showFields.includes('genres') ? 'block' : 'none'}>
          <FormLabel htmlFor="genres">Genres</FormLabel>
          <Select
            className="react-select-container text-black dark:text-white"
            classNamePrefix={'react-select text-black dark:text-white'}
            name="genres"
            instanceId="genres"
            placeholder="Select genres"
            options={genres.map((g) => mapObjectToOption(g))}
            value={selectedGenresEntries}
            isMulti
            // @ts-expect-error("")
            onChange={(opts: SelectOption[]) => setSelectedGenresEntries(opts)}
            closeMenuOnSelect={false}
          />
        </FormControl>
        <FormControl
          display={showFields.includes('languages') ? 'block' : 'none'}
        >
          <FormLabel htmlFor="languages">Languages</FormLabel>
          <Select
            className="react-select-container text-black dark:text-white"
            classNamePrefix={'react-select text-black dark:text-white'}
            name="languages"
            instanceId="languages"
            placeholder="Select languages"
            options={languages.map((l) => mapObjectToOption(l))}
            value={selectedLanguageEntries}
            isMulti
            // @ts-expect-error("")
            onChange={(opts: SelectOption[]) =>
              setSelectedLanguageEntries(opts)
            }
            closeMenuOnSelect={false}
          />
        </FormControl>
        <FormControl
          display={showFields.includes('imdbRating') ? 'block' : 'none'}
        >
          <FormLabel htmlFor="imdbRating">IMDB Rating</FormLabel>
          <Input
            id="imdbRating"
            name="imdbRating"
            type="number"
            step={0.1}
            min={0}
            max={10}
            defaultValue={movieEntry?.imdbRating}
            readOnly={readOnly}
          />
        </FormControl>
        <FormControl display={showFields.includes('year') ? 'block' : 'none'}>
          <FormLabel htmlFor="year">Year</FormLabel>
          <Input
            id="year"
            name="year"
            type="number"
            min={1900}
            max={new Date().getFullYear()}
            defaultValue={movieEntry?.year}
            readOnly={readOnly}
          />
        </FormControl>
        <FormControl display={showFields.includes('rating') ? 'block' : 'none'}>
          <FormLabel htmlFor="rating">Rating</FormLabel>
          <Input
            id="rating"
            name="rating"
            type="text"
            defaultValue={movieEntry?.rating}
            readOnly={readOnly}
          />
        </FormControl>
        <FormControl display={showFields.includes('imdbID') ? 'block' : 'none'}>
          <FormLabel htmlFor="imdbID">IMDB ID</FormLabel>
          <Input
            id="imdbID"
            name="imdbID"
            type="text"
            defaultValue={movieEntry?.imdbID}
            readOnly={readOnly}
          />
        </FormControl>
        <FormControl
          display={showFields.includes('release') ? 'block' : 'none'}
        >
          <FormLabel htmlFor="imdbID">Release</FormLabel>
          <Input
            id="release"
            name="release"
            type="datetime-local"
            defaultValue={format(
              parseISO(
                movieEntry?.release?.toString() || new Date().toISOString(),
              ),
              "yyyy-MM-dd'T'HH:mm",
            )}
            readOnly={readOnly}
          />
        </FormControl>
        <FormControl
          display={showFields.includes('runtime') ? 'block' : 'none'}
        >
          <FormLabel htmlFor="runtime">Runtime</FormLabel>
          <Input
            id="runtime"
            name="runtime"
            min={0}
            type="number"
            defaultValue={movieEntry?.runtime}
            readOnly={readOnly}
          />
        </FormControl>
        <button
          className="btn btn-primary my-4 w-28 place-self-center bg-primary"
          type="submit"
          disabled={loading || loadingUpdate}
        >
          <ShowIfElse if={loading || loadingUpdate} else={'Submit'}>
            <MinimalSpinner color="white" />
          </ShowIfElse>
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
