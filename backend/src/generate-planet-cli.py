import json
import argparse

def main():
    # Set up argument parser
    parser = argparse.ArgumentParser(description="Process planet data.")
    
    # Define command-line arguments
    parser.add_argument('--planetType', type=str, required=True, help="Type of the planet (e.g., terrestrial, gas giant)")
    parser.add_argument('--mass', type=float, required=True, help="Mass of the planet (in Earth masses)")
    parser.add_argument('--temperature', type=float, required=True, help="Average temperature of the planet (in Kelvin)")
    parser.add_argument('--distanceToStar', type=float, required=True, help="Distance of the planet from its star (in AU)")
    parser.add_argument('--elements', type=str, nargs='+', required=True, help="List of elements found on the planet")

    # Parse the arguments
    args = parser.parse_args()

    print(json.dumps({
        "has_clouds": True,
        "image_name": "./slkdjfk"
    }))

if __name__ == "__main__":
    main()
