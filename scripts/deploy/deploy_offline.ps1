newSection "PUT OFFLINE"

Copy-Item ($cpanelFolder + '/.cpanel_down.yml') .cpanel.yml

git add .cpanel.yml
git commit -m "cpanel put offline"
git push
