from flask import Flask, render_template, send_file, make_response, url_for, Response,request,redirect,jsonify
import pandas as pd
import pymssql

from flask_cors import CORS

# pip install flask matplotlib pandas pymssql flask_cors
conn = pymssql.connect(server='213.140.22.237\SQLEXPRESS',user='ghebrous.davide',password='xxx123##',database='ghebrous.davide')

app = Flask(__name__)
CORS(app)

@app.route('/')
def start():
    return render_template('start.html')

@app.route('/home')
def home():
    return render_template('home.html')

#pagina contenente i tipi di ricerca che si vuole utilizzare per gli anime   
@app.route('/tipoRicercaAnime')
def tipoRiceraAnime():
    return render_template('tipoRicercaAnime.html')

#ricerca tramite titolo anime
@app.route('/titoloAnime', methods=['GET'])
def titoloAnime():
    data = request.args.get("titolo")
    q = 'SELECT * FROM anime WHERE nome LIKE %(t)s' 
    cursor = conn.cursor(as_dict=True)
    p = {"t": f"%{data}%"}
    cursor.execute(q, p)
    data = cursor.fetchall()

    return jsonify(data)
#ricerca tramite genere anime
@app.route('/genereAnime', methods=['GET'])
def genereAnime():
    
    return jsonify(data)

#ricerca tramite titolo manga
@app.route('/titoloManga', methods=['GET'])
def titoloManga():
    data = request.args.get("titolo")
    q = 'SELECT * FROM manga WHERE titolo LIKE %(t)s' 
    cursor = conn.cursor(as_dict=True)
    p = {"t": f"%{data}%"}
    cursor.execute(q, p)
    data = cursor.fetchall()

    return jsonify(data)
#pagina contenente i tipi di ricerca che si vuole utilizzare per i manga   
@app.route('/tipoRicercaManga')
def tipoRiceraManga():
    return render_template('tipoRicercaManga.html')



if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=3000)