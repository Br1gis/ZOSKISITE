'''from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)


@app.route('/get_data', methods=['GET'])
def get_data():
    data = []
    conn = sqlite3.connect('usersiks.db')
    c = conn.cursor()

    c.execute("SELECT * FROM members")  # Здесь users - имя вашей таблицы

    rows = c.fetchall()

    for row in rows:
        data.append(row)

    conn.close()

    return {'data': data}'''



from flask import Flask, render_template
import sqlite3

app = Flask(__name__)

# Указываем путь к файлу базы данных SQLite
DATABASE = 'usersiks.db'


@app.route('/')
def index():
    # Соединяемся с базой данных
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    # Получаем имена из базы данных
    cursor.execute("SELECT name FROM members")
    names = cursor.fetchall()

    # Закрываем соединение с базой данных
    cursor.close()
    conn.close()

    # Отправляем имена на HTML-страницу с помощью шаблона Jinja2
    return render_template('memberscount.html', names=names)


if __name__ == '__main__':
    app.run()
