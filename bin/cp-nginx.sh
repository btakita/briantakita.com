#!/bin/bash
NGINX_DIR="${NGINX_DIR:-/etc/nginx/}"
sudo cp packages/_web/nginx/briantakita.com.nginx $NGINX_DIR/sites-available/
sudo ln -s $NGINX_DIR/sites-available/briantakita.com.nginx $NGINX_DIR/sites-enabled/
