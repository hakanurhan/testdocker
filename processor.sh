#!/bin/bash

PARAM1=$1
PARAM2=$2

echo "processing 1..."
sleep 1
echo "processing 2..."
sleep 1
echo $(expr $1 \* $2) > /output/result.txt