import pip._vendor.requests
import requests


def get_function(q):
    response = requests.get(
        "https://api.github.com/search/repositories?q="+q + "&per_page=50")
    repos = response.json()
    return repos


def savedata_function(data):
    repolist = []
    for item in data["items"]:
        repo = {
            'name': item["name"],
            'updated_at': item["updated_at"],
            'avatar_url': item['owner']["avatar_url"],
            'stargazers_count': item["stargazers_count"]
        }
        repolist.append(repo)
    return repolist


data = get_function("michal")
repolist = savedata_function(data)
print(repolist)

 