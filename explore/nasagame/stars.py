import json
import random

def generate_stars(num_stars, width=1980, height=1080):
    stars = []
    for _ in range(num_stars):
        x = random.uniform(0, width) * 40 - width / 2  # Random X position
        y = random.uniform(0, height) * 40 - height / 2  # Random Y position
        stars.append({'x': x, 'y': y})  # Store the star position
    return stars

stars = generate_stars(500000)

# Save the stars data to a JSON file
with open('stars_data.json', 'w') as f:
    json.dump(stars, f)
