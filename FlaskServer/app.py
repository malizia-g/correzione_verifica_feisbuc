from flask import Flask, render_template, send_file, make_response, url_for, Response,request,redirect,jsonify
import pandas as pd
import pymssql
import matplotlib.pyplot as plt

from flask_cors import CORS


# pip install flask geopandas matplotlib contextily pandas pymssql flask_cors
conn = pymssql.connect(server='213.140.22.237\SQLEXPRESS',user='ghebrous.davide',password='xxx123##',database='ghebrous.davide')

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return render_template('home.html')

#pagina contenente i tipi di ricerca che si vuole utilizzare per gli anime   
@app.route('/tipoRiceraAnime')
def tipoRiceraAnime():
    return render_template('tipoRiceraAnime.html')

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

#ricerca tramite titolo manga
@app.route('/titoloManga', methods=['GET'])
def titoloManga():
    data = request.args.get("titolo")
    q = 'SELECT * FROM manga WHERE nome LIKE %(t)s' 
    cursor = conn.cursor(as_dict=True)
    p = {"t": f"%{data}%"}
    cursor.execute(q, p)
    data = cursor.fetchall()

    return jsonify(data)
#pagina contenente i tipi di ricerca che si vuole utilizzare per i manga   
@app.route('/tipoRiceraManga')
def tipoRiceraManga():
    return render_template('tipoRiceraManga.html')



if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=3000)