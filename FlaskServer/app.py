from flask import Flask, render_template, send_file, make_response, url_for, Response, request, redirect, jsonify
import pandas as pd
import pymssql

from flask_cors import CORS

# pip install flask matplotlib pandas pymssql flask_cors
conn = pymssql.connect(server='213.140.22.237\SQLEXPRESS',
                       user='ghebrous.davide', password='xxx123##', database='ghebrous.davide')

app = Flask(__name__)
CORS(app)


@app.route('/')
def start():
    return render_template('start.html')


@app.route('/home')
def home():
    return render_template('home.html')


@app.route('/Register',methods=['GET', 'POST'])
def reg(username,email,password,cpwd):
    username = request.args.get("username")
    email = request.args.get("email")
    # Il controllo della password e della sua conferma lo faccio fare ad Angular tramite la form
    password = request.args.get("pwd")
    cpwd = request.args.get("cpwd")

    q = "INSERT INTO dbo.utente (username,email,pwd) VALUES (%(username)s, %(email)s, %(password)s)"
    cursor = conn.cursor(as_dict=True)
    cursor.execute(q, params={"u": username, "email": email, "password": password})
    print(cursor)
    conn.commit()

    return jsonify({"msg": "OKE FRATM, HO AGGIUNTO UN NUOVO UTENTE"})

# pagina contenente i tipi di ricerca che si vuole utilizzare per gli anime
@app.route('/tipoRicercaAnime')
def tipoRiceraAnime():
    return render_template('tipoRicercaAnime.html')

# ricerca tramite titolo anime


@app.route('/titoloAnime', methods=['GET'])
def titoloAnime():
    data = request.args.get("titolo")
    q = 'SELECT * FROM anime ' + \
        ('WHERE nome LIKE %(t)s' if data != None and data != '' else "")
    cursor = conn.cursor(as_dict=True)
    p = {"t": f"%{data}%"}
    cursor.execute(q, p)
    data = cursor.fetchall()

    return jsonify(data)

# ricerca tramite genere anime


@app.route('/genereAnime', methods=['GET'])
def genereAnime():
    q = 'SELECT * FROM genere order by nome'
    cursor = conn.cursor(as_dict=True)
    cursor.execute(q)
    data = cursor.fetchall()

    return jsonify(data)
# risultato anime


@app.route('/risultatoAnime', methods=['GET'])
def risultatoAnime():

    return jsonify(data)


# pagina contenente i tipi di ricerca che si vuole utilizzare per i manga
@app.route('/tipoRicercaManga')
def tipoRiceraManga():
    return render_template('tipoRicercaManga.html')
# ricerca tramite titolo manga


@app.route('/titoloManga', methods=['GET'])
def titoloManga():
    data = request.args.get("titolo")
    q = 'SELECT * FROM manga' + \
        ('WHERE nome LIKE %(t)s' if data != None and data != '' else "")
    cursor = conn.cursor(as_dict=True)
    p = {"t": f"%{data}%"}
    cursor.execute(q, p)
    data = cursor.fetchall()

    return jsonify(data)
# ricerca tramite genere manga


@app.route('/genereManga', methods=['GET'])
def genereManga():
    q = 'SELECT * FROM genere order by nome'
    cursor = conn.cursor(as_dict=True)
    cursor.execute(q)
    data = cursor.fetchall()

    return jsonify(data)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=3000)
