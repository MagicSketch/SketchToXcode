#!/bin/bash

echo "From What Name?"

read from

echo "To What Name?"

read to

gsed -i "s/$from/$to/" $from*/*.h $from*/*.m $from*/*.plist $from*/*.js $from*/*.pbxproj
rename "s/$from/$to/" *
rename "s/$from/$to/" $to*/*
