# KSPCRadioAndroid
Android mobile app for KSPC Radio Station.

# Set up environment
1. Install vagrant and all dependencies.
https://www.vagrantup.com/downloads.html
2. Download `Vagrantfile` and `bootstrap.sh`
from https://drive.google.com/drive/u/1/folders/0B6qj4OFYE7wZcGxzRjdibkFhbzQ.
3. Put these in a folder.
4. Place this repository inside this folder.
4. In terminal, `cd` into this folder.
5. Type in `vagrant up`. This will set up the environment, downloading and
installing all necessary software.
6. Do `vagrant ssh`, then `exit`, then `vagrant halt`, then `vagrant up`, and
then `vagrant ssh` again to start.
7. Run the following:
```
echo "installing ionic"
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> /home/ubuntu/.profile
source ~/.profile
npm install -g cordova ionic
```
8. Done!

# Use
1. From now on, anytime you want to use the environment just type
in `vagrant up` followed by `vagrant ssh` in this same folder.
2. Do `cd cs121/KSPCRadioAndroid` to enter the project directory
3. To run the app on a physical Android device attached by usb,
do `ionic run android`. You may need to install the Oracle Virtualbox Extension
Pack for this to work. https://www.virtualbox.org/wiki/Downloads
4. To run on the browser do `ionic serve -a`.
