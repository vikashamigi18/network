from flask import Flask, render_template, jsonify
import psutil
from datetime import datetime
import time

app = Flask(__name__)

previous = psutil.net_io_counters()
previous_time = time.time()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/stats")
def stats():
    global previous, previous_time

    current = psutil.net_io_counters()
    now = time.time()
    elapsed = max(now - previous_time, 0.001)

    download = int((current.bytes_recv - previous.bytes_recv) / elapsed)
    upload = int((current.bytes_sent - previous.bytes_sent) / elapsed)

    previous = current
    previous_time = now

    return jsonify({
        "download": max(download, 0),
        "upload": max(upload, 0),
        "sent": current.bytes_sent,
        "received": current.bytes_recv,
        "time": datetime.now().strftime("%H:%M:%S")
    })

if __name__ == "__main__":
    app.run(debug=True)
