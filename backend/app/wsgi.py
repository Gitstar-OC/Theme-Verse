from app import app  # Replace with the actual import of your app

if __name__ == "__main__":
    from werkzeug.middleware.dispatcher import DispatcherMiddleware
    from werkzeug.serving import run_simple

    app.wsgi_app = DispatcherMiddleware(app)
    run_simple('0.0.0.0', 5000, app)
