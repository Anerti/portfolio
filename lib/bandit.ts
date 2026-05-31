type LevelData = {
  slug: string
  title: string
  excerpt: string
  description: string
  script: string
  explanation: string
  output: string
  notes?: string
}

export const topNotices = `Remarques importantes :
- L'auteur part du principe que le lecteur a lu toutes les explications des niveaux précédents afin de comprendre les explications fournies au niveau X. Le mot de passe ou le défi de chaque niveau peut changer à tout moment.
- Tous les scripts fournis ci-dessous sont testés sur un système d'exploitation de type Unix Ubuntu 24.04.3 LTS. Si une commande dans un script n'est pas trouvée, exécutez sudo apt-get update && apt install nom_de_la_commande avant d'exécuter le script.
- Pour exécuter l'un des scripts fournis ci-dessous, copiez-le et collez-le dans un fichier vierge, donnez-lui les permissions appropriées avant de l'exécuter : chmod +x nom_du_fichier.sh && ./nom_du_fichier.sh.`

const banner = [
  "                         _                     _ _ _",
  "                        | |__   __ _ _ __   __| (_) |_",
  "                        | '_ \\ / _` | '_ \\ / _` | | __|",
  "                        | |_) | (_| | | | | (_| | | |_",
  "                        |_.__/ \\__,_|_| |_|\\__,_|_|\\__|",
  "",
  "",
  "                      This is an OverTheWire game server.",
  "            More information on http://www.overthewire.org/wargames",
  "",
].join("\n")

function serverOutput(backend: string, body: string): string {
  return `${banner}
backend: gibson-${backend}

${body}
`
}

