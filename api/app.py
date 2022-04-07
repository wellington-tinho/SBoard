from flask import Flask, request
import networkx as nx
from flask_cors import CORS
import json
import os 


app = Flask(__name__)
CORS(app)



@app.route("/convert", methods=['POST'])
def GML_JSON():
  data= request.get_json()

  if(data):
    try:
      file=data['data']
      df = nx.parse_gml(file, label='id')
      return nx.cytoscape_data(df)
    except:
      return json.dumps({"error": "Error in converting GML to JSON"})



@app.route("/setup", methods=['POST'])
def Create_Setup_Json():
  data= request.get_json()
  file=data['data']
  arq_json = json.dumps(file)
  cwd = os.getcwd()
  # Write to file
  fo = open(cwd+"/src/data/setup.json", "w")
  fo.write(arq_json)
  fo.close()
  return ''




@app.route("/", methods=['GET'])
def home():
  return "connected api"

if __name__ == '__main__':
  app.run(debug=True)