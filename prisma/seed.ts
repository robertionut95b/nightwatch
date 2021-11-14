import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const genresData: Prisma.GenreCreateInput[] = [
    {
        name: 'SF',
    },
    {
        name: 'Animation',
    },
    {
        name: 'Action',
    },
    {
        name: 'Comedy',
    },
    {
        name: 'Biography',
    },
    {
        name: 'Documentary',
    },
    {
        name: 'Romance',
    },
    {
        name: 'Mystery',
    },
    {
        name: 'Crime',
    },
    {
        name: 'Adventure',
    },
    {
        name: 'Thriller',
    },
    {
        name: 'Fantasy',
    },
    {
        name: 'Drama',
    },
    {
        name: 'Family',
    },
    {
        name: 'Horror',
    },
    {
        name: 'History',
    },
]

const languagesData: Prisma.LanguageCreateInput[] = [
    {
        name: 'English',
    },
    {
        name: "French"
    },
    {
        name: "Swedish"
    },
    {
        name: "Danish"
    },
    {
        name: "Chinese"
    },
    {
        name: "Spanish"
    },
    {
        name: "German"
    },
    {
        name: "Russian"
    },
    {
        name: "Serbian"
    },
    {
        name: "Arabic"
    },
    {
        name: "Hindi"
    },
    {
        name: "Ukrainian"
    }
]

const usersData: Prisma.UserCreateInput[] = [
    {
        username: 'root',
        email: 'localhost@local.com',
        role: 'ADMIN',
    }
]

const moviesData: Prisma.MovieCreateInput[] = [
    {
        title: 'Dark Shadows',
        year: 2012,
        rating: 'PG-13',
        release: new Date(2012, 5, 11, 0, 0, 0, 0),
        runtime: 113,
        genres: { connect: [{ name: 'Comedy' }, { name: 'SF' }] },
        plot: 'A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.',
        imdbRating: 8.8,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjc0NzAyMzI1MF5BMl5BanBnXkFtZTcwMTE0NDQ1Nw@@._V1_SX300.jpg'
    },
    {
        title: 'Blade Runner',
        year: 1982,
        rating: 'R',
        release: new Date(1982, 6, 25, 0, 0, 0, 0),
        runtime: 117,
        genres: { connect: [{ name: 'Action' }, { name: 'SF' }] },
        plot: 'A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.',
        imdbRating: 8.1,
        poster: 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
    },
    {
        title: 'Blade Runner 2049',
        year: 2017,
        rating: 'R',
        release: new Date(2017, 10, 6, 0, 0, 0, 0),
        runtime: 164,
        genres: { connect: [{ name: 'Action' }, { name: 'SF' }] },
        plot: "Young Blade Runner K's discovery of a long- buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
        imdbRating: 8.1,
        poster: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg'
    },
    {
        title: 'Fatherhood',
        year: 2021,
        rating: 'PG-13',
        release: new Date(2021, 6, 18, 0, 0, 0, 0),
        runtime: 109,
        genres: { connect: [{ name: 'Comedy' }] },
        plot: "A father brings up his baby girl as a single dad after the unexpected death of his wife who died a day after their daughter's birth.",
        imdbRating: 8.1,
        poster: 'https://m.media-amazon.com/images/M/MV5BMzU5YWYzZGMtNTE2My00NDE0LTgxNWYtZDYzYjI2YzM3OWJlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'
    },
    {
        title: 'Intouchables',
        year: 2008,
        rating: 'R',
        release: new Date(2011, 2, 18, 0, 0, 0, 0),
        runtime: 112,
        genres: { connect: [{ name: 'Comedy' }, { name: 'Biography' }, { name: 'Drama' }] },
        plot: "In Paris, the aristocratic and intellectual Philippe is a quadriplegic millionaire who is interviewing candidates for the position of his carer, with his red-haired secretary Magalie. Out of the blue, Driss cuts the line of candidates and brings a document from the Social Security and asks Phillipe to sign it to prove that he is seeking a job position so he can receive his unemployment benefit. Philippe challenges Driss, offering him a trial period of one month to gain experience helping him. Then Driss can decide whether he would like to stay with him or not. Driss accepts the challenge and moves to the mansion, changing the boring life of Phillipe and his employees.",
        languages: { connect: [{ name: 'English' }, { name: 'French' }] },
        imdbRating: 8.5,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg'
    },
    {
        title: 'WALL-E',
        year: 2008,
        rating: 'G',
        release: new Date(2008, 5, 27, 0, 0, 0, 0),
        runtime: 98,
        genres: { connect: [{ name: 'Animation' }, { name: 'Adventure' }, { name: 'Family' }] },
        plot: "In a distant, but not so unrealistic, future where mankind has abandoned earth because it has become covered with trash from products sold by the powerful multi-national Buy N Large corporation, WALL-E, a garbage collecting robot has been left to clean up the mess. Mesmerized with trinkets of Earth's history and show tunes, WALL-E is alone on Earth except for a sprightly pet cockroach. One day, EVE, a sleek (and dangerous) reconnaissance robot, is sent to Earth to find proof that life is once again sustainable. WALL-E falls in love with EVE. WALL-E rescues EVE from a dust storm and shows her a living plant he found amongst the rubble. Consistent with her \"directive\", EVE takes the plant and automatically enters a deactivated state except for a blinking green beacon. WALL-E, doesn't understand what has happened to his new friend, but, true to his love, he protects her from wind, rain, and lightning, even as she is unresponsive. One day a massive ship comes to reclaim EVE, but WALL-E, out of love or loneliness, hitches a ride on the outside of the ship to rescue EVE. The ship arrives back at a large space cruise ship, which is carrying all of the humans who evacuated Earth 700 years earlier. The people of Earth ride around this space resort on hovering chairs which give them a constant feed of TV and video chatting. They drink all of their meals through a straw out of laziness and/or bone loss, and are all so fat that they can barely move. When the auto-pilot computer, acting on hastily-given instructions sent many centuries before, tries to prevent the people of Earth from returning by stealing the plant, WALL-E, EVE, the portly captain, and a band of broken robots stage a mutiny.",
        languages: { connect: [{ name: 'English' }, { name: 'Hindi' }] },
        imdbRating: 8.4,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg'
    },
]

