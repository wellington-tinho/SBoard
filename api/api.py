from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api',methods=['GET'])
def index():
  return{
    'name':"Vem ai o TCC do TINHOO"
  }

@app.route('/api/upload', methods = ['POST'])
def upload_file():
    file = request.files['File']
    print(file)
    return "done"

if __name__ == '__main__':
  app.run(debug=True)
