from flask import Flask, render_template, request, jsonify, make_response
import json
import os
from flask_cors import CORS,cross_origin
from io import BytesIO


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

@app.route('/diabetees',methods=['POST'])
def diabetes():
    text = request.get_json()
    import tensorflow as tf 
    import base64
    from PIL import Image
    import numpy as np
    
    width, height = 224,224
    imagestr = text['img']
    #image = imgstr.encode('utf-8')
    #print(imagestr)
    img =  base64.b64decode(imagestr)
    image = Image.open(BytesIO(img)).convert("RGB")
    image = image.resize((224, 224))
    image = np.array(image)
    diabetes_model = keras.models.load_model('diabetes_model.h5') 
    Y_pred_sample = diabetes_model.predict(np.expand_dims(image, axis=0)).round(2)

    out = np.argmax(Y_pred_sample[0])
    return {"output":out}

@app.route('/skin',methods=['POST'])
def diabetes():
    text = request.get_json()
    import tensorflow as tf 
    import base64
    from PIL import Image
    import numpy as np
    
    width, height = 224,224
    imagestr = text['img']
    #image = imgstr.encode('utf-8')
    #print(imagestr)
    img =  base64.b64decode(imagestr)
    image = Image.open(BytesIO(img)).convert("RGB")
    image = image.resize((224, 224))
    image = np.array(image)
    diabetes_model = keras.models.load_model('diabetes_model.h5') 
    Y_pred_sample = diabetes_model.predict(np.expand_dims(image, axis=0)).round(2)

    out = np.argmax(Y_pred_sample[0])
    return {"output":out}

if __name__ == "__main__":
    app.run(debug=True)