const seriesData: Prisma.SeriesCreateInput[] = [
    {
        title: 'Dark',
        year: 2017,
        rating: 'TV-MA',
        release: new Date(2017, 12, 1, 0, 0, 0, 0),
        runtime: 60,
        genres: { connect: [{ name: 'Crime' }, { name: 'Mystery' }] },
        plot: 'A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.',
        languages: { connect: [{ name: 'German' }] },
        imdbRating: 8.8,
        poster: 'https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_SX300.jpg',
        totalSeasons: 3
    },
    {
        title: 'You',
        year: 2018,
        rating: 'TV-MA',
        release: new Date(2018, 9, 9, 0, 0, 0, 0),
        runtime: 45,
        genres: { connect: [{ name: 'Crime' }, { name: 'Drama' }, { name: 'Romance' }] },
        plot: "Based on Caroline Kepnes' best- selling novel of the same name, YOU is a 21st century love story that asks, \"What would you do for love?\" When a brilliant bookstore manager crosses paths with an aspiring writer, his answer becomes clear: anything. Using the internet and social media as his tools to gather the most intimate of details and get close to her, a charming and awkward crush quickly becomes obsession as he quietly and strategically removes every obstacle - and person - in his way.",
        languages: { connect: [{ name: 'English' }] },
        imdbRating: 7.7,
        poster: 'https://m.media-amazon.com/images/M/MV5BMzkzOGFiY2EtZDcyZi00OWNhLThhNmYtYjQ3ODljMTM5ZDBkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        totalSeasons: 3
    },
    {
        title: 'The Witcher',
        year: 2019,
        rating: 'TV-MA',
        release: new Date(2019, 12, 20, 0, 0, 0, 0),
        runtime: 60,
        genres: { connect: [{ name: 'Action' }, { name: 'Fantasy' }, { name: 'Adventure' }] },
        plot: "The Witcher is an American fantasy drama web television series created by Lauren Schmidt Hissrich for Netflix. It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts. But when destiny hurtles him toward a powerful sorceress, and a young princess with a special gift, the three must learn to navigate independently the increasingly volatile Continent.",
        languages: { connect: [{ name: 'English' }] },
        imdbRating: 8.2,
        poster: 'https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg',
        totalSeasons: 2
    },
    {
        title: 'La casa de papel',
        year: 2017,
        rating: 'TV-MA',
        release: new Date(2017, 5, 2, 0, 0, 0, 0),
        runtime: 70,
        genres: { connect: [{ name: 'Action' }, { name: 'Adventure' }] },
        plot: "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion memorizing every step, every detail, every probability culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.",
        languages: { connect: [{ name: 'Spanish' }, { name: 'English' }] },
        imdbRating: 8.2,
        poster: 'https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg',
        totalSeasons: 5
    },
    {
        title: 'The Sandman',
        year: 2021,
        rating: 'N/A',
        release: new Date(2022, 3, 1, 0, 0, 0, 0),
        runtime: 0,
        genres: { connect: [{ name: 'Action' }, { name: 'Adventure' }, { name: 'Drama' }] },
        plot: "A wizard attempting to capture Death to bargain for eternal life traps her younger brother Dream instead. Fearful for his safety, the wizard kept him imprisoned in a glass bottle for decades. After his escape, Dream, also known as Morpheus, goes on a quest for his lost objects of power.",
        languages: { connect: [{ name: 'English' }] },
        imdbRating: 0,
        poster: 'https://m.media-amazon.com/images/M/MV5BN2NlNDA5NDYtYjNhOS00ZTQ5LWEzZDYtOTE4MjBhY2I4ZDY4XkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg',
        totalSeasons: 1
    },
    {
        title: 'Altered Carbon',
        year: 2018,
        rating: 'TV-MA',
        release: new Date(2018, 1, 2, 0, 0, 0, 0),
        runtime: 0,
        genres: { connect: [{ name: 'Action' }, { name: 'SF' }, { name: 'Drama' }] },
        plot: "ALTERED CARBON is set in a future where consciousness is digitized and stored in cortical stacks implanted in the spine, allowing humans to survive physical death by having their memories and consciousness \"re-sleeved\" into new bodies. The story follows specially trained \"Envoy\" soldier Takeshi Kovacs, who is downloaded from an off-world prison and into a combat ready sleeve at the behest of Laurens Bancroft, a highly influential aristocrat. Bancroft was killed, and the last automatic backup of his stack was made hours before his death, leaving him with no memory of who killed him and why. While police ruled it a suicide, Bancroft is convinced he was murdered and wants Kovacs to find out the truth.",
        languages: { connect: [{ name: 'English' }, { name: 'Spanish' }, { name: 'German' }] },
        imdbRating: 8.0,
        poster: 'https://m.media-amazon.com/images/M/MV5BNjIxMWMzMzctYmZkYy00OTkzLWFlMWUtMjc3ZDFmYzQ3YmVkXkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_SX300.jpg',
        totalSeasons: 2
    },
]

async function main() {
    console.log(`Initializing repository data ...`)
    for (const g of genresData) {
        const genre = await prisma.genre.create({
            data: g,
        })
        console.log(`Created genre with id: ${genre.id}`)
    }
    for (const l of languagesData) {
        const lang = await prisma.language.create({
            data: l,
        })
        console.log(`Created language: ${lang.name}`)
    }
    for (const u of usersData) {
        const user = await prisma.user.create({
            data: u
        })
        console.log(`Created user: ${user?.username}`)
    }

    for (const m of moviesData) {
        const movie = await prisma.movie.create({
            data: m,
        })
        console.log(`Created movie with id: ${movie.id}`)
    }
    for (const s of seriesData) {
        const series = await prisma.series.create({
            data: s,
        })
        console.log(`Created series with id: ${series.id}`)
    }
    console.log(`Repository initialization finished.`)

    prisma.$disconnect()
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })