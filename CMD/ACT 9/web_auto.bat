echo off
title Window Setup
echo Setting up web server directories...
md webpage
cd webpage
echo ^<h1^>Batch run successful!^</h1^> > index.html
start index.html
type nul > about.html
type nul > shop.html
md css
cd css
type nul > design.css
cd ..
md js
cd js
type nul > slideshow.js
type nul > gallery.js
cd ..
echo Checking internet connection...
ping google.com
ping google.com > network.txt
echo Saving your network info...
echo Done!
date /t > run_instances.txt
pause