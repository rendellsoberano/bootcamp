echo off
title Window Setup
echo Setting up web server directoties...
md webpage
cd webpage
md css
md js
type nul > about.html
type nul > shop.html
cd css
type nul > design.css
cd ../js
type nul > slideshow.js
type nul > gallery.js
cd ..
echo ^<h1^>Batch run successful!^</h1^> > index.html
index.html
echo Checking internet connection...
ping google.com
echo Saving your network info...
ipconfig /all > network.txt
echo Done!
date /t >> run_instances.txt
pause