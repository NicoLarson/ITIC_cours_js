Lignes de commande GIT

git init
mkdir monPremierRepo
git add checklist-vacances.md
git add
git commit -m "Ajouté ma checklist-vacances.md (woohoo!)"
git status voir les commits
git log "voir l'historique"
git commit -a -m "Ajouté itinéraire dans checklist-vacances.md"

Connexion reposito
/*exemple*/
$ git remote add origin https://github.com/giusmili/html.git 
$ git add --all "ou un fichier que vous avez modifié"
$ git commit -a -m "votre commit"
$ git push origin master
$ git pull : Mettre à jour le dépôt local
$ git pull origin develop : mettre à jour la branche
git clone https://github.com/giusmili/itic_html5.git

Créer une branch

$ git branch nom_de_ma_branch_nouvelle
$ git checkout nom_de_ma_branch_nouvelle

Help git

git help config
git help push
git help pull
git help branch


