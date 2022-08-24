#!/bin/sh
git pull origin main
pm2 restart Donepin-APP
