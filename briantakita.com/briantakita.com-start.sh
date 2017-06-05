#!/bin/bash
SERVER_PORT="${SERVER_PORT:-3111}"
PORT=$SERVER_PORT nodemon briantakita.com/http-load.js --watch private/dist/briantakita.com.http.js --watch briantakita.com/http-load.js