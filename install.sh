apt update
curl -fsSL https://deb.nodesource.com/setup_15.x | sudo -E bash -
apt install -y nodejs npm git
git clone https://github.com/BobOwi/NodeJS-Hello-World.git
npm install express ejs
cd NodeJS-Hello-World
node app.js
