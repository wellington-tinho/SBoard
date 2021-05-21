from flask import Flask

app = Flask(__name__)

@app.route('/api',methods=['GET'])
def index():
  return{
    'name':"Vem ai o TCC do TINHOO"
  }

if __name__ == '__main__':
  app.run(debug=True)
