# 1. print out a list of engine choices (the whole list)
# 2. print out the horsepower values only (all of them)
# 3. check to see if the value "trim" exist on the car dictionary
# 4. add a new key to the car dictionary called "colors" which will be a list of all possible colors (use 4 color strings)
# 5. find an image and put the url into https://bitly.com/, and paste shortened url into that "image" value
car = {
    "make": "ford",
    "model": "mustang",
    "image": "https://bit.ly/3vBdUwL",
    "extColor": ["shadow black", 'oxford white', 'velocity blue', 'iconic silver', 'race red', 'rapid red', 'ford performance blue', 'twister orange', 'grabber yellow', 'antimatter blue', 'fighter jet gray', 'carbonized gray'],
    "intColor": ['ebony', 'ceramic', 'tan', 'showstopper red', 'midnight blue with grabber blue stitch', 'ebony with smoke gray accents', 'ebony with orange'],
    "trim":
    [
        {"name": "EcoBoost Fastback"},
        {"name": "GT Fastback"},
        {"name": "Mach 1"},
        {"name": "Shelby GT500"},
    ],
    "engine":
    [
        {"2.3L High Performance EcoBoost Engine": {
            "horsepower": 100,
            "zeroToSixty": "3 seconds",
        }},
        {"5.0L Ti-VCT V8 Engine": {
            "horsepower": 200,
            "zeroToSixty": "2.8 seconds"
        }},
        {"5.2L Supercharged v8 Engine with Cross Plane Crank": {
            "horsepower": 250,
            "zeroToSixty": "2.65 seconds",
        }},
        {"2.3L EcoBoost Engine": {
            "horsepower": 135,
            "zeroToSixty": "2.96 seconds",
        }}
    ]
}

print(car["engine"])
for hpValue in car["engine"]:
    for key, value in hpValue.items():
        print(value["horsepower"])
