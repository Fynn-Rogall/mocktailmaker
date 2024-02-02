#!/bin/bash
gpio mode 8 out
gpio write 8 1
sleep 5
gpio write 8 0
sleep 1