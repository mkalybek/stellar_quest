import numpy as np
from PIL import Image
from noise import snoise2
def generate_helium_planet():

    # Define the dimensions (1/4 of the original size)
    width = 4096
    height = 2048
    
    # Create an empty image
    exoplanet_map = Image.new("RGB", (width, height))

    # Parameters for gas giant generation
    scale = 3000.0  # Increase scale to smooth out the bands and create large swirling patterns
    octaves = 15    # Fewer octaves for smoother, more fluid cloud layers

    # Gas giant colors (inspired by Jupiter/Saturn-like gas bands)
    gas_color_1 = (120, 120, 120)
    gas_color_2 = (160, 160, 160)
    #gas_color_3 = (240, 128, 128)  # Light coral red for some deep layers
    gas_color_3 = (150, 150, 150)
    gas_color_4 = (211, 211, 211)  # Light gray for high clouds
    gas_color_5 = (255, 255, 255)  # White for bright clouds or storms

    # Generate gas bands using Perlin noise
    for x in range(width):
        for y in range(height):
            # Generate noise value
            noise_value = snoise2(x / scale, y / scale, octaves=octaves)
            
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
    for x in range(width):
        for y in range(height):
            if np.random.rand() < 0.05:  # 1% chance of cloud pixel
                clouds.putpixel((x, y), (200, 200, 200, 128))  # White storm clouds

    # Combine the maps
    exoplanet_map = Image.alpha_composite(exoplanet_map.convert("RGBA"), clouds)
    return exoplanet_map

