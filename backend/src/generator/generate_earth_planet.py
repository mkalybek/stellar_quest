import numpy as np
from PIL import Image
from noise import snoise2

def blend_colors(value, colors):
    n = len(colors)
    idx = min(int(value * (n - 1)), n - 2)
    blend_factor = value * (n - 1) - idx
    color1 = np.array(colors[idx])
    color2 = np.array(colors[idx + 1])
    blended_color = (1 - blend_factor) * color1 + blend_factor * color2
    return tuple(blended_color.astype(int))

def generate_carbon_planet():
    
    # Define the dimensions (1/4 of the original size)
    width = 4096
    height = 2048
    
    # Create an empty image
    exoplanet_map = Image.new("RGB", (width, height))

    # Parameters for gas giant generation
    scale = 400.0  # Increase scale to smooth out the bands and create large swirling patterns
    octaves = 10    # Fewer octaves for smoother, more fluid cloud layers

    # Gas giant colors (inspired by Jupiter/Saturn-like gas bands)
    gas_color_1 = (29, 70, 36)
    gas_color_2 = (0, 0, 0)
    #gas_color_3 = (240, 128, 128)  # Light coral red for some deep layers
    gas_color_3 = (59, 47, 27)
    gas_color_4 = (31, 29, 25)  # Light gray for high clouds
    gas_color_5 = (35, 59, 27)  # White for bright clouds or storms

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

    # Save the generated map
    #exoplanet_map.save("gas_giant_map.png")
    return exoplanet_map

def generate_io_planet():
    
    # Define the dimensions (1/4 of the original size)
    width = 4096
    height = 2048
    
    # Create an empty image
    exoplanet_map = Image.new("RGB", (width, height))

    # Parameters for gas giant generation
    scale = 300.0  # Increase scale to smooth out the bands and create large swirling patterns
    octaves = 2    # Fewer octaves for smoother, more fluid cloud layers

    # Gas giant colors (inspired by Jupiter/Saturn-like gas bands)
    gas_color_1 = (148, 105, 4)
    gas_color_4 = (163, 111, 28)
    #gas_color_3 = (240, 128, 128)  # Light coral red for some deep layers
    gas_color_3 = (114, 122, 40)
    gas_color_2 = (245, 233, 100)  # Light gray for high clouds
    gas_color_5 = (17, 33, 13)  # White for bright clouds or storms

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

    # Save the generated map
    #exoplanet_map.save("gas_giant_map.png")
    return exoplanet_map

