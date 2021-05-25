from flask import Flask
from flask import request
from flask_cors import CORS
import Conversor
import os

app = Flask(__name__)
CORS(app)

@app.route('/api',methods=['GET'])
def index():
  return{
    'name':"Vem ai o TCC do TINHOO"
  }

@app.route('/api/upload', methods = ['POST'])
def upload_file():
  file = request.files['File'].read().decode("utf-8")  
  fo = open('outfile.graphml', "w")
  fo.write(file)
  fo.close()

  #infelizmente a essa função não está OK, Então vamos simular um retorno em que ela funcione
  json_graph=Conversor.graphmltojson('outfile.graphml') 
  # json_graph=open(os.getcwd()+'\\abvt1.json')
  return json_graph


if __name__ == '__main__':
  app.run(debug=True)