export const levels: LevelData[] = [
  {
    slug: "niveau-0-1",
    title: "Niveau 0 → 1",
    excerpt:
      "Se connecter au serveur et trouver le mot de passe dans /home/$USER avec grep.",
    description:
      "Le mot de passe du niveau suivant se trouve dans le répertoire /home/$USER une fois connecté au serveur distant.",
    script: `#!/bin/bash
sshpass -p "bandit0" ssh bandit0@bandit.labs.overthewire.org -p 2220 "grep 'password' *"`,
    explanation: `#!/bin/bash est un shebang qui indique à la machine locale quel interpréteur utiliser.
sshpass simule une interaction utilisateur en injectant le mot de passe après l'option -p.
ssh permet de se connecter à un serveur distant (user@domain). Comme SSH n'utilise pas le port 22 par défaut, l'option -p specifie le port.
grep recherche un motif dans un ou plusieurs fichiers.
* est un joker qui remplace n'importe quelle chaîne.`,
    output: serverOutput("1", "The password you are looking for is: ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If"),
  },
  {
    slug: "niveau-1-2",
    title: "Niveau 1 → 2",
    excerpt: "Lire un fichier nommé « - » en utilisant la redirection d'entrée.",
    description:
      "Le mot de passe du niveau suivant se trouve dans un fichier nommé « - ».",
    script: `#!/bin/bash
sshpass -p "ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If" ssh bandit1@bandit.labs.overthewire.org -p 2220 "cat < -"`,
    explanation: `Étant donné que « - » est utilisé comme argument de commande, lire un fichier commençant par « - » pose problème. < est un descripteur de fichier qui redirige l'entrée standard vers cat. Autre méthode : utiliser le chemin relatif ./- ou absolu /home/$USER/-.`,
    output: serverOutput("1", "263JGJPfgU6LtdEvgfWU1XP5yac29mFx"),
  },
  {
    slug: "niveau-2-3",
    title: "Niveau 2 → 3",
    excerpt: "Lire un fichier contenant des espaces dans son nom.",
    description:
      "Le mot de passe se trouve dans un fichier nommé « --space in this filename-- ».",
    script: `#!/bin/bash
sshpass -p "263JGJPfgU6LtdEvgfWU1XP5yac29mFx" ssh bandit2@bandit.labs.overthewire.org -p 2220 "cat < '--spaces in this filename--'"`,
    explanation: `Le nom du fichier contient des espaces. Pour le lire, on entoure le nom de guillemets simples '' ou on utilise des caractères d'échappement : --spaces\\ in\\ this\\ filename--.`,
    output: serverOutput("1", "MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx"),
  },
  {
    slug: "niveau-3-4",
    title: "Niveau 3 → 4",
    excerpt: "Trouver un fichier caché commençant par un point.",
    description:
      "Le mot de passe se trouve dans un fichier caché dans /home/$USER.",
    script: `#!/bin/bash
sshpass -p "MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx" ssh bandit3@bandit.labs.overthewire.org -p 2220 "find \\$(ls) -type f -iname '.*' -exec cat {} +"`,
    explanation: `$() exécute une commande avant d'en passer le résultat à une autre commande. L'échappement empêche le shell local d'exécuter la commande.
find cherche un fichier dans le répertoire donné par $(ls). -type f pour les fichiers, -iname '.*' pour les noms commençant par un point, -exec cat {} + pour afficher le contenu.`,
    output: serverOutput("0", "2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ"),
  },
  {
    slug: "niveau-4-5",
    title: "Niveau 4 → 5",
    excerpt: "Identifier le seul fichier texte lisible dans inhere.",
    description:
      "Le mot de passe se trouve dans le seul fichier lisible par un humain dans inhere.",
    script: `#!/bin/bash
sshpass -p "2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ" ssh bandit4@bandit.labs.overthewire.org -p 2220 "cat \\$(find ./inhere -type f -exec file {} + | grep -i ascii | cut -d ':' -f1)"`,
    explanation: `file détermine le type de fichier.
| (pipe) passe la sortie d'une commande à l'entrée de la suivante.
cut analyse la sortie délimitée par « : » et prend le premier champ.`,
    output: serverOutput("0", "4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw"),
  },
  {
    slug: "niveau-5-6",
    title: "Niveau 5 → 6",
    excerpt: "Trouver un fichier de 1033 octets non exécutable.",
    description:
      "Le mot de passe se trouve dans un fichier lisible, de 1033 octets, non exécutable dans inhere.",
    script: `#!/bin/bash
sshpass -p "4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw" ssh bandit5@bandit.labs.overthewire.org -p 2220 "find . -type f -size 1033c -not -executable -exec cat {} +"`,
    explanation: `-size 1033c limite la recherche aux fichiers de 1033 octets.
-not -executable exclut les fichiers exécutables.`,
    output: serverOutput("0", "HWasnPhtq9AVKe0dmk45nxy20cvUa6EG"),
  },
  {
    slug: "niveau-6-7",
    title: "Niveau 6 → 7",
    excerpt: "Trouver un fichier appartenant à bandit7, groupe bandit6, 33 octets.",
    description:
      "Le mot de passe se trouve sur le serveur : appartient à bandit7, groupe bandit6, 33 octets.",
    script: `#!/bin/bash
sshpass -p "HWasnPhtq9AVKe0dmk45nxy20cvUa6EG" ssh bandit6@bandit.labs.overthewire.org -p 2220 "find / -type f -user bandit7 -group bandit6 -size 33c -exec cat {} + 2> /dev/null"`,
    explanation: `-user et -group filtrent par propriétaire et groupe.
2> /dev/null redirige les erreurs (permission denied) vers le trou noir.`,
    output: serverOutput("0", "morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj"),
  },
  {
    slug: "niveau-7-8",
    title: "Niveau 7 → 8",
    excerpt: "Chercher le mot « millionth » dans data.txt avec grep.",
    description:
      "Le mot de passe se trouve dans data.txt à côté du mot millionth.",
    script: `#!/bin/bash
sshpass -p "morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj" ssh bandit7@bandit.labs.overthewire.org -p 2220 "grep millionth data.txt"`,
    explanation: `grep cherche le mot « millionth » dans data.txt et affiche la ligne correspondante.`,
    output: serverOutput("1", "millionth       dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc"),
  },
  {
    slug: "niveau-8-9",
    title: "Niveau 8 → 9",
    excerpt: "Trouver la seule ligne unique avec sort et uniq -u.",
    description:
      "Le mot de passe est la seule ligne qui apparaît une seule fois dans data.txt.",
    script: `#!/bin/bash
sshpass -p "dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc" ssh bandit8@bandit.labs.overthewire.org -p 2220 "cat data.txt | sort | uniq -u"`,
    explanation: `sort trie alphabétiquement les lignes.
uniq -u affiche les lignes uniques. uniq -u nécessite que les lignes soient triées au préalable.`,
    output: serverOutput("1", "4CKMh1JI91bUIZZPXDqGanal4xvAg0JM"),
  },
  {
    slug: "niveau-9-10",
    title: "Niveau 9 → 10",
    excerpt: "Extraire les chaînes lisibles précédées de === avec strings.",
    description:
      "Le mot de passe se trouve parmi les chaînes lisibles de data.txt, précédé de plusieurs « = ».",
    script: `#!/bin/bash
sshpass -p "4CKMh1JI91bUIZZPXDqGanal4xvAg0JM" ssh bandit9@bandit.labs.overthewire.org -p 2220 "strings data.txt | grep ==="`,
    explanation: `strings affiche uniquement les chaînes de caractères lisibles. Alternative : grep -a === "data.txt" mais la sortie contient des données binaires.`,
    output: serverOutput("1", `========== the
========== password
========== is
========== FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey`),
  },
  {
    slug: "niveau-10-11",
    title: "Niveau 10 → 11",
    excerpt: "Décoder un fichier base64 avec base64 -d.",
    description:
      "Le mot de passe se trouve dans data.txt, encodé en base64.",
    script: `#!/bin/bash
sshpass -p "FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey" ssh bandit10@bandit.labs.overthewire.org -p 2220 "base64 -d data.txt"`,
    explanation: `base64 convertit des données binaires en ASCII. Par défaut, la commande encode. L'option -d effectue l'opération inverse (décodage).`,
    output: serverOutput("1", "The password is dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr"),
  },
  {
    slug: "niveau-11-12",
    title: "Niveau 11 → 12",
    excerpt: "Déchiffrer un texte chiffré par rotation ROT13 avec tr.",
    description:
      "Toutes les lettres (a-z, A-Z) ont été décalées de 13 positions (ROT13).",
    script: `#!/bin/bash
sshpass -p "dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr" ssh bandit11@bandit.labs.overthewire.org -p 2220 "tr 'a-zA-Z' 'n-za-mN-ZA-M' < data.txt"`,
    explanation: `Le chiffrement par décalage de x positions est le chiffre de César. tr remplace a→n, b→o, c→p, etc. Les chiffres restent inchangés.`,
    output: serverOutput("1", "The password is 7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4"),
  },
  {
    slug: "niveau-12-13",
    title: "Niveau 12 → 13",
    excerpt: "Reconstruire un fichier hexdump compressé plusieurs fois.",
    description:
      "data.txt est un hexdump d'un fichier compressé plusieurs fois (gzip, bzip2, tar).",
    script: `#!/bin/bash
sshpass -p "7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4" ssh bandit12@bandit.labs.overthewire.org -p 2220 "DIR=\\$(mktemp -d) && cd \\$DIR && cp /home/\\$USER/data.txt \\$DIR && xxd -r data.txt | gzip -d | bzip2 -d | gzip -d | tar -xvO | tar -xvO | bzip2 -d | tar -xvO | gzip -d"`,
    explanation: `mktemp -d crée un répertoire temporaire. xxd -r convertit l'hexdump en binaire.
gzip -d, bzip2 -d, tar -xvO décompressent successivement les différentes couches.`,
    output: serverOutput("1", `data5.bin
data6.bin
data8.bin
The password is FO5dwFsc0cbaIiH0h8J2eUks2vdTDwAn`),
  },
  {
    slug: "niveau-13-14",
    title: "Niveau 13 → 14",
    excerpt: "Utiliser une clé privée SSH téléchargée via scp.",
    description:
      "Une clé privée SSH est fournie pour se connecter sans mot de passe.",
    script: `#!/bin/bash
sshpass -p "FO5dwFsc0cbaIiH0h8J2eUks2vdTDwAn" scp -P 2220 bandit13@bandit.labs.overthewire.org:/home/bandit13/sshkey.private /home/$USER && cat /home/$USER/sshkey.private`,
    explanation: `scp (secure copy) télécharge un fichier distant. Comme SSH n'utilise pas le port 22, l'option -P specifie le port.`,
    output: serverOutput("1", `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAxkkOE83W2cOT7IWhFc9aPaaQmQDdgzuXCv+ppZHa++buSkN+
gg0tcr7Fw8NLGa5+Uzec2rEg0WmeevB13AIoYp0MZyETq46t+jk9puNwZwIt9XgB
ZufGtZEwWbFWw/vVLNwOXBe4UWStGRWzgPpEeSv5Tb1VjLZIBdGphTIK22Amz6Zb
ThMsiMnyJafEwJ/T8PQO3myS91vUHEuoOMAzoUID4kN0MEZ3+XahyK0HJVq68KsV
ObefXG1vvA3GAJ29kxJaqvRfgYnqZryWN7w3CHjNU4c/2Jkp+n8L0SnxaNA+WYA7
jiPyTF0is8uzMlYQ4l1Lzh/8/MpvhCQF8r22dwIDAQABAoIBAQC6dWBjhyEOzjeA
J3j/RWmap9M5zfJ/wb2bfidNpwbB8rsJ4sZIDZQ7XuIh4LfygoAQSS+bBw3RXvzE
pvJt3SmU8hIDuLsCjL1VnBY5pY7Bju8g8aR/3FyjyNAqx/TLfzlLYfOu7i9Jet67
xAh0tONG/u8FB5I3LAI2Vp6OviwvdWeC4nOxCthldpuPKNLA8rmMMVRTKQ+7T2VS
nXmwYckKUcUgzoVSpiNZaS0zUDypdpy2+tRH3MQa5kqN1YKjvF8RC47woOYCktsD
o3FFpGNFec9Taa3Msy+DfQQhHKZFKIL3bJDONtmrVvtYK40/yeU4aZ/HA2DQzwhe
ol1AfiEhAoGBAOnVjosBkm7sblK+n4IEwPxs8sOmhPnTDUy5WGrpSCrXOmsVIBUf
laL3ZGLx3xCIwtCnEucB9DvN2HZkupc/h6hTKUYLqXuyLD8njTrbRhLgbC9QrKrS
M1F2fSTxVqPtZDlDMwjNR04xHA/fKh8bXXyTMqOHNJTHHNhbh3McdURjAoGBANkU
1hqfnw7+aXncJ9bjysr1ZWbqOE5Nd8AFgfwaKuGTTVX2NsUQnCMWdOp+wFak40JH
PKWkJNdBG+ex0H9JNQsTK3X5PBMAS8AfX0GrKeuwKWA6erytVTqjOfLYcdp5+z9s
8DtVCxDuVsM+i4X8UqIGOlvGbtKEVokHPFXP1q/dAoGAcHg5YX7WEehCgCYTzpO+
xysX8ScM2qS6xuZ3MqUWAxUWkh7NGZvhe0sGy9iOdANzwKw7mUUFViaCMR/t54W1
GC83sOs3D7n5Mj8x3NdO8xFit7dT9a245TvaoYQ7KgmqpSg/ScKCw4c3eiLava+J
3btnJeSIU+8ZXq9XjPRpKwUCgYA7z6LiOQKxNeXH3qHXcnHok855maUj5fJNpPbY
iDkyZ8ySF8GlcFsky8Yw6fWCqfG3zDrohJ5l9JmEsBh7SadkwsZhvecQcS9t4vby
9/8X4jS0P8ibfcKS4nBP+dT81kkkg5Z5MohXBORA7VWx+ACohcDEkprsQ+w32xeD
qT1EvQKBgQDKm8ws2ByvSUVs9GjTilCajFqLJ0eVYzRPaY6f++Gv/UVfAPV4c+S0
kAWpXbv5tbkkzbS0eaLPTKgLzavXtQoTtKwrjpolHKIHUz6Wu+n4abfAIRFubOdN
/+aLoRQ0yBDRbdXMsZN/jvY44eM+xRLdRVyMmdPtP8belRi2E2aEzA==
-----END RSA PRIVATE KEY-----

Private key downloaded to /home/anerti/`),
  },
  {
    slug: "niveau-14-15",
    title: "Niveau 14 → 15",
    excerpt: "Envoyer le mot de passe sur le port 30000 avec netcat.",
    description:
      "Le mot de passe du niveau suivant s'obtient en soumettant le mot de passe actuel sur le port 30000 de localhost.",
    script: `#!/bin/bash
chmod 600 /home/$USER/sshkey.private && ssh bandit14@bandit.labs.overthewire.org -p 2220 -i /home/$USER/sshkey.private "nc -v localhost 30000 < /etc/bandit_pass/\\$USER"`,
    explanation: `chmod 600 définit les permissions lecture/écriture pour le propriétaire. Si la permission n'est pas correctement définie, un problème surviendra lors de la connexion SSH.
-i indique à SSH d'utiliser la clé privée fournie au lieu d'un mot de passe.
nc permet une connexion UDP ou TCP vers une machine sur le même réseau. -v active le mode verbose. localhost (127.0.0.1) est l'adresse IP de la machine locale et 30000 est le port de connexion.`,
    notes: `Ce niveau dépend du niveau précédent car le fichier sshkey.private doit être téléchargé dans /home/$USER`,
    output: serverOutput("1", `Connection to localhost (127.0.0.1) 30000 port [tcp/*] succeeded!
Correct!
8xCjnmgoKbGLhHFAZlGE5Tmu4M2tKJQo`),
  },
  {
    slug: "niveau-15-16",
    title: "Niveau 15 → 16",
    excerpt: "Connexion SSL/TLS vers le port 30001 avec ncat --ssl.",
    description:
      "Soumettre le mot de passe sur le port 30001 avec chiffrement SSL/TLS.",
    script: `#!/bin/bash
sshpass -p "8xCjnmgoKbGLhHFAZlGE5Tmu4M2tKJQo" ssh bandit15@bandit.labs.overthewire.org -p 2220 "ncat --ssl localhost 30001 <<< 8xCjnmgoKbGLhHFAZlGE5Tmu4M2tKJQo"`,
    explanation: `ncat --ssl chiffre la communication. Alternative : openssl s_client localhost:30001.`,
    output: serverOutput("1", `Correct!
kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx`),
  },
  {
    slug: "niveau-16-17",
    title: "Niveau 16 → 17",
    excerpt: "Scanner les ports 31000-32000 avec nmap.",
    description:
      "Trouver le service SSL sur un port entre 31000 et 32000.",
    script: `#!/bin/bash
sshpass -p "kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx" ssh bandit16@bandit.labs.overthewire.org -p 2220 "DIR=\\$(mktemp -d) && nmap localhost -p 31000-32000 -oG \\$DIR/target && for port in \\$(grep -oE '[0-9]{5}' \\$DIR/target); do ncat --ssl localhost \\$port <<< 'kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx'; done"`,
    explanation: `nmap (Network Mapper) est un outil de découverte d'hôtes et de scan de ports. localhost est la cible, -p 31000-32000 spécifie la plage de ports. -oG enregistre les résultats au format greppable.
La boucle for répète une commande pour chaque port trouvé. Les ports sont extraits avec grep -oE '[0-9]{5}'. Pour chaque port, ncat --ssl envoie le mot de passe.
Alternative : nc -zv localhost 31000-32000 2>&1 | grep succeeded au lieu de nmap.`,
    output: serverOutput("1", `Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-10-27 15:59 UTC
Nmap scan report for localhost (127.0.0.1)
Host is up (0.00020s latency).
Not shown: 996 closed tcp ports (conn-refused)
PORT      STATE SERVICE
31046/tcp open  unknown
31518/tcp open  unknown
31691/tcp open  unknown
31790/tcp open  unknown
31960/tcp open  unknown

Nmap done: 1 IP address (1 host up) scanned in 0.11 seconds
Ncat: Connection refused.
Ncat: Connection refused.
Ncat: Input/output error.
kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx
Ncat: Input/output error.
Correct!
-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAvmOkuifmMg6HL2YPIOjon6iWfbp7c3jx34YkYWqUH57SUdyJ
imZzeyGC0gtZPGujUSxiJSWI/oTqexh+cAMTSMlOJf7+BrJObArnxd9Y7YT2bRPQ
Ja6Lzb558YW3FZl87ORiO+rW4LCDCNd2lUvLE/GL2GWyuKN0K5iCd5TbtJzEkQTu
DSt2mcNn4rhAL+JFr56o4T6z8WWAW18BR6yGrMq7Q/kALHYW3OekePQAzL0VUYbW
JGTi65CxbCnzc/w4+mqQyvmzpWtMAzJTzAzQxNbkR2MBGySxDLrjg0LWN6sK7wNX
x0YVztz/zbIkPjfkU1jHS+9EbVNj+D1XFOJuaQIDAQABAoIBABagpxpM1aoLWfvD
KHcj10nqcoBc4oE11aFYQwik7xfW+24pRNuDE6SFthOar69jp5RlLwD1NhPx3iBl
J9nOM8OJ0VToum43UOS8YxF8WwhXriYGnc1sskbwpXOUDc9uX4+UESzH22P29ovd
d8WErY0gPxun8pbJLmxkAtWNhpMvfe0050vk9TL5wqbu9AlbssgTcCXkMQnPw9nC
YNN6DDP2lbcBrvgT9YCNL6C+ZKufD52yOQ9qOkwFTEQpjtF4uNtJom+asvlpmS8A
vLY9r60wYSvmZhNqBUrj7lyCtXMIu1kkd4w7F77k+DjHoAXyxcUp1DGL51sOmama
+TOWWgECgYEA8JtPxP0GRJ+IQkX262jM3dEIkza8ky5moIwUqYdsx0NxHgRRhORT
8c8hAuRBb2G82so8vUHk/fur85OEfc9TncnCY2crpoqsghifKLxrLgtT+qDpfZnx
SatLdt8GfQ85yA7hnWWJ2MxF3NaeSDm75Lsm+tBbAiyc9P2jGRNtMSkCgYEAypHd
HCctNi/FwjulhttFx/rHYKhLidZDFYeiE/v45bN4yFm8x7R/b0iE7KaszX+Exdvt
SghaTdcG0Knyw1bpJVyusavPzpaJMjdJ6tcFhVAbAjm7enCIvGCSx+X3l5SiWg0A
R57hJglezIiVjv3aGwHwvlZvtszK6zV6oXFAu0ECgYAbjo46T4hyP5tJi93V5HDi
Ttiek7xRVxUl+iU7rWkGAXFpMLFteQEsRr7PJ/lemmEY5eTDAFMLy9FL2m9oQWCg
R8VdwSk8r9FGLS+9aKcV5PI/WEKlwgXinB3OhYimtiG2Cg5JCqIZFHxD6MjEGOiu
L8ktHMPvodBwNsSBULpG0QKBgBAplTfC1HOnWiMGOU3KPwYWt0O6CdTkmJOmL8Ni
blh9elyZ9FsGxsgtRBXRsqXuz7wtsQAgLHxbdLq/ZJQ7YfzOKU4ZxEnabvXnvWkU
YOdjHdSOoKvDQNWu6ucyLRAWFuISeXw9a/9p7ftpxm0TSgyvmfLF2MIAEwyzRqaM
77pBAoGAMmjmIJdjp+Ez8duyn3ieo36yrttF5NSsJLAbxFpdlc1gvtGCWW+9Cq0b
dxviW8+TFVEBl1O4f7HVm6EpTscdDxU+bCXWkfjuRb7Dy9GOtt9JPsX8MBTakzh3
vBgsyi/sN3RqRBcGU40fOoZyfAMT8s1m/uYv52O6IgeuZ/ujbjY=
-----END RSA PRIVATE KEY-----
Ncat: Input/output error.`),
  },
  {
    slug: "niveau-17-18",
    title: "Niveau 17 → 18",
    excerpt: "Comparer deux fichiers avec diff.",
    description:
      "Le mot de passe est la seule ligne modifiée entre passwords.old et passwords.new.",
    script: `#!/bin/bash

echo "-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAvmOkuifmMg6HL2YPIOjon6iWfbp7c3jx34YkYWqUH57SUdyJ
imZzeyGC0gtZPGujUSxiJSWI/oTqexh+cAMTSMlOJf7+BrJObArnxd9Y7YT2bRPQ
Ja6Lzb558YW3FZl87ORiO+rW4LCDCNd2lUvLE/GL2GWyuKN0K5iCd5TbtJzEkQTu
DSt2mcNn4rhAL+JFr56o4T6z8WWAW18BR6yGrMq7Q/kALHYW3OekePQAzL0VUYbW
JGTi65CxbCnzc/w4+mqQyvmzpWtMAzJTzAzQxNbkR2MBGySxDLrjg0LWN6sK7wNX
x0YVztz/zbIkPjfkU1jHS+9EbVNj+D1XFOJuaQIDAQABAoIBABagpxpM1aoLWfvD
KHcj10nqcoBc4oE11aFYQwik7xfW+24pRNuDE6SFthOar69jp5RlLwD1NhPx3iBl
J9nOM8OJ0VToum43UOS8YxF8WwhXriYGnc1sskbwpXOUDc9uX4+UESzH22P29ovd
d8WErY0gPxun8pbJLmxkAtWNhpMvfe0050vk9TL5wqbu9AlbssgTcCXkMQnPw9nC
YNN6DDP2lbcBrvgT9YCNL6C+ZKufD52yOQ9qOkwFTEQpjtF4uNtJom+asvlpmS8A
vLY9r60wYSvmZhNqBUrj7lyCtXMIu1kkd4w7F77k+DjHoAXyxcUp1DGL51sOmama
+TOWWgECgYEA8JtPxP0GRJ+IQkX262jM3dEIkza8ky5moIwUqYdsx0NxHgRRhORT
8c8hAuRBb2G82so8vUHk/fur85OEfc9TncnCY2crpoqsghifKLxrLgtT+qDpfZnx
SatLdt8GfQ85yA7hnWWJ2MxF3NaeSDm75Lsm+tBbAiyc9P2jGRNtMSkCgYEAypHd
HCctNi/FwjulhttFx/rHYKhLidZDFYeiE/v45bN4yFm8x7R/b0iE7KaszX+Exdvt
SghaTdcG0Knyw1bpJVyusavPzpaJMjdJ6tcFhVAbAjm7enCIvGCSx+X3l5SiWg0A
R57hJglezIiVjv3aGwHwvlZvtszK6zV6oXFAu0ECgYAbjo46T4hyP5tJi93V5HDi
Ttiek7xRVxUl+iU7rWkGAXFpMLFteQEsRr7PJ/lemmEY5eTDAFMLy9FL2m9oQWCg
R8VdwSk8r9FGLS+9aKcV5PI/WEKlwgXinB3OhYimtiG2Cg5JCqIZFHxD6MjEGOiu
L8ktHMPvodBwNsSBULpG0QKBgBAplTfC1HOnWiMGOU3KPwYWt0O6CdTkmJOmL8Ni
blh9elyZ9FsGxsgtRBXRsqXuz7wtsQAgLHxbdLq/ZJQ7YfzOKU4ZxEnabvXnvWkU
YOdjHdSOoKvDQNWu6ucyLRAWFuISeXw9a/9p7ftpxm0TSgyvmfLF2MIAEwyzRqaM
77pBAoGAMmjmIJdjp+Ez8duyn3ieo36yrttF5NSsJLAbxFpdlc1gvtGCWW+9Cq0b
dxviW8+TFVEBl1O4f7HVm6EpTscdDxU+bCXWkfjuRb7Dy9GOtt9JPsX8MBTakzh3
vBgsyi/sN3RqRBcGU40fOoZyfAMT8s1m/uYv52O6IgeuZ/ujbjY=
-----END RSA PRIVATE KEY-----" > /tmp/sshprivatekey && chmod 600 /tmp/sshprivatekey && ssh -i /tmp/sshprivatekey bandit17@bandit.labs.overthewire.org -p 2220 "diff passwords.new passwords.old"`,
    explanation: `diff est une commande qui compare des fichiers ligne par ligne.`,
    output: serverOutput("1", `42c42
< x2gLTTjFwMOhQ8oWNbMN362QKxfRqGlO
---
> pGozC8kOHLkBMOaL0ICPvLV1IjQ5F1VA`),
  },
  {
    slug: "niveau-18-19",
    title: "Niveau 18 → 19",
    excerpt: "Contourner .bashrc qui déconnecte immédiatement.",
    description:
      "Le fichier .bashrc a été modifié pour déconnecter immédiatement. Contournement en passant la commande directement à SSH.",
    script: `#!/bin/bash
sshpass -p "x2gLTTjFwMOhQ8oWNbMN362QKxfRqGlO" ssh bandit18@bandit.labs.overthewire.org -p 2220 "cat readme"`,
    explanation: `En passant la commande directement à SSH, on contourne .bashrc qui déconnecte l'utilisateur.`,
    output: serverOutput("1", "cGWpMaKXVwDUNgPAVJbWYuGHVn9zl3j8"),
  },
  {
    slug: "niveau-19-20",
    title: "Niveau 19 → 20",
    excerpt: "Utiliser un binaire setuid pour lire /etc/bandit_pass.",
    description:
      "Un binaire setuid (bandit20-do) permet d'exécuter des commandes avec les privilèges de bandit20.",
    script: `#!/bin/bash
sshpass -p "cGWpMaKXVwDUNgPAVJbWYuGHVn9zl3j8" ssh bandit19@bandit.labs.overthewire.org -p 2220 "./bandit20-do cat /etc/bandit_pass/bandit20"`,
    explanation: `Un binaire setuid s'exécute avec les privilèges de son propriétaire. bandit20-do s'exécute avec les droits de bandit20.`,
    output: serverOutput("1", `-rwsr-x--- 1 bandit20 bandit19 14884 Oct 14 09:26 bandit20-do
0qXahG8ZjOVMN9Ghs7iOWsCfZyXOUbYO`),
  },
  {
    slug: "niveau-20-21",
    title: "Niveau 20 → 21",
    excerpt: "Échanger le mot de passe entre deux sessions netcat.",
    description:
      "Utiliser netcat en écoute et le binaire suconnect pour échanger le mot de passe.",
    script: `# Terminale 1 :
sshpass -p "0qXahG8ZjOVMN9Ghs7iOWsCfZyXOUbYO" ssh bandit20@bandit.labs.overthewire.org -p 2220 "nc -lvnp 4444 <<< 0qXahG8ZjOVMN9Ghs7iOWsCfZyXOUbYO"

# Terminale 2 :
sshpass -p "0qXahG8ZjOVMN9Ghs7iOWsCfZyXOUbYO" ssh bandit20@bandit.labs.overthewire.org -p 2220 "./suconnect 4444"`,
    explanation: `Sur le premier terminal, cette commande lance Netcat en écoute. L'option -l fait écouter Netcat sur le port spécifié -p 4444, lié à toutes les interfaces par défaut, et -n désactive la résolution DNS.
<<< envoie le mot de passe spécifié.

Une fois la notification « Listening on 0.0.0.0 4444 » apparue dans le premier terminal, le second script se connecte à ce terminal.
Le programme suconnect est un binaire setuid qui établit une connexion sortante.

En résumé, cela établit un reverse shell : la machine distante attend une connexion entrante, et la machine cible exécute un script qui se reconnecte à l'hôte distant.`,
    notes: `Ce niveau nécessite 2 terminaux`,
    output: serverOutput("1", `Listening on 0.0.0.0 4444
EeoULMCra2q0dSkYj561DX7s1CpBuOBt
Connection received on 127.0.0.1 54300`),
  },
  {
    slug: "niveau-21-22",
    title: "Niveau 21 → 22",
    excerpt: "Analyser les tâches cron pour trouver le mot de passe.",
    description:
      "Un script cron copie le mot de passe de bandit22 dans /tmp.",
    script: `#!/bin/bash
sshpass -p "EeoULMCra2q0dSkYj561DX7s1CpBuOBt" ssh bandit21@bandit.labs.overthewire.org -p 2220 "find /etc/cron.d/ -type f -readable -exec cat {} +; echo -e '\\n\\n'; cat /usr/bin/cronjob_bandit22.sh; echo -en '\\n\\nThe password of the next level is: '; cat /tmp/t7O6lds9S0RqQh9aMcz6ShpAoZKF7fgv"`,
    explanation: `L'option -readable de find filtre les fichiers lisibles par l'utilisateur actuel.
/etc/cron.d contient les fichiers de configuration pour le démon cron.
Le script /usr/bin/cronjob_bandit22.sh révèle qu'une copie du mot de passe est stockée dans /tmp/t7O6lds9S0RqQh9aMcz6ShpAoZKF7fgv.`,
    output: serverOutput("1", `@reboot bandit22 /usr/bin/cronjob_bandit22.sh &> /dev/null
* * * * * bandit22 /usr/bin/cronjob_bandit22.sh &> /dev/null
@reboot bandit23 /usr/bin/cronjob_bandit23.sh  &> /dev/null
* * * * * bandit23 /usr/bin/cronjob_bandit23.sh  &> /dev/null
30 3 * * 0 root test -e /run/systemd/system || SERVICE_MODE=1 /usr/lib/x86_64-linux-gnu/e2fsprogs/e2scrub_all_cron
10 3 * * * root test -e /run/systemd/system || SERVICE_MODE=1 /sbin/e2scrub_all -A -r
# DO NOT EDIT OR REMOVE
# This file is a simple placeholder to keep dpkg from removing this directory
# The first element of the path is a directory where the debian-sa1
# script is located
PATH=/usr/lib/sysstat:/usr/sbin:/usr/sbin:/usr/bin:/sbin:/bin

# Activity reports every 10 minutes everyday
5-55/10 * * * * root command -v debian-sa1 > /dev/null && debian-sa1 1 1

# Additional run at 23:59 to rotate the statistics file
59 23 * * * root command -v debian-sa1 > /dev/null && debian-sa1 60 2
@reboot bandit24 /usr/bin/cronjob_bandit24.sh &> /dev/null
* * * * * bandit24 /usr/bin/cronjob_bandit24.sh &> /dev/null
*/30 * * * * root find /tmp -amin 60 -type f -delete &> /dev/null && find /tmp -amin 5 -type d -empty -delete &> /dev/null



#!/bin/bash
chmod 644 /tmp/t7O6lds9S0RqQh9aMcz6ShpAoZKF7fgv
cat /etc/bandit_pass/bandit22 > /tmp/t7O6lds9S0RqQh9aMcz6ShpAoZKF7fgv


The password of the next level is: tRae0UfB9v0UzbCdn9cY0gQnds9GF58Q`),
  },
  {
    slug: "niveau-22-23",
    title: "Niveau 22 → 23",
    excerpt: "Calculer le hash MD5 du nom d'utilisateur.",
    description:
      "Un script cron crée un fichier temporaire nommé par le hash MD5 du nom d'utilisateur.",
    script: `#!/bin/bash
sshpass -p "tRae0UfB9v0UzbCdn9cY0gQnds9GF58Q" ssh bandit22@bandit.labs.overthewire.org -p 2220 "find /etc/cron.d/ -type f -readable -exec cat {} +; echo -e '\\n\\ncontent of the /usr/bin/cronjob_bandit23.sh script:\\n'; cat /usr/bin/cronjob_bandit23.sh; echo -en '\\n\\nThe password of the next level is: '; cat /tmp/\\$(echo I am user bandit23 | md5sum | cut -d ' ' -f 1)"`,
    explanation: `Le contenu de /usr/bin/cronjob_bandit23.sh révèle que la tâche planifiée calcule la somme MD5 du nom d'utilisateur actuel et crée une copie du mot de passe dans /tmp. Le fichier est nommé d'après le hash MD5 du nom d'utilisateur.`,
    output: serverOutput("1", `@reboot bandit22 /usr/bin/cronjob_bandit22.sh &> /dev/null
* * * * * bandit22 /usr/bin/cronjob_bandit22.sh &> /dev/null
@reboot bandit23 /usr/bin/cronjob_bandit23.sh  &> /dev/null
* * * * * bandit23 /usr/bin/cronjob_bandit23.sh  &> /dev/null
30 3 * * 0 root test -e /run/systemd/system || SERVICE_MODE=1 /usr/lib/x86_64-linux-gnu/e2fsprogs/e2scrub_all_cron
10 3 * * * root test -e /run/systemd/system || SERVICE_MODE=1 /sbin/e2scrub_all -A -r
# DO NOT EDIT OR REMOVE
# This file is a simple placeholder to keep dpkg from removing this directory
# The first element of the path is a directory where the debian-sa1
# script is located
PATH=/usr/lib/sysstat:/usr/sbin:/usr/sbin:/usr/bin:/sbin:/bin

# Activity reports every 10 minutes everyday
5-55/10 * * * * root command -v debian-sa1 > /dev/null && debian-sa1 1 1

# Additional run at 23:59 to rotate the statistics file
59 23 * * * root command -v debian-sa1 > /dev/null && debian-sa1 60 2
@reboot bandit24 /usr/bin/cronjob_bandit24.sh &> /dev/null
* * * * * bandit24 /usr/bin/cronjob_bandit24.sh &> /dev/null
*/30 * * * * root find /tmp -amin 60 -type f -delete &> /dev/null && find /tmp -amin 5 -type d -empty -delete &> /dev/null


content of the /usr/bin/cronjob_bandit23.sh script:

#!/bin/bash

myname=$(whoami)
mytarget=$(echo I am user $myname | md5sum | cut -d ' ' -f 1)

echo "Copying passwordfile /etc/bandit_pass/$myname to /tmp/$mytarget"

cat /etc/bandit_pass/$myname > /tmp/$mytarget


The password of the next level is: 0Zf11ioIjMVN551jX3CmStKLYqjk54Ga`),
  },
  {
    slug: "niveau-23-24",
    title: "Niveau 23 → 24",
    excerpt: "Créer un script exécuté par cron pour récupérer le mot de passe.",
    description:
      "Placer un script dans /var/spool/bandit24/ qui copie le mot de passe de bandit24.",
    script: `#!/bin/bash

# Problèmes de script - aucune solution fonctionnelle fournie`,
    explanation: `Ce niveau pose problème car le script fourni par le niveau précédent ne fonctionne pas correctement. Aucune solution fonctionnelle n'est fournie dans ce guide.`,
    notes: `Le script original de ce niveau rencontre des problèmes et aucune solution fonctionnelle n'est fournie dans le référentiel d'origine.`,
    output: serverOutput("1", "gb8KRRCsshuZXI0tUuR6ypOFjiZbf3G8"),
  },
  {
    slug: "niveau-24-25",
    title: "Niveau 24 → 25",
    excerpt: "Bruteforcer un code PIN à 4 chiffres sur le port 30002.",
    description:
      "Un démon sur le port 30002 demande le mot de passe + un code PIN à 4 chiffres.",
    script: `# Connexion SSH puis exécution dans le répertoire temporaire :
sshpass -p "gb8KRRCsshuZXI0tUuR6ypOFjiZbf3G8" ssh bandit24@bandit.labs.overthewire.org -p 2220

# Une fois connecté, créez et exécutez ce script Python :
# cd $(mktemp -d) && vi bruteforce.py && chmod +x bruteforce.py && ./bruteforce.py

#!/usr/bin/python3
from pwn import *

p = remote("127.0.0.1", 30002)

for number in range(0, 9999):
    code = "gb8KRRCsshuZXI0tUuR6ypOFjiZbf3G8"
    if number < 10:
        code += f" 000{number}"
    elif (number >= 10 and number < 100):
        code += f" 00{number}"
    elif (number >= 100 and number < 1000):
        code += f" 0{number}"
    else:
        code += f" {number}"

    print(f"Trying {code} ...")
    p.writeline(code.encode("latin-1"))
    checker = p.clean(0.2).decode("latin-1").split(" ")

    if checker != "Wrong!" or checker != "I":
        break

# Une fois le PIN trouvé, exécutez :
# nc -vn 127.0.0.1 30002 <<< 'gb8KRRCsshuZXI0tUuR6ypOFjiZbf3G8 1667'`,
    explanation: `remote(IP, PORT) se connecte au démon sur l'adresse et le port donnés.
p.writeline(code.encode('latin-1')) envoie la chaîne sous forme d'octets.
p.clean(0.2) reçoit la sortie.

Le programme essaie tous les codes de 0000 à 9999 jusqu'à trouver le bon.

Une fois le mot de passe trouvé, déconnectez-vous et exécutez le second script avec netcat pour récupérer le mot de passe du niveau suivant.`,
    notes: `Une fois connecté en SSH, exécutez cd $(mktemp -d), copiez le script Python ci-dessous dans un fichier, donnez-lui les permissions d'exécution (chmod +x) et lancez-le. Le temps de recherche dépend de la position du code PIN.`,
    output: serverOutput("1", `I am the pincode checker for user bandit25. Please enter the password for user bandit24 and the secret pincode on a single line, separated by a space.
Correct!
The password of user bandit25 is iCi86ttT4KSNe1armKiwbQNmB3YJP3q4

Connection to 127.0.0.1 30002 port [tcp/*] succeeded!`),
  },
]

export function getLevelBySlug(slug: string) {
  return levels.find((l) => l.slug === slug) ?? null
}
