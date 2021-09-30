<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        Role::factory()->create([
            'name' => 'admin',
            'display_name' => 'Administrator',
        ]);
        Role::factory()->create([
            'name' => 'registered_user',
            'display_name' => 'Registered user',
        ]);
    }
}
