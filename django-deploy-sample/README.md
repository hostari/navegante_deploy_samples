# Django Deployment Sample

A production-ready Django application sample for PaaS platform demonstrations.

## Quick Start

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Set environment variables (see below)

3. Run database migrations:
```bash
python manage.py migrate
```

4. Start the production server:
```bash
gunicorn djangodeploysample.wsgi:application -c gunicorn.conf.py
```

## Environment Variables

### Required
- `SECRET_KEY` - Django secret key for cryptographic signing
- `DEBUG` - Set to `false` for production
- `ALLOWED_HOSTS` - Comma-separated list of allowed hostnames (e.g., `example.com,www.example.com`)

### Optional
- `PORT` - Server port (default: `8000`)
- `WEB_CONCURRENCY` - Number of gunicorn workers (default: `2`)

## Endpoints

- `/admin/` - Django admin interface
- `/health/` - Health check endpoint (returns JSON status)

## Production Notes

- Uses Gunicorn as WSGI server
- WhiteNoise for static file serving
- SQLite database (suitable for demos)
- Health check endpoint for load balancer monitoring