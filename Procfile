web: gunicorn project.wsgi --workers=2 --timeout 120 --log-file -
release: python manage.py collectstatic --noinput