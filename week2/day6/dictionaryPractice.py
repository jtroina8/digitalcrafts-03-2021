# add your info
digitalCraftsStudent = {
    "name": "",
    "city": "",
    "computer": ["mac os big sur"],
}
# print(digitalCraftsStudent["computer"][0])
# print out your computer information in the terminal
# add a platform, ps5,pc,xbox 1,switch, add your skill level ("noob","not" "noob", "pwner")
gamer = {
    "platform": "",
    "gamingHours": [
        {"weekday": "9-5"}, {"weekends": "anytime"}
    ],
    "skill": ''
}
# print(gamer["gamingHours"][0]["weekday"])
stonks = {
    "name": "Game Doge",
    "ticker": "GGDOG",
    "pricePerShare": 1,
    "denomination": "cent",
    "volume": 25,
    "volatility": "low",
    "startOfDayPrice": 2,
    "endOfDayPrice": 4,
    "market": ["US", "Europe"],
    "dividends": 4,
    "shareHolders":
    [
        {"name": "James Walden"},
        {"name": "LeRon Rovira"},
        {"name": "Kendall Burdette"},
        {"name": "Randi Reyna"},
        {"name": "Nischal Pahari"},
    ]
}
print(stonks["name"])
print(stonks['ticker'])
stonks["dividends"] = 1
print(stonks["shareHolders"][0]["name"])
# print(stocks)
# can you add dividends as a key value (value is $1)

# index = 0
for hours in gamer["gamingHours"]:
    print(hours.values())
    # indeex += 1
# print on the terminal, what time you would game?
# 1. print out a list of engine choices (the whole list)
