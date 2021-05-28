import sys
import argparse
import json
import networkx as nx
import community
from networkx.readwrite import json_graph


def graphmltojson(graphfile):
	"""
	Converts GraphML file to json while adding communities/modularity groups
	using python-louvain. JSON output is usable with D3 force layout.
	Usage:
	>>> python convert.py -i mygraph.graphml -o outfile.json
	"""
	
	G = nx.read_graphml(graphfile)



	

	#finds best community using louvain
	partition = community.best_partition(G)

	#adds partition/community number as attribute named 'modularitygroup'
	for n,d in G.nodes(data=True):
		d['modularitygroup'] = partition[n]

	node_link = json_graph.node_link_data(G)
	arq_json = json.dumps(node_link)

	# # Write to file
	# fo = open('saida.json', "w")
	# fo.write(arq_json)
	# fo.close()
	return arq_json


# graphmltojson('Abvt.graphml', 'test1.json') #Modification this line