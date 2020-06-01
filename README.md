# White Label App
This is for custom domain configuration and SSL generation. The purpose is to provide user/client handy white label product that user/client can easily set their domain and design.

## Requirments
You need to install the following on server before getting started.

`Node`
```
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install -y nodejs
```

`NGINX` proxy server for configuring your node app to run on required domain.
```
sudo apt install nginx
sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx
```
`Certbot and letsencrypt` for SSL generation.
[CertBot](https://certbot.eff.org/lets-encrypt/ubuntuxenial-nginx)



## Getting Started
Run the following command to start the node application.

```
npm install
npm run start
```

Hit the api for generating SSL and `NGINX` config file