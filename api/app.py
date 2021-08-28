from flask import flask, request
import networkx as nx


app = Flask(__name__)

@app.route("/convert", methods=['POST'])
def GML_JSON(file):
  df = nx.parse_gml(file, label='id')
  return nx.cytoscape_data(df)