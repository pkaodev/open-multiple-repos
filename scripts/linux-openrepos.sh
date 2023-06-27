#!/bin/bash

original_dir=$(pwd)

# Change this to where this repo is located on your machine
# e.g.
# cd ~/my_repos/open-multiple-repos/app
cd ~/<CHANGE THIS>/open-multiple-repos/app

nohup npm run dev > /dev/null 2>&1 & pid=$!

xdg-open http://localhost:5173

cd "$original_dir"

echo $pid > openrepos.pid