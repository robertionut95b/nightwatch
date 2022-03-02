import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/layout';
import { GetServerSideProps } from 'next';
import apolloClient from '../../lib/apollo/apolloClient';
import {
  SortOrder,
  GenresLanguagesQuery,
  AllSeriesLangGenreQuery,
  AllSeriesLangGenreQueryVariables,
  AllSeriesLangGenreDocument,
  AllSeriesDocument,
  AllSeriesQuery,
  AllSeriesQueryVariables,
} from '../../generated/graphql';
import { useRouter } from 'next/dist/client/router';
import SeriesCard from '../../components/items/series/card/SeriesCard';
import { StringListDropdown } from '../../components/utils/layout/dropdowns/dropdown';
import { generateYearsArray } from '../../src/utils/generators/years';
import { imdbRatingsArray } from '../../assets/constants/imdbRatingsArr';
import { cfg } from '../../assets/constants/config';
import { MinimalSpinner } from '@components/utils/layout/spinners/minimalSpinner';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import { useTheme } from 'next-themes';

export default function SeriesPage({
  series,
  genres,
  languages,
}: {
  series: AllSeriesLangGenreQuery['series'];
  genres: AllSeriesLangGenreQuery['genres'];
  languages: GenresLanguagesQuery['languages'];
}): JSX.Element {
  const router = useRouter();
  const { g, l, r, i } = router.query;
  const [genreQuery, setGenreQuery] = useState<string | string[]>(
    (g as string) || [],
  );
  const [languageQuery, setLanguageQuery] = useState<string | string[]>(
    (l as string) || [],
  );
  const [yearQuery, setYearQuery] = useState<string | string[]>(
    (r as string) || [],
  );
  const [imdbRatingQuery, setImdbRatingQuery] = useState<string | string[]>(
    (i as string) || [],
  );
  const [cursor, setCursor] = useState<number>(
    series?.[series.length - 1]?.id || 0,
  );
  const [seriesCursor, setSeriesCursor] = useState<
    AllSeriesLangGenreQuery['series']
  >(series || []);
  const years: number[] = generateYearsArray(1960);
  const [loadMore, setLoadMore] = useState<boolean>(false);

  const loadMoreSeries = async () => {
    setLoadMore(true);
    const { data, error, loading } = await apolloClient.query<
      AllSeriesQuery,
      AllSeriesQueryVariables
    >({
      query: AllSeriesDocument,
      variables: {
        orderBy: {
          id: SortOrder.Asc,
        },
        skip: cfg.API_ITEMS_PAGINATION_SKIP,
        where: {
          AND: [
            Array.isArray(genreQuery)
              ? {
                  ...(genreQuery.length > 0 && {
                    genres: {
                      some: {
                        name: {
                          in: genreQuery,
                        },
                      },
                    },
                  }),
                }
              : {
                  genres: {
                    some: {
                      name: {
                        equals: genreQuery,
                      },
                    },
                  },
                },
            Array.isArray(languageQuery)
              ? {
                  ...(languageQuery.length > 0 && {
                    languages: {
                      some: {
                        name: {
                          in: languageQuery,
                        },
                      },
                    },
                  }),
                }
              : {
                  languages: {
                    some: {
                      name: {
                        equals: languageQuery,
                      },
                    },
                  },
                },
            Array.isArray(yearQuery)
              ? {
                  ...(yearQuery.length > 0 && {
                    year: {
                      in: yearQuery.map((y) => parseInt(y)),
                    },
                  }),
                }
              : {
                  year: {
                    equals: parseInt(yearQuery),
                  },
                },
            Array.isArray(imdbRatingQuery)
              ? {
                  ...(imdbRatingQuery.length > 0 && {
                    imdbRating: {
                      in: imdbRatingQuery.map((rating) => parseFloat(rating)),
                    },
                  }),
                }
              : {
                  imdbRating: {
                    equals: parseFloat(imdbRatingQuery),
                  },
                },
          ],
        },
        take: cfg.API_ITEMS_PAGINATION_COUNT,
        cursor: {
          id: cursor,
        },
      },
    });
    setLoadMore(loading);
    if (data.series) {
      setCursor(data.series[data.series.length - 1]?.id || 0);
      setSeriesCursor([...seriesCursor, ...data.series]);
    }
    if (error) console.error(error);
  };

  useEffect(() => {
    router.replace({
      query: {
        ...(genreQuery && { g: genreQuery }),
        ...(languageQuery && { l: languageQuery }),
        ...(yearQuery && { r: yearQuery }),
        ...(imdbRatingQuery && { i: imdbRatingQuery }),
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genreQuery, languageQuery, yearQuery, imdbRatingQuery]);

  useEffect(() => {
    setSeriesCursor(series);
    if (series) {
      setCursor(series[series.length - 1]?.id || 0);
    }
  }, [series]);

  const { theme } = useTheme();

  return (
    <Layout home={false}>
      <Head>
        <title>Series</title>
      </Head>
      <h4 className="mb-4 text-2xl font-bold text-black dark:text-white">
        Series
      </h4>
      <section className="series-filters mb-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 md:flex md:flex-row md:flex-wrap">
          {genres?.length > 0 && (
            <StringListDropdown
              label="Genres"
              defaultValues={
                Array.isArray(genreQuery)
                  ? genreQuery.map((gen) => {
                      return { label: gen, value: gen };
                    })
                  : [{ label: genreQuery, value: genreQuery }]
              }
              items={genres.map((gen) => {
                return { label: gen.name, value: gen.name };
              })}
              onChange={(items) => setGenreQuery(items.map((itm) => itm.value))}
            />
          )}
          {languages?.length > 0 && (
            <StringListDropdown
              label="Languages"
              defaultValues={
                Array.isArray(languageQuery)
                  ? languageQuery.map((lang) => {
                      return { label: lang, value: lang };
                    })
                  : [{ label: languageQuery, value: languageQuery }]
              }
              items={languages.map((lang) => {
                return { label: lang.name, value: lang.name };
              })}
              onChange={(items) =>
                setLanguageQuery(items.map((item) => item.value))
              }
            />
          )}
          <StringListDropdown
            label="Release"
            defaultValues={
              Array.isArray(yearQuery)
                ? yearQuery.map((year) => {
                    return { label: year.toString(), value: year.toString() };
                  })
                : [{ label: yearQuery, value: yearQuery }]
            }
            items={years.map((year) => {
              return { label: year.toString(), value: year.toString() };
            })}
            onChange={(items) => setYearQuery(items.map((item) => item.value))}
          />
          <StringListDropdown
            label="IMDB Rating"
            defaultValues={
              Array.isArray(imdbRatingQuery)
                ? imdbRatingQuery.map((rating) => {
                    return {
                      label: rating.toString(),
                      value: rating.toString(),
                    };
                  })
                : [{ label: imdbRatingQuery, value: imdbRatingQuery }]
            }
            items={imdbRatingsArray.map((ir) => {
              return { label: `${ir.toString()} ⭐`, value: ir.toString() };
            })}
            onChange={(items) =>
              setImdbRatingQuery(items.map((it) => it.value))
            }
          />
        </div>
      </section>
      <section className="layout-grid">
        <>
          {seriesCursor.length === 0 ? 'No series found' : null}
          {seriesCursor?.map((s) => (
            <SeriesCard series={s} key={s.id} />
          ))}
        </>
      </section>
      <div className="load-more mt-14 flex items-center justify-center gap-y-4">
        {cursor !== 0 && (
          <button
            className="btn-primary-outline text-base font-semibold"
            onClick={() => loadMoreSeries()}
            disabled={loadMore}
          >
            <ShowIfElse if={loadMore} else={'Load more'}>
              {theme === 'light' ? (
                <MinimalSpinner color="black" />
              ) : (
                <MinimalSpinner color="text-white" />
              )}
            </ShowIfElse>
          </button>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { data, error } = await apolloClient.query<
    AllSeriesLangGenreQuery,
    AllSeriesLangGenreQueryVariables
  >({
    query: AllSeriesLangGenreDocument,
    variables: {
      where: {
        AND: [
          Array.isArray(query.g)
            ? {
                ...(query.g && {
                  genres: {
                    some: {
                      name: {
                        in: query.g,
                      },
                    },
                  },
                }),
              }
            : {
                ...(query.g && {
                  genres: {
                    some: {
                      name: {
                        equals: query.g,
                      },
                    },
                  },
                }),
              },
          Array.isArray(query.l)
            ? {
                ...(query.l && {
                  languages: {
                    some: {
                      name: {
                        in: query.l,
                      },
                    },
                  },
                }),
              }
            : {
                ...(query.l && {
                  languages: {
                    some: {
                      name: {
                        equals: query.l,
                      },
                    },
                  },
                }),
              },
          Array.isArray(query.r)
            ? {
                ...(query.r && {
                  year: {
                    in: query.r.map((r) => parseInt(r)),
                  },
                }),
              }
            : {
                ...(query.r && {
                  year: {
                    equals: parseInt(query.r),
                  },
                }),
              },
          Array.isArray(query.i)
            ? {
                ...(query.i && {
                  imdbRating: {
                    in: query.i.map((rating) => parseFloat(rating)),
                  },
                }),
              }
            : {
                ...(query.i && {
                  imdbRating: {
                    equals: parseFloat(query.i),
                  },
                }),
              },
        ],
      },
      take: cfg.API_ITEMS_PAGINATION_COUNT,
    },
  });
  if (error) console.error(error);
  const series = data?.series || [];
  const genres = data?.genres || [];
  const languages = data?.languages || [];

  return {
    props: {
      series: series,
      genres: genres,
      languages: languages,
    },
  };
};
