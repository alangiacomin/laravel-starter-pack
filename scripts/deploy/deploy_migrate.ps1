newSection "MIGRATE DATABASE"

Copy-Item ($cpanelFolder + '/.cpanel_migrate.yml') .cpanel.yml

git add .cpanel.yml
git commit -m "cpanel migrate"
git push
