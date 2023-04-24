<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProduitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'libelle' => $this->faker->word(),
            'prix' => $this->faker->numberBetween(1000,99999)
        ];
    }
}
