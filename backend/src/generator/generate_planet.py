from PIL import Image, ImageFilter
from noise import snoise2
import numpy as np
from generator import generate_jupiter
from generator import generate_earth_planet

def mirror(map):

    width = 4096
    height = 2048

    for x in range(width // 2, width):
        for y in range(height):
            map.putpixel((x, y),  map.getpixel((width - x - 1, y)))

    return map

def get_type(type, mass, temperature, proximity, sostav):
    if type == 1:
        # GAS GIANT
        if sostav["Helium"] >= 30:
            if sostav["Water"] >= 30:
                if sostav["Water"] >= sostav["Helium"]:
                    return "water_planet"
                else: return "helium_planet"
            return "helium_planet"
        if sostav["Water"] >= 30:
            return "water_planet"
        
        if 0.05 <= proximity <= 0.5 and 0.5 <= mass <= 2:
            return "hot_jupiter"
        if 5 <= proximity <= 10 and 5 <= mass <= 80:
            return "super_jupiter"
        if 3 <= proximity <= 10 and 0.5 <= mass <= 5:
            return "cold_jupiter"
        if 0.05 <= proximity <= 0.5 and 0.02 <= mass <= 0.1:
            return "neptune"
        return "rogue_planet"
    else: #EARTH PLANET
        if sostav["Carbon"] >= 90:
            return "carbon_planet"
        if sostav["Ice"] >= 33 and 200 <= temperature <= 1000:
            return "ocean_planet"
        if sostav["Sulfur"] >= 90 and 0.02 <= proximity <= 0.08:
            return "io_planet"
        if sostav["carbon dioxide"] > 95 and 10 <= mass <= 30:
            return "super_venus"
        if sostav["iron"] >= 50:
            return "iron_planet"
        
        if 0.02 <= proximity <= 0.08:
            return "lava_planet"
        if 0.2 <= mass <= 0.5:
            return "mini_earth"
        if 2 <= mass <= 10:
            return "super_earth"
        if 10 <= mass <= 30:
            return "mega_earth"

        return "rogue_planet"


def generate_planet(type, mass, temperature, proximity, sostav):
    planet_type = get_type(type, mass, temperature, proximity, sostav)
    if type == 1: #GAS GIANT
        if planet_type == "hot_jupiter":
            map = generate_jupiter.generate_hot_jupiter(temperature)
            map = mirror(map)
            map.save("planets/hot_jupiter/1.png")
            return {
                "image_name": "planets/hot_jupiter/1.png",
                "planet_type": planet_type,
                "clouds_count": 0
            }
        else:
            planet_type2 = planet_type
            if planet_type == "neptune": planet_type2 = "hot neptune"
            path = "planets/" + planet_type + "/" + str(np.random.random_integers(1, 4)) + ".png"
            return {
                "image_name": path,
                "planet_type": planet_type2,
                "clouds_count": 0 + int(planet_type == "water_planet")
            }
    else:
        if planet_type == "carbon_planet" or planet_type == "io_planet" or planet_type == "lava_planet" or planet_type == "super_venus" or planet_type == "rogue_planet" or planet_type == "ocean_planet" or planet_type == "mega_earth" or planet_type == "super_earth" or planet_type == "mini_earth":
            path = "planets/" + planet_type + "/" + np.random.random_integers(1, 4) + ".png"
            cloud_count = 0
            if planet_type == "ocean_planet":
                if 200 <= temperature <= 500: cloud_count = 1
                if 500 < temperature <= 700: cloud_count = 2
                if 700 < temperature <= 1000: cloud_count = 3
            if planet_type == "super_venus": cloud_count = 3
            if planet_type == "carbon_planet" or planet_type == "mini_earth": cloud_count = 1
            if planet_type == "super_earth": cloud_count = 2
            return {
                "image_name": path,
                "planet_type": planet_type,
                "clouds_count": cloud_count
            }
        else:
            if planet_type == "iron_planet":
                map = generate_earth_planet.generate_iron_planet(temperature, proximity)
                map = mirror(map)
                map.save("planets/iron_planet/1.png")
                if 200 <= temperature < 1000:
                    path = "planets/" + planet_type + "/" + np.random.random_integers(1, 2) + ".png"
                    return {
                        "image_name": "planets/iron_planet/2.png",
                        "planet_type": planet_type, 
                        "cloud_count": 0
                    }
                else:
                    path = "planets/" + planet_type + "/" + np.random.random_integers(3, 4) + ".png"
                    return {
                        "image_name": path,
                        "planet_type": planet_type, 
                        "cloud_count": 0
                    }
                return {
                    "image_name": "planets/iron_planet/1.png",
                    "has_clouds": False
                }

