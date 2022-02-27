export interface IOMDBSearchSeries {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

export interface IOMDBSeriesSearch {
    Search: IOMDBSearchSeries[]
}

export class OMDBSearchSeries {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string

    constructor(title: string, year: string, imdbID: string, type: string, poster: string) {
        this.Title = title
        this.Year = year
        this.imdbID = imdbID
        this.Type = type
        this.Poster = poster
    }
}