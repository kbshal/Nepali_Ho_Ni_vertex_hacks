from flask import Flask, render_template, request, jsonify, make_response
import json
import os
from flask_cors import CORS,cross_origin
app = Flask(__name__)
CORS(app)
@app.route('/')
def home():
    return "Congrats Nothing Broke"

@app.route('/jelly',methods=['POST'])
def response():
    from conversation import talk
    try:
        token = open('token.txt','r').read()
    except FileNotFoundError:
        token = "Test"
    user_inp = request.get_json()
    text = user_inp['text']
    prev_conv = user_inp['previous_conversaion']
    out = talk(text,prev_conv,token)
    return jsonify(out)

if __name__ == "__main__":
    app.run(debug=True)