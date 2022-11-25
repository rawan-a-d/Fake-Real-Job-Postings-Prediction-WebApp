# A RESTful API built with Flask

It makes use of a trained AI model that predicts with 95% accuracy if a job posting is fraudulent or real.
[Fake or Real Job Postings Prediction AI](https://github.com/rawan-a-d/Fake-Real-Job-Postings-Prediction)

## Run app:

1. Activate environment

```bash
   source .venv/Scripts/activate
```

2. Create environment variables (should be run everytime I reopen the terminal)

```bash
   export FLASK_APP=application.py
   export FLASK_ENV=development
```

3. Run Flask app

```bash
   flask run
```

## Setup:

1. Create a virtual environment to isolate dependencies for this app

```bash
   python -m venv .venv
```

2. Activate environment

```bash
   source .venv/Scripts/activate
```

3. Put all requirments (packages downloaded) in text file

```bash
   pip3 freeze > requirements.txt
```

4. Create file

```bash
   touch application.py
```

5. Create environment variables (should be run everytime I reopen the terminal)

```bash
   export FLASK_APP=application.py
   export FLASK_ENV=development
```

6. Run Flask app

```bash
   flask run
```

## Resources:

https://www.youtube.com/watch?v=qbLc5a9jdXo
https://stackoverflow.com/questions/34122949/working-outside-of-application-context-flask
