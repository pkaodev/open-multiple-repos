#!/bin/bash

pid=$(cat openrepos.pid)

if ps -p $pid > /dev/null; then
  kill $pid
  echo "Open multiple repos process stopped."
  rm openrepos.pid
else
  echo "Open multiple repos process is not running."
fi