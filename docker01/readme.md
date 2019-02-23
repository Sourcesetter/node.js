# run a node.js application inside a container
# 
# start 01runApp 
# Alternativ ueber docker-compose --project-name js2node  up -d 
# Stoppen über 00del oder docker-compose --project-name js2node down

# Fuehrt Berechnungen durch 
#
# Aufruf mit http://0.0.0.0:9006/add?a=1&b=2

# Netzwerkaufbau:
# - der Nginx liefert die index.html an den Browser
# - der Browser greift dann direkt auf den Container mit dem Backend zu
# - der Backend-Container benötigt deswegen auch einen externen Port,
#   unter dem dieser zu erreichen ist.


