<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
    [
        'name' => 'The Shawshank Redemption',
        'slug' => 'the-shawshank-redemption',
        'category' => 'Drama',
        'vidio_url' => 'https://www.youtube.com/watch?v=6hB3S9bIaco',
        'thumbnail' => 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        'rating' => 4.3,
        'is_featured' => 1,
    ],
    [
        'name' => 'The Godfather',
        'slug' => 'the-godfather',
        'category' => 'Crime',
        'vidio_url' => 'https://www.youtube.com/watch?v=sY1S34973zA',
        'thumbnail' => 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        'rating' => 4.2,
        'is_featured' => 0,
    ],
    [
        'name' => 'The Dark Knight',
        'slug' => 'the-dark-knight',
        'category' => 'Action',
        'vidio_url' => 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
        'thumbnail' => 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        'rating' => 4.0,
        'is_featured' => 0,
    ],
];

        Movie::insert($movies);
    }
}
