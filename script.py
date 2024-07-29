import os


def main() -> None:
    assetsDir = os.path.join(os.path.dirname(__file__), "assets")
    imagesPaths = [os.path.join(assetsDir, f) for f in os.listdir(assetsDir)]
    for idx, imagePath in enumerate(imagesPaths):
        os.rename(imagePath, os.path.join(assetsDir, f"image_{idx}.png"))
        

if __name__ == '__main__':
    main()