import numpy as np
from PIL import Image
import math
from noise import snoise2
width = 4096
height = 2048

def generate_super_jupiter():
    
    # Define the dimensions (1/4 of the original size)
    mid_temperature = 1000

    # Create an empty image
    exoplanet_map = Image.new("RGB", (width, height))

    # Parameters for gas giant generation
    scale_x = 1000.0  # Scale for the horizontal dimension
    scale_y = 100.0   # Scale for the vertical dimension to create striping
    scale_x = np.random.randint(4000, 5000)
    scale_y = np.random.randint(300, 400)  # Smaller vertical scale for stripes
    octaves = np.random.randint(5, 20)
    octaves = 2

    # Gas giant colors (inspired by Jupiter/Saturn-like gas bands)
    lg = 500 / mid_temperature
    gas_color_1 = (140, 150, 160)  # Light beige for high atmospheric layers
    gas_color_2 = (189, 66, 72)  # Orange for mid-layer gases
    gas_color_3 = (232, 44, 53)
    gas_color_4 = (158, 21, 27)
    gas_color_5 = (237, 66, 74)

    # Generate gas bands using Perlin noise to create horizontal stripes
    for x in range(width):
        for y in range(height):
            # Generate noise value, emphasizing horizontal bands by scaling x differently from y
            noise_value = snoise2(x / scale_x, y / scale_y, octaves=octaves)
            
            # Normalize noise to a value between 0-255
            normalized_value = int((noise_value + 1) / 2 * 255)

            # Determine color based on the normalized noise value for gas layers
            if normalized_value < 50:
                color = gas_color_1  # Light beige (high clouds)
            elif normalized_value < 100:
                color = gas_color_2  # Orange (mid-level gases)
            elif normalized_value < 150:
                color = gas_color_3  # Light coral red (lower atmospheric gases)
            elif normalized_value < 200:
                color = gas_color_4  # Light gray (upper clouds)
            else:
                color = gas_color_5  # White (bright clouds or storms)

            # Set the pixel color
            exoplanet_map.putpixel((x, y), color)

    # Optional: Add swirling storm-like features with some randomness
    clouds = Image.new("RGBA", (width, height))
    for x in range(width // 4, width * 3 // 4):
        for y in range(height):
            if np.random.rand() < 0.01:  # 1% chance of cloud pixel
                clouds.putpixel((x, y), (255, 255, 255, 128))  # White storm clouds

    
    for x in range(width // 2, width):
        for y in range(height):
            exoplanet_map.putpixel((x, y), exoplanet_map.getpixel((width - x - 1, y)))
    return exoplanet_map

def generate_cold_jupiter():
    return generate_hot_jupiter(1000)

def generate_hot_jupiter(temperature, radius=0, proximity=0):
    # Define the dimensions (1/4 of the original size)
    mid_temperature = 1000

    # Create an empty image
    exoplanet_map = Image.new("RGB", (width, height))

    # Parameters for gas giant generation
    scale_x = 1000.0  # Scale for the horizontal dimension
    scale_y = 100.0   # Scale for the vertical dimension to create striping
    scale_x = np.random.randint(4000, 5000)
    scale_y = np.random.randint(400, 450)  # Smaller vertical scale for stripes
    octaves = np.random.randint(5, 20)
    octaves = 2

    # Gas giant colors (inspired by Jupiter/Saturn-like gas bands)
    lg = temperature / mid_temperature
    gas_color_1 = (211, 211, 211)  # Light beige for high atmospheric layers
    gas_color_2 = (int(9 + lg * 80), int(40 + (lg-1) * 100), 15 + int((lg-1) * 70))  # Orange for mid-layer gases
    gas_color_3 = (240, 68, 8)
    gas_color_4 = (250, 180, 70)
    gas_color_5 = (255, 15, 75)

    # Generate gas bands using Perlin noise to create horizontal stripes
    for x in range(width):
        for y in range(height):
            # Generate noise value, emphasizing horizontal bands by scaling x differently from y
            noise_value = snoise2(x / scale_x, y / scale_y, octaves=octaves)
            
            # Normalize noise to a value between 0-255
            normalized_value = int((noise_value + 1) / 2 * 255)

            # Determine color based on the normalized noise value for gas layers
            if normalized_value < 50:
                color = gas_color_1  # Light beige (high clouds)
            elif normalized_value < 100:
                color = gas_color_2  # Orange (mid-level gases)
            elif normalized_value < 150:
                color = gas_color_3  # Light coral red (lower atmospheric gases)
            elif normalized_value < 200:
                color = gas_color_4  # Light gray (upper clouds)
            else:
                color = gas_color_5  # White (bright clouds or storms)

            # Set the pixel color
            exoplanet_map.putpixel((x, y), color)

    # Optional: Add swirling storm-like features with some randomness
    clouds = Image.new("RGBA", (width, height))
    for x in range(width // 4, width * 3 // 4):
        for y in range(height):
            if np.random.rand() < 0.01:  # 1% chance of cloud pixel
                clouds.putpixel((x, y), (255, 255, 255, 128))  # White storm clouds
    return exoplanet_map

