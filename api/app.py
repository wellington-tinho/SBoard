from flask import Flask, request
import networkx as nx
from flask_cors import CORS
import json


app = Flask(__name__)
cors = CORS(app)



@app.route("/convert", methods=['POST'])
def GML_JSON():
  data= request.get_json()
  if(data):
    file=data['data']
    df = nx.parse_gml(file, label='id')
    return nx.cytoscape_data(df)

@app.route("/convertGML", methods=['POST'])
def JSON_GML():
  data= request.get_json()
  if(data):
    G = nx.cytoscape_graph(data['data'])
    # for i in range(len(G.nodes()) //2 ):
    #   G.remove_node(str(i)) # => REMOVER ERRO DOS NÓS DUPLICADOS 
    return("\n".join(nx.generate_gml(G)))




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
  return "Olá vc clicou na rota errada, execulte yarn start e entre na rota http://localhost:3000/ "

if __name__ == '__main__':
  app.run(debug=True)