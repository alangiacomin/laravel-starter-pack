newSection "PUT ONLINE"

Copy-Item ($cpanelFolder + '/.cpanel_up.yml') .cpanel.yml

git add .cpanel.yml
git commit -m "cpanel put online"
git push
