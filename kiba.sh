#!/bin/bash
gpio mode 9 out
gpio write 9 1
sleep 5
gpio write 9 0
sleep 1