def generate_super_venus_2():

    
    width = 4096
    height = 2048
     # Define the dimensions (1/4 of the original size)

    def blend_colors(value, colors):
        n = len(colors)
        idx = min(int(value * (n - 1)), n - 2)
        blend_factor = value * (n - 1) - idx
        color1 = np.array(colors[idx])
        color2 = np.array(colors[idx + 1])
        blended_color = (1 - blend_factor) * color1 + blend_factor * color2
        return tuple(blended_color.astype(int))

    # Create an empty image
    exoplanet_map = Image.new("RGB", (width, height))

    # Parameters for gas giant generation
    scale_x = 1000.0  # Scale for the horizontal dimension
    scale_y = 100.0   # Scale for the vertical dimension to create striping
    scale_x = np.random.randint(4000, 5000)
    scale_y = np.random.randint(400, 500)  # Smaller vertical scale for stripes
    octaves = 2

    # Gas giant colors (inspired by Jupiter/Saturn-like gas bands)
    gas_color_1 = (90, 99, 102)  # Light beige for high atmospheric layers
    gas_color_2 = (245, 208, 152)  # Orange for mid-layer gases
    gas_color_3 = (148, 196, 212)
    gas_color_4 = (70, 156, 227)
    gas_color_5 = (158, 222, 230)
    gas_colors = [gas_color_1, gas_color_2, gas_color_3, gas_color_4, gas_color_5]

    
    for x in range(width):
        for y in range(height):
            # Generate primary noise value
            noise_value = snoise2(x / scale_x, y / scale_y, octaves=octaves)
            noise_value_2 = snoise2(x / (scale_x / 2), y / (scale_y / 2), octaves=octaves)  # Add texture variation
            
            # Combine noise layers for more depth
            combined_noise = (noise_value * 0.7 + noise_value_2 * 0.3)

            # Normalize combined noise to range [0, 1]
            normalized_value = (combined_noise + 1) / 2

            # Blend colors based on the normalized noise value
            color = blend_colors(normalized_value, gas_colors)

            # Set the pixel color
            exoplanet_map.putpixel((x, y), color)
    # Generate gas bands using Perlin noise to create horizontal stripes

    # Optional: Add swirling storm-like features with some randomness
    clouds = Image.new("RGBA", (width, height))
    for x in range(width // 4, width * 3 // 4):
        for y in range(height):
            if np.random.rand() < 0.01:  # 1% chance of cloud pixel
                clouds.putpixel((x, y), (255, 255, 255, 128))  # White storm clouds

    
    '''
    for x in range(width // 2, width):
        for y in range(height):
            exoplanet_map.putpixel((x, y), exoplanet_map.getpixel((width - x - 1, y)))
    '''
    # Combine the maps
    #exoplanet_map = Image.alpha_composite(exoplanet_map.convert("RGBA"), clouds)

    # Save the generated map (optional)
    # exoplanet_map.save("gas_giant_map.png")

    return exoplanet_map



def generate_super_venus():
    
    width = 4096
    height = 2048
     # Define the dimensions (1/4 of the original size)

    

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
    gas_color_1 = (90, 99, 102)  # Light beige for high atmospheric layers
    gas_color_2 = (245, 208, 152)  # Orange for mid-layer gases
    gas_color_3 = (148, 196, 212)
    gas_color_4 = (70, 156, 227)
    gas_color_5 = (158, 222, 230)

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

    
    '''
    for x in range(width // 2, width):
        for y in range(height):
            exoplanet_map.putpixel((x, y), exoplanet_map.getpixel((width - x - 1, y)))
    '''
    # Combine the maps
    #exoplanet_map = Image.alpha_composite(exoplanet_map.convert("RGBA"), clouds)

    # Save the generated map (optional)
    # exoplanet_map.save("gas_giant_map.png")

    return exoplanet_map

def generate_lava_planet():
    
    # Define the dimensions (1/4 of the original size)
    width = 4096
    height = 2048
    
    # Create an empty image
    exoplanet_map = Image.new("RGB", (width, height))

    # Parameters for gas giant generation
    scale = 200.0  # Increase scale to smooth out the bands and create large swirling patterns
    octaves = 4    # Fewer octaves for smoother, more fluid cloud layers

    # Gas giant colors (inspired by Jupiter/Saturn-like gas bands)
    gas_color_1 = (89, 28, 7)
    gas_color_4 = (48, 21, 12)
    gas_color_3 = (255, 102, 0)
    gas_color_2 = (255, 196, 0)  # Light gray for high clouds
    gas_color_5 = (17, 33, 13)  # White for bright clouds or storms

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

    # Save the generated map
    #exoplanet_map.save("gas_giant_map.png")
    return exoplanet_map

def generate_mega_earth():
    
    # Define the dimensions (1/4 of the original size)
    width = 4096
    height = 2048
    
    # Create an empty image
    exoplanet_map = Image.new("RGB", (width, height))

    # Parameters for gas giant generation
    scale = 200.0  # Increase scale to smooth out the bands and create large swirling patterns
    octaves = 10    # Fewer octaves for smoother, more fluid cloud layers

    # Gas giant colors (inspired by Jupiter/Saturn-like gas bands)
    gas_color_1 = (217, 186, 100)
    gas_color_4 = (255, 229, 156)
    gas_color_3 = (222, 188, 102)
    gas_color_2 = (57, 60, 77)  # Light gray for high clouds
    gas_color_5 = (17, 33, 13)  # White for bright clouds or storms

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

    # Save the generated map
    #exoplanet_map.save("gas_giant_map.png")
    return exoplanet_map

def generate_super_earth():
    
    # Define the dimensions (1/4 of the original size)
    width = 4096
    height = 2048
    
    # Create an empty image
    exoplanet_map = Image.new("RGB", (width, height))

    # Parameters for gas giant generation
    scale = 800.0  # Increase scale to smooth out the bands and create large swirling patterns
    octaves = 5    # Fewer octaves for smoother, more fluid cloud layers

    # Gas giant colors (inspired by Jupiter/Saturn-like gas bands)
    gas_color_1 = (50, 71, 186)
    gas_color_4 = (171, 179, 222)
    gas_color_3 = (9, 105, 13)
    gas_color_2 = (126, 128, 50)  # Light gray for high clouds
    gas_color_5 = (9, 27, 107)  # White for bright clouds or storms

    gas_colors = [gas_color_1, gas_color_2, gas_color_3, gas_color_4, gas_color_5]

    
    for x in range(width):
        for y in range(height):
            # Generate primary noise value
            noise_value = snoise2(x / scale, y / scale, octaves=octaves)
            noise_value_2 = snoise2(x / (scale / 2), y / (scale / 2), octaves=octaves)  # Add texture variation
            
            # Combine noise layers for more depth
            combined_noise = (noise_value * 0.7 + noise_value_2 * 0.3)

            # Normalize combined noise to range [0, 1]
            normalized_value = (combined_noise + 1) / 2

            # Blend colors based on the normalized noise value
            color = blend_colors(normalized_value, gas_colors)

            # Set the pixel color
            exoplanet_map.putpixel((x, y), color)
    # Generate gas bands using Perlin noise to create horizontal stripes


    # Optional: Add swirling storm-like features with some randomness
    clouds = Image.new("RGBA", (width, height))
    for x in range(width):
        for y in range(height):
            if np.random.rand() < 0.05:  # 1% chance of cloud pixel
                clouds.putpixel((x, y), (200, 200, 200, 128))  # White storm clouds

    # Combine the maps
    exoplanet_map = Image.alpha_composite(exoplanet_map.convert("RGBA"), clouds)

    # Save the generated map
    #exoplanet_map.save("gas_giant_map.png")
    return exoplanet_map

def generate_mini_earth():
    
    # Define the dimensions (1/4 of the original size)
    width = 4096
    height = 2048
    
    # Create an empty image
    exoplanet_map = Image.new("RGB", (width, height))

    # Parameters for gas giant generation
    scale = 800.0  # Increase scale to smooth out the bands and create large swirling patterns
    octaves = 6    # Fewer octaves for smoother, more fluid cloud layers

    # Gas giant colors (inspired by Jupiter/Saturn-like gas bands)
    gas_color_1 = (168, 146, 131)
    gas_color_4 = (107, 45, 6)
    gas_color_3 = (252, 101, 8)
    gas_color_2 = (126, 128, 50)  # Light gray for high clouds
    gas_color_5 = (9, 27, 107)  # White for bright clouds or storms

    gas_colors = [gas_color_1, gas_color_2, gas_color_3, gas_color_4, gas_color_5]

    
    for x in range(width):
        for y in range(height):
            # Generate primary noise value
            noise_value = snoise2(x / scale, y / scale, octaves=octaves)
            noise_value_2 = snoise2(x / (scale / 2), y / (scale / 2), octaves=octaves)  # Add texture variation
            
            # Combine noise layers for more depth
            combined_noise = (noise_value * 0.7 + noise_value_2 * 0.3)

            # Normalize combined noise to range [0, 1]
            normalized_value = (combined_noise + 1) / 2

            # Blend colors based on the normalized noise value
            color = blend_colors(normalized_value, gas_colors)

            # Set the pixel color
            exoplanet_map.putpixel((x, y), color)
    # Generate gas bands using Perlin noise to create horizontal stripes


    # Optional: Add swirling storm-like features with some randomness
    clouds = Image.new("RGBA", (width, height))
    for x in range(width):
        for y in range(height):
            if np.random.rand() < 0.05:  # 1% chance of cloud pixel
                clouds.putpixel((x, y), (200, 200, 200, 128))  # White storm clouds

    # Combine the maps
    exoplanet_map = Image.alpha_composite(exoplanet_map.convert("RGBA"), clouds)

    # Save the generated map
    #exoplanet_map.save("gas_giant_map.png")
    return exoplanet_map

def generate_rogue_planet():

    
    width = 4096
    height = 2048
     # Define the dimensions (1/4 of the original size)

    def blend_colors(value, colors):
        n = len(colors)
        idx = min(int(value * (n - 1)), n - 2)
        blend_factor = value * (n - 1) - idx
        color1 = np.array(colors[idx])
        color2 = np.array(colors[idx + 1])
        blended_color = (1 - blend_factor) * color1 + blend_factor * color2
        return tuple(blended_color.astype(int))

    # Create an empty image
    exoplanet_map = Image.new("RGB", (width, height))

    # Parameters for gas giant generation
    scale_x = 1000.0  # Scale for the horizontal dimension
    scale_y = 100.0   # Scale for the vertical dimension to create striping
    scale_x = np.random.randint(3000, 4000)
    scale_y = np.random.randint(500, 600)  # Smaller vertical scale for stripes
    octaves = 4

    # Gas giant colors (inspired by Jupiter/Saturn-like gas bands)
    gas_color_1 = (41, 133, 204)  # Light beige for high atmospheric layers
    gas_color_2 = (22, 99, 158)  # Orange for mid-layer gases
    gas_color_3 = (6, 43, 71)
    gas_color_4 = (129, 192, 240)
    gas_color_5 = (97, 110, 120)
    gas_colors = [gas_color_1, gas_color_2, gas_color_3, gas_color_4, gas_color_5]

    
    for x in range(width):
        for y in range(height):
            # Generate primary noise value
            noise_value = snoise2(x / scale_x, y / scale_y, octaves=octaves)
            noise_value_2 = snoise2(x / (scale_x / 2), y / (scale_y / 2), octaves=octaves)  # Add texture variation
            
            # Combine noise layers for more depth
            combined_noise = (noise_value * 0.7 + noise_value_2 * 0.3)

            # Normalize combined noise to range [0, 1]
            normalized_value = (combined_noise + 1) / 2

            # Blend colors based on the normalized noise value
            color = blend_colors(normalized_value, gas_colors)

            # Set the pixel color
            exoplanet_map.putpixel((x, y), color)
    # Generate gas bands using Perlin noise to create horizontal stripes

    # Optional: Add swirling storm-like features with some randomness
    clouds = Image.new("RGBA", (width, height))
    for x in range(width // 4, width * 3 // 4):
        for y in range(height):
            if np.random.rand() < 0.01:  # 1% chance of cloud pixel
                clouds.putpixel((x, y), (255, 255, 255, 128))  # White storm clouds

    
    '''
    for x in range(width // 2, width):
        for y in range(height):
            exoplanet_map.putpixel((x, y), exoplanet_map.getpixel((width - x - 1, y)))
    '''

    return exoplanet_map

def generate_iron_planet(temperature, proximity):

    # Define the dimensions (1/4 of the original size)
    width = 4096
    height = 2048
    
    # Create an empty image
    exoplanet_map = Image.new("RGB", (width, height))

    # Parameters for gas giant generation
    scale = 100.0  # Increase scale to smooth out the bands and create large swirling patterns
    octaves = 15    # Fewer octaves for smoother, more fluid cloud layers

    t = temperature / 123

    # Gas giant colors (inspired by Jupiter/Saturn-like gas bands)
    gas_color_1 = (135, 55, 4)
    gas_color_2 = (181, 81, 18)
    #gas_color_3 = (240, 128, 128)  # Light coral red for some deep layers
    gas_color_3 = (237, 179, 33)
    gas_color_4 = (230, 160, 32)  # Light gray for high clouds
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
