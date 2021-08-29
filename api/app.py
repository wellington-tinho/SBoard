from flask import Flask, request
import networkx as nx
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app)



@app.route("/convert", methods=['POST'])
def GML_JSON():
  data= request.get_json()
  if(data['data']):
    file=data['data']
    print('Entrou no POST')
    print(file)
    df = nx.parse_gml(file, label='id')
    return nx.cytoscape_data(df)


@app.route("/", methods=['GET'])
def home():
  return "hello"

if __name__ == '__main__':
  app.run(debug=True)