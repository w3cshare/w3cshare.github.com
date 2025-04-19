from flask import Flask, jsonify
import os
import requests

app = Flask(__name__)

# 获取环境变量
consul_host = os.environ.get('CONSUL_HOST', 'localhost')
zipkin_host = os.environ.get('ZIPKIN_HOST', 'localhost')

@app.route('/')
def index():
    return jsonify({
        'service': 'python-microservice',
        'status': 'running'
    })

@app.route('/health')
def health():
    return jsonify({
        'status': 'UP'
    })

@app.route('/consul')
def consul():
    try:
        response = requests.get(f'http://{consul_host}:8500/v1/status/leader')
        return jsonify({
            'consul_status': 'connected' if response.status_code == 200 else 'disconnected',
            'consul_response': response.text
        })
    except Exception as e:
        return jsonify({
            'consul_status': 'error',
            'error': str(e)
        })

@app.route('/zipkin')
def zipkin():
    try:
        response = requests.get(f'http://{zipkin_host}:9411/health')
        return jsonify({
            'zipkin_status': 'connected' if response.status_code == 200 else 'disconnected',
            'zipkin_response': response.text
        })
    except Exception as e:
        return jsonify({
            'zipkin_status': 'error',
            'error': str(e)
        })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
