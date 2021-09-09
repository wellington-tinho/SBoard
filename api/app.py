from flask import Flask, request
import networkx as nx
from flask_cors import CORS
import json


app = Flask(__name__)
cors = CORS(app)



@app.route("/convert", methods=['POST'])
def GML_JSON():
  data= request.get_json()
  if(data['data']):
    file=data['data']
    df = nx.parse_gml(file, label='id')
    return nx.cytoscape_data(df)

@app.route("/setup", methods=['POST'])
def Create_Setup_Json():
  data= request.get_json()
  file=data['data']
  arq_json = json.dumps(file)
  # Write to file
  fo = open("../src/data/setup.json", "w")
  fo.write(arq_json)
  fo.close()
  return ''
  


@app.route("/", methods=['GET'])
def home():
  return "hello"

if __name__ == '__main__':
  app.run(debug=True)