# run a node.js application inside a container
# 
# Wie docker01 mit dem Unterschied, dass die Kommunikation ueber das
# interne Docker-Netzwerk erfolgt.
# 
# Starten mit
docker-compose  up -d 

# docker-compose down
#
# Der Backend-Service kann nur noch durch das interne Dockernetzwerk 
# aufgerufen werden. 
# 
# Extern erreichbar ist nur die Frontend-Anwendung. 
# Aufruf mit http://0.0.0.0:80/
# oder 
# http://localhost


# Der Backend-Container ist mit run-serv-calc vom nginx container zu erreichen.
# ping -c 3 run-serv-calc
# PING run-serv-calc (172.27.0.2): 56 data bytes
# 64 bytes from 172.27.0.2: seq=0 ttl=64 time=0.105 ms

# Zum Testen Vom Nginx-Container ist das Backend über ... zu erreichen
# curl -v 'http://docker02_run-serv-calc_1:8345/api/add?a=2&b=100'


# Zum Ruecksichern
# docker cp docker02_nginx_1:/etc/nginx/conf.d/default.conf .




