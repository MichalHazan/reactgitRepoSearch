from flask import Flask, jsonify, request
import requests


def get_function(q):
    response = requests.get(
        "https://api.github.com/search/repositories?q="+q + "&per_page=50")
    repos = response.json()
    return repos


app = Flask(__name__)

# http://localhost:5000/


@app.route('/')
def index():
    return "Hello I am Michal!"


@app.route('/repos')
def repos():
    q = request.args.get('q')
    return jsonify(get_function(q))


if __name__ == '__main__':
    app.run()
