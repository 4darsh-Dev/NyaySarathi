[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=ubuntu
Group=www-data
WorkingDirectory=/home/ubuntu/projectdir
ExecStart=/home/ubuntu/projectdir/env/bin/gunicorn \
          --access-logfile - \
          --workers 3 \
          --bind unix:/run/gunicorn.sock \
          NyaySarathi.wsgi:application

[Install]
WantedBy=multi-user.target
