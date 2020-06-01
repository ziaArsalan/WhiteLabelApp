# sudo certbot certonly -a webroot --webroot-path=/usr/share/nginx/html -n -d $1 -d www.$1 --expand
sudo  cp /home/ubuntu/server-client-walletly-scan/script/default.conf /etc/nginx/conf.d/
# Replace domain name with your domain and do same in default.conf
sudo sed -i "s/dev4-scanapp.walletly.ai/$1/g" /etc/nginx/conf.d/default.conf
sudo sed -i "s/www.dev4-scanapp.walletly.ai/www.$1/g" /etc/nginx/conf.d/default.conf
sudo mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/$1.conf