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
                'vidio_url' => 'https://example.com/shawshank',
                'thumbnail' => 'https://example.com/thumbnails/shawshank.jpg',
                'rating' => 9.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Crime',
                'vidio_url' => 'https://example.com/godfather',
                'thumbnail' => 'https://example.com/thumbnails/godfather.jpg',
                'rating' => 9.2,
                'is_featured' => 0,
            ],
            [
                'name' => 'The Dark Knight',
                'slug' => 'the-dark-knight',
                'category' => 'Action',
                'vidio_url' => 'https://example.com/dark-knight',
                'thumbnail' => 'https://example.com/thumbnails/dark-knight.jpg',
                'rating' => 9.0,
                'is_featured' => 0,
            ],
        ];
        Movie::insert($movies);
    }
}
