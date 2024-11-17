from pymongo import MongoClient
from collections import Counter
from datetime import datetime
from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # Enable CORS for the app


# MongoDB Connection Setup
client = MongoClient(
    "mongodb+srv://devain25:dev@cluster0.rravhkg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client['test']
collection = db['querydatas']
documents = list(collection.find())  # Retrieve all documents

# Analysis Functions
def analyze_device_types(documents):
    device_types = []
    for doc in documents:
        device = doc.get('device')
        if isinstance(device, dict):
            device_types.append(device.get('type', 'Unknown'))
        elif isinstance(device, str):
            device_types.append(device)

    device_count = Counter(device_types)
    return device_count

def analyze_response_times(documents):
    res_times = []
    for doc in documents:
        try:
            res_times.append(int(doc.get('resTime', 0)))  # Convert to int, using 0 as default if not available
        except ValueError:
            print(f"Warning: resTime value is not an integer in document with _id {doc.get('_id')}")

    avg_res_time = sum(res_times) / len(res_times) if res_times else 0
    return avg_res_time

def analyze_questions(documents):
    questions = [doc.get('question', 'Unknown') for doc in documents]
    question_count = Counter(questions)
    return question_count

def analyze_usage_over_time(documents):
    dates = [doc['createdAt'].date() for doc in documents if 'createdAt' in doc]
    date_count = Counter(dates)
    return date_count

def analyze_question_length(documents):
    lengths = [len(doc.get('question', '')) for doc in documents]
    avg_length = sum(lengths) / len(lengths) if lengths else 0
    return avg_length

def analyze_performance_by_device(documents):
    device_res_times = {}
    for doc in documents:
        device = doc.get('device', 'Unknown')
        if isinstance(device, dict):
            device = device.get('type', 'Unknown')  # Use the 'type' field from the device dict

        try:
            res_time = int(doc.get('resTime', 0))
            if device not in device_res_times:
                device_res_times[device] = []
            device_res_times[device].append(res_time)
        except ValueError:
            print(f"Warning: resTime value is not an integer in document with _id {doc.get('_id')}")

    device_avg_res_time = {device: sum(times) / len(times) for device, times in device_res_times.items()}
    return device_avg_res_time

# API Endpoints
@app.route('/device-types', methods=['GET'])
def get_device_types():
    device_count = analyze_device_types(documents)
    return jsonify(device_count), 200

@app.route('/avg-response-time', methods=['GET'])
def get_avg_response_time():
    avg_res_time = analyze_response_times(documents)
    return jsonify({'average_response_time': avg_res_time}), 200

@app.route('/frequent-questions', methods=['GET'])
def get_frequent_questions():
    question_count = analyze_questions(documents)
    return jsonify(question_count), 200

# @app.route('/usage-over-time', methods=['GET'])
# def get_usage_over_time():
#     date_count = analyze_usage_over_time(documents)
#     return jsonify(date_count), 200

@app.route('/avg-question-length', methods=['GET'])
def get_avg_question_length():
    avg_length = analyze_question_length(documents)
    return jsonify({'average_question_length': avg_length}), 200

@app.route('/performance-by-device', methods=['GET'])
def get_performance_by_device():
    device_avg_res_time = analyze_performance_by_device(documents)
    return jsonify(device_avg_res_time), 200

@app.route('/')
def home():
    return "Welcome to the Chatbot Data Analysis API!"

if __name__ == "__main__":
    app.run(debug=